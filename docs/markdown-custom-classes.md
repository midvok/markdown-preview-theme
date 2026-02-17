---
title: Markdown — Custom CSS Classes
class: "headnum"
puppeteer:
  format: A4
  scale: 0.85
  printBackground: true
  margin:
    top: 20mm
    bottom: 15mm
    left: 15mm
    right: 15mm
  displayHeaderFooter: true
  headerTemplate: "<div>/div>"
  footerTemplate: '<div style="width:100%;font-size:3mm;text-align:center;"><span class="pageNumber"></span>/<span class="totalPages"></span></div>'
---

# Markdown — Custom CSS Classes

## Introduction

Some Markdown processors support **Pandoc-style attribute syntax**, which allows adding classes, IDs, and custom attributes using curly braces.

```css
{.class #id style="color: red;"}
```

**Example**:

```markdown
## Enforce a page break before this heading {.page-break}

###### This heading will be red {style="color: red"}
```

Another option is to **mix Markdown and HTML**. This allows you to wrap Markdown content inside HTML tags like `<div>` or `<section>` to apply specific styles or utility classes.

**Example**:

```markdown
<section style="column-count: 3; column-rule: 1px dashed #999;">

- First list item **bold**
- Second list item _italic_
- Third list item `monospace`
</section>
```

### Application Support

> [!success] Markdown Preview Enhanced (MPE)
>
> - **Attribute syntax**: MPE supports the curly brace `{}` syntax for headings only.
> - **HTML mixing**: Wrapping Markdown in `<div>` or `<section>` tags seems to be supported.\
>   Note that you must include a blank line after the opening tag.

> [!caution] Obsidian
> Obsidian does **not support Pandoc-style attributes by default**, because it is based on CommonMark. However, you can enable similar functionality using community plugins:
>
> - [Markdown Attributes](https://github.com/arve0/markdown-it-attrs)
> - [Custom Classes](https://github.com/LilaRest/obsidian-custom-classes)

## Theme-Defined Utility Classes

### Print Layout Controls

| Class            | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `page-break`     | Enforce a page break before an element                           |
| `no-break`       | Prevent an element from being split across pages                 |
| `keep-with-next` | Prevent an element from being separated from the following block |

### Layout Helpers

| Class            | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| `cols-[n]`       | Create a **multi-column** layout with `n` columns (up to 10) |
| `cols-rule`      | Add vertical divider lines between columns                   |
| `nomark-list`    | Remove list item markers                                     |
| `grid-cols-[n]`  | Create a **CSS grid** layout with `n` columns                |
| `grid-cols-auto` | Create a **CSS grid** layout with `auto-fit` columns         |
| `flex`           | Apply a **Flexbox** container to child elements              |

## Testing Utility Class

### Multi-Column Layout with `cols-*`

```markdown
<section class="cols-3 cols-rule nomark-list">
...
</section>
```

##### Nano Editor Shortcuts

<section class="cols-3 cols-rule nomark-list">

- <kbd>Ctrl+O</kbd> — Save output to file
- <kbd>Ctrl+X</kbd> — Exit
- <kbd>Ctrl+W</kbd> — Search text
  - <kbd>Ctrl+N</kbd>,<kbd>P</kbd> — Next/prev match
- <kbd>Alt+U</kbd> — Undo last action
- <kbd>Alt+E</kbd> — Redo last undone action
- <kbd>Ctrl+K</kbd> — Cut current line into cutbuffer
- <kbd>Alt+6</kbd> — Copy current line into cutbuffer
- <kbd>Ctrl+U</kbd> — Paste content of buffer
- <kbd>Alt+Del</kbd> — Delete current line
- <kbd>Alt+3</kbd> — Toggle comment line
- <kbd>Alt+N</kbd> — Toggle line numbers
- <kbd>Alt+P</kbd> — Toggle visible whitespace
- <kbd>Alt+S</kbd> — Toggle softwrapping

</section>

##### Images in Multi-Column Layout

<section class="cols-5 cols-rule">

![alt text](https://octodex.github.com/images/original.png "octocat original")

![alt text](https://octodex.github.com/images/class-act.png "octocat class act")

![alt text](https://octodex.github.com/images/femalecodertocat.png "femalecodertocat")

![alt text](https://octodex.github.com/images/shoptocat.png "shoptocat")

![alt text](https://octodex.github.com/images/pusheencat.png "pusheencat")

![alt text](https://octodex.github.com/images/homercat.png "homercat")

![alt text](https://octodex.github.com/images/octonaut.jpg "octonaut")

![alt text](https://octodex.github.com/images/daftpunktocat-guy.gif "daftpunktocat-guy")

</section>

---

### Grid Layout with `grid-cols-*`

```markdown
<section class="grid-cols-5">
...
</section>
```

##### Images in Grid Layout

<section class="grid-cols-5">

![alt text](https://octodex.github.com/images/original.png "octocat original")

![alt text](https://octodex.github.com/images/class-act.png "octocat class act")

![alt text](https://octodex.github.com/images/femalecodertocat.png "femalecodertocat")

![alt text](https://octodex.github.com/images/shoptocat.png "shoptocat")

![alt text](https://octodex.github.com/images/pusheencat.png "pusheencat")

![alt text](https://octodex.github.com/images/homercat.png "homercat")

![alt text](https://octodex.github.com/images/octonaut.jpg "octonaut")

![alt text](https://octodex.github.com/images/daftpunktocat-guy.gif "daftpunktocat-guy")

</section>

---

### Flexbox Layout with `flex`

```markdown
<section class="flex simple-table dense-table xline-table">
...
</section>
```

<section class="flex simple-table dense-table xline-table">

| Identity & Session |                    |
| ------------------ | ------------------ |
| `USER`             | Current username   |
| `LOGNAME`          | Login name         |
| `HOME`             | Home directory     |
| `SHELL`            | Default shell      |
| `PWD`              | Current directory  |
| `OLDPWD`           | Previous directory |

| Command Execution |                                  |
| ----------------- | -------------------------------- |
| `PATH`            | Executable search path           |
| `EDITOR`          | Default CLI editor (`nano`)      |
| `VISUAL`          | Default GUI editor               |
| `PAGER`           | Pager (`less`)                   |
| `TERM`            | Terminal type (`xterm-256color`) |

| Locale & Language |                      |
| ----------------- | -------------------- |
| `LANG`            | Default locale       |
| `LC_ALL`          | Override all locales |
| `LC_TIME`         | Time formatting      |
| `LC_NUMERIC`      | Number formatting    |
| `LC_CTYPE`        | Character encoding   |

| Desktop & GUI Session |                   |
| --------------------- | ----------------- |
| `DISPLAY`             | X11 display       |
| `WAYLAND_DISPLAY`     | Wayland session   |
| `XDG_SESSION_TYPE`    | `x11` / `wayland` |
| `XDG_CURRENT_DESKTOP` | `X-Cinnamon`      |
| `XDG_SESSION_DESKTOP` | `cinnamon`        |

</section>
