# AGENTS.md

## Project overview

Code Aw Icons is a lightweight, minimalist SVG icon library and browser-based icon finder. The repository currently contains **741 base icons in 25 categories**. The application generates five variants of every base icon, for **3,705 searchable variants** in total.

Users can search by name, keywords, category, or variant; adjust global and per-icon size, color, and stroke thickness; copy SVG markup; and download individual SVG files. The UI supports light/dark themes, responsive layouts, keyboard shortcuts, and reduced-motion preferences.

This is a client-only static website. There is no backend, package manager, runtime dependency, build step, or generated distribution directory. Documentation and UI text are in English. The project is licensed under Apache License 2.0; see `LICENSE.md` and `NOTICE.md`.

## Technology stack and configuration

- **HTML5:** `index.html` contains the complete page structure, controls, icon editor dialog, sprite container, and accessible labels.
- **CSS:** `assets/styles.css` provides all styling, dark-theme variables, animations, and responsive behavior. There is no CSS framework or preprocessor.
- **JavaScript:** `app.js` and `scripts/icons.js` use browser-native vanilla JavaScript. They are classic deferred scripts, not ES modules, and have no imports or exports.
- **Browser APIs:** the app uses DOM APIs, `<dialog>`, `localStorage`, `matchMedia`, `TextEncoder`, the Clipboard API with a legacy fallback, and Blob/object-URL downloads.
- **Configuration:** there is no `package.json`, lockfile, `pyproject.toml`, `Cargo.toml`, bundler configuration, linter configuration, formatter configuration, test configuration, or CI/deployment configuration. `.gitignore` only ignores `.DS_Store`.

A modern browser is the only application runtime. Node.js is not required to run the site, although it can be used for JavaScript syntax checks.

## Repository layout

| Path | Responsibility |
| --- | --- |
| `index.html` | Static UI, SVG sprite destination, filter controls, global appearance controls, and per-icon `<dialog>` editor. Loads `scripts/icons.js` before `app.js`; preserve this order. |
| `scripts/icons.js` | Hand-maintained icon catalog exposed as the global `groups` object, grouped by category. |
| `app.js` | Variant expansion, SVG generation, filtering/rendering, state, themes, editor behavior, clipboard copying, and downloads. |
| `assets/styles.css` | All visual design, light/dark palettes, responsive breakpoints, animations, and reduced-motion handling. |
| `assets/favivon.svg` | Favicon. The `favivon` spelling is the actual referenced filename. |
| `README.md` | Short user-facing introduction and file overview. |
| `TODO.md` | Manual icon-review notes; it is not a development roadmap or test plan. |
| `LICENSE.md`, `NOTICE.md` | Apache 2.0 license and CodeAwApps attribution. |

There are no source, test, public, or build subdirectories beyond those listed above.

## Runtime architecture

### Icon data and variants

`scripts/icons.js` defines one global `groups` object. Each property is a category containing an array of three-string tuples:

```js
[
  "icon-name",
  '<path d="..."/><circle cx="12" cy="12" r="2"/>',
  "search keywords",
]
```

At startup, `app.js` flattens `groups` into `baseIcons`, then expands every base icon across the centrally defined `variants` list:

- `rounded` — the base artwork without an enclosing shape
- `circle`
- `square`
- `circle-filled`
- `square-filled`

Each expanded icon receives a unique key in the form `name-variant`, such as `home-circle-filled`. Do not manually add five copies of a new base icon.

The base artwork is also emitted as SVG `<symbol>` elements into `#sprite-defs`. Grid previews reference these symbols with `<use>`, while copied/downloaded SVGs inline the artwork so each exported file is standalone. For enclosed variants, `artwork()` adds outlines/fills and scales the base art within the 24 × 24 viewBox; filled variants calculate a contrasting inner stroke color.

### Rendering and state

- `render()` combines the search query, category, and style filters, rebuilds the grid HTML, updates result counts/titles, and toggles the empty state. Search includes the icon name, keywords, category, and variant label.
- Global appearance defaults are size `24`, stroke `1.6`, and a theme-dependent color. Size is constrained to 8–512 px; editor stroke is constrained to 0.5–4.
- Per-icon overrides live in the in-memory `customizations` Map. `customColor` and `customSize` determine whether an override continues inheriting later global changes. These customizations are not persisted across reloads.
- The editor immediately applies changes to the current icon. Reset removes that icon's override and restores inherited defaults.
- The theme follows the saved preference or system color scheme. Only the theme is persisted, under the existing `localStorage` key `luma-theme`.
- Copying uses `navigator.clipboard.writeText()` in secure contexts and falls back to a temporary textarea plus `document.execCommand("copy")`. Downloads create an `image/svg+xml` Blob and use filenames like `home-rounded.svg`.

## Run, build, and deployment

### Run locally

Open `index.html` directly in a browser. No installation or dependency command is needed.

An optional local HTTP server is useful when testing normal secure-context browser behavior:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. This server is only a convenience; it is not part of the project configuration.

### Build

There is no build, compilation, bundling, asset generation, or minification step. Edit the HTML, CSS, and JavaScript files directly.

### Deployment

No hosting platform, release process, CI pipeline, or deployment command is documented or configured. The repository can be served as static files while preserving the relative paths between `index.html`, `app.js`, `scripts/`, and `assets/`. There is no `dist/` output to create. Retain `LICENSE.md` and `NOTICE.md` in distributions.

## Development conventions

- Match the existing two-space indentation and semicolon-terminated JavaScript. JavaScript strings generally use double quotes, while SVG fragment strings in the catalog use single quotes.
- Keep the current classic-script/global-variable model unless intentionally performing a broader migration. `app.js` depends on `groups` being defined by `scripts/icons.js` first.
- Use existing naming: kebab-case icon names/keys, camelCase JavaScript variables/functions, and the existing CSS class conventions. Base icon names are currently unique across all categories.
- Add or edit icons directly in the appropriate category in `scripts/icons.js`. Each entry must contain exactly a name, inner SVG markup, and a space-separated keyword string. Artwork is designed for a 24 × 24 viewBox; do not wrap tuple artwork in a complete `<svg>` element.
- Include useful search keywords and visually inspect new or changed paths in every variant, especially filled variants and small sizes. The catalog is manually maintained; there is no icon generator or validation script in the repository.
- `app.js` calculates the displayed library size dynamically. If the base-icon count changes, also review static counts in `index.html` (the meta description and pre-JavaScript fallback text) and any count mentioned in documentation.
- Keep theme colors in CSS custom properties and preserve the `html[data-theme="dark"]` pattern. Existing responsive breakpoints are 950 px, 640 px, and 380 px. Preserve the `prefers-reduced-motion` override when adding animation.
- Preserve accessible control labels, focus-visible states, status announcements, dialog focus restoration, and keyboard behavior (`/` focuses search; Escape clears focused search).
- No formal commit, branching, or contribution convention is documented.

## Testing and verification

There is no automated test suite, test runner, lint command, formatting command, or CI check. Do not claim that `npm test` or a build command exists.

Optional syntax verification, when Node.js is available:

```sh
node --check app.js
node --check scripts/icons.js
```

For behavior changes, manually verify the affected flows in a browser:

1. Load the page without console errors; confirm category options, sprite-backed previews, and result counts appear.
2. Combine text, category, and style searches; check the empty state and Clear filters action.
3. Change global size/color and verify non-customized icons inherit changes while customized values remain independent.
4. Edit size, thickness, and color in the dialog; check preview, card metadata, Reset, and focus return after close.
5. Copy and download representative rounded, outlined, and filled icons. Open downloaded files and verify they are standalone 24 × 24-viewBox SVGs with the expected dimensions, colors, and strokes.
6. Toggle and reload the theme; verify persistence and fallback behavior. Check `/`, Escape, and clear-search keyboard/button flows.
7. Check desktop/mobile layouts and reduced-motion behavior when changing relevant CSS.

For catalog edits, also check tuple shape and unique icon names. At the time of this guide's last verification, all 741 entries had three string fields and all names were unique.

## Security and licensing considerations

- The app has no application network requests, analytics, accounts, secrets, or server-side input handling. Its only external links are ordinary links to `https://codeawapps.com`, opened with `rel="noopener noreferrer"`; preserve those attributes for new `target="_blank"` links.
- Icon fragments and card markup are inserted through `innerHTML`, and icon fragments are also exported directly. Treat the catalog as trusted source code: review contributed SVG carefully and do not introduce scripts, event handlers, or untrusted external references. If catalog data ever comes from users or a remote source, add appropriate validation/escaping rather than inserting it unchanged.
- Keep clipboard failure handling and the non-secure-context fallback if direct `file://` use is expected to remain supported. Keep `localStorage` access guarded for browsers where storage is unavailable.
- Preserve Apache 2.0 licensing and CodeAwApps attribution when copying or distributing the library. Refer to `LICENSE.md` for redistribution conditions and `NOTICE.md` for attribution details.
