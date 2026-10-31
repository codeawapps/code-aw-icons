const groups = {
  Interface: [
    [
      "home",
      '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
      "house start",
    ],
    [
      "search",
      '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
      "find magnifier",
    ],
    ["menu", '<path d="M4 7h16M4 12h16M4 17h16"/>', "navigation hamburger"],
    ["close", '<path d="m6 6 12 12M18 6 6 18"/>', "x remove cancel"],
    ["plus", '<path d="M12 5v14M5 12h14"/>', "add new"],
    ["minus", '<path d="M5 12h14"/>', "remove subtract"],
    ["check", '<path d="m5 12 4 4L19 6"/>', "done tick"],
    [
      "settings",
      '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z"/>',
      "gear preferences",
    ],
    [
      "sliders",
      '<path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6"/>',
      "controls adjust",
    ],
    [
      "grid",
      '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
      "apps gallery",
    ],
    [
      "list",
      '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
      "items bullets",
    ],
    [
      "layout",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
      "sidebar template",
    ],
    [
      "dashboard",
      '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
      "overview panels",
    ],
    ["filter", '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>', "funnel sort"],
    [
      "more-horizontal",
      '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
      "ellipsis options",
    ],
    [
      "more-vertical",
      '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
      "ellipsis options",
    ],
    [
      "star",
      '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
      "favorite rating",
    ],
    [
      "heart",
      '<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0L12 6.8l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/>',
      "love like",
    ],
    ["bookmark", '<path d="M6 3h12v18l-6-4-6 4Z"/>', "save reading"],
    ["flag", '<path d="M5 22V3M5 4h12l-2 4 2 4H5"/>', "report country"],
    [
      "apps",
      '<circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/>',
      "launcher applications",
    ],
    [
      "panels",
      '<rect x="3" y="4" width="8" height="16" rx="1"/><rect x="13" y="4" width="8" height="7" rx="1"/><rect x="13" y="13" width="8" height="7" rx="1"/>',
      "layout columns",
    ],
    [
      "sidebar-left",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M5.5 7h1M5.5 11h1"/>',
      "navigation panel",
    ],
    [
      "sidebar-right",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M15 3v18M17.5 7h1M17.5 11h1"/>',
      "navigation panel",
    ],
    [
      "header",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M6 5.5h5"/>',
      "layout top",
    ],
    [
      "footer",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 16h18M6 18.5h5"/>',
      "layout bottom",
    ],
    [
      "section",
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 10h10M7 14h6"/>',
      "layout content",
    ],
    [
      "rows",
      '<rect x="3" y="3" width="18" height="5" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="16" width="18" height="5" rx="1"/>',
      "layout horizontal",
    ],
    [
      "columns",
      '<rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="4" height="18" rx="1"/><rect x="16" y="3" width="5" height="18" rx="1"/>',
      "layout vertical",
    ],
    [
      "table-of-contents",
      '<path d="M9 5h12M9 12h12M9 19h12"/><circle cx="4" cy="5" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="19" r="1"/>',
      "navigation list",
    ],
    [
      "tabs",
      '<path d="M3 8V4h6l2 4h10v13H3ZM3 8h18M11 4h5l2 4"/>',
      "navigation pages",
    ],
    [
      "breadcrumbs",
      '<path d="m5 7 3 5-3 5M13 7l3 5-3 5M2 12h.01M21 12h.01"/>',
      "navigation path",
    ],
    [
      "pagination",
      '<path d="m9 8-4 4 4 4M15 8l4 4-4 4M12 12h.01M2 12h.01M22 12h.01"/>',
      "navigation pages",
    ],
    [
      "carousel",
      '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="m3 9-2 3 2 3M21 9l2 3-2 3M9 9h6M9 13h4"/>',
      "slider gallery",
    ],
    [
      "accordion",
      '<rect x="3" y="3" width="18" height="7" rx="1"/><rect x="3" y="14" width="18" height="7" rx="1"/><path d="m7 6 2 2 2-2M15 17l2 2 2-2"/>',
      "collapse sections",
    ],
    [
      "stepper",
      '<circle cx="4" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="20" cy="12" r="2"/><path d="M6 12h4M14 12h4M11 11l1 1 2-2"/>',
      "progress steps",
    ],
    [
      "progress",
      '<path d="M3 12h18M3 12h11"/><circle cx="14" cy="12" r="2"/>',
      "loading bar",
    ],
    [
      "progress-circle",
      '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 9 9"/><circle cx="12" cy="12" r="2"/>',
      "loading radial",
    ],
    [
      "spinner",
      '<path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/>',
      "loading busy",
    ],
    [
      "skeleton",
      '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M6 8h8M6 12h12M6 16h6"/>',
      "loading placeholder",
    ],
    [
      "tooltip",
      '<path d="M3 4h18v12h-7l-2 4-2-4H3Z"/><path d="M8 9h8"/>',
      "hint label",
    ],
    [
      "popover",
      '<path d="M7 8V4h14v12h-5M3 8h12v10l-3-2H3Z"/>',
      "floating panel",
    ],
    [
      "modal",
      '<rect x="5" y="5" width="16" height="16" rx="2"/><path d="M5 2h16v16M9 10h8M9 14h5"/>',
      "dialog window",
    ],
    [
      "drawer",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M10 3v18M6 9l2 3-2 3"/>',
      "sidebar panel",
    ],
    [
      "dropdown",
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M6 9h7M15 11l2 2 2-2"/>',
      "select menu",
    ],
    [
      "context-menu",
      '<rect x="7" y="3" width="14" height="18" rx="2"/><path d="M10 8h8M10 12h8M10 16h5M3 5v14l4-4"/>',
      "right click menu",
    ],
    [
      "toolbar",
      '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M11 6.5h.01M15 6.5h.01M7 13v3M11 13v3M15 13v3"/>',
      "tools actions",
    ],
    [
      "command",
      '<path d="M9 6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3Z"/>',
      "keyboard shortcut",
    ],
    [
      "shortcut",
      '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m13 8-4 5h4l-2 4 5-6h-4Z"/>',
      "keyboard hotkey",
    ],
    [
      "keyboard-command",
      '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M18 9h.01M6 15h12M9 9a2 2 0 1 0 2 2h2a2 2 0 1 0 2-2v4a2 2 0 1 0-2 2h-2a2 2 0 1 0-2-2Z"/>',
      "keys shortcut",
    ],
    ["cursor", '<path d="m5 3 14 9-7 1-3 6Z"/>', "pointer mouse"],
    [
      "cursor-click",
      '<path d="m7 8 12 7-6 1-3 5ZM3 2l2 3M10 2v3M2 10h3M3 16l3-2"/>',
      "pointer click",
    ],
    [
      "hand",
      '<path d="M8 12V5a2 2 0 0 1 4 0v6-8a2 2 0 0 1 4 0v8-6a2 2 0 0 1 4 0v9c0 5-3 8-7 8-3 0-5-2-7-5l-3-5a2 2 0 0 1 3-2l2 2Z"/>',
      "pointer touch",
    ],
    [
      "drag-handle",
      '<circle cx="8" cy="6" r="1"/><circle cx="16" cy="6" r="1"/><circle cx="8" cy="12" r="1"/><circle cx="16" cy="12" r="1"/><circle cx="8" cy="18" r="1"/><circle cx="16" cy="18" r="1"/>',
      "move reorder",
    ],
    [
      "resize",
      '<path d="M8 3H3v5M16 21h5v-5M3 3l7 7M21 21l-7-7M16 3h5v5M8 21H3v-5"/>',
      "scale corners",
    ],
    [
      "expand",
      '<path d="M9 3H3v6M15 3h6v6M9 21H3v-6M15 21h6v-6M3 3l6 6M21 3l-6 6M3 21l6-6M21 21l-6-6"/>',
      "enlarge fullscreen",
    ],
    [
      "collapse",
      '<path d="M3 9h6V3M21 9h-6V3M3 15h6v6M21 15h-6v6M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6"/>',
      "shrink minimize",
    ],
    [
      "pin",
      '<path d="m8 3 8 8M14 2l8 8-5 1-4 4-1 6-8-8 6-1 4-4ZM6 16l-4 6"/>',
      "thumbtack attach",
    ],
    [
      "pin-off",
      '<path d="m2 2 20 20M14 2l8 8-5 1M10 6l4-4M9 9l-5 4 6 1 2 7 3-6M6 16l-4 6"/>',
      "thumbtack remove",
    ],
    [
      "history",
      '<path d="M3 4v5h5M3.5 9a9 9 0 1 1 1 8M12 7v5l3 2"/>',
      "recent time",
    ],
    [
      "help-circle",
      '<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 4 2c-1 .7-1.5 1.2-1.5 3M12 18h.01"/>',
      "question support",
    ],
    [
      "info",
      '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7h.01"/>',
      "information about",
    ],
    [
      "alert-circle",
      '<circle cx="12" cy="12" r="9"/><path d="M12 6v7M12 17h.01"/>',
      "warning error",
    ],
    [
      "alert-triangle",
      '<path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
      "warning error",
    ],
    [
      "check-circle",
      '<circle cx="12" cy="12" r="8"/><path d="m7 12 3 3 7-7M12 2v2M12 20v2"/>',
      "success done",
    ],
    [
      "x-circle",
      '<circle cx="12" cy="12" r="9"/><path d="m8 8 8 8M16 8l-8 8"/>',
      "error cancel",
    ],
    [
      "ban",
      '<circle cx="12" cy="12" r="9"/><path d="m5.5 5.5 13 13"/>',
      "blocked forbidden",
    ],
    [
      "loader",
      '<path d="M21 12a9 9 0 1 1-5.3-8.2"/><path d="M17 2v4h4"/>',
      "loading refresh",
    ],
    [
      "toggle-left",
      '<rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="8" cy="12" r="3"/>',
      "switch off",
    ],
    [
      "toggle-right",
      '<rect x="2" y="6" width="20" height="12" rx="6"/><circle cx="16" cy="12" r="3"/>',
      "switch on",
    ],
  ],
  Arrows: [
    ["arrow-up", '<path d="M12 19V5m-6 6 6-6 6 6"/>', "direction north"],
    ["arrow-right", '<path d="M5 12h14m-6-6 6 6-6 6"/>', "direction east"],
    ["arrow-down", '<path d="M12 5v14m6-6-6 6-6-6"/>', "direction south"],
    ["arrow-left", '<path d="M19 12H5m6 6-6-6 6-6"/>', "direction west"],
    ["chevron-up", '<path d="m6 15 6-6 6 6"/>', "collapse north"],
    ["chevron-right", '<path d="m9 6 6 6-6 6"/>', "next east"],
    ["chevron-down", '<path d="m6 9 6 6 6-6"/>', "expand south"],
    ["chevron-left", '<path d="m15 6-6 6 6 6"/>', "back west"],
    [
      "chevrons-left",
      '<path d="m11 7-5 5 5 5m7-10-5 5 5 5"/>',
      "previous back",
    ],
    ["chevrons-right", '<path d="m6 7 5 5-5 5m7-10 5 5-5 5"/>', "next forward"],
    [
      "arrow-up-right",
      '<path d="M7 17 17 7M7 7h10v10"/>',
      "external northeast",
    ],
    ["arrow-down-right", '<path d="m7 7 10 10M17 7v10H7"/>', "southeast"],
    ["arrow-down-left", '<path d="M17 7 7 17M17 17H7V7"/>', "southwest"],
    ["arrow-up-left", '<path d="M17 17 7 7M17 7H7v10"/>', "northwest"],
    [
      "refresh-cw",
      '<path d="M20 7v5h-5M4 17v-5h5"/><path d="M6.1 8a7 7 0 0 1 11.4-2L20 8M4 16l2.5 2a7 7 0 0 0 11.4-2"/>',
      "reload sync",
    ],
    [
      "refresh-ccw",
      '<path d="M4 7v5h5M20 17v-5h-5"/><path d="M17.9 8a7 7 0 0 0-11.4-2L4 8m16 8-2.5 2a7 7 0 0 1-11.4-2"/>',
      "reload sync",
    ],
    [
      "rotate-cw",
      '<path d="M20 7v5h-5"/><path d="M18.5 16a8 8 0 1 1 1.2-8L20 12"/>',
      "redo clockwise",
    ],
    [
      "rotate-ccw",
      '<path d="M4 7v5h5"/><path d="M5.5 16a8 8 0 1 0-1.2-8L4 12"/>',
      "undo counterclockwise",
    ],
    [
      "repeat",
      '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3"/>',
      "loop",
    ],
    [
      "shuffle",
      '<path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/>',
      "random mix",
    ],
  ],
  Communication: [
    [
      "mail",
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
      "email envelope",
    ],
    [
      "mail-open",
      '<path d="m3 9 9-6 9 6v11H3Z"/><path d="m3 10 9 6 9-6"/>',
      "email read",
    ],
    [
      "send",
      '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
      "submit paper plane",
    ],
    [
      "message-circle",
      '<path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5Z"/>',
      "chat comment",
    ],
    [
      "message-square",
      '<path d="M21 15a3 3 0 0 1-3 3H8l-5 3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3Z"/>',
      "chat comment",
    ],
    [
      "messages",
      '<path d="M14 9a3 3 0 0 1 3 3v5l3 2V8a3 3 0 0 0-3-3h-3"/><path d="M3 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7l-4 3Z"/>',
      "conversation chat",
    ],
    [
      "phone",
      '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/>',
      "call contact",
    ],
    [
      "phone-call",
      '<path d="M15 2a7 7 0 0 1 7 7M15 6a3 3 0 0 1 3 3M8 2H5a2 2 0 0 0-2 2c0 9.4 7.6 17 17 17a2 2 0 0 0 2-2v-3l-5-2-2 2a15 15 0 0 1-7-7l2-2Z"/>',
      "ringing contact",
    ],
    [
      "phone-missed",
      '<path d="m16 2 6 6m0-6-6 6M8 10H5a2 2 0 0 0-2 2c0 5 4 9 9 9a2 2 0 0 0 2-2v-3l-3-1-2 2a12 12 0 0 1-3-7l2-2Z"/>',
      "call unanswered",
    ],
    [
      "video",
      '<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 10 6-3v10l-6-3"/>',
      "camera call",
    ],
    [
      "voicemail",
      '<circle cx="6" cy="12" r="4"/><circle cx="18" cy="12" r="4"/><path d="M6 16h12"/>',
      "message audio",
    ],
    [
      "bell",
      '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
      "notification alert",
    ],
    [
      "bell-off",
      '<path d="m2 2 20 20M18 13V8a6 6 0 0 0-9.2-5M6 6.3C6 13 3 15 3 17h14M10 21h4"/>',
      "mute notification",
    ],
    [
      "at-sign",
      '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>',
      "email mention",
    ],
    [
      "inbox",
      '<path d="M4 4h16l2 12v4H2v-4Z"/><path d="M2 16h6l2 2h4l2-2h6"/>',
      "messages tray",
    ],
    [
      "rss",
      '<path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>',
      "feed subscribe",
    ],
    [
      "microphone",
      '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0M12 17v5M8 22h8"/>',
      "mic audio record",
    ],
    [
      "mic-off",
      '<path d="m2 2 20 20M9 9v2a3 3 0 0 0 4.6 2.5M15 9V5a3 3 0 0 0-5.8-1M5 10a7 7 0 0 0 11.7 5.2M19 10a7 7 0 0 1-.6 2.9M12 17v5M8 22h8"/>',
      "mute audio",
    ],
    [
      "share",
      '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.5 6.8-4M8.6 13.5l6.8 4"/>',
      "social send",
    ],
    [
      "link",
      '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.7 1.7M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.7-1.7"/>',
      "url chain",
    ],
  ],
  Files: [
    [
      "file",
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
      "document",
    ],
    [
      "file-text",
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/>',
      "document notes",
    ],
    [
      "file-plus",
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M12 12v6M9 15h6"/>',
      "document add",
    ],
    [
      "file-minus",
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M9 15h6"/>',
      "document remove",
    ],
    [
      "file-check",
      '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6m-12 7 2 2 4-4"/>',
      "document done",
    ],
    [
      "folder",
      '<path d="M3 5h6l2 3h10v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
      "directory",
    ],
    [
      "folder-open",
      '<path d="M3 6h6l2 3h8v3M3 6v13h16l3-8H8l-3 8"/>',
      "directory open",
    ],
    [
      "folder-plus",
      '<path d="M3 5h6l2 3h10v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M12 11v6M9 14h6"/>',
      "directory add",
    ],
    [
      "folder-minus",
      '<path d="M3 5h6l2 3h10v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="M9 14h6"/>',
      "directory remove",
    ],
    ["archive", '<path d="M4 7v14h16V7M2 3h20v4H2ZM9 11h6"/>', "box storage"],
    [
      "clipboard",
      '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4"/>',
      "paste tasks",
    ],
    [
      "clipboard-check",
      '<rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2m-7 9 2 2 5-5"/>',
      "task done",
    ],
    [
      "copy",
      '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
      "duplicate",
    ],
    [
      "save",
      '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z"/><path d="M7 3v6h9V3M7 21v-8h10v8"/>',
      "disk",
    ],
    [
      "download",
      '<path d="M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4"/>',
      "save arrow",
    ],
    ["upload", '<path d="M12 16V4m-5 5 5-5 5 5M4 17v4h16v-4"/>', "send arrow"],
    [
      "trash",
      '<path d="M3 6h18M8 6V3h8v3M5 6l1 15h12l1-15M10 10v7M14 10v7"/>',
      "delete bin",
    ],
    [
      "edit",
      '<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z"/>',
      "write pencil",
    ],
    [
      "pencil",
      '<path d="m15 5 4 4M4 20l4-1L20 7a2.8 2.8 0 0 0-4-4L4 15Z"/>',
      "draw write",
    ],
    [
      "paperclip",
      '<path d="m21.4 11.6-8.9 8.9a6 6 0 0 1-8.5-8.5l9.6-9.6a4 4 0 0 1 5.7 5.7l-9.6 9.6a2 2 0 0 1-2.8-2.8l8.9-8.9"/>',
      "attachment",
    ],
  ],
  Media: [
    ["play", '<path d="m7 3 14 9-14 9Z"/>', "start video"],
    ["pause", '<path d="M8 4v16M16 4v16"/>', "stop video"],
    [
      "stop",
      '<rect x="5" y="5" width="14" height="14" rx="2"/>',
      "square media",
    ],
    ["skip-forward", '<path d="m5 4 12 8-12 8ZM19 5v14"/>', "next track"],
    ["skip-back", '<path d="m19 4-12 8 12 8ZM5 5v14"/>', "previous track"],
    ["fast-forward", '<path d="m3 5 8 7-8 7ZM13 5l8 7-8 7Z"/>', "next speed"],
    ["rewind", '<path d="m21 5-8 7 8 7ZM11 5l-8 7 8 7Z"/>', "back speed"],
    ["volume", '<path d="M11 5 6 9H2v6h4l5 4Z"/>', "sound mute"],
    [
      "volume-1",
      '<path d="M11 5 6 9H2v6h4l5 4ZM15 9a4 4 0 0 1 0 6"/>',
      "sound low",
    ],
    [
      "volume-2",
      '<path d="M11 5 6 9H2v6h4l5 4ZM15 9a4 4 0 0 1 0 6m3-9a8 8 0 0 1 0 12"/>',
      "sound high",
    ],
    [
      "volume-x",
      '<path d="M11 5 6 9H2v6h4l5 4ZM16 9l6 6m0-6-6 6"/>',
      "sound mute",
    ],
    [
      "music",
      '<path d="M9 18V5l12-2v13M9 9l12-2"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
      "audio note",
    ],
    [
      "image",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
      "picture photo",
    ],
    [
      "camera",
      '<path d="M14.5 4h-5L7 7H3v13h18V7h-4Z"/><circle cx="12" cy="13" r="4"/>',
      "photo picture",
    ],
    [
      "video-off",
      '<path d="m2 2 20 20M10.5 5H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h10V9.5M16 10l6-3v10l-3-1.5"/>',
      "camera disabled",
    ],
    [
      "film",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18M17 3v18M3 8h4M3 16h4M17 8h4M17 16h4"/>',
      "movie cinema",
    ],
    [
      "headphones",
      '<path d="M3 14v-2a9 9 0 0 1 18 0v2M3 14h4v7H5a2 2 0 0 1-2-2Zm18 0h-4v7h2a2 2 0 0 0 2-2Z"/>',
      "audio listen",
    ],
    [
      "radio",
      '<rect x="2" y="7" width="20" height="14" rx="2"/><circle cx="8" cy="14" r="3"/><path d="m6 7 12-5M13 11h6M13 15h6M13 18h4"/>',
      "audio broadcast",
    ],
    [
      "cast",
      '<path d="M2 16a5 5 0 0 1 5 5M2 12a9 9 0 0 1 9 9M2 8V4h20v16h-8"/><circle cx="2" cy="21" r=".5"/>',
      "stream screen",
    ],
    [
      "airplay",
      '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2M7 22l5-6 5 6Z"/>',
      "stream display",
    ],
  ],
  Commerce: [
    [
      "shopping-cart",
      '<circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M2 3h3l2.4 11h11.4l2-8H6"/>',
      "basket shop",
    ],
    [
      "shopping-bag",
      '<path d="M5 8h14l1 13H4ZM9 10V6a3 3 0 0 1 6 0v4"/>',
      "purchase shop",
    ],
    [
      "credit-card",
      '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
      "payment bank",
    ],
    [
      "wallet",
      '<path d="M3 6a3 3 0 0 1 3-3h12v4M3 6v13h18V7H6a3 3 0 0 1-3-3Z"/><path d="M16 12h5v4h-5a2 2 0 0 1 0-4Z"/>',
      "money payment",
    ],
    [
      "dollar",
      '<path d="M12 2v20M17 6.5c0-2-2.2-3-5-3s-5 1.3-5 3.5 2 3 5 3.5 5 1.5 5 4-2.2 4-5 4-5-1.5-5-4"/>',
      "currency money usd",
    ],
    [
      "euro",
      '<path d="M18.5 5A8 8 0 0 0 5 12a8 8 0 0 0 13.5 7M3 10h11M3 14h10"/>',
      "currency money eur",
    ],
    [
      "pound",
      '<path d="M16 5a4 4 0 0 0-7 3l1 6-2 6h10M6 12h9"/>',
      "currency money gbp",
    ],
    [
      "tag",
      '<path d="M20 13 11 22 2 13V3h10l8 8a2 2 0 0 1 0 2Z"/><circle cx="7" cy="8" r="1"/>',
      "label price",
    ],
    [
      "barcode",
      '<path d="M3 5v14M7 5v14M10 5v14M14 5v14M17 5v14M21 5v14"/>',
      "scan product",
    ],
    [
      "qr-code",
      '<rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/><path d="M15 15h2v2h-2zM19 15h2M15 19v2h6v-2"/>',
      "scan code",
    ],
    [
      "gift",
      '<rect x="3" y="8" width="18" height="13"/><path d="M12 8v13M2 8h20V4H2ZM12 8H7.5a2.5 2.5 0 1 1 2.5-2.5L12 8Zm0 0h4.5a2.5 2.5 0 1 0-2.5-2.5L12 8Z"/>',
      "present reward",
    ],
    [
      "truck",
      '<path d="M10 17h4V3H1v14h3m10 0h3a4 4 0 0 0 4-4v-3h-7M14 7h4l3 3"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
      "delivery shipping",
    ],
    [
      "package",
      '<path d="m12 3 9 5v8l-9 5-9-5V8Zm-9 5 9 5 9-5M12 13v8M7.5 5.5l9 5"/>',
      "box delivery",
    ],
    [
      "store",
      '<path d="M3 9v12h18V9M2 9l3-6h14l3 6M8 21v-7h8v7"/><path d="M2 9a4 4 0 0 0 8 0 4 4 0 0 0 8 0 4 4 0 0 0 4 0"/>',
      "shop market",
    ],
    [
      "receipt",
      '<path d="M5 2v20l3-2 4 2 4-2 3 2V2l-3 2-4-2-4 2Z"/><path d="M9 9h6M9 13h6M9 17h3"/>',
      "invoice bill",
    ],
    [
      "percent",
      '<path d="m19 5-14 14"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/>',
      "discount sale",
    ],
    [
      "ticket",
      '<path d="M2 9a3 3 0 0 0 0 6v4h20v-4a3 3 0 0 0 0-6V5H2ZM13 5v2m0 3v4m0 3v2"/>',
      "coupon admission",
    ],
    [
      "coins",
      '<ellipse cx="9" cy="6" rx="6" ry="3"/><path d="M3 6v4c0 1.7 2.7 3 6 3s6-1.3 6-3V6M3 10v4c0 1.7 2.7 3 6 3 1.3 0 2.6-.2 3.6-.6"/><path d="M15 12c0 1.7 2.7 3 6 0M15 12v5c0 1.7 2.7 3 6 3v-8"/>',
      "money currency",
    ],
    [
      "banknote",
      '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 6a4 4 0 0 1-4 4m16-4a4 4 0 0 0 4 4M6 18a4 4 0 0 0-4-4m16 4a4 4 0 0 1 4-4"/>',
      "money cash",
    ],
  ],
  People: [
    [
      "user",
      '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
      "person profile",
    ],
    [
      "user-plus",
      '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 15-5M19 8v6M16 11h6"/>',
      "person add",
    ],
    [
      "user-minus",
      '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 15-5M16 11h6"/>',
      "person remove",
    ],
    [
      "user-check",
      '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 14-5m1 0 2 2 4-4"/>',
      "person verified",
    ],
    [
      "users",
      '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M17 3.2a4 4 0 0 1 0 7.6M23 21v-2a4 4 0 0 0-3-3.7"/><circle cx="8.5" cy="7" r="4"/>',
      "team group",
    ],
    [
      "user-circle",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="9" r="3"/><path d="M6.5 19a6 6 0 0 1 11 0"/>',
      "account avatar",
    ],
    [
      "smile",
      '<circle cx="12" cy="12" r="9"/><path d="M8 14a5 5 0 0 0 8 0M9 9h.01M15 9h.01"/>',
      "happy face",
    ],
    [
      "frown",
      '<circle cx="12" cy="12" r="9"/><path d="M8 16a5 5 0 0 1 8 0M9 9h.01M15 9h.01"/>',
      "sad face",
    ],
    [
      "meh",
      '<circle cx="12" cy="12" r="9"/><path d="M8 15h8M9 9h.01M15 9h.01"/>',
      "neutral face",
    ],
    [
      "award",
      '<circle cx="12" cy="8" r="6"/><path d="m8.5 13-1.5 9 5-3 5 3-1.5-9"/>',
      "prize medal",
    ],
    [
      "crown",
      '<path d="m3 7 4 4 5-7 5 7 4-4-2 12H5ZM5 19h14"/>',
      "royalty premium",
    ],
    [
      "shield",
      '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/>',
      "security protection",
    ],
    [
      "shield-check",
      '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m8 12 3 3 5-6"/>',
      "security verified",
    ],
    [
      "lock",
      '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3"/>',
      "secure password",
    ],
    [
      "unlock",
      '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 7.5-2M12 14v3"/>',
      "open password",
    ],
    [
      "key",
      '<circle cx="8" cy="16" r="4"/><path d="m11 13 9-9m-4 4 3 3m-6 0 2 2"/>',
      "password access",
    ],
    [
      "eye",
      '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
      "view visible",
    ],
    [
      "eye-off",
      '<path d="m2 2 20 20M9.9 5.2A10 10 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4M6.5 6.5A18 18 0 0 0 2 12s3.5 7 10 7a10 10 0 0 0 4-.8M10 10a3 3 0 0 0 4 4"/>',
      "hide invisible",
    ],
    [
      "fingerprint",
      '<path d="M8 11a4 4 0 0 1 8 0c0 5-1 8-2 10M4.9 6A9 9 0 0 1 21 12c0 2-.1 4-.5 6M3 12a9 9 0 0 1 1-4M6 14c0 3 1 5 2 7M12 11v4c0 3-1 5-1 7M4 17l1 3"/>',
      "biometric identity",
    ],
    [
      "log-in",
      '<path d="M15 3h5v18h-5M10 17l5-5-5-5M15 12H3"/>',
      "signin account",
    ],
    ["log-out", '<path d="M9 21H4V3h5m5 14 5-5-5-5M19 12H9"/>', "signout exit"],
  ],
  Devices: [
    [
      "smartphone",
      '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>',
      "mobile phone",
    ],
    [
      "tablet",
      '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M11 18h2"/>',
      "device ipad",
    ],
    [
      "laptop",
      '<rect x="4" y="3" width="16" height="12" rx="1"/><path d="m2 19 2-4h16l2 4Z"/>',
      "computer notebook",
    ],
    [
      "monitor",
      '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>',
      "screen desktop",
    ],
    [
      "watch",
      '<circle cx="12" cy="12" r="6"/><path d="m9 2-.5 4M15 2l.5 4M9 22l-.5-4M15 22l.5-4M12 9v3l2 1"/>',
      "time wearable",
    ],
    [
      "printer",
      '<path d="M6 9V3h12v6M6 18H3V9h18v9h-3M6 14h12v7H6Z"/><path d="M17 12h.01"/>',
      "print document",
    ],
    [
      "cpu",
      '<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9" y="9" width="6" height="6"/><path d="M9 1v5M15 1v5M9 18v5M15 18v5M1 9h5M1 15h5M18 9h5M18 15h5"/>',
      "chip processor",
    ],
    [
      "hard-drive",
      '<path d="M4 3h16l2 9v8H2v-8ZM2 12h20M17 16h.01"/>',
      "storage disk",
    ],
    [
      "database",
      '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/>',
      "storage data",
    ],
    [
      "server",
      '<rect x="3" y="3" width="18" height="7" rx="1"/><rect x="3" y="14" width="18" height="7" rx="1"/><path d="M7 6.5h.01M7 17.5h.01M11 6.5h7M11 17.5h7"/>',
      "hosting network",
    ],
    [
      "cloud",
      '<path d="M17.5 19H6a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 9a5 5 0 0 1-.5 10Z"/>',
      "storage weather",
    ],
    [
      "cloud-upload",
      '<path d="M16 16l-4-4-4 4M12 12v9M20 16a4 4 0 0 0-2-7.5A7 7 0 0 0 4.3 10.5"/>',
      "backup save",
    ],
    [
      "cloud-download",
      '<path d="m8 17 4 4 4-4M12 12v9M20 16a4 4 0 0 0-2-7.5A7 7 0 0 0 4.3 10.5"/>',
      "backup save",
    ],
    [
      "wifi",
      '<path d="M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0M2 9a15 15 0 0 1 20 0"/><circle cx="12" cy="20" r="1"/>',
      "wireless internet",
    ],
    [
      "wifi-off",
      '<path d="m2 2 20 20M8.5 16a5 5 0 0 1 5-1.3M5 12.5a10 10 0 0 1 4-2.3M2 9a15 15 0 0 1 3-1.8M12 20h.01M15 10a10 10 0 0 1 4 2.5M11 4a15 15 0 0 1 11 5"/>',
      "offline internet",
    ],
    ["bluetooth", '<path d="m7 7 10 10-5 4V3l5 4L7 17"/>', "wireless connect"],
    [
      "battery",
      '<rect x="2" y="7" width="18" height="10" rx="2"/><path d="M22 10v4"/>',
      "power empty",
    ],
    [
      "battery-charging",
      '<path d="M8 7H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h3M16 7h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2M22 10v4M13 5l-3 7h4l-3 7"/>',
      "power energy",
    ],
    [
      "mouse",
      '<rect x="6" y="2" width="12" height="20" rx="6"/><path d="M12 6v4"/>',
      "pointer click",
    ],
    [
      "keyboard",
      '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M7 16h10"/>',
      "typing input",
    ],
  ],
  Weather: [
    [
      "sun",
      '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
      "sunny day",
    ],
    [
      "moon",
      '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z"/>',
      "night dark",
    ],
    [
      "cloud-rain",
      '<path d="M16 13a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 14h10M8 17v2M12 16v3M16 17v2"/>',
      "rainy forecast",
    ],
    [
      "cloud-snow",
      '<path d="M16 13a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 14h10M8 17h.01M12 19h.01M16 17h.01"/>',
      "snow forecast",
    ],
    [
      "cloud-lightning",
      '<path d="M16 13a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 14h10M13 11l-3 6h4l-3 5"/>',
      "storm forecast",
    ],
    [
      "cloud-drizzle",
      '<path d="M16 13a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 14h10M8 17v.01M12 20v.01M16 17v.01"/>',
      "rain forecast",
    ],
    [
      "wind",
      '<path d="M3 8h10a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h5"/>',
      "breeze air",
    ],
    [
      "umbrella",
      '<path d="M22 12a10 10 0 0 0-20 0ZM12 2v16a3 3 0 0 0 6 0M12 2v-1"/>',
      "rain protection",
    ],
    [
      "droplet",
      '<path d="M12 2s7 7.2 7 12a7 7 0 0 1-14 0c0-4.8 7-12 7-12Z"/>',
      "water drop",
    ],
    [
      "droplets",
      '<path d="M8 3s6 6 6 10a6 6 0 0 1-12 0c0-4 6-10 6-10ZM17 10s5 5 5 8a5 5 0 0 1-8 4"/>',
      "water drops",
    ],
    [
      "thermometer",
      '<path d="M14 14.8V5a4 4 0 0 0-8 0v9.8a6 6 0 1 0 8 0ZM10 9v9"/><circle cx="10" cy="18" r="2"/>',
      "temperature",
    ],
    [
      "snowflake",
      '<path d="M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M4 10l4-1-1-4M17 19l-1-4 4-1M4 14l4 1-1 4M17 5l-1 4 4 1"/>',
      "winter cold",
    ],
    [
      "sunrise",
      '<path d="M12 2v4m-5 3 2 2M3 16h2m14 0h2M5 9l2 2m12-2-2 2M2 20h20M7 16a5 5 0 0 1 10 0M8 6l4-4 4 4"/>',
      "morning dawn",
    ],
    [
      "sunset",
      '<path d="M12 8V2M7 9l2 2M3 16h2m14 0h2M5 9l2 2m12-2-2 2M2 20h20M7 16a5 5 0 0 1 10 0M8 6l4 4 4-4"/>',
      "evening dusk",
    ],
    [
      "rainbow",
      '<path d="M3 18a9 9 0 0 1 18 0M6 18a6 6 0 0 1 12 0M9 18a3 3 0 0 1 6 0M2 22h20"/>',
      "color weather",
    ],
    [
      "tornado",
      '<path d="M3 4h18M5 8h14M7 12h10M9 16h5M11 20h2"/>',
      "storm wind",
    ],
    [
      "waves",
      '<path d="M2 6c2-2 4-2 6 0s4 2 6 0 4-2 8 0M2 12c2-2 4-2 6 0s4 2 6 0 4-2 8 0M2 18c2-2 4-2 6 0s4 2 6 0 4-2 8 0"/>',
      "ocean water",
    ],
    [
      "compass",
      '<circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 5.5L8 16l2.5-5.5Z"/>',
      "direction explore",
    ],
    [
      "globe",
      '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
      "world international",
    ],
    [
      "cloud-fog",
      '<path d="M16 12a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 6 13h10M4 17h16M7 21h10"/>',
      "mist weather",
    ],
  ],
  Travel: [
    [
      "map",
      '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3ZM9 3v15M15 6v15"/>',
      "location directions",
    ],
    [
      "map-pin",
      '<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
      "location marker",
    ],
    ["navigation", '<path d="m3 11 19-9-9 19-2-8Z"/>', "direction location"],
    [
      "navigation-off",
      '<path d="m2 2 20 20M8.5 8.5 3 11l7-3M11 15l2 6 3-7M14 6l8-4-3 8"/>',
      "location disabled",
    ],
    [
      "locate",
      '<circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',
      "location target",
    ],
    [
      "crosshair",
      '<circle cx="12" cy="12" r="8"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
      "target aim",
    ],
    [
      "route",
      '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h7a4 4 0 0 0 0-8H8a3 3 0 0 1 0-6h7"/>',
      "directions path",
    ],
    [
      "signpost",
      '<path d="M12 2v20M5 5h12l3 3-3 3H5ZM7 13h10l3 3-3 3H7Z"/>',
      "direction road",
    ],
    [
      "building",
      '<path d="M4 21V3h12v18M16 9h4v12M2 21h20M8 7h4M8 11h4M8 15h4M9 21v-3h2v3"/>',
      "office city",
    ],
    [
      "landmark",
      '<path d="m3 9 9-6 9 6ZM5 9v9M9 9v9M15 9v9M19 9v9M3 18h18M2 22h20"/>',
      "bank museum",
    ],
    [
      "hotel",
      '<path d="M3 21V3h18v18M7 7h2M15 7h2M7 11h2M15 11h2M7 15h2M15 15h2M10 21v-3h4v3M2 21h20"/>',
      "building stay",
    ],
    [
      "car",
      '<path d="m5 17-2-2v-4l2-5h14l2 5v4l-2 2M3 11h18M5 17v3M19 17v3"/><circle cx="7" cy="14" r="1"/><circle cx="17" cy="14" r="1"/>',
      "vehicle auto",
    ],
    [
      "taxi",
      '<path d="m5 17-2-2v-4l2-5h14l2 5v4l-2 2M3 11h18M5 17v3M19 17v3M9 6V3h6v3M7 14h.01M17 14h.01"/>',
      "cab vehicle",
    ],
    [
      "bus",
      '<rect x="4" y="3" width="16" height="16" rx="3"/><path d="M4 11h16M7 19v2M17 19v2M8 15h.01M16 15h.01M8 7h8"/>',
      "vehicle transport",
    ],
    [
      "train",
      '<rect x="5" y="2" width="14" height="16" rx="3"/><path d="M5 10h14M8 6h8M8 14h.01M16 14h.01M8 18l-3 4M16 18l3 4M8 22h8"/>',
      "railway transport",
    ],
    [
      "plane",
      '<path d="M22 2 9 15M15 3l6 6M2 16l6-2 4-4-8-3 2-2 9 2 4-4a2 2 0 0 1 3 3l-4 4 2 9-2 2-3-8-4 4-2 6-2-2 2-5Z"/>',
      "flight travel",
    ],
    [
      "ship",
      '<path d="M4 14 3 5l9-3 9 3-1 9M12 2v12M2 14l10 4 10-4M3 18c2 3 4 3 6 0 2 3 4 3 6 0 2 3 4 3 6 0"/>',
      "boat cruise",
    ],
    [
      "rocket",
      '<path d="M14 5c3-3 6-3 7-3 0 1 0 4-3 7l-5 5-4-4ZM14 5 9 4l-5 5 5 1M13 14l1 5-5 3-1-7"/><circle cx="15.5" cy="7.5" r="1.5"/><path d="M5 15c-2 1-3 5-3 5s4-1 5-3"/>',
      "launch space",
    ],
    [
      "bicycle",
      '<circle cx="6" cy="17" r="4"/><circle cx="18" cy="17" r="4"/><path d="m6 17 4-8 4 8m-8 0h8l-5-11h3M13 6h4l1 11"/>',
      "bike cycling",
    ],
    [
      "luggage",
      '<rect x="5" y="7" width="14" height="14" rx="2"/><path d="M9 7V3h6v4M9 11v6M15 11v6M8 21v1M16 21v1"/>',
      "baggage suitcase",
    ],
  ],
  Transport: [
    [
      "scooter",
      '<circle cx="5" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7 18h7l3-11h3M16 7h4M14 18l-4-7H7"/>',
      "kick scooter transport",
    ],
    [
      "electric-scooter",
      '<circle cx="5" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M7 18h7l3-11h3M16 7h4M14 18l-4-7H7m2 2-2 3h3l-1 3"/>',
      "e scooter battery transport",
    ],
    [
      "motorcycle",
      '<circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="m5 17 4-7h5l5 7M8 17h7l-3-10H9M15 6h3l1 11M7 10H4"/>',
      "motorbike two wheeler",
    ],
    [
      "moped",
      '<circle cx="5" cy="17" r="3"/><circle cx="19" cy="17" r="3"/><path d="M5 17h7l3-8h4M12 17l-3-7H6M15 9l4 8M8 7h4"/>',
      "scooter motorbike transport",
    ],
    [
      "tram",
      '<rect x="5" y="4" width="14" height="15" rx="3"/><path d="m8 4 4-3 4 3M5 11h14M8 8h8M8 15h.01M16 15h.01M8 19l-2 3M16 19l2 3"/>',
      "streetcar trolley rail",
    ],
    [
      "metro",
      '<path d="M5 19V10a7 7 0 0 1 14 0v9ZM5 12h14M8 8h8M8 16h.01M16 16h.01M8 19l-2 3M16 19l2 3"/>',
      "subway underground train",
    ],
    [
      "monorail",
      '<rect x="4" y="4" width="16" height="13" rx="3"/><path d="M4 10h16M8 7h8M8 14h.01M16 14h.01M8 17l-2 4h12l-2-4M12 17v4"/>',
      "train railway transit",
    ],
    [
      "high-speed-train",
      '<path d="M4 17V8c0-4 4-6 9-6h3c3 0 5 5 5 9v6l-4 2H8ZM4 12h17M8 7h8M8 15h.01M16 15h.01M8 19l-2 3M16 19l2 3"/>',
      "bullet train railway",
    ],
    [
      "train-tunnel",
      '<path d="M3 22V11a9 9 0 0 1 18 0v11M3 18h4M17 18h4"/><rect x="7" y="8" width="10" height="11" rx="3"/><path d="M7 13h10M10 16h.01M14 16h.01M9 19l-1 3M15 19l1 3"/>',
      "railway underground transport",
    ],
    [
      "train-track",
      '<path d="m8 2-3 20M16 2l3 20M7 6h10M6 11h12M5 16h14M4 21h16"/>',
      "railroad railway rails",
    ],
    [
      "bus-stop",
      '<path d="M4 21V4h10v17M2 21h14M4 13h10M7 8h4M17 3h4v6h-4ZM19 9v12"/>',
      "station shelter transit",
    ],
    [
      "shuttle-bus",
      '<path d="M3 16V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9ZM3 11h18M8 4v7M16 4v7M6 16v3M18 16v3M7 14h.01M17 14h.01"/>',
      "airport minibus transport",
    ],
    [
      "double-decker-bus",
      '<rect x="5" y="2" width="14" height="18" rx="2"/><path d="M5 8h14M5 14h14M9 2v6M15 2v6M8 11h.01M16 11h.01M8 17h.01M16 17h.01M8 20v2M16 20v2"/>',
      "bus coach transit",
    ],
    [
      "minibus",
      '<path d="M4 17V6a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v11ZM4 10h16M9 3v7M15 3v7M6 17v3M18 17v3M8 14h.01M16 14h.01"/>',
      "van passenger transport",
    ],
    [
      "van",
      '<path d="M3 17V6h12v11M15 9h4l2 4v4h-6M3 13h12"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
      "delivery vehicle transport",
    ],
    [
      "minivan",
      '<path d="m3 16 1-6 4-5h9l4 7v4l-2 2H5l-2-2ZM4 10h16M8 5v5M16 5v5"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/>',
      "family vehicle car",
    ],
    [
      "pickup-truck",
      '<path d="M2 17V8h10v9M12 11h5l4 4v2h-9M2 13h10M15 11v4h6"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
      "pickup vehicle utility",
    ],
    [
      "semi-truck",
      '<path d="M2 5h12v12H2ZM14 9h5l3 4v4h-8M17 9v4h5"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "tractor trailer lorry",
    ],
    [
      "box-truck",
      '<path d="M2 5h12v12H2ZM14 10h4l4 4v3h-8M17 10v4h5M5 8h6"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "delivery moving lorry",
    ],
    [
      "tow-truck",
      '<path d="M2 17V9h9v8M11 12h4l3 3v2h-7M2 12h9M11 9l6-5 3 3-5 5M17 4l3 3"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',
      "recovery vehicle towing",
    ],
    [
      "tanker-truck",
      '<path d="M2 8h11a3 3 0 0 1 3 3v4H2ZM16 11h3l3 3v3h-6M5 8V6h6v2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "fuel tanker lorry",
    ],
    [
      "cement-truck",
      '<path d="m3 7 10-2 2 10-10 2ZM16 10h3l3 4v3h-7M6 9l6 4"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "mixer construction vehicle",
    ],
    [
      "garbage-truck",
      '<path d="M2 5h11l2 12H2ZM15 10h3l4 4v3h-7M5 8l5 6M10 8l3 4"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "waste refuse vehicle",
    ],
    [
      "fire-truck",
      '<path d="M2 16V8h12v8M14 11h4l4 4v2h-8M2 12h12M5 8V5h6v3M5 5V3M8 5V3M11 5V3"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "emergency engine vehicle",
    ],
    [
      "ambulance",
      '<path d="M2 17V6h12v11M14 10h4l4 4v3h-8M14 10v4h8M8 8v6M5 11h6"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/>',
      "emergency medical vehicle",
    ],
    [
      "police-car",
      '<path d="m4 17-2-2v-4l3-5h14l3 5v4l-2 2M2 11h20M9 6V3h6v3M12 3v3M6 14h.01M18 14h.01M5 17v3M19 17v3"/>',
      "emergency patrol vehicle",
    ],
    [
      "sports-car",
      '<path d="m2 16 2-5 5-4h7l4 5 2 1v3h-3M5 16h12M2 16h3M8 7l2 5M4 11h16"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/>',
      "coupe fast vehicle",
    ],
    [
      "electric-car",
      '<path d="m4 17-2-2v-4l3-5h14l3 5v4l-2 2M2 11h20M6 14h.01M18 14h.01M5 17v3M19 17v3m-6-12-3 4h4l-2 4"/>',
      "ev battery vehicle",
    ],
    [
      "convertible-car",
      '<path d="m3 17-1-3 2-4 5-1 3-5 4 5 5 2 1 4-3 2M4 10h15M12 4l-1 5M6 14h.01M18 14h.01"/><circle cx="6" cy="17" r="2"/><circle cx="18" cy="17" r="2"/>',
      "cabriolet open car",
    ],
    [
      "off-road-vehicle",
      '<path d="M2 16V8h20v8M6 8V4h12v4M2 12h20M7 4V2M17 4V2M7 15h.01M17 15h.01"/><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/>',
      "jeep 4x4 utility",
    ],
    [
      "camper-van",
      '<path d="M2 18V5h15v13M17 9h3l2 4v5h-5M2 10h15M6 5v5M11 13h4v5"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
      "motorhome rv travel",
    ],
    [
      "caravan",
      '<path d="M3 17V6a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v11ZM18 14h4M7 7h5v4H7ZM15 17v3"/><circle cx="8" cy="18" r="2"/>',
      "travel trailer camper",
    ],
    [
      "golf-cart",
      '<path d="M3 15V6h12l4 9M6 6V3M3 3h15M18 3v12M3 11h14M8 15v3"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
      "golf vehicle buggy",
    ],
    [
      "forklift",
      '<path d="M2 16V6h9v10M11 9h4l3 7h-7M5 6V3h5v3M20 3v15h3M20 12h3"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>',
      "warehouse lift vehicle",
    ],
    [
      "tractor",
      '<circle cx="7" cy="16" r="5"/><circle cx="19" cy="18" r="3"/><path d="M11 13h5l2 5M7 11V5h7l2 8M4 5h13M4 5V2M2 16h2"/>',
      "farm agriculture vehicle",
    ],
    [
      "bulldozer",
      '<path d="M3 15V7h10l4 8ZM6 7V4h5v3M17 10h3l2 8h-5M3 18h14"/><circle cx="6" cy="18" r="3"/><circle cx="14" cy="18" r="3"/>',
      "construction earthmover vehicle",
    ],
    [
      "excavator",
      '<path d="M3 18h12M5 18v-6h7l3 6M7 12V8h5M12 8l4-5 4 2-3 7 4 5"/><circle cx="6" cy="19" r="2"/><circle cx="13" cy="19" r="2"/>',
      "construction digger vehicle",
    ],
    [
      "snowmobile",
      '<path d="m3 16 3-7h6l4 4 5 1-2 4H8M6 9V6h4M16 13l-3 5M2 20h14M18 20h4"/>',
      "snow winter vehicle",
    ],
    [
      "segway",
      '<circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 18h6M12 18l-2-12H7M10 10h5M14 6h3"/>',
      "personal transporter electric",
    ],
    [
      "unicycle",
      '<circle cx="12" cy="16" r="5"/><path d="M12 11V4M8 4h8M9 16h6M12 16l3-3"/>',
      "one wheel cycle",
    ],
    [
      "tricycle",
      '<circle cx="12" cy="8" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M12 11v4M9 15h6M12 5V2M9 2h6"/>',
      "three wheel cycle",
    ],
    [
      "mountain-bike",
      '<circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/><path d="m5 17 5-9 4 9H5l6-12h3M14 5h4l1 12M8 11h7"/>',
      "mtb bicycle cycling",
    ],
    [
      "electric-bike",
      '<circle cx="5" cy="17" r="4"/><circle cx="19" cy="17" r="4"/><path d="m5 17 5-9 4 9H5l6-12h3M14 5h4l1 12m-9-4-2 3h4l-2 4"/>',
      "e bike battery cycling",
    ],
    [
      "ferry",
      '<path d="M3 15 5 5h14l2 10-9 5ZM5 10h14M9 5V2h6v3M2 20c2 2 4 2 6 0 2 2 4 2 6 0 2 2 4 2 6 0"/>',
      "boat passenger water",
    ],
    [
      "sailboat",
      '<path d="M12 2v14M11 3 4 14h7ZM13 5l7 9h-7ZM3 17h18l-3 4H6Z"/>',
      "sailing boat yacht",
    ],
    [
      "motorboat",
      '<path d="M3 15h18l-3 5H6ZM7 15V8h8l4 7M11 8V4h4M2 21c2 1 4 1 6 0 2 1 4 1 6 0 2 1 4 1 6 0"/>',
      "boat engine water",
    ],
    [
      "speedboat",
      '<path d="m2 15 7-7h7l6 7-6 4H6ZM9 8l3-4h4l1 5M2 20h17M5 22h14"/>',
      "fast boat water",
    ],
    [
      "yacht",
      '<path d="M3 15h18l-4 5H6ZM8 15V6h8l4 9M12 6V2M12 3l7 3M2 21h20"/>',
      "luxury boat sailing",
    ],
    [
      "canoe",
      '<path d="M2 14c5 4 15 4 20 0-5 8-15 8-20 0ZM6 5l12 14M4 3l4 1-3 3ZM18 17l3 3 1-4"/>',
      "paddle boat water",
    ],
    [
      "kayak",
      '<path d="M12 2c5 5 5 15 0 20-5-5-5-15 0-20ZM12 7v10M3 5l18 14M2 2l4 1-3 3ZM19 16l3 3 1-4"/>',
      "paddle boat water",
    ],
    [
      "submarine",
      '<path d="M3 13a7 7 0 0 1 7-7h5a6 6 0 0 1 0 12h-5a7 7 0 0 1-7-5ZM3 13H1M11 6V3h4v3M7 12h.01M12 12h.01M17 12h.01M15 18v3"/>',
      "underwater vessel transport",
    ],
    [
      "cargo-ship",
      '<path d="M3 14h18l-3 6H6ZM5 14V9h4v5M9 14V7h4v7M13 14V9h4v5M2 22c2-2 4-2 6 0 2-2 4-2 6 0 2-2 4-2 6 0"/>',
      "container freight vessel",
    ],
    [
      "cruise-ship",
      '<path d="M3 14h18l-3 6H6ZM6 14V7h12v7M9 7V3h6v4M9 10h.01M12 10h.01M15 10h.01M2 21c2 2 4 2 6 0 2 2 4 2 6 0 2 2 4 2 6 0"/>',
      "ocean liner passenger ship",
    ],
    [
      "lifeboat",
      '<path d="M3 13h18l-3 6H6ZM7 13V8h10v5M10 8V5h4v3M12 10v3M9 11.5h6M2 21c2 1 4 1 6 0 2 1 4 1 6 0 2 1 4 1 6 0"/>',
      "rescue safety boat",
    ],
    [
      "helicopter",
      '<path d="M5 13a5 5 0 0 1 5-5h4a5 5 0 0 1 0 10h-4a5 5 0 0 1-5-5ZM14 12h7V7M21 7l-2-2M12 8V4M5 4h14M8 18l-2 3h12l-2-3"/>',
      "aircraft rotor flight",
    ],
    [
      "propeller-plane",
      '<path d="M12 3v18M10 5h4l1 10 6 3v2l-9-2-9 2v-2l6-3ZM9 21h6M9 3h6"/>',
      "aircraft aviation flight",
    ],
    [
      "private-jet",
      '<path d="m3 14 7-3 4-8h3l-2 8 6 2v2l-7 1-3 5H8l1-5-6-1Z"/>',
      "business aircraft flight",
    ],
    [
      "cargo-plane",
      '<path d="M2 13h13l6-4 1 2-5 4v4l-5 2-2-5H2ZM6 13l3-8h3l-1 8M5 17v2"/>',
      "freight aircraft logistics",
    ],
    [
      "seaplane",
      '<path d="M3 12h18M12 3v13M9 5h6l1 9 5 2v2l-9-2-9 2v-2l5-2ZM6 21h12M8 18l-2 3M16 18l2 3"/>',
      "floatplane aircraft water",
    ],
    [
      "hot-air-balloon",
      '<path d="M12 2a8 8 0 0 1 7 12l-4 5H9l-4-5A8 8 0 0 1 12 2ZM9 19l1 3h4l1-3M10 22v-3M14 22v-3M12 3c-3 4-3 11 0 16M12 3c3 4 3 11 0 16"/>',
      "air balloon flight",
    ],
    [
      "airship",
      '<path d="M3 12a8 5 0 0 1 8-5h3a7 5 0 0 1 0 10h-3a8 5 0 0 1-8-5ZM18 8l3-4v8l-3-2M9 17v3h6v-3M8 20h8"/>',
      "blimp zeppelin aircraft",
    ],
    [
      "drone-transport",
      '<path d="M8 8 5 5M16 8l3-3M8 14l-3 3M16 14l3 3"/><rect x="8" y="8" width="8" height="6" rx="1"/><path d="M10 14v4h4v-4M2 5h6M16 5h6M2 17h6M16 17h6"/>',
      "delivery quadcopter logistics",
    ],
    [
      "cable-car",
      '<path d="M2 3h20M12 3v5M7 8h10l2 11H5ZM5 13h14M10 8v5M14 8v5"/>',
      "aerial lift mountain",
    ],
    [
      "gondola-lift",
      '<path d="m2 5 20-3M12 4v6M7 10h10l2 10H5ZM5 15h14M10 10v5M14 10v5"/>',
      "cableway ski lift",
    ],
    [
      "funicular",
      '<path d="m4 17 2-12h12l2 12ZM6 10h12M10 5v5M14 5v5M8 14h.01M16 14h.01M3 22 21 17M7 20l-1 2M17 18l1 2"/>',
      "mountain railway cable",
    ],
    [
      "escalator",
      '<path d="M3 20h4l10-12h4V4h-5L6 16H3ZM8 5a2 2 0 1 0 0 4M8 9v4l3 2M8 12l3-2"/>',
      "stairs passenger transit",
    ],
    [
      "moving-walkway",
      '<path d="M2 18h20M4 15h16M6 15V6h12v9M6 9h12M9 12h6M4 21h16"/>',
      "travelator airport passenger",
    ],
    [
      "traffic-light",
      '<rect x="7" y="2" width="10" height="20" rx="2"/><circle cx="12" cy="6" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="18" r="1"/><path d="M4 5h3M4 11h3M17 5h3M17 11h3"/>',
      "road signal stoplight",
    ],
    [
      "traffic-cone",
      '<path d="m8 3-5 17h18L16 3ZM6 13h12M4 20h16v2H4Z"/>',
      "road safety construction",
    ],
    [
      "road-barrier",
      '<path d="M4 6h16v7H4ZM7 13v9M17 13v9M4 22h6M14 22h6M7 6l-3 7M14 6l-4 7M20 8l-3 5"/>',
      "roadwork safety blockade",
    ],
    [
      "fuel-pump",
      '<rect x="3" y="3" width="11" height="18" rx="1"/><path d="M6 6h5v5H6ZM14 7h3l3 4v7a2 2 0 0 1-4 0v-5M17 11h3M6 21h5"/>',
      "gas petrol station",
    ],
    [
      "ev-charging-station",
      '<rect x="3" y="3" width="11" height="18" rx="1"/><path d="m9 6-3 6h4l-2 5M14 7h3l3 4v7a2 2 0 0 1-4 0v-5M17 11h3M6 21h5"/>',
      "electric vehicle charger",
    ],
    [
      "parking-sign",
      '<path d="M12 22V3M7 3h10v10H7ZM10 10V6h2a2 2 0 0 1 0 4h-2M8 22h8"/>',
      "car park road sign",
    ],
    [
      "steering-wheel",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3.4 10h17.2M10 14l-3 5M14 14l3 5M12 10V3"/>',
      "car driving control",
    ],
    [
      "transport-seat",
      '<path d="M7 3v10h9l3 8M7 8H4v8a4 4 0 0 0 4 4h10M4 21h16M10 3h5l2 10"/>',
      "passenger chair vehicle",
    ],
  ],
  Health: [
    [
      "health-heart",
      '<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0l-1 1.1-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/><path d="M12 8v7M8.5 11.5h7"/>',
      "medical care wellness",
    ],
    [
      "heartbeat",
      '<path d="M20.8 5.7a5.5 5.5 0 0 0-7.8 0l-1 1.1-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.5a5.5 5.5 0 0 0 0-7.8Z"/><path d="M5 12h4l2-4 3 8 2-4h3"/>',
      "heart pulse cardiology",
    ],
    [
      "ecg",
      '<path d="M2 12h4l2-6 4 13 3-10 2 3h5"/>',
      "electrocardiogram pulse heart",
    ],
    [
      "stethoscope",
      '<path d="M6 3v5a4 4 0 0 0 8 0V3M4 3h4M12 3h4M10 12v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="11" r="2"/>',
      "doctor medical examination",
    ],
    [
      "health-thermometer",
      '<path d="M10 14.5V5a4 4 0 0 1 8 0v9.5a6 6 0 1 1-8 0Z"/><path d="M14 7v10M18 7h3M18 11h2"/>',
      "fever temperature medical",
    ],
    [
      "blood-pressure",
      '<rect x="3" y="8" width="10" height="12" rx="2"/><circle cx="17" cy="7" r="4"/><path d="M8 11v6M5 14h6M13 14h3a4 4 0 0 1 4 4M17 7l2-2"/>',
      "hypertension monitor cuff",
    ],
    [
      "blood-drop",
      '<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
      "donation hematology medical",
    ],
    [
      "blood-bag",
      '<rect x="5" y="5" width="14" height="16" rx="3"/><path d="M9 5V2h6v3M9 21v2M15 21v2M12 9s-3 3-3 5a3 3 0 0 0 6 0c0-2-3-5-3-5Z"/>',
      "transfusion donation medical",
    ],
    [
      "syringe",
      '<path d="m14 4 6 6M17 3l4 4M12 6l6 6-9 9-6-6ZM3 21l3-3M7 12l5 5M10 9l2 2"/>',
      "injection vaccine medical",
    ],
    [
      "vaccine",
      '<path d="M8 3h8M9 3v4l-3 4v9h12v-9l-3-4V3M6 11h12M12 13v4M10 15h4"/>',
      "immunization vial medicine",
    ],
    [
      "pill",
      '<circle cx="12" cy="12" r="9"/><path d="M5 12h14"/>',
      "tablet medicine pharmacy",
    ],
    [
      "pills",
      '<rect x="3" y="4" width="9" height="16" rx="4.5"/><path d="M3 12h9M15 8l6 10M17 6l4 7M15 14l4-2"/>',
      "medicine tablets pharmacy",
    ],
    [
      "capsule",
      '<rect x="6" y="2" width="12" height="20" rx="6" transform="rotate(45 12 12)"/><path d="m7 7 10 10"/>',
      "medicine antibiotic pharmacy",
    ],
    [
      "medicine-bottle",
      '<path d="M8 2h8v5H8ZM6 7h12v15H6ZM6 12h12M12 14v5M9.5 16.5h5"/>',
      "prescription drugs pharmacy",
    ],
    [
      "prescription",
      '<path d="M6 2h9l4 4v16H6ZM15 2v5h4M9 12h6M12 9v6M9 19h6"/>',
      "rx doctor medication",
    ],
    [
      "medical-cross",
      '<path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z"/>',
      "health first aid hospital",
    ],
    [
      "first-aid-kit",
      '<rect x="2" y="6" width="20" height="15" rx="2"/><path d="M8 6V3h8v3M12 9v9M7.5 13.5h9"/>',
      "emergency medical kit",
    ],
    [
      "bandage",
      '<rect x="5" y="2" width="14" height="20" rx="7" transform="rotate(45 12 12)"/><path d="m8 8 8 8M10 12h.01M14 12h.01M12 10h.01M12 14h.01"/>',
      "plaster wound care",
    ],
    [
      "adhesive-bandage",
      '<rect x="2" y="8" width="20" height="8" rx="4"/><path d="M9 8v8M15 8v8M6 12h.01M18 12h.01"/>',
      "plaster wound first aid",
    ],
    [
      "hospital",
      '<path d="M4 22V3h16v19M2 22h20M12 6v6M9 9h6M9 22v-5h6v5M8 15h.01M16 15h.01"/>',
      "clinic medical building",
    ],
    [
      "clinic",
      '<path d="M3 21V8l9-5 9 5v13M1 21h22M12 7v6M9 10h6M9 21v-5h6v5"/>',
      "doctor medical center",
    ],
    [
      "doctor",
      '<circle cx="12" cy="6" r="4"/><path d="M5 22v-4a7 7 0 0 1 14 0v4M9 14v3a3 3 0 0 0 6 0v-3M12 20v2"/>',
      "physician healthcare medical",
    ],
    [
      "nurse",
      '<circle cx="12" cy="7" r="4"/><path d="M5 22v-4a7 7 0 0 1 14 0v4M8 3l1-2h6l1 2M12 1v4M10 3h4"/>',
      "medical care healthcare",
    ],
    [
      "patient",
      '<circle cx="9" cy="6" r="4"/><path d="M2 22v-4a7 7 0 0 1 12-5M16 12h6v10h-6ZM16 15h6M19 13v4"/>',
      "medical care hospital",
    ],
    [
      "medical-mask",
      '<path d="M5 7c4-2 10-2 14 0v9c-4 4-10 4-14 0ZM5 9 2 7v7l3 2M19 9l3-2v7l-3 2M8 11h8M8 14h8"/>',
      "face protection hygiene",
    ],
    [
      "surgical-mask",
      '<path d="m4 7 8-3 8 3v10l-8 4-8-4ZM4 10 2 8v6l2 2M20 10l2-2v6l-2 2M7 10l10 2M7 14l10 2"/>',
      "face protection surgery",
    ],
    [
      "medical-gloves",
      '<path d="M8 21H4V10l2-7v7M6 9l2-8v8M8 8l2-7v8M10 9l2-6v7M12 10l2-4v5c4-2 7 1 5 4l-4 6H8"/>',
      "latex protection hygiene",
    ],
    [
      "wheelchair",
      '<circle cx="9" cy="4" r="2"/><circle cx="9" cy="16" r="6"/><path d="M9 7v6h7l3 8M9 10h6M15 17h5"/>',
      "accessibility mobility disabled",
    ],
    [
      "crutch",
      '<path d="M8 3h8M10 3v6l-3 12M14 3v6l3 12M10 9h4M6 21h4M14 21h4"/>',
      "mobility injury recovery",
    ],
    [
      "stretcher",
      '<path d="M3 5h18l-2 8H5ZM5 13l-2 7M19 13l2 7M8 13l4 7M16 13l-4 7M2 3h4M18 3h4"/>',
      "emergency patient hospital",
    ],
    [
      "hospital-bed",
      '<path d="M3 21V4M3 12h18v9M3 17h18M7 12V7h5a3 3 0 0 1 3 3v2M15 8h6v4"/>',
      "patient clinic ward",
    ],
    [
      "medical-monitor",
      '<rect x="2" y="3" width="20" height="16" rx="2"/><path d="M5 11h3l2-4 3 8 2-4h4M8 22h8M12 19v3"/>',
      "icu vital signs ecg",
    ],
    [
      "iv-drip",
      '<path d="M12 2v20M7 22h10M7 3h10M9 3v3M8 6h8v9a4 4 0 0 1-8 0ZM12 19v3M10 10h4"/>',
      "infusion hospital treatment",
    ],
    [
      "oxygen-tank",
      '<rect x="7" y="6" width="10" height="16" rx="5"/><path d="M10 6V3h4v3M12 3V1M12 1h5M17 1v3M10 13h4M12 11v4"/>',
      "respiratory medical breathing",
    ],
    [
      "brain",
      '<path d="M9 4a4 4 0 0 0-4 4 4 4 0 0 0-2 7 4 4 0 0 0 5 5c2 2 5 0 4-3V6c0-3-2-4-3-2ZM15 4a4 4 0 0 1 4 4 4 4 0 0 1 2 7 4 4 0 0 1-5 5c-2 2-5 0-4-3V6c0-3 2-4 3-2ZM5 9c3 0 4 2 3 4M19 9c-3 0-4 2-3 4M5 16c2-2 4-1 4 1M19 16c-2-2-4-1-4 1"/>',
      "neurology mind anatomy",
    ],
    [
      "lungs",
      '<path d="M10 5v7c-2-3-3-5-4-3-2 3-4 9-3 11 2 2 6 1 7-1ZM14 5v7c2-3 3-5 4-3 2 3 4 9 3 11-2 2-6 1-7-1ZM12 2v9M9 8l3 3 3-3"/>',
      "respiratory breathing anatomy",
    ],
    [
      "kidney",
      '<path d="M8 3C3 3 2 9 3 14s4 8 7 5c2-2-1-4 0-7s4-5 2-7c-1-2-3-2-4-2ZM16 3c5 0 6 6 5 11s-4 8-7 5c-2-2 1-4 0-7s-4-5-2-7c1-2 3-2 4-2ZM9 14l3 4v4M15 14l-3 4"/>',
      "renal organ anatomy",
    ],
    [
      "liver",
      '<path d="M3 6c5-3 13-3 18 1 1 5-1 12-7 12-4 0-4-5-7-5-3 0-5-3-4-8ZM14 5c0 5 2 8 6 9"/>',
      "hepatic organ anatomy",
    ],
    [
      "stomach",
      '<path d="M9 2v5c0 3-5 3-5 9a7 7 0 0 0 14 0c0-4-2-7-5-7V6M9 5h4M9 18c3 2 6 1 7-2"/>',
      "digestive organ anatomy",
    ],
    [
      "intestine",
      '<path d="M5 5a3 3 0 0 1 6 0v3a3 3 0 0 1 0 6H8a3 3 0 0 0 0 6h8a3 3 0 0 0 0-6h-1a3 3 0 0 1 0-6h3M11 5h5a3 3 0 0 1 3 3M5 5v12a3 3 0 0 0 3 3M5 20v2"/>',
      "digestive bowel anatomy",
    ],
    [
      "bone",
      '<path d="M7 4a3 3 0 0 1 3 3l7 7a3 3 0 1 1 3 3 3 3 0 1 1-3 3l-7-7a3 3 0 1 1-3-3 3 3 0 1 1 0-6Z"/>',
      "orthopedic skeleton anatomy",
    ],
    [
      "tooth",
      '<path d="M7 3C3 3 2 8 4 12l2 8c1 3 3 1 4-3l2-4 2 4c1 4 3 6 4 3l2-8c2-4 1-9-3-9-3 0-3 2-5 2S10 3 7 3Z"/>',
      "dental dentist anatomy",
    ],
    [
      "eye-health",
      '<path d="M2 12s4-7 10-7c3 0 5 1 7 3M2 12s4 7 10 7c3 0 5-1 7-3M18 15l4 1M20 12v8M16 16h8"/><circle cx="12" cy="12" r="3"/>',
      "vision ophthalmology care",
    ],
    [
      "ear-health",
      '<path d="M6 10a6 6 0 0 1 12 0c0 5-5 5-5 8a3 3 0 0 1-6 0M9 10a3 3 0 0 1 6 0c0 3-4 2-4 5M18 4l3-2M19 8h3"/>',
      "hearing audiology care",
    ],
    [
      "dna",
      '<path d="M5 2c0 8 14 12 14 20M19 2C19 10 5 14 5 22M7 5h10M8 9h8M8 15h8M7 19h10"/>',
      "genetics helix science",
    ],
    [
      "microscope",
      '<path d="m9 3 4 4-5 7-4-4ZM12 6l3-3 4 4-3 3M6 13a7 7 0 0 0 8 8M3 22h18M14 15h5v6"/>',
      "laboratory research science",
    ],
    [
      "test-tube",
      '<path d="M8 2h8M10 2v12l-4 6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l-4-6V2M8 15h8M10 18h.01M14 19h.01"/>',
      "laboratory sample research",
    ],
    [
      "lab-flask",
      '<path d="M9 2h6M10 2v7l-7 11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2L14 9V2M7 15h10M10 18h.01M15 17h.01"/>',
      "chemistry laboratory research",
    ],
    [
      "petri-dish",
      '<ellipse cx="12" cy="12" rx="10" ry="7"/><path d="M2 12v3c0 4 20 4 20 0v-3M8 11h.01M14 9h.01M15 14h.01M9 15h.01"/>',
      "culture laboratory bacteria",
    ],
    [
      "x-ray",
      '<path d="M9 2v20M15 2v20M9 6H5a3 3 0 0 0 0 6h4M15 6h4a3 3 0 0 1 0 6h-4M9 14H6a3 3 0 0 0 0 6h3M15 14h3a3 3 0 0 1 0 6h-3M12 5v14"/>',
      "radiology bones imaging",
    ],
    [
      "ultrasound",
      '<path d="m8 14 4-4 4 4-4 4ZM12 18v4M7 3a7 7 0 0 0 0 10M4 0a10 10 0 0 0 0 16M17 3a7 7 0 0 1 0 10M20 0a10 10 0 0 1 0 16"/>',
      "sonography medical imaging",
    ],
    [
      "mri",
      '<path d="M3 21V10a9 9 0 0 1 18 0v11M7 21V10a5 5 0 0 1 10 0v11M2 21h20M9 15h6M12 12v6"/>',
      "scanner radiology imaging",
    ],
    [
      "ct-scan",
      '<rect x="3" y="2" width="18" height="20" rx="4"/><circle cx="12" cy="10" r="5"/><path d="M2 18h20M8 18v4M16 18v4M12 5v2M12 13v2M7 10h2M15 10h2"/>',
      "tomography radiology imaging",
    ],
    [
      "medical-report",
      '<rect x="5" y="3" width="14" height="19" rx="2"/><path d="M9 3V1h6v2M9 9h6M12 6v6M9 15h6M9 18h4"/>',
      "clipboard diagnosis records",
    ],
    [
      "health-insurance",
      '<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6ZM8 12l3 3 5-6"/>',
      "coverage protection medical",
    ],
    [
      "appointment",
      '<rect x="3" y="5" width="18" height="17" rx="2"/><path d="M7 2v6M17 2v6M3 10h18M12 13v6M9 16h6"/>',
      "medical calendar schedule",
    ],
    [
      "pharmacy",
      '<path d="M4 9h16l-2 11H6ZM2 9h20M8 9V4h8v5M12 11v6M9 14h6"/>',
      "drugstore medicine dispensary",
    ],
    [
      "herbal-medicine",
      '<path d="M4 10h12v4a6 6 0 0 1-12 0ZM10 16v6M6 22h10M10 10C3 8 4 2 4 2s8 0 6 8M10 10C17 8 20 3 20 3s1 7-10 7"/>',
      "natural remedy leaf treatment",
    ],
    [
      "nutrition",
      '<path d="M3 13h18a9 9 0 0 1-18 0ZM12 13V5M12 8c-6 0-6-6-6-6s6 0 6 6M12 10c6 0 7-6 7-6s-1 6-7 6M6 22h12"/>',
      "healthy diet food wellness",
    ],
    [
      "healthy-food",
      '<path d="M3 11h18a9 9 0 0 1-18 0ZM7 11c-3-4 3-7 5-3 2-4 8-1 5 3M9 22h6"/>',
      "diet bowl wellness food",
    ],
    [
      "water-intake",
      '<path d="M5 3h14l-2 19H7ZM6 12h12M12 6s-3 3-3 5a3 3 0 0 0 6 0c0-2-3-5-3-5Z"/>',
      "hydration drink wellness",
    ],
    [
      "fitness-heart",
      '<path d="M20 7a4 4 0 0 0-6 0l-2 2-2-2a4 4 0 0 0-6 6l8 8 8-8a4 4 0 0 0 0-6Z"/><path d="M6 12h3l2-3 2 6 2-3h3"/>',
      "cardio exercise wellness",
    ],
    [
      "yoga",
      '<circle cx="12" cy="4" r="2"/><path d="M12 7v7M12 9l-6 4M12 9l6 4M12 14l-6 7M12 14l6 7M3 21h18"/>',
      "stretching wellness exercise",
    ],
    [
      "meditation",
      '<circle cx="12" cy="4" r="2"/><path d="M12 7v7M7 10l5 4 5-4M12 14l-7 4 4 3h6l4-3ZM2 21h20"/>',
      "mindfulness relaxation wellness",
    ],
    [
      "sleep-health",
      '<path d="M20 13A8 8 0 0 1 11 4a8 8 0 1 0 9 9Z"/><path d="M15 3h6l-6 6h6"/>',
      "rest recovery wellness",
    ],
    [
      "mental-health",
      '<path d="M9 21v-3a7 7 0 1 1 10-10l3 3-3 2v4h-4v4ZM10 9a3 3 0 0 1 6 0c0 3-3 2-3 5M13 17h.01"/>',
      "psychology mind wellbeing",
    ],
    [
      "therapy",
      '<path d="M3 4h12v9H8l-5 4ZM12 17h6l3 3v-8h-3M7 8h4M15 17h.01"/>',
      "counseling support mental health",
    ],
    [
      "coronavirus",
      '<circle cx="12" cy="12" r="6"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3M9 10h.01M15 11h.01M11 15h.01"/>',
      "covid infection disease",
    ],
    [
      "bacteria",
      '<rect x="5" y="8" width="14" height="8" rx="4" transform="rotate(-30 12 12)"/><path d="M4 6 2 4M8 5 7 2M15 8l3-3M19 13l3 1M14 18l1 3M6 16l-3 2M9 11h.01M14 12h.01"/>',
      "germ microbe infection",
    ],
    [
      "microbe",
      '<path d="M12 3c3-2 6 2 5 4 4-1 6 4 3 6 2 3-1 7-4 5-1 4-6 4-7 1-3 2-7-1-5-4-4-1-3-6 0-7-1-3 3-6 5-4 1-1 2-1 3-1Z"/><path d="M9 10h.01M15 9h.01M13 15h.01M8 15h.01"/>',
      "germ bacteria infection",
    ],
    [
      "disinfectant",
      '<path d="M7 8h10l2 14H5ZM9 8V4h6v4M9 4V2h9l3 2M12 12v6M9 15h6"/>',
      "cleaning sanitizer hygiene",
    ],
    [
      "hand-sanitizer",
      '<path d="M7 8h10v14H7ZM9 8V4h6v4M9 4V2h8M17 2h4M12 11s-2 2-2 4a2 2 0 0 0 4 0c0-2-2-4-2-4Z"/>',
      "gel hygiene clean hands",
    ],
    [
      "soap",
      '<rect x="3" y="10" width="18" height="10" rx="4"/><circle cx="17" cy="5" r="3"/><circle cx="9" cy="6" r="2"/><path d="M8 15h8"/>',
      "washing hygiene clean",
    ],
    [
      "health-shield",
      '<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6ZM12 7v9M7.5 11.5h9"/>',
      "medical protection immunity",
    ],
    [
      "prosthetic-leg",
      '<path d="M8 2h7l-1 8-3 4 4 6M7 2l1 8 3 4-2 7M5 22h9M9 14h3"/>',
      "mobility limb rehabilitation",
    ],
  ],
  Food: [
    [
      "coffee",
      '<path d="M3 8h14v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5ZM17 10h2a3 3 0 0 1 0 6h-2M6 2v3M10 2v3M14 2v3"/>',
      "drink cafe",
    ],
    ["cup", '<path d="M4 3h16l-2 18H6ZM5 9h14"/>', "drink soda"],
    [
      "wine",
      '<path d="M6 3h12l-1 7a5 5 0 0 1-10 0ZM12 15v6M8 21h8"/>',
      "drink glass",
    ],
    [
      "beer",
      '<path d="M5 6h12v15H5ZM17 9h2a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3h-2M8 3h8M8 10v7M12 10v7"/>',
      "drink alcohol",
    ],
    [
      "utensils",
      '<path d="M7 2v8M4 2v5a3 3 0 0 0 6 0V2M7 10v12M16 2v20M16 2c4 2 5 8 0 10"/>',
      "restaurant food",
    ],
    [
      "pizza",
      '<path d="m12 3 9 18A20 20 0 0 0 3 21ZM12 3a20 20 0 0 1 9 4M8 15h.01M13 12h.01M14 18h.01"/>',
      "food slice",
    ],
    [
      "cake",
      '<path d="M4 11h16v10H4ZM4 15c2 2 4-2 6 0s4-2 6 0 3-1 4-1M12 11V7M12 3h.01M2 21h20"/>',
      "dessert birthday",
    ],
    [
      "cookie",
      '<path d="M20 13a3 3 0 0 1-3-3 3 3 0 0 1-3-3 3 3 0 0 1-4-3A9 9 0 1 0 20 13Z"/><path d="M9 13h.01M14 17h.01M7 18h.01"/>',
      "dessert snack",
    ],
    [
      "apple",
      '<path d="M12 7c-3-3-9-1-9 6 0 5 4 9 7 7l2-1 2 1c3 2 7-2 7-7 0-7-6-9-9-6ZM12 7c0-4 3-5 5-5"/>',
      "fruit healthy",
    ],
    [
      "cherry",
      '<path d="M12 8C12 3 16 2 20 2M12 8c-1-4-4-5-7-4M12 8l-4 7M12 8l5 5"/><circle cx="7" cy="17" r="3"/><circle cx="17" cy="16" r="3"/>',
      "fruit",
    ],
    [
      "carrot",
      '<path d="m14 8 6 6L7 21l-4-4ZM14 8l-2-5M14 8l5-2M17 5l2 2M9 12l2 2"/>',
      "vegetable healthy",
    ],
    [
      "egg",
      '<path d="M19 14c0 4-3 7-7 7s-7-3-7-7S8 2 12 2s7 7 7 12Z"/>',
      "food breakfast",
    ],
    [
      "milk",
      '<path d="M8 2h8v4l2 4v12H6V10l2-4ZM8 6h8M6 13h12"/>',
      "drink dairy",
    ],
    [
      "bread",
      '<path d="M5 8a4 4 0 0 1 4-4h6a4 4 0 0 1 3 7v10H6V11a4 4 0 0 1-1-3ZM9 11l2 2M13 15l2 2"/>',
      "bakery food",
    ],
    [
      "fish",
      '<path d="M2 12s4-6 10-6c5 0 8 3 10 6-2 3-5 6-10 6-6 0-10-6-10-6ZM2 12l4-3M2 12l4 3"/><circle cx="16" cy="11" r="1"/>',
      "seafood",
    ],
    [
      "ice-cream",
      '<path d="m7 11 5 11 5-11M6 10a6 6 0 0 1 12 0Z"/><path d="M9 6a3 3 0 0 1 6 0"/>',
      "dessert cone",
    ],
    [
      "popcorn",
      '<path d="m6 9 2 12h8l2-12ZM7 9a3 3 0 0 1-1-6 4 4 0 0 1 7-1 4 4 0 0 1 6 3 3 3 0 0 1-1 4M10 13v4M14 13v4"/>',
      "snack cinema",
    ],
    [
      "salad",
      '<path d="M3 11h18a9 9 0 0 1-18 0ZM8 11a4 4 0 0 1 4-7M12 11a4 4 0 0 1 7-3M8 7a4 4 0 0 1 4 4"/>',
      "healthy bowl",
    ],
    [
      "chef-hat",
      '<path d="M6 14a5 5 0 0 1-1-10 6 6 0 0 1 12-2A5 5 0 0 1 18 14v7H6ZM6 17h12M10 10v4M14 10v4"/>',
      "cook restaurant",
    ],
    [
      "lemon",
      '<path d="M20 4c0 3-1 4-3 5 2 8-4 13-9 11-5-1-7-6-3-10 3-3 6-2 8-4 1-2 3-3 7-2Z"/><path d="M16 3c0 2 1 3 3 3"/>',
      "fruit citrus",
    ],
  ],
  Design: [
    [
      "crop",
      '<path d="M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14"/>',
      "resize image",
    ],
    [
      "pen-tool",
      '<path d="m12 19 7-7 3 3-7 7ZM18 13l-1.5-7.5L2 2l3.5 14.5L13 18M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
      "vector draw",
    ],
    [
      "brush",
      '<path d="m14 10 7-7-3-3-7 7M14 10l-4 4M3 21c3 0 6-1 6-4a4 4 0 0 0-4-4c-3 0-3 4-5 4 1 2 1 4 3 4Z"/>',
      "paint art",
    ],
    [
      "palette",
      '<path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h4a5 5 0 0 0 5-5c0-3-4-5-9-5Z"/><path d="M7.5 10h.01M9 6.5h.01M14 6h.01M18 9h.01"/>',
      "color art",
    ],
    [
      "layers",
      '<path d="m12 2 10 5-10 5L2 7Zm-10 10 10 5 10-5M2 17l10 5 10-5"/>',
      "stack arrange",
    ],
    [
      "grid-3x3",
      '<rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>',
      "table layout",
    ],
    [
      "layout-template",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M8 9v12"/>',
      "website wireframe",
    ],
    ["type", '<path d="M4 7V4h16v3M9 20h6M12 4v16"/>', "text typography"],
    [
      "bold",
      '<path d="M7 4h6a4 4 0 0 1 0 8H7ZM7 12h7a4 4 0 0 1 0 8H7ZM7 4v16"/>',
      "text strong",
    ],
    ["italic", '<path d="M10 4h8M6 20h8M14 4l-4 16"/>', "text style"],
    ["underline", '<path d="M6 3v7a6 6 0 0 0 12 0V3M4 21h16"/>', "text format"],
    [
      "align-left",
      '<path d="M3 5h18M3 10h12M3 15h18M3 20h12"/>',
      "text paragraph",
    ],
    [
      "align-center",
      '<path d="M3 5h18M6 10h12M3 15h18M6 20h12"/>',
      "text paragraph",
    ],
    [
      "align-right",
      '<path d="M3 5h18M9 10h12M3 15h18M9 20h12"/>',
      "text paragraph",
    ],
    [
      "align-justify",
      '<path d="M3 5h18M3 10h18M3 15h18M3 20h18"/>',
      "text paragraph",
    ],
    [
      "move",
      '<path d="M12 2v20M2 12h20M9 5l3-3 3 3M9 19l3 3 3-3M5 9l-3 3 3 3M19 9l3 3-3 3"/>',
      "drag position",
    ],
    [
      "maximize",
      '<path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5M3 8l6-6M21 8l-6-6M3 16l6 6M21 16l-6 6"/>',
      "expand fullscreen",
    ],
    [
      "minimize",
      '<path d="M3 8h5V3M21 8h-5V3M3 16h5v5M21 16h-5v5M8 3 3 8M16 3l5 5M8 21l-5-5M16 21l5-5"/>',
      "collapse fullscreen",
    ],
    [
      "zoom-in",
      '<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M7 10h6M10 7v6"/>',
      "magnify enlarge",
    ],
    [
      "zoom-out",
      '<circle cx="10" cy="10" r="7"/><path d="m15 15 6 6M7 10h6"/>',
      "magnify reduce",
    ],
  ],
  Development: [
    [
      "code",
      '<path d="m8 6-6 6 6 6M16 6l6 6-6 6M14 3l-4 18"/>',
      "programming html",
    ],
    [
      "code-square",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 8l-2 8"/>',
      "programming source",
    ],
    ["terminal", '<path d="m4 7 5 5-5 5M12 17h8"/>', "command console"],
    [
      "terminal-square",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m7 8 4 4-4 4M13 16h4"/>',
      "command console",
    ],
    [
      "bug",
      '<rect x="8" y="7" width="8" height="13" rx="4"/><path d="M9 7a3 3 0 0 1 6 0M3 13h5M16 13h5M4 7l4 3M20 7l-4 3M4 19l4-3M20 19l-4-3"/>',
      "insect debug",
    ],
    [
      "git-branch",
      '<circle cx="6" cy="5" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M18 8a8 8 0 0 1-8 8"/>',
      "version control",
    ],
    [
      "git-commit",
      '<circle cx="12" cy="12" r="3"/><path d="M3 12h6M15 12h6"/>',
      "version control",
    ],
    [
      "git-merge",
      '<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><circle cx="6" cy="19" r="2"/><path d="M6 7v10M8 7c6 0 4 10 10 10"/>',
      "version control",
    ],
    [
      "git-pull-request",
      '<circle cx="6" cy="5" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 7v12M13 5h5v12M13 5l3-3M13 5l3 3"/>',
      "review code",
    ],
    [
      "binary",
      '<rect x="3" y="3" width="5" height="8" rx="2"/><rect x="16" y="13" width="5" height="8" rx="2"/><path d="M14 3h3v8h-3M14 3v8M5 13h3v8H5ZM5 21h3"/>',
      "zero one data",
    ],
    [
      "braces",
      '<path d="M8 3H7a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h1M16 3h1a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-1"/>',
      "code syntax",
    ],
    ["brackets", '<path d="M8 3H4v18h4M16 3h4v18h-4"/>', "code syntax"],
    [
      "regex",
      '<path d="M8 4v8M4 6l8 4M4 10l8-4M16 14h5M16 18h5"/><circle cx="7" cy="18" r="2"/>',
      "expression pattern",
    ],
    [
      "api",
      '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="m7 14 2-5 2 5M7.5 12h3M14 9v5M17 9h2a2 2 0 0 1 0 4h-2"/>',
      "interface integration",
    ],
    [
      "webhook",
      '<circle cx="12" cy="6" r="3"/><circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M12 3a6 6 0 0 1 5 9M6 14a6 6 0 0 1 3-10M9 17h6"/>',
      "integration event",
    ],
    [
      "plugin",
      '<path d="M9 2v4M15 2v4M6 6h12v5a6 6 0 0 1-12 0ZM12 17v5"/>',
      "extension connect",
    ],
    [
      "package-open",
      '<path d="m12 3 9 5-9 5-9-5ZM3 8v9l9 4 9-4V8M12 13v8M7 5l9 5M3 12l5 3M21 12l-5 3"/>',
      "box module",
    ],
    [
      "bot",
      '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4M9 12h.01M15 12h.01M9 16h6M2 11v5M22 11v5"/><circle cx="12" cy="3" r="1"/>',
      "robot ai",
    ],
    [
      "sparkles",
      '<path d="m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2ZM19 15l1 3 3 1-3 1-1 3-1-3-3-1 3-1ZM5 2l.7 2.3L8 5l-2.3.7L5 8l-.7-2.3L2 5l2.3-.7Z"/>',
      "ai magic",
    ],
    [
      "brain-circuit",
      '<path d="M9.5 4A3 3 0 0 0 4 5.5 3.5 3.5 0 0 0 3 12a4 4 0 0 0 2 6 3 3 0 0 0 5 2V4ZM14.5 4A3 3 0 0 1 20 5.5 3.5 3.5 0 0 1 21 12a4 4 0 0 1-2 6 3 3 0 0 1-5 2V4Z"/><path d="M7 9h2M15 9h2M7 15h2M15 15h2M12 8v8"/>',
      "ai neural",
    ],
  ],
  Audio: [
    [
      "audio-lines",
      '<path d="M3 10v4M7 7v10M11 3v18M15 6v12M19 9v6M23 11v2"/>',
      "sound waveform",
    ],
    [
      "audio-waveform",
      '<path d="M2 12h2l2-7 3 14 3-11 3 8 2-4h5"/>',
      "sound frequency",
    ],
    [
      "equalizer",
      '<path d="M4 4v16M10 4v16M16 4v16M22 4v16M1 9h6M7 15h6M13 7h6M19 13h6"/>',
      "sound mixer",
    ],
    [
      "equalizer-bars",
      '<path d="M4 20v-6M9 20V8M14 20V4M19 20v-9"/>',
      "levels audio",
    ],
    [
      "soundwave",
      '<circle cx="12" cy="12" r="2"/><path d="M8 8a6 6 0 0 0 0 8M16 8a6 6 0 0 1 0 8M4 4a12 12 0 0 0 0 16M20 4a12 12 0 0 1 0 16"/>',
      "audio signal",
    ],
    [
      "playlist",
      '<path d="M3 6h11M3 11h11M3 16h7M17 15V5l4-1v9"/><circle cx="15" cy="16" r="2"/><circle cx="19" cy="14" r="2"/>',
      "music songs",
    ],
    [
      "album",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
      "music record",
    ],
    [
      "disc",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M7 5a8 8 0 0 1 5-1M17 19a8 8 0 0 1-5 1"/>',
      "cd music",
    ],
    [
      "disc-3",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3a9 9 0 0 1 9 9M3 12a9 9 0 0 0 9 9"/>',
      "cd spinning",
    ],
    [
      "mic-2",
      '<rect x="8" y="2" width="8" height="13" rx="4"/><path d="M4 11a8 8 0 0 0 16 0M12 19v3M7 6h2M15 6h2M7 10h2M15 10h2"/>',
      "studio microphone",
    ],
    [
      "podcast",
      '<circle cx="12" cy="9" r="3"/><path d="M8 20a6 6 0 0 1 8 0M5 5a10 10 0 0 0 0 8M19 5a10 10 0 0 1 0 8M8 8a5 5 0 0 0 0 2M16 8a5 5 0 0 1 0 2"/>',
      "broadcast audio",
    ],
    [
      "speaker",
      '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="14" r="4"/><circle cx="12" cy="6" r="1"/>',
      "audio monitor",
    ],
    [
      "speaker-off",
      '<path d="m2 2 20 20M9 2h10v13M5 6v16h14v-4M9 14a4 4 0 0 0 5 4M12 6h.01"/>',
      "audio mute",
    ],
    [
      "audio-file",
      '<path d="M14 2H5v20h14V8ZM14 2v6h6M12 17v-5l4-1v5"/><circle cx="10" cy="17" r="2"/><circle cx="14" cy="16" r="2"/>',
      "music document",
    ],
    [
      "drum",
      '<ellipse cx="12" cy="7" rx="8" ry="3"/><path d="M4 7v9c0 2 4 4 8 4s8-2 8-4V7M4 15l16-8M4 7l16 8M3 3l6 5M21 3l-6 5"/>',
      "instrument percussion",
    ],
    [
      "guitar",
      '<path d="m14 10 7-7M18 3l3 3M14 10l-3 3M9 9a4 4 0 0 0-5 5 4 4 0 0 0 5 7c5 0 8-5 5-8l-2-2Z"/><circle cx="10" cy="15" r="1"/>',
      "instrument music",
    ],
    [
      "piano",
      '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M7 4v10M11 4v10M15 4v10M19 4v10M3 14h18M5 4v7M9 4v7M13 4v7M17 4v7"/>',
      "instrument keys",
    ],
    [
      "violin",
      '<path d="m14 4 6 6M16 2l6 6M13 9l2 2M10 12a4 4 0 0 0-5 5 4 4 0 0 0 5 4c5-2 5-6 3-8ZM4 4l12 12"/>',
      "instrument strings",
    ],
    [
      "trumpet",
      '<path d="M3 10h12a6 6 0 0 1 6-4v12a6 6 0 0 1-6-4H3ZM7 10V7M11 10V7M15 10V7M3 8v4"/>',
      "instrument brass",
    ],
    [
      "tuning-fork",
      '<path d="M8 3v7a4 4 0 0 0 8 0V3M12 14v8M9 22h6"/>',
      "pitch music",
    ],
  ],
  Video: [
    [
      "clapperboard",
      '<path d="M3 9h18v12H3ZM3 9l2-6 16 2-1 4M7 4l3 5M12 5l3 4M17 5l3 4"/>',
      "movie production",
    ],
    [
      "clapperboard-open",
      '<path d="M3 11h18v10H3ZM3 11 1 5l16-3 2 5M5 4l4 5M10 3l4 5M15 2l4 5"/>',
      "movie action",
    ],
    [
      "video-camera",
      '<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3M7 6l1-3h5l1 3"/>',
      "recording cinema",
    ],
    [
      "webcam",
      '<circle cx="12" cy="10" r="7"/><circle cx="12" cy="10" r="3"/><path d="M8 17l-1 4h10l-1-4"/>',
      "camera streaming",
    ],
    [
      "monitor-play",
      '<rect x="2" y="3" width="20" height="14" rx="2"/><path d="m10 7 5 3-5 3ZM8 21h8M12 17v4"/>',
      "video screen",
    ],
    [
      "tv",
      '<rect x="2" y="6" width="20" height="14" rx="2"/><path d="m8 2 4 4 4-4"/>',
      "television screen",
    ],
    [
      "tv-play",
      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m10 8 6 4-6 4Z"/>',
      "television video",
    ],
    [
      "projector",
      '<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="15" cy="12" r="3"/><path d="M6 11h4M6 14h3M5 17v3M19 17v3"/>',
      "cinema presentation",
    ],
    [
      "cinema",
      '<path d="M3 21V8h18v13M2 21h20M7 8V3h10v5M7 13h2M15 13h2M9 21v-4h6v4"/>',
      "theater movies",
    ],
    [
      "subtitles",
      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M5 14h6M14 14h5M5 17h3M11 17h8"/>',
      "captions video",
    ],
    [
      "closed-caption",
      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 10a3 3 0 1 0 0 4M20 10a3 3 0 1 0 0 4"/>',
      "cc accessibility",
    ],
    [
      "timeline",
      '<path d="M3 6h18M3 12h18M3 18h18"/><rect x="6" y="4" width="6" height="4" rx="1"/><rect x="12" y="10" width="8" height="4" rx="1"/><rect x="4" y="16" width="9" height="4" rx="1"/>',
      "editing sequence",
    ],
    [
      "video-trim",
      '<path d="M4 3v18M20 3v18M8 7h8v10H8ZM4 9h4M16 9h4M4 15h4M16 15h4"/>',
      "edit cut",
    ],
    [
      "transition",
      '<rect x="2" y="5" width="12" height="14" rx="2"/><rect x="10" y="5" width="12" height="14" rx="2"/><path d="M8 9v6M16 9v6"/>',
      "video effect",
    ],
    [
      "slow-motion",
      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M3 4l3 1M2 9l3 .5M3 20l3-1"/>',
      "speed video",
    ],
    [
      "frame",
      '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 8h8v8H8Z"/>',
      "video canvas",
    ],
    [
      "record",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/>',
      "rec capture",
    ],
    [
      "live",
      '<circle cx="12" cy="12" r="2"/><path d="M8 8a6 6 0 0 0 0 8M16 8a6 6 0 0 1 0 8M4 4a12 12 0 0 0 0 16M20 4a12 12 0 0 1 0 16M2 12h2M20 12h2"/>',
      "broadcast streaming",
    ],
    [
      "broadcast",
      '<path d="M12 14v8M8 22h8M7 7a7 7 0 0 0 0 10M17 7a7 7 0 0 1 0 10M3 3a13 13 0 0 0 0 18M21 3a13 13 0 0 1 0 18"/><circle cx="12" cy="12" r="2"/>',
      "live signal",
    ],
    [
      "stream",
      '<path d="M4 5h16v12H4ZM8 21h8M12 17v4"/><path d="m10 8 5 3-5 3ZM2 8v8M22 8v8"/>',
      "live video",
    ],
  ],
  Photography: [
    [
      "camera-retro",
      '<rect x="2" y="5" width="20" height="15" rx="2"/><path d="M6 5V2h7v3M2 10h20"/><circle cx="12" cy="14" r="4"/><path d="M18 7h.01"/>',
      "vintage photo",
    ],
    [
      "camera-lens",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><path d="m5 5 4 4M19 5l-4 4M5 19l4-4M19 19l-4-4"/>',
      "photography optics",
    ],
    [
      "lens",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><path d="M12 6v12M6.8 9l10.4 6M6.8 15 17.2 9"/>',
      "aperture optics",
    ],
    [
      "aperture",
      '<circle cx="12" cy="12" r="9"/><path d="m14 3 3 6M21 9l-6 3M19 19l-6-3M10 21l-3-6M3 15l6-3M5 5l6 3M9 9l6 3-3 6-6-3Z"/>',
      "camera shutter",
    ],
    [
      "focus",
      '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5"/><circle cx="12" cy="12" r="3"/>',
      "camera target",
    ],
    [
      "focus-frame",
      '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 12h8M12 8v8"/>',
      "camera autofocus",
    ],
    [
      "shutter",
      '<circle cx="12" cy="12" r="9"/><path d="M12 3v6l5-3M21 12h-6l3 5M12 21v-6l-5 3M3 12h6l-3-5"/>',
      "camera exposure",
    ],
    ["flash", '<path d="m13 2-9 12h7l-1 8 9-12h-7Z"/>', "lightning camera"],
    [
      "flash-off",
      '<path d="m2 2 20 20M13 2 4 14h6M11 22l3-4M15 10h4l-3 4"/>',
      "camera lightning",
    ],
    [
      "tripod",
      '<path d="M9 3h6v4H9ZM12 7v5M12 12 5 22M12 12l7 10M12 12v10M8 5H5v3"/>',
      "camera stand",
    ],
    [
      "photo",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m3 17 5-5 4 4 3-3 6 6"/>',
      "picture image",
    ],
    [
      "photo-stack",
      '<rect x="5" y="5" width="16" height="16" rx="2"/><path d="M5 8H3V3h5M9 16l3-3 3 3 2-2 4 4"/><circle cx="10" cy="10" r="1"/>',
      "gallery pictures",
    ],
    [
      "panorama",
      '<path d="M2 6c7-3 13-3 20 0v12c-7-3-13-3-20 0ZM2 15l5-5 4 4 4-5 7 6"/><circle cx="16" cy="7" r="1"/>',
      "wide photo",
    ],
    [
      "portrait",
      '<rect x="5" y="2" width="14" height="20" rx="2"/><circle cx="12" cy="9" r="3"/><path d="M7 19a5 5 0 0 1 10 0"/>',
      "photo person",
    ],
    [
      "landscape",
      '<rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="17" cy="9" r="2"/><path d="m2 17 6-7 5 5 3-3 6 6"/>',
      "photo nature",
    ],
    [
      "exposure",
      '<circle cx="12" cy="12" r="9"/><path d="M8 8h8M8 12h8M8 16h8M12 8v8"/>',
      "camera light",
    ],
    [
      "iso",
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M6 9v6M10 9h3v6h-3ZM16 9c3-1 3 4 0 3 3-1 3 4 0 3"/>',
      "camera sensitivity",
    ],
    [
      "white-balance",
      '<circle cx="12" cy="12" r="9"/><path d="M12 3v18M12 7a5 5 0 0 1 0 10M7 7h.01M7 17h.01"/>',
      "camera color",
    ],
    [
      "light-meter",
      '<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M8 6h8M8 10h8M9 18l3-4 3 4M12 14v5"/>',
      "exposure camera",
    ],
    [
      "photo-filter",
      '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/><path d="m8 3 8 8M12 3l8 8"/>',
      "picture effect",
    ],
  ],
  Apps: [
    [
      "app-window",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 8h18M7 5.5h.01M10 5.5h.01M13 5.5h.01"/>',
      "application software",
    ],
    [
      "app-window-mac",
      '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 8h18"/><circle cx="6.5" cy="5.5" r=".5"/><circle cx="9" cy="5.5" r=".5"/><circle cx="11.5" cy="5.5" r=".5"/>',
      "application macos",
    ],
    [
      "app-grid",
      '<rect x="3" y="3" width="5" height="5" rx="1"/><rect x="10" y="3" width="5" height="5" rx="1"/><rect x="17" y="3" width="4" height="5" rx="1"/><rect x="3" y="10" width="5" height="5" rx="1"/><rect x="10" y="10" width="5" height="5" rx="1"/><rect x="17" y="10" width="4" height="5" rx="1"/><rect x="3" y="17" width="5" height="4" rx="1"/><rect x="10" y="17" width="5" height="4" rx="1"/><rect x="17" y="17" width="4" height="4" rx="1"/>',
      "applications launcher",
    ],
    [
      "browser",
      '<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M2 8h20M5 5.5h.01M8 5.5h.01M11 5.5h9"/>',
      "website internet",
    ],
    [
      "browser-tabs",
      '<path d="M3 7h18v14H3ZM5 7V3h7l2 4M12 3h7l2 4"/>',
      "website windows",
    ],
    [
      "window",
      '<rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M8 4v5"/>',
      "application desktop",
    ],
    [
      "window-split",
      '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M12 4v16M2 9h20"/>',
      "application layout",
    ],
    [
      "extension",
      '<path d="M9 3h6v4h4v6h-4v8H9v-4H3V9h6Z"/><path d="M15 13a3 3 0 1 0 6 0v4h-6"/>',
      "addon plugin",
    ],
    [
      "puzzle",
      '<path d="M19 13h3v8h-8v-3a3 3 0 1 0-4 0v3H2v-8h3a3 3 0 1 1 0-4H2V2h8v3a3 3 0 1 0 4 0V2h8v7h-3a2 2 0 1 0 0 4Z"/>',
      "addon game",
    ],
    [
      "calculator",
      '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M7 5h10v4H7ZM8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01"/>',
      "math app",
    ],
    [
      "calendar",
      '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
      "date schedule",
    ],
    [
      "clock",
      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
      "time schedule",
    ],
    [
      "notes",
      '<path d="M5 3h14v18H5ZM9 3v18M12 8h4M12 12h4M12 16h3"/>',
      "notebook app",
    ],
    [
      "messenger",
      '<path d="M12 2a10 10 0 0 0-9 15l-1 5 5-2a10 10 0 1 0 5-18Z"/><path d="m6 13 4-4 3 3 5-5"/>',
      "chat app",
    ],
    [
      "maps-app",
      '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 18 4-12 4 12M9.5 14h5"/>',
      "navigation app",
    ],
    [
      "camera-app",
      '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="5"/><path d="M17 7h.01"/>',
      "photo application",
    ],
    [
      "music-app",
      '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M10 16V8l7-2v8"/><circle cx="8" cy="16" r="2"/><circle cx="15" cy="14" r="2"/>',
      "audio application",
    ],
    [
      "store-app",
      '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M7 9h10l1 9H6ZM9 10V8a3 3 0 0 1 6 0v2"/>',
      "shopping application",
    ],
    [
      "settings-app",
      '<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M12 6v2M12 16v2M6 12h2M16 12h2M7.8 7.8l1.4 1.4M14.8 14.8l1.4 1.4M7.8 16.2l1.4-1.4M14.8 9.2l1.4-1.4"/>',
      "preferences application",
    ],
    [
      "phone-app",
      '<rect x="5" y="2" width="14" height="20" rx="3"/><path d="M9 5h6M10 18h4"/><circle cx="12" cy="12" r="3"/>',
      "mobile application",
    ],
  ],
  Social: [
    [
      "thumbs-up",
      '<path d="M7 10v11H3V10ZM7 19h10a3 3 0 0 0 3-2l2-7a2 2 0 0 0-2-2h-6l1-5a2 2 0 0 0-3-2l-5 9"/>',
      "like approve",
    ],
    [
      "thumbs-down",
      '<path d="M7 14V3H3v11ZM7 5h10a3 3 0 0 1 3 2l2 7a2 2 0 0 1-2 2h-6l1 5a2 2 0 0 1-3 2l-5-9"/>',
      "dislike",
    ],
    [
      "share-2",
      '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><path d="m10.5 7.5-4 8M13.5 7.5l4 8M8 19h8"/>',
      "network social",
    ],
    [
      "repost",
      '<path d="M4 9V7a3 3 0 0 1 3-3h13M17 1l3 3-3 3M20 15v2a3 3 0 0 1-3 3H4M7 23l-3-3 3-3"/>',
      "share repeat",
    ],
    [
      "hashtag",
      '<path d="M5 9h14M4 15h14M10 3 8 21M16 3l-2 18"/>',
      "social tag",
    ],
    [
      "mention",
      '<circle cx="12" cy="12" r="3"/><path d="M15 12v2a3 3 0 0 0 6 0v-2a9 9 0 1 0-3 7"/>',
      "social at",
    ],
    [
      "heart-handshake",
      '<path d="m12 7 2-2a4 4 0 0 1 6 5l-8 9-8-9a4 4 0 0 1 6-5ZM3 11l4 4M21 11l-4 4M8 17l3 3M16 17l-3 3"/>',
      "care community",
    ],
    [
      "handshake",
      '<path d="m2 7 5-2 5 4 5-4 5 2-3 10-5 4-3-2-2 2-5-4ZM7 5l5-2 5 2M9 15l3 2 3-2"/>',
      "agreement community",
    ],
    [
      "user-heart",
      '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 12-5M16 13l1-1a3 3 0 0 1 5 3l-6 6-4-4a3 3 0 0 1 4-4Z"/>',
      "favorite person",
    ],
    [
      "users-round",
      '<circle cx="9" cy="8" r="4"/><path d="M1 21a8 8 0 0 1 16 0M16 4a4 4 0 0 1 0 8M19 14a7 7 0 0 1 4 7"/>',
      "community team",
    ],
    [
      "chat-heart",
      '<path d="M21 11a9 9 0 0 1-13 8l-5 2 2-5A9 9 0 1 1 21 11Z"/><path d="m12 8 1-1a2.5 2.5 0 0 1 4 3l-5 5-5-5a2.5 2.5 0 0 1 4-3Z"/>',
      "love message",
    ],
    [
      "notification",
      '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/><circle cx="19" cy="4" r="3"/>',
      "social alert",
    ],
    ["activity", '<path d="M3 12h4l3-8 4 16 3-8h4"/>', "pulse social"],
    ["trending-up", '<path d="m3 17 6-6 4 4 8-9M15 6h6v6"/>', "growth popular"],
    [
      "flame",
      '<path d="M12 22c4 0 7-3 7-7 0-5-5-7-4-13-4 2-5 6-5 9-1-1-2-2-2-4-2 2-3 5-3 8 0 4 3 7 7 7Z"/><path d="M9 18a3 3 0 0 0 6 0c0-2-2-3-3-5-1 2-3 3-3 5Z"/>',
      "popular hot",
    ],
    [
      "globe-2",
      '<circle cx="12" cy="12" r="9"/><path d="M3 9h18M3 15h18M12 3v18M8 4a12 12 0 0 0 0 16M16 4a12 12 0 0 1 0 16"/>',
      "social world",
    ],
    [
      "verified",
      '<path d="m12 2 2.4 2 3.1-.4 1.1 3 2.8 1.4-1.4 2.8L21.4 14l-3 1.1-1.1 3-3.1-.4-2.2 2-2.4-2-3.1.4-1.1-3L2.6 14 4 11.2 2.6 8.4l3-1.1 1.1-3 3.1.4Z"/><path d="m8 12 3 3 5-6"/>',
      "badge authentic",
    ],
    [
      "badge-check",
      '<circle cx="12" cy="12" r="9"/><path d="m7 12 3 3 7-7"/>',
      "verified approved",
    ],
    [
      "influencer",
      '<circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0M2 7l3 1M22 7l-3 1M4 3l2 2M20 3l-2 2"/>',
      "creator social",
    ],
    [
      "social-profile",
      '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="9" r="3"/><path d="M6 18a6 6 0 0 1 12 0M7 5h.01M17 5h.01"/>',
      "account social",
    ],
  ],
  Gaming: [
    [
      "gamepad",
      '<path d="M6 6h12a5 5 0 0 1 5 8l-2 5a3 3 0 0 1-5 0l-1-2h-6l-1 2a3 3 0 0 1-5 0l-2-5A5 5 0 0 1 6 6Z"/><path d="M7 10v4M5 12h4M16 11h.01M19 14h.01"/>',
      "controller play",
    ],
    [
      "gamepad-2",
      '<path d="M7 7h10a5 5 0 0 1 5 5v4a3 3 0 0 1-5 2l-2-2H9l-2 2a3 3 0 0 1-5-2v-4a5 5 0 0 1 5-5Z"/><path d="M7 10v4M5 12h4"/><circle cx="16" cy="11" r="1"/><circle cx="19" cy="14" r="1"/>',
      "controller gaming",
    ],
    [
      "joystick",
      '<path d="M12 13V6"/><circle cx="12" cy="4" r="2"/><path d="M5 13h14v5H5ZM2 21h20M8 16h.01M16 16h.01"/>',
      "arcade controller",
    ],
    [
      "arcade",
      '<path d="M6 3h12v4l3 4v10H3V11l3-4ZM3 12h18"/><circle cx="9" cy="9" r="1"/><path d="M9 10v3M15 14h.01M18 14h.01M7 21v-4h10v4"/>',
      "game machine",
    ],
    [
      "dices",
      '<rect x="2" y="8" width="12" height="12" rx="2" transform="rotate(-15 8 14)"/><rect x="11" y="3" width="11" height="11" rx="2" transform="rotate(15 16.5 8.5)"/><path d="M6 12h.01M10 16h.01M15 7h.01M19 10h.01"/>',
      "dice games",
    ],
    [
      "dice-5",
      '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 8h.01M16 8h.01M12 12h.01M8 16h.01M16 16h.01"/>',
      "game random",
    ],
    [
      "puzzle-piece",
      '<path d="M8 2h8v4h4v6h-4v10H8v-4H2V10h4V2h2ZM16 12a3 3 0 1 0 6 0"/>',
      "game solution",
    ],
    [
      "chess-knight",
      '<path d="M5 21h14M7 21v-4c0-5 5-5 5-10L8 9 5 5l7-3c6 2 8 7 6 15v4M9 6h.01"/>',
      "strategy game",
    ],
    [
      "chess-rook",
      '<path d="M5 3h3v3h3V3h3v3h3V3h3v6l-3 3 1 6H6l1-6-2-3ZM5 21h14M7 18v3M17 18v3"/>',
      "strategy game",
    ],
    [
      "target-2",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
      "aim game",
    ],
    [
      "trophy",
      '<path d="M7 3h10v6a5 5 0 0 1-10 0ZM7 5H3v2a4 4 0 0 0 4 4M17 5h4v2a4 4 0 0 1-4 4M12 14v4M8 21h8M9 18h6"/>',
      "winner game",
    ],
    [
      "medal",
      '<circle cx="12" cy="15" r="6"/><path d="m7 3 3 6M17 3l-3 6M7 3h4l1 4 1-4h4M12 12l1 2 2 .3-1.5 1.5.4 2.2-1.9-1-1.9 1 .4-2.2L9 14.3l2-.3Z"/>',
      "winner award",
    ],
    [
      "sword",
      '<path d="m14 4 6-2-2 6L8 18l-4-4ZM6 14l4 4M4 16l4 4M3 21l3-3"/>',
      "weapon game",
    ],
    [
      "swords",
      '<path d="m3 3 7 2 5 7M3 3l2 7 7 5M21 3l-7 2-5 7M21 3l-2 7-7 5M5 15l4 4M15 15l4 4M3 21l4-4M21 21l-4-4"/>',
      "battle game",
    ],
    [
      "wand",
      '<path d="m15 4 5 5L6 23l-5-5ZM13 6l5 5M6 2v3M2 6h3M20 16v4M18 18h4"/>',
      "magic game",
    ],
    [
      "ghost",
      '<path d="M5 21V10a7 7 0 0 1 14 0v11l-3-2-2 2-2-2-2 2-2-2ZM9 10h.01M15 10h.01"/>',
      "game character",
    ],
    [
      "alien",
      '<path d="M12 2C6 2 3 7 3 12c0 7 5 10 9 10s9-3 9-10c0-5-3-10-9-10Z"/><path d="M7 10c2 0 3 4 1 5-2 0-3-4-1-5ZM17 10c-2 0-3 4-1 5 2 0 3-4 1-5Z"/>',
      "space game",
    ],
    [
      "vr-headset",
      '<path d="M3 7h18v10l-5 2-4-4-4 4-5-2ZM3 10H1v5h2M21 10h2v5h-2"/>',
      "virtual reality",
    ],
    [
      "controller-off",
      '<path d="m2 2 20 20M8 6h10a5 5 0 0 1 5 8l-1 3M7 7a5 5 0 0 0-6 7l2 5a3 3 0 0 0 5 0l1-2h6M5 12h4M16 11h.01"/>',
      "gamepad disabled",
    ],
    [
      "gaming-keyboard",
      '<rect x="2" y="6" width="20" height="13" rx="2"/><path d="M5 10h2M9 10h2M13 10h2M17 10h2M5 14h2M9 14h2M13 14h2M17 14h2M8 17h8M4 3l2 3M20 3l-2 3"/>',
      "esports keyboard",
    ],
  ],
  Security: [
    [
      "shield-alert",
      '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="M12 7v5M12 16h.01"/>',
      "security warning",
    ],
    [
      "shield-off",
      '<path d="m2 2 20 20M20 11V5l-8-3-4 1.5M4 6v5c0 7 8 11 8 11s3-1.5 5-4"/>',
      "security disabled",
    ],
    [
      "shield-lock",
      '<path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><rect x="8" y="10" width="8" height="7" rx="1"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/>',
      "security privacy",
    ],
    [
      "lock-keyhole",
      '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4"/><circle cx="12" cy="15" r="2"/><path d="M12 17v2"/>',
      "password secure",
    ],
    [
      "lock-open",
      '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 7-3M12 14v3"/>',
      "security unlocked",
    ],
    [
      "password",
      '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m7 10 3 4M10 10l-3 4M14 10l3 4M17 10l-3 4"/>',
      "pin security",
    ],
    [
      "passkey",
      '<circle cx="7" cy="12" r="4"/><path d="M11 12h10M17 12v3M20 12v2M5 12h.01"/>',
      "security authentication",
    ],
    [
      "scan-face",
      '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M8 10h.01M16 10h.01M9 15a4 4 0 0 0 6 0"/>',
      "face biometric",
    ],
    [
      "face-id",
      '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M8 9h.01M16 9h.01M9 15a4 4 0 0 0 6 0M12 9v3"/>',
      "biometric security",
    ],
    [
      "scan-eye",
      '<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5M7 12s2-3 5-3 5 3 5 3-2 3-5 3-5-3-5-3Z"/><circle cx="12" cy="12" r="1"/>',
      "biometric retina",
    ],
    [
      "security-camera",
      '<path d="M3 5h14v8H3ZM17 7l4-2v8l-4-2M8 13v4M5 17h6"/>',
      "surveillance cctv",
    ],
    [
      "alarm",
      '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M5 3 2 6M19 3l3 3M7 3h10"/>',
      "security alert",
    ],
    [
      "siren",
      '<path d="M6 17v-6a6 6 0 0 1 12 0v6ZM3 17h18v4H3ZM12 2V0M3 5 1 3M21 5l2-2M2 11H0M24 11h-2"/>',
      "emergency alert",
    ],
    [
      "firewall",
      '<path d="M3 4h18v16H3ZM3 9h18M3 14h18M8 4v5M16 4v5M5 9v5M13 9v5M8 14v6M16 14v6"/>',
      "network security",
    ],
    [
      "virus",
      '<circle cx="12" cy="12" r="5"/><path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3 3M16 16l3 3M5 19l3-3M16 8l3-3M10 11h.01M14 14h.01"/>',
      "malware threat",
    ],
    [
      "bug-off",
      '<path d="m2 2 20 20M8 10v5a4 4 0 0 0 6 3M16 13v-2M9 7a3 3 0 0 1 6 0M3 13h5M4 7l4 3M20 7l-4 3M4 19l4-3"/>',
      "malware disabled",
    ],
    [
      "incognito",
      '<path d="M4 10h16M6 10l3-7h6l3 7M8 3h8"/><circle cx="7" cy="16" r="4"/><circle cx="17" cy="16" r="4"/><path d="M11 16h2"/>',
      "private anonymous",
    ],
    [
      "safe",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><rect x="6" y="6" width="12" height="12" rx="1"/><circle cx="12" cy="12" r="3"/><path d="M12 9V7M12 17v-2M9 12H7M17 12h-2M5 21v1M19 21v1"/>',
      "security vault",
    ],
    [
      "encryption",
      '<path d="M12 2v20M5 5l14 14M5 19 19 5M3 12h18"/><circle cx="12" cy="12" r="4"/>',
      "data security",
    ],
    [
      "certificate",
      '<rect x="3" y="3" width="18" height="14" rx="1"/><circle cx="12" cy="10" r="3"/><path d="m10 13-1 8 3-2 3 2-1-8M6 6h3M15 6h3"/>',
      "security ssl",
    ],
  ],
  Data: [
    [
      "chart-bar",
      '<path d="M3 3v18h18M7 16V9M12 16V5M17 16v-4"/>',
      "analytics graph",
    ],
    [
      "chart-column",
      '<path d="M3 3v18h18M7 17V7M12 17v-6M17 17V4"/>',
      "analytics statistics",
    ],
    [
      "chart-line",
      '<path d="M3 3v18h18M6 15l4-5 4 2 5-7"/>',
      "analytics graph",
    ],
    [
      "chart-pie",
      '<path d="M11 3a9 9 0 1 0 9 9h-9ZM13 2v7h7a8 8 0 0 0-7-7Z"/>',
      "analytics statistics",
    ],
    [
      "chart-area",
      '<path d="M3 3v18h18M3 17l5-6 4 3 5-8 4 5v9H3Z"/>',
      "analytics graph",
    ],
    [
      "chart-scatter",
      '<path d="M3 3v18h18M7 15h.01M10 9h.01M14 13h.01M17 7h.01M19 16h.01"/>',
      "analytics points",
    ],
    [
      "analytics",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 16v-3M11 16V8M15 16v-5M19 16V6"/>',
      "metrics dashboard",
    ],
    [
      "presentation",
      '<path d="M2 3h20v13H2ZM12 16v5M8 21l4-5 4 5M7 12V8M12 12V6M17 12v-2"/>',
      "chart slides",
    ],
    [
      "table",
      '<rect x="3" y="3" width="18" height="18"/><path d="M3 9h18M3 15h18M9 3v18"/>',
      "data spreadsheet",
    ],
    [
      "table-properties",
      '<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 9v12M15 9v12M9 15h12"/>',
      "data columns",
    ],
    [
      "kanban",
      '<rect x="3" y="3" width="5" height="18" rx="1"/><rect x="10" y="3" width="5" height="12" rx="1"/><rect x="17" y="3" width="4" height="15" rx="1"/>',
      "board project",
    ],
    [
      "flow-chart",
      '<rect x="3" y="3" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><path d="M6 8v4h12v4M6 12v4"/>',
      "process diagram",
    ],
    [
      "network",
      '<circle cx="12" cy="5" r="3"/><circle cx="5" cy="19" r="3"/><circle cx="19" cy="19" r="3"/><circle cx="12" cy="13" r="2"/><path d="m10.5 7.5-4 8M13.5 7.5l4 8M8 19h8M12 8v3"/>',
      "nodes connection",
    ],
    [
      "workflow",
      '<rect x="2" y="3" width="7" height="6" rx="1"/><rect x="15" y="15" width="7" height="6" rx="1"/><path d="M9 6h6a4 4 0 0 1 0 8h-3M12 12l-3 3 3 3"/>',
      "automation process",
    ],
    [
      "folder-tree",
      '<path d="M3 4h6l2 3h5v5H3ZM7 16h5M7 12v8M12 16v4"/><rect x="12" y="19" width="8" height="3"/>',
      "directory structure",
    ],
    [
      "file-json",
      '<path d="M14 2H5v20h14V8ZM14 2v6h6M10 11H9v6h1M15 11h1v6h-1M12 12v2"/>',
      "data code",
    ],
    [
      "file-code",
      '<path d="M14 2H5v20h14V8ZM14 2v6h6M10 11l-2 3 2 3M15 11l2 3-2 3"/>',
      "source document",
    ],
    [
      "spreadsheet",
      '<path d="M14 2H5v20h14V8ZM14 2v6h6M8 12h8M8 16h8M11 12v7M8 19h8"/>',
      "excel data",
    ],
    [
      "data-filter",
      '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1 1 2 3 2M20 5v6c0 1-1 2-3 2M4 11v5c0 2 4 3 6 3M15 14l6 7M21 14l-6 7"/>',
      "database query",
    ],
    [
      "cloud-sync",
      '<path d="M17 15a4 4 0 0 0 1-7.5A7 7 0 0 0 4 10M4 16v5h5M20 13V8h-5M6 20a6 6 0 0 0 12-2M18 9a6 6 0 0 0-12 2"/>',
      "backup synchronize",
    ],
  ],
  "Smart Home": [
    [
      "home-wifi",
      '<path d="m3 11 9-8 9 8M5 10v10h14V10M9 15a4 4 0 0 1 6 0M7 13a7 7 0 0 1 10 0M12 18h.01"/>',
      "connected house",
    ],
    [
      "smart-lock",
      '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4M12 14v3M18 3a6 6 0 0 1 2 4"/>',
      "door security",
    ],
    [
      "doorbell",
      '<rect x="6" y="2" width="12" height="20" rx="4"/><circle cx="12" cy="14" r="3"/><path d="M10 6h4M12 11v3"/>',
      "smart camera",
    ],
    [
      "lightbulb",
      '<path d="M9 18h6M10 22h4M8 14a6 6 0 1 1 8 0l-1 4H9Z"/><path d="M12 2V0M3 6 1 4M21 6l2-2"/>',
      "smart light",
    ],
    [
      "lightbulb-off",
      '<path d="m2 2 20 20M9 18h6M10 22h4M8 14a6 6 0 0 1 8-8M16 12l-1 6H9"/>',
      "smart light disabled",
    ],
    ["lamp", '<path d="m8 3-5 9h18l-5-9ZM12 12v8M7 21h10"/>', "light home"],
    [
      "thermostat",
      '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2M12 3v2M21 12h-2M12 21v-2M3 12h2"/>',
      "temperature smart",
    ],
    [
      "air-conditioner",
      '<rect x="2" y="4" width="20" height="8" rx="2"/><path d="M6 9h12M7 15c-2 2 2 3 0 5M12 15c-2 2 2 3 0 5M17 15c-2 2 2 3 0 5"/>',
      "cooling climate",
    ],
    [
      "fan",
      '<circle cx="12" cy="12" r="2"/><path d="M12 10C8 8 8 2 12 2s5 6 2 8M14 12c2-4 8-4 8 0s-6 5-8 2M12 14c4 2 4 8 0 8s-5-6-2-8M10 12c-2 4-8 4-8 0s6-5 8-2M8 22h8"/>',
      "cooling air",
    ],
    [
      "heater",
      '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 7v8M12 7v8M17 7v8M6 18v3M18 18v3"/>',
      "heating home",
    ],
    [
      "smart-plug",
      '<path d="M8 2v5M16 2v5M5 7h14v5a7 7 0 0 1-14 0ZM12 19v3M18 10h.01"/>',
      "connected power",
    ],
    [
      "power-plug",
      '<path d="M8 2v6M16 2v6M6 8h12v4a6 6 0 0 1-12 0ZM12 18v4M9 22h6"/>',
      "electricity outlet",
    ],
    [
      "outlet",
      '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="6"/><path d="M10 10v3M14 10v3M12 16h.01"/>',
      "electric socket",
    ],
    [
      "robot-vacuum",
      '<circle cx="12" cy="13" r="8"/><circle cx="12" cy="13" r="3"/><path d="M9 3h6M12 3v2M4 21h16M15 13h.01"/>',
      "cleaning smart",
    ],
    [
      "washing-machine",
      '<rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="14" r="5"/><circle cx="12" cy="14" r="2"/><path d="M4 7h16M8 4.5h.01M12 4.5h4"/>',
      "laundry appliance",
    ],
    [
      "refrigerator",
      '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M6 10h12M9 6v2M9 13v3M8 22v1M16 22v1"/>',
      "kitchen appliance",
    ],
    [
      "oven",
      '<rect x="3" y="2" width="18" height="20" rx="2"/><path d="M3 8h18M7 5h.01M12 5h.01M17 5h.01"/><rect x="6" y="11" width="12" height="8" rx="1"/>',
      "kitchen appliance",
    ],
    [
      "tv-remote",
      '<rect x="7" y="2" width="10" height="20" rx="3"/><circle cx="12" cy="7" r="2"/><path d="M10 13h4M12 11v4M10 17h.01M14 17h.01"/>',
      "television control",
    ],
    [
      "remote",
      '<rect x="6" y="2" width="12" height="20" rx="4"/><circle cx="12" cy="7" r="2"/><path d="M9 13h.01M12 13h.01M15 13h.01M9 17h.01M12 17h.01M15 17h.01"/>',
      "device control",
    ],
    [
      "cctv",
      '<path d="M2 6h16v8H2ZM18 8l4-2v8l-4-2M7 14l-2 5H2M9 14l3 5h5M5 9h.01"/>',
      "security surveillance",
    ],
  ],
  Brands: [
    [
      "code-aw-apps",
      '<path d="M18 4h-7a8 8 0 1 0 0 16h7M22 7l-8 5 8 5"/>',
      "C< code aw apps agency",
    ],
    [
      "google",
      '<path d="M20.5 12.2c0 4.8-3.4 8.3-8.5 8.3a8.5 8.5 0 1 1 0-17c2.3 0 4.3.8 5.8 2.2l-2.4 2.3"/><path d="M12 11.5h8.5v4h-4"/>',
      "alphabet search",
    ],
    [
      "meta",
      '<path d="M2 16c2-5 4-8 6-8 3 0 5 8 8 8s4-8 6-8c0 4-2 8-5 8-3 0-5-8-8-8S4 13 2 16Z"/>',
      "facebook infinity",
    ],
    [
      "gmail",
      '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m3 7 9 7 9-7M6 18v-8l6 5 6-5v8"/>',
      "google email",
    ],
    [
      "google-chrome",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="m12 8 8 .5M8.5 14l-4-7M14.5 15l-4 6"/>',
      "browser chromium",
    ],
    [
      "google-drive",
      '<path d="m8 3-6 11 4 7h12l4-7-6-11ZM2 14h20M8 3l6 11M14 14l4 7"/>',
      "storage cloud",
    ],
    [
      "google-cloud",
      '<path d="M17.5 18H6a4 4 0 0 1-.5-8A6.5 6.5 0 0 1 18 8a5 5 0 0 1-.5 10Z"/><path d="M15 12a4 4 0 1 0-1 3M12 12h4v3"/>',
      "cloud platform gcp",
    ],
    [
      "youtube",
      '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="m10 9 6 3-6 3Z"/>',
      "video google",
    ],
    [
      "android",
      '<path d="M5 10h14v9H5ZM7 6l-2-3M17 6l2-3M8 10V8a4 4 0 0 1 8 0v2M8 14h.01M16 14h.01M3 11v6M21 11v6M9 19v3M15 19v3"/>',
      "google mobile",
    ],
    [
      "angular",
      '<path d="m12 2 9 4-2 12-7 4-7-4-2-12Z"/><path d="m7 17 5-11 5 11M9 13h6"/>',
      "google framework",
    ],
    [
      "javascript",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M11 8v6a3 3 0 0 1-6 0M16 11c-2-1-3 1-1 2 4 1 3 4 0 3-1 0-2-.5-2-1"/>',
      "js language",
    ],
    [
      "typescript",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M4 8h7M7.5 8v8M14 11c2-1 5 0 3 2-3 1-2 4 1 3 1 0 2-.5 2-1"/>',
      "ts language",
    ],
    [
      "electron",
      '<circle cx="12" cy="12" r="1.5"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
      "desktop framework",
    ],
    [
      "ionic",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M18 5h.01"/>',
      "mobile framework",
    ],
    [
      "docker",
      '<path d="M3 13h17c0 5-3 8-8 8-6 0-9-3-9-8ZM5 13V9h4v4M9 13V9h4v4M13 13V9h4v4M9 9V5h4v4M20 13c2 0 3-2 2-4-2 1-3 0-3-2"/>',
      "containers devops",
    ],
    [
      "aws",
      '<path d="M3 10l3-6 3 6M4.5 8h3M13 4v6m0-6h5l-5 6h5M3 15c5 5 13 5 18-1M18 17l3-3 1 4"/>',
      "amazon cloud",
    ],
    [
      "mongodb",
      '<path d="M12 2c6 5 7 13 0 20C5 15 6 7 12 2Z"/><path d="M12 5v17M8 11l4 3 4-4"/>',
      "database leaf",
    ],
    [
      "react",
      '<circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="6" r="1"/><ellipse cx="12" cy="12" rx="10" ry="4"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>',
      "javascript ui",
    ],
    [
      "vue",
      '<path d="m2 4 10 17L22 4h-5l-5 9L7 4Z"/><path d="m7 4 5 9 5-9"/>',
      "javascript framework",
    ],
    [
      "svelte",
      '<path d="M15 3c4-1 7 3 5 6l-8 5c-2 1-1 4 1 4 3 0 5-2 5-4M9 21c-4 1-7-3-5-6l8-5c2-1 1-4-1-4-3 0-5 2-5 4"/>',
      "javascript framework",
    ],
    [
      "nextjs",
      '<circle cx="12" cy="12" r="9"/><path d="M8 16V8l9 10V8M8 18l3-3"/>',
      "react framework",
    ],
    [
      "nuxt",
      '<path d="m3 19 6-11 4 7 3-5 5 9ZM6 19l3-6 3 6"/>',
      "vue framework",
    ],
    [
      "nodejs",
      '<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="M9 9v5a2 2 0 0 1-4 0M15 11c3-2 5 1 2 2-3 1-2 3 1 2"/>',
      "javascript runtime",
    ],
    [
      "deno",
      '<circle cx="12" cy="12" r="9"/><path d="M6 15c1-6 4-9 8-7 3 1 4 5 2 8-2 3-7 3-10-1Z"/><path d="M10 11h.01M15 11h.01M11 15h4"/>',
      "javascript runtime",
    ],
    [
      "bun",
      '<path d="M6 8C3 2 8 2 10 7M14 7c2-5 7-5 4 1 4 2 4 10-1 12H7c-5-2-5-10-1-12Z"/><path d="M9 12h.01M15 12h.01M10 16h4"/>',
      "javascript runtime",
    ],
    [
      "npm",
      '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M6 15V9l4 6V9M13 15V9h4v6h-4"/>',
      "node package manager",
    ],
    [
      "pnpm",
      '<rect x="3" y="3" width="5" height="5"/><rect x="10" y="3" width="5" height="5"/><rect x="3" y="10" width="5" height="5"/><rect x="10" y="10" width="5" height="5"/><path d="M17 21v-7h4v4h-4"/>',
      "node package manager",
    ],
    [
      "yarn",
      '<circle cx="12" cy="12" r="9"/><path d="M5 9c5-3 9 5 14 2M4 13c5-3 9 5 15 2M8 5c4 2 4 10 8 14"/>',
      "package manager",
    ],
    [
      "vite",
      '<path d="m3 4 9 17 9-17-9 4Z"/><path d="m9 4 3-2 3 2-3 4Z"/>',
      "build tool frontend",
    ],
    [
      "webpack",
      '<path d="m12 2 9 5v10l-9 5-9-5V7Zm0 0v6m-9-1 9 5 9-5M3 17l9-5 9 5M12 12v10"/>',
      "bundler javascript",
    ],
    [
      "babel",
      '<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="M8 7h5a3 3 0 0 1 0 6H8Zm0 6h6a3 3 0 0 1 0 6H8ZM8 7v12"/>',
      "compiler javascript",
    ],
    [
      "eslint",
      '<path d="m12 2 8 5v10l-8 5-8-5V7Z"/><path d="M15 8H9v8h6M9 12h5"/>',
      "linter javascript",
    ],
    [
      "prettier",
      '<path d="M4 5h16M4 9h10M4 13h16M4 17h7M15 9h5M15 17h5M4 21h16"/>',
      "formatter code",
    ],
    [
      "jest",
      '<path d="M5 4h14l-2 12H7ZM12 16v5M8 21h8M10 8v3a2 2 0 0 1-4 0M14 8h4"/>',
      "testing javascript",
    ],
    [
      "vitest",
      '<path d="m3 5 7 15h4l7-15-7 5h-4Z"/><path d="m12 2-2 7h4l-2 5"/>',
      "testing vite",
    ],
    [
      "cypress",
      '<circle cx="12" cy="12" r="9"/><path d="M15 8a5 5 0 1 0 0 8M12 3v4M12 17v4"/>',
      "testing browser",
    ],
    [
      "playwright",
      '<path d="M4 5c5-3 11-3 16 0v8c0 6-4 9-8 9s-8-3-8-9Z"/><path d="M4 9c2 0 4 1 5 3M20 9c-2 0-4 1-5 3M8 15h.01M16 15h.01M9 19h6"/>',
      "testing browser",
    ],
    [
      "storybook",
      '<path d="M5 3h12a2 2 0 0 1 2 2v16H7a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2Z"/><path d="M7 17h12M10 8c4-2 6 1 3 2-3 1-2 4 2 2"/>',
      "ui documentation",
    ],
    [
      "figma",
      '<path d="M8 2h4v6H8a3 3 0 0 1 0-6ZM12 2h4a3 3 0 0 1 0 6h-4ZM8 8h4v6H8a3 3 0 0 1 0-6ZM12 8h4a3 3 0 1 1-4 6ZM8 14h4v4a3 3 0 1 1-4-4Z"/>',
      "design prototyping",
    ],
    [
      "sketch",
      '<path d="m12 2 8 6-8 14L4 8ZM4 8h16M8 8l4-6 4 6-4 14"/>',
      "design mac",
    ],
    [
      "adobe",
      '<path d="M8 3H3v18l9-18ZM16 3h5v18l-9-18M9 15h6"/>',
      "creative cloud",
    ],
    [
      "photoshop",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 17V7h4a3 3 0 0 1 0 6H7M14 13c4-2 6 1 3 2-3 1-2 3 1 2"/>',
      "adobe ps",
    ],
    [
      "illustrator",
      '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="m5 17 4-10 4 10M6.5 14h5M16 12v5M16 8h.01"/>',
      "adobe ai",
    ],
    [
      "github",
      '<path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1-.5-2-1-2 3 0 6-1 6-6a5 5 0 0 0-1-3 5 5 0 0 0 0-4s-2 0-4 2a12 12 0 0 0-6 0C7 3 5 3 5 3a5 5 0 0 0 0 4 5 5 0 0 0-1 3c0 5 3 6 6 6-.5 0-1 1-1 2v4"/>',
      "git repository",
    ],
    [
      "gitlab",
      '<path d="m12 21-9-13 3-6 3 6h6l3-6 3 6ZM3 8h18M6 2l6 19L18 2"/>',
      "git devops",
    ],
    [
      "bitbucket",
      '<path d="M4 3h16l-2 18H6ZM4 8h16M9 8l1 8h4l1-8"/>',
      "git atlassian",
    ],
    [
      "git",
      '<path d="m12 2 10 10-10 10L2 12Z"/><circle cx="8" cy="8" r="1.5"/><circle cx="16" cy="16" r="1.5"/><path d="M8 9.5V13a3 3 0 0 0 3 3h3.5"/>',
      "version control",
    ],
    [
      "kubernetes",
      '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l4 4M14 14l4 4M6 18l4-4M14 10l4-4"/>',
      "containers orchestration",
    ],
    [
      "terraform",
      '<path d="M3 4v6l5 3V7ZM10 7v6l5 3v-6ZM15 10v6l5-3V7ZM10 15v5l5 3v-6Z"/>',
      "hashicorp infrastructure",
    ],
    ["vercel", '<path d="m12 3 10 18H2Z"/>', "hosting frontend"],
    [
      "netlify",
      '<path d="m12 2 9 7-4 11H7L3 9ZM3 9l9 3 9-3M7 20l5-8 5 8M12 2v10"/>',
      "hosting frontend",
    ],
    [
      "cloudflare",
      '<path d="M7 17a5 5 0 0 1-1-10 7 7 0 0 1 13 2 4 4 0 0 1-1 8Z"/><path d="M8 14h8l2 3H10M11 10h6l2 3h-8"/>',
      "cdn security",
    ],
    [
      "firebase",
      '<path d="m5 17 2-12 4 6 2-9 6 15-7 5Z"/><path d="m5 17 6-6 3 4 5 2-7 5Z"/>',
      "google database",
    ],
    ["supabase", '<path d="M13 2 5 13h6l-1 9 9-12h-6Z"/>', "database backend"],
    [
      "prisma",
      '<path d="m12 2 8 17-8-3-8 3Z"/><path d="M12 2v14M7 13l5 3 5-3"/>',
      "database orm",
    ],
    [
      "postgresql",
      '<path d="M6 10c0-5 3-8 7-7 4 0 6 4 5 8 3 0 4 3 2 5-2 2-5 1-6 0-1 3-3 5-6 4-3-1-4-4-2-7Z"/><path d="M10 9h.01M16 9h.01M10 13c2 1 4 1 6 0M8 16c3-1 5-1 7 0"/>',
      "postgres database",
    ],
    [
      "mysql",
      '<path d="M3 16c2-7 6-10 11-6l3-3 1 4 3 2-4 1c-2 5-8 6-14 2Z"/><path d="M6 16c3-2 5-2 8 0M15 11h.01"/>',
      "database sql",
    ],
    [
      "redis",
      '<path d="m12 3 9 4-9 4-9-4ZM3 11l9 4 9-4M3 15l9 4 9-4M3 19l9 4 9-4"/>',
      "database cache",
    ],
    [
      "sqlite",
      '<ellipse cx="9" cy="5" rx="6" ry="3"/><path d="M3 5v10c0 2 3 3 6 3s6-1 6-3V5M3 10c0 2 3 3 6 3s6-1 6-3M18 8c4 4 3 9 0 13-2-4-2-9 0-13Z"/>',
      "database sql",
    ],
    [
      "elasticsearch",
      '<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M5 7l10 6M5 13 15 7"/><circle cx="19" cy="5" r="2"/>',
      "search database",
    ],
    [
      "graphql",
      '<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><circle cx="12" cy="4" r="1.5"/><circle cx="5" cy="8" r="1.5"/><circle cx="19" cy="8" r="1.5"/><circle cx="5" cy="16" r="1.5"/><circle cx="19" cy="16" r="1.5"/><circle cx="12" cy="20" r="1.5"/><path d="m6 9 5 9M18 9l-5 9M7 8h10M6 15h12"/>',
      "api query",
    ],
    [
      "apollo",
      '<circle cx="12" cy="12" r="9"/><path d="m6 17 6-12 6 12M8 14h8M2 12c5-4 15-4 20 0"/>',
      "graphql platform",
    ],
    [
      "redux",
      '<path d="M7 15a4 4 0 0 1-2-7c2-4 8-5 12-2s5 8 2 11-8 5-12 2c-2-1-2-3 0-4s4 0 4 2-2 3-4 2Z"/><path d="M15 5c2 0 3 2 2 3M18 19c-2 1-3-1-2-2"/>',
      "state javascript",
    ],
    [
      "tailwind",
      '<path d="M3 10c2-5 6-5 9-1s6 4 9 1M3 16c2-5 6-5 9-1s6 4 9 1"/>',
      "css framework",
    ],
    [
      "bootstrap",
      '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 6h5a3 3 0 0 1 0 6H8Zm0 6h6a3 3 0 0 1 0 6H8ZM8 6v12"/>',
      "css framework",
    ],
    [
      "sass",
      '<path d="M4 15c0-5 6-8 10-5 3 2-1 5-4 4-2-1-1-3 1-3M11 18c3-5 5-5 4-2-1 3 1 3 3-1 1-2 3-1 2 1-1 3 1 3 2 1M3 19c5 2 9 1 12-1"/>',
      "css preprocessor",
    ],
    [
      "css3",
      '<path d="M4 2h16l-2 18-6 2-6-2Z"/><path d="M8 7h8l-4 5h4l-1 5-3 1-3-1"/>',
      "stylesheet language",
    ],
    [
      "html5",
      '<path d="M4 2h16l-2 18-6 2-6-2Z"/><path d="M8 6v5h8V6M8 11l1 6 3 1 3-1 .5-3H8"/>',
      "markup language",
    ],
    [
      "python",
      '<path d="M12 2c-5 0-6 2-6 4v3h8v1H5c-3 0-4 3-3 6 1 4 4 5 7 3v-3c0-2 2-3 4-3h4c2 0 3-2 3-4V6c0-3-3-4-8-4Z"/><path d="M10 5h.01M14 19h.01M9 19v3M15 13v3c0 2-2 3-4 3H7"/>',
      "programming language",
    ],
    [
      "django",
      '<path d="M5 3h5v13c0 4-2 5-5 5V3Zm0 10c4 2 7 0 5-3M15 8v13M15 3h.01M19 12v9"/>',
      "python framework",
    ],
    [
      "flask",
      '<path d="M9 2h6M10 2v7l-6 9a3 3 0 0 0 3 4h10a3 3 0 0 0 3-4l-6-9V2M7 15h10M10 12h.01M14 17h.01"/>',
      "python framework",
    ],
    [
      "ruby",
      '<path d="m12 2 9 6-3 12H6L3 8ZM3 8h18M8 8l4 12 4-12M8 8l4-6 4 6"/>',
      "programming language",
    ],
    [
      "rails",
      '<path d="M3 20c5-8 11-13 18-15M5 15h5M9 10h5M13 5h5M3 20h18M7 20l-3-4M17 20l3-4"/>',
      "ruby framework",
    ],
    [
      "php",
      '<ellipse cx="12" cy="12" rx="10" ry="7"/><path d="M5 16V8h3a2 2 0 0 1 0 4H5M11 16l2-8M12 13h4M17 16V8h3a2 2 0 0 1 0 4h-3"/>',
      "programming language",
    ],
    [
      "laravel",
      '<path d="m3 5 6-3 6 3-6 3ZM3 5v10l6 3 6-3V5M15 8l6 3v8l-6 3-6-3M9 8v10M15 14l6-3"/>',
      "php framework",
    ],
    [
      "java",
      '<path d="M5 12h12v4a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5ZM17 13h2a3 3 0 0 1 0 6h-2M8 9c-3-3 3-3 0-6M13 9c-3-3 3-3 0-6M4 22h14"/>',
      "programming coffee",
    ],
    [
      "kotlin",
      '<path d="M3 3h18L3 21ZM3 3l9 9-9 9M12 12h9"/>',
      "android language",
    ],
    [
      "swift",
      '<path d="M3 5c7 0 13 4 13 11 3-1 5-3 5-6 1 7-4 12-11 11-4-1-7-4-7-7 3 2 6 2 8 1C7 13 4 9 3 5Z"/>',
      "apple language",
    ],
    [
      "rust",
      '<circle cx="12" cy="12" r="8"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4 4l2 2M18 18l2 2M4 20l2-2M18 6l2-2M9 16V8h4a3 3 0 0 1 0 6H9m4 0 3 4"/>',
      "programming language",
    ],
    [
      "go",
      '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="2"/><circle cx="16" cy="10" r="2"/><path d="M8 16c2 2 6 2 8 0M9 10h.01M15 10h.01"/>',
      "golang language",
    ],
    [
      "csharp",
      '<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="M14 8a5 5 0 1 0 0 8M17 9v4M15 11h4M20 13v4M18 15h4"/>',
      "c# dotnet",
    ],
    [
      "dotnet",
      '<circle cx="12" cy="12" r="9"/><path d="M5 16V8l5 8V8M14 8h6M17 8v8M20 16h.01"/>',
      "microsoft framework",
    ],
    [
      "cpp",
      '<path d="m12 2 9 5v10l-9 5-9-5V7Z"/><path d="M13 8a5 5 0 1 0 0 8M17 10v4M15 12h4M21 10v4M19 12h4"/>',
      "c++ language",
    ],
    ["scala", '<path d="M5 3h14v4H9v3h10v4H9v3h10v4H5Z"/>', "jvm language"],
    [
      "dart",
      '<path d="M4 18 16 4l4 1-1 5-11 11-5 1ZM4 18l4 3M13 7l4 4M3 14l7 7"/>',
      "flutter language",
    ],
    [
      "flutter",
      '<path d="m13 2 8 8-5 5 5 5-8 2L3 12ZM13 2 3 12l5 5 13-7M8 17l5 5 3-2-5-5"/>',
      "google ui",
    ],
    [
      "react-native",
      '<rect x="6" y="2" width="12" height="20" rx="3"/><ellipse cx="12" cy="11" rx="5" ry="2"/><ellipse cx="12" cy="11" rx="5" ry="2" transform="rotate(60 12 11)"/><ellipse cx="12" cy="11" rx="5" ry="2" transform="rotate(120 12 11)"/><circle cx="12" cy="11" r=".7"/><path d="M11 19h2"/>',
      "mobile react",
    ],
    [
      "expo",
      '<path d="m12 2 3 7 7 3-7 3-3 7-3-7-7-3 7-3Z"/><path d="m9 12 3-3 3 3-3 3Z"/>',
      "react native",
    ],
    [
      "wordpress",
      '<circle cx="12" cy="12" r="9"/><path d="m5 8 4 12M9 8l3 8 3-8M16 8l3 8M4 8h5M9 8h4M14 8h5"/>',
      "cms blog",
    ],
    [
      "shopify",
      '<path d="M6 7h12l1 14H5ZM9 8V6a3 3 0 0 1 6 0v2M14 11c-3-2-6 1-3 2 4 1 3 4 0 3-1 0-2-.5-2-1"/>',
      "commerce shop",
    ],
    [
      "stripe",
      '<path d="M5 7c3-3 10-3 13 0M5 12c3-3 10-3 13 0M5 17c3-3 10-3 13 0M12 4v16"/>',
      "payments",
    ],
    [
      "paypal",
      '<path d="M7 20 9 4h6a4 4 0 0 1 0 8H9M11 21l1-6h4a4 4 0 0 0 4-5"/>',
      "payments",
    ],
    [
      "slack",
      '<path d="M9 3a2 2 0 0 1 2 2v5H9a2 2 0 0 1 0-7ZM15 3a2 2 0 0 1 2 2v2h-2ZM21 9a2 2 0 0 1-2 2h-5V9a2 2 0 0 1 7 0ZM21 15a2 2 0 0 1-2 2h-2v-2ZM15 21a2 2 0 0 1-2-2v-5h2a2 2 0 0 1 0 7ZM9 21a2 2 0 0 1-2-2v-2h2ZM3 15a2 2 0 0 1 2-2h5v2a2 2 0 0 1-7 0ZM3 9a2 2 0 0 1 2-2h2v2Z"/>',
      "chat workspace",
    ],
    [
      "discord",
      '<path d="M5 6c4-3 10-3 14 0l2 12-4 3-2-3c-2 1-4 1-6 0l-2 3-4-3ZM8 9c2-1 6-1 8 0M9 14h.01M15 14h.01"/>',
      "chat gaming",
    ],
    [
      "telegram",
      '<path d="m22 2-7 20-4-9-9-4ZM22 2 11 13M11 13l1 6 3-3"/>',
      "chat messenger",
    ],
    [
      "whatsapp",
      '<path d="M20 11.5a8 8 0 0 1-12 7l-5 2 2-5a8 8 0 1 1 15-4Z"/><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1c-2-1-3-2-4-4l1-1-1-3Z"/>',
      "chat messenger",
    ],
    [
      "notion",
      '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 17V7l8 10V7M6 5h4M14 19h4"/>',
      "notes productivity",
    ],
    [
      "linear",
      '<path d="M4 4l16 16M4 10l10 10M4 16l4 4M10 4l10 10M16 4l4 4"/>',
      "project management",
    ],
    [
      "jira",
      '<path d="m12 2 5 5-5 5-5-5ZM7 9l5 5-5 5-5-5ZM17 9l5 5-5 5-5-5ZM12 14l5 5-5 3-5-3Z"/>',
      "atlassian project",
    ],
    [
      "confluence",
      '<path d="M3 7c4-4 7 3 11 3s5-3 7-3M3 12c4-4 7 3 11 3s5-3 7-3M3 17c4-4 7 3 11 3s5-3 7-3"/>',
      "atlassian wiki",
    ],
    [
      "digitalocean",
      '<circle cx="12" cy="12" r="9"/><path d="M7 14a5 5 0 1 1 5 3v-4H8v4H4v-4h4M16 21h5v-5"/>',
      "cloud hosting",
    ],
  ],
};
