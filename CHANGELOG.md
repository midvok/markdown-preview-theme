# Changelog

All notable changes to this theme for [Markdown Preview Enhanced](https://github.com/shd101wyy/vscode-markdown-preview-enhanced) (MPE).

## 2026-10-17

Tested with MPE `0.8.40`.

### MPE Compatibility

- Style **callouts** consistently for both GitHub (`> [!note]`) and MkDocs (`!!! note`) syntax.
- Remove GitHub callout handling from the `parser.js` tweak. MPE now renders GitHub callouts natively, including all Obsidian callout types ([#1911](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/1911)).

### Other Changes

- Repurpose the `parser.js` tweak to apply **default PDF export options**: A4 format, margins, a header with title and date, and a footer with page numbers. Documents with their own `puppeteer` front matter keep their settings.
- Hide links nested in headings from **TOC panel** entries.

### Development

- Add a **justfile** that copies `style.less` and `parser.js` into MPE's config folder (`just deploy`), or does it on every change (`just watch`).
- Add test documents for diagram rendering: PlantUML, Mermaid, D2 and WaveDrom.

## 2026-06-24

Tested with MPE `0.8.30`.

### MPE Compatibility

- Update the **TOC panel** to match changes in MPE [0.8.24](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/releases/tag/0.8.24).
- Disable the theme's own **click-to-enlarge** for images, now that MPE handles it natively (since [0.8.25](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/releases/tag/0.8.25)).

### Other Changes

- Add `float-left` and `float-right` helper classes.
- Add styling for **definition lists**.
- Improve spacing in lists.

## 2026-02-17

- Initial release.
