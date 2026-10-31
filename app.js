try {
  const saved = localStorage.getItem("luma-theme");
  document.documentElement.dataset.theme =
    saved ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
} catch {
  document.documentElement.dataset.theme = "light";
}

const variants = [
  { id: "rounded", label: "Rounded" },
  { id: "circle", label: "Circle" },
  { id: "square", label: "Square" },
  { id: "circle-filled", label: "Circle filled" },
  { id: "square-filled", label: "Square filled" },
];
const baseIcons = Object.entries(groups).flatMap(([category, items]) =>
  items.map(([name, body, keywords]) => ({ name, category, body, keywords })),
);
const icons = baseIcons.flatMap((icon) =>
  variants.map((variant) => ({
    ...icon,
    variant: variant.id,
    variantLabel: variant.label,
    key: `${icon.name}-${variant.id}`,
  })),
);
const $ = (id) => document.getElementById(id);
const grid = $("grid"),
  search = $("search"),
  category = $("category"),
  styleFilter = $("icon-style"),
  count = $("count");
const empty = $("empty"),
  title = $("category-title"),
  toast = $("toast"),
  root = document.documentElement;
const editor = $("icon-editor"),
  customizations = new Map(),
  encoder = new TextEncoder();
let toastTimer,
  editingIcon = null,
  editorAppearance = null,
  lastEditorTrigger = null;

const label = (name) =>
  name
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
const fullName = (icon) => `${label(icon.name)} · ${icon.variantLabel}`;
const themeColor = () =>
  root.dataset.theme === "dark" ? "#edf2ed" : "#18231e";
const globalAppearance = { color: themeColor(), size: 24, customColor: false };
const defaults = () => ({
  color: globalAppearance.color,
  stroke: 1.6,
  size: globalAppearance.size,
  customColor: false,
  customSize: false,
});
const appearanceFor = (icon) => customizations.get(icon.key) || defaults();
const contrastColor = (hex) => {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((value) => parseInt(value, 16));
  return (r * 299 + g * 587 + b * 114) / 1000 > 160 ? "#18231e" : "#ffffff";
};

function syncBrandColor() {
  root.style.setProperty("--brand-color", globalAppearance.color);
  root.style.setProperty(
    "--brand-contrast",
    contrastColor(globalAppearance.color),
  );
}

function artwork(icon, appearance, standalone = false) {
  const content = standalone ? icon.body : `<use href="#i-${icon.name}"/>`;
  const filled = icon.variant.endsWith("-filled");
  const group = `<g transform="translate(5 5) scale(.5833333333)" stroke-width="${(appearance.stroke * 12) / 7}"${filled ? ` stroke="${contrastColor(appearance.color)}"` : ""}>${content}</g>`;
  if (icon.variant === "circle")
    return `<circle cx="12" cy="12" r="10"/>${group}`;
  if (icon.variant === "square")
    return `<rect x="2.5" y="2.5" width="19" height="19" rx="3"/>${group}`;
  if (icon.variant === "circle-filled")
    return `<circle cx="12" cy="12" r="11" fill="${appearance.color}" stroke="none"/>${group}`;
  if (icon.variant === "square-filled")
    return `<rect x="2" y="2" width="20" height="20" rx="4" fill="${appearance.color}" stroke="none"/>${group}`;
  return content;
}

function svgFor(icon, appearance = appearanceFor(icon)) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${appearance.size}" height="${appearance.size}" viewBox="0 0 24 24" fill="none" stroke="${appearance.color}" stroke-width="${appearance.stroke}" stroke-linecap="round" stroke-linejoin="round">${artwork(icon, appearance, true)}</svg>`;
}

const fileWeight = (icon) => encoder.encode(svgFor(icon)).length;
const formatBytes = (bytes) =>
  bytes < 1024 ? `${bytes} Bytes` : `${(bytes / 1024).toFixed(1)} KB`;
const cardMeta = (icon) => {
  const { size } = appearanceFor(icon);
  return `${size} × ${size} px · ${formatBytes(fileWeight(icon))}`;
};
const previewFor = (icon) => {
  const appearance = appearanceFor(icon);
  return `<svg class="icon-preview" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:${appearance.color};stroke-width:${appearance.stroke}" aria-hidden="true">${artwork(icon, appearance)}</svg>`;
};

function syncEditorGlobals() {
  if (!editorAppearance) return;
  if (!editorAppearance.customColor)
    editorAppearance.color = globalAppearance.color;
  if (!editorAppearance.customSize)
    editorAppearance.size = globalAppearance.size;
  $("editor-color").value = editorAppearance.color;
  $("editor-size").value = editorAppearance.size;
  $("editor-size-range").value = editorAppearance.size;
  syncEditor();
}

function refreshGlobalSettings() {
  customizations.forEach((appearance) => {
    if (!appearance.customColor) appearance.color = globalAppearance.color;
    if (!appearance.customSize) appearance.size = globalAppearance.size;
  });
  syncBrandColor();
  render();
  syncEditorGlobals();
}

function syncTheme() {
  const dark = root.dataset.theme === "dark",
    toggle = $("theme-toggle"),
    mode = dark ? "light" : "dark";
  toggle.setAttribute("aria-label", `Switch to ${mode} mode`);
  toggle.title = `Switch to ${mode} mode`;
  if (!globalAppearance.customColor) globalAppearance.color = themeColor();
  $("global-color").value = globalAppearance.color;
  customizations.forEach((appearance) => {
    if (!appearance.customColor) appearance.color = globalAppearance.color;
  });
  syncBrandColor();
  syncEditorGlobals();
}

function updateCard(icon) {
  const card = grid.querySelector(`[data-icon="${icon.key}"]`);
  if (!card) return;
  const preview = card.querySelector(".icon-preview"),
    appearance = appearanceFor(icon);
  preview.style.color = appearance.color;
  preview.style.strokeWidth = appearance.stroke;
  preview.innerHTML = artwork(icon, appearance);
  card.querySelector(".icon-size").textContent = cardMeta(icon);
  card.classList.toggle("customized", customizations.has(icon.key));
}

function render() {
  const query = search.value.trim().toLocaleLowerCase(),
    selected = category.value,
    selectedStyle = styleFilter.value;
  const filtered = icons.filter(
    (icon) =>
      (selected === "all" || icon.category === selected) &&
      (selectedStyle === "all" || icon.variant === selectedStyle) &&
      (!query ||
        `${icon.name} ${icon.keywords} ${icon.category} ${icon.variantLabel}`
          .toLocaleLowerCase()
          .includes(query)),
  );
  grid.innerHTML = filtered
    .map(
      (icon) =>
        `<article class="icon-card${customizations.has(icon.key) ? " customized" : ""}" data-icon="${icon.key}"><button class="customize-icon" data-customize="${icon.key}" aria-label="Customize ${fullName(icon)}" title="Customize icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/></svg></button><button class="copy-icon" data-copy="${icon.key}" aria-label="Copy ${fullName(icon)} SVG">${previewFor(icon)}<span class="icon-details"><span class="icon-name">${icon.name}</span><span class="icon-variant">${icon.variantLabel}</span><span class="icon-size">${cardMeta(icon)}</span></span></button><button class="download" data-download="${icon.key}" aria-label="Download ${fullName(icon)} SVG" title="Download SVG"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/></svg></button></article>`,
    )
    .join("");
  count.textContent = `${filtered.length} icon${filtered.length === 1 ? "" : "s"}`;
  title.textContent = selected === "all" ? "All icons" : selected;
  empty.classList.toggle("visible", !filtered.length);
  grid.hidden = !filtered.length;
  search.classList.toggle("has-value", !!search.value);
}

function notify(message) {
  clearTimeout(toastTimer);
  $("toast-text").textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

async function copySVG(icon) {
  const markup = svgFor(icon);
  let area;
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(markup);
    } else {
      area = document.createElement("textarea");
      area.value = markup;
      area.style.cssText = "position:fixed;opacity:0";
      document.body.append(area);
      area.select();
      if (!document.execCommand("copy")) throw new Error("Copy failed");
    }
    notify(`${icon.name}-${icon.variant}.svg copied`);
  } catch {
    notify("Copy unavailable — use download instead");
  } finally {
    area?.remove();
  }
}

function downloadSVG(icon) {
  const url = URL.createObjectURL(
    new Blob([svgFor(icon)], { type: "image/svg+xml" }),
  );
  const link = document.createElement("a");
  link.href = url;
  link.download = `${icon.name}-${icon.variant}.svg`;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  notify(`${icon.name}-${icon.variant}.svg downloaded`);
}

function syncEditor() {
  if (!editingIcon) return;
  const preview = $("editor-preview");
  preview.style.color = editorAppearance.color;
  preview.style.strokeWidth = editorAppearance.stroke;
  preview.innerHTML = artwork(editingIcon, editorAppearance);
  preview.style.width = `${editorAppearance.size}px`;
  preview.style.height = `${editorAppearance.size}px`;
  $("editor-meta").textContent =
    `${editorAppearance.size} × ${editorAppearance.size} px · ${formatBytes(encoder.encode(svgFor(editingIcon, editorAppearance)).length)}`;
  $("editor-stroke-value").textContent = editorAppearance.stroke;
  document.querySelectorAll("[data-editor-color]").forEach((button) => {
    const selected =
      button.dataset.editorColor === "default"
        ? !editorAppearance.customColor
        : editorAppearance.customColor &&
          button.dataset.editorColor === editorAppearance.color;
    button.setAttribute("aria-pressed", String(selected));
  });
}

function applyEditor() {
  if (!editingIcon) return;
  customizations.set(editingIcon.key, { ...editorAppearance });
  updateCard(editingIcon);
  syncEditor();
}

function openEditor(icon, trigger) {
  editingIcon = icon;
  lastEditorTrigger = trigger;
  editorAppearance = { ...appearanceFor(icon) };
  $("editor-title").textContent = fullName(icon);
  $("editor-size").value = editorAppearance.size;
  $("editor-size-range").value = editorAppearance.size;
  $("editor-stroke").value = editorAppearance.stroke;
  $("editor-color").value = editorAppearance.color;
  syncEditor();
  editor.showModal();
}

grid.addEventListener("click", (event) => {
  const customize = event.target.closest("[data-customize]");
  const download = event.target.closest("[data-download]");
  const copy = event.target.closest("[data-copy]");
  if (customize)
    openEditor(
      icons.find((icon) => icon.key === customize.dataset.customize),
      customize,
    );
  if (download)
    downloadSVG(icons.find((icon) => icon.key === download.dataset.download));
  if (copy) copySVG(icons.find((icon) => icon.key === copy.dataset.copy));
});

search.addEventListener("input", render);
category.addEventListener("change", render);
styleFilter.addEventListener("change", render);
$("global-size").addEventListener("input", (event) => {
  const size = Number(event.target.value);
  if (size >= 8 && size <= 512) {
    globalAppearance.size = size;
    refreshGlobalSettings();
  }
});
$("global-size").addEventListener("change", (event) => {
  const size = Math.max(8, Math.min(512, Number(event.target.value) || 24));
  event.target.value = size;
  globalAppearance.size = size;
  refreshGlobalSettings();
});
$("global-color").addEventListener("input", (event) => {
  globalAppearance.color = event.target.value;
  globalAppearance.customColor = true;
  refreshGlobalSettings();
});
$("clear-search").addEventListener("click", () => {
  search.value = "";
  search.focus();
  render();
});
$("reset").addEventListener("click", () => {
  search.value = "";
  category.value = "all";
  styleFilter.value = "all";
  render();
  search.focus();
});
$("theme-toggle").addEventListener("click", () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  try {
    localStorage.setItem("luma-theme", root.dataset.theme);
  } catch {}
  syncTheme();
  render();
});

$("editor-close").addEventListener("click", () => editor.close());
editor.addEventListener("close", () => {
  lastEditorTrigger?.focus();
  editingIcon = null;
});
$("editor-size").addEventListener("input", (event) => {
  const size = Number(event.target.value);
  if (size >= 8 && size <= 512) {
    $("editor-size-range").value = size;
    editorAppearance.size = size;
    editorAppearance.customSize = true;
    applyEditor();
  }
});
$("editor-size").addEventListener("change", (event) => {
  const size = Math.max(8, Math.min(512, Number(event.target.value) || 24));
  event.target.value = size;
  $("editor-size-range").value = size;
  editorAppearance.size = size;
  editorAppearance.customSize = true;
  applyEditor();
});
$("editor-size-range").addEventListener("input", (event) => {
  const size = Number(event.target.value);
  $("editor-size").value = size;
  editorAppearance.size = size;
  editorAppearance.customSize = true;
  applyEditor();
});
$("editor-stroke").addEventListener("input", (event) => {
  editorAppearance.stroke = Number(event.target.value);
  applyEditor();
});
$("editor-color").addEventListener("input", (event) => {
  editorAppearance.color = event.target.value;
  editorAppearance.customColor = true;
  applyEditor();
});
document.querySelectorAll("[data-editor-color]").forEach((button) =>
  button.addEventListener("click", () => {
    editorAppearance.customColor = button.dataset.editorColor !== "default";
    editorAppearance.color = editorAppearance.customColor
      ? button.dataset.editorColor
      : globalAppearance.color;
    $("editor-color").value = editorAppearance.color;
    applyEditor();
  }),
);
$("editor-reset").addEventListener("click", () => {
  if (!editingIcon) return;
  customizations.delete(editingIcon.key);
  editorAppearance = defaults();
  $("editor-size").value = editorAppearance.size;
  $("editor-size-range").value = editorAppearance.size;
  $("editor-stroke").value = editorAppearance.stroke;
  $("editor-color").value = editorAppearance.color;
  updateCard(editingIcon);
  syncEditor();
});
$("editor-copy").addEventListener(
  "click",
  () => editingIcon && copySVG(editingIcon),
);
$("editor-download").addEventListener(
  "click",
  () => editingIcon && downloadSVG(editingIcon),
);

document.addEventListener("keydown", (event) => {
  if (editor.open) return;
  if (
    event.key === "/" &&
    !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)
  ) {
    event.preventDefault();
    search.focus();
  }
  if (event.key === "Escape" && document.activeElement === search) {
    search.value = "";
    render();
  }
});

$("sprite-defs").innerHTML = baseIcons
  .map(
    (icon) =>
      `<symbol id="i-${icon.name}" viewBox="0 0 24 24">${icon.body}</symbol>`,
  )
  .join("");
$("library-size").textContent =
  `${icons.length.toLocaleString()} icons`;
Object.keys(groups).forEach((name) => category.add(new Option(name, name)));
syncTheme();
render();
