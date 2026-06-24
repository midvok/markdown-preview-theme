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

### Pandoc-Style Syntax

Some Markdown processors support **Pandoc-style** **attribute syntax** and **fenced divs**, which allow adding classes, IDs, and custom attributes to your Markdown content.

##### Attribute Syntax

```css
{.class #id style="color: red;"}
```

**Example**:

```markdown
## Enforce a page break before this heading {.page-break}

### This heading will be red {style="color: red"}
```

Which renders in HTML as:

```html
<h3 style="color: red">This heading will be red</h3>
<h2 class="page-break">Enforce a page break before this heading</h2>
```

##### Fenced Divs

Allow special fenced syntax for native Div blocks. A Div starts with a fence containing at least three consecutive colons plus some attributes. The attributes may optionally be followed by another string of consecutive colons.

**Example**:

```markdown
:::.class1
:::

:::{.class1 .class2}
:::
```

Which renders in HTML as:

```html
<div class="class1"></div>

<div class="class1 class2"></div>
```

### Mixing Markdown and HTML

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
> - **Attribute syntax**: The curly brace `{}` syntax is supported for headings, code blocks and images.
> - **Fenced divs**: Supported.
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

| Class                 | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `cols-[n]`            | Create a **multi-column** layout with `n` columns (up to 10) |
| `cols-rule`           | Add vertical divider lines between columns                   |
| `nomark-list`         | Remove list item markers                                     |
| `grid-cols-[n]`       | Create a **CSS grid** layout with `n` columns                |
| `grid-cols-auto`      | Create a **CSS grid** layout with `auto-fit` columns         |
| `flex`                | Apply a **Flexbox** container to child elements              |
| `float-[left\|right]` | Allow to wrap text around images set to float left or right  |

## Testing Utility Class

### Multi-Column Layout

**Classes**:

- `cols-[n]`
- `cols-rule`

**Fenced div syntax**:

```markdown
:::{.cols-3 .cols-rule .nomark-list}
:::
```

**HTML syntax**:

```markdown
<section class="cols-3 cols-rule nomark-list">
...
</section>
```

##### List in Multi-Column Layout (Nano Editor Shortcuts)

:::{.cols-3 .cols-rule .nomark-list}

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

:::

##### Images in Multi-Column Layout

:::{.cols-5 .cols-rule}

![alt text](https://octodex.github.com/images/original.png "octocat original")
![alt text](https://octodex.github.com/images/class-act.png "octocat class act")
![alt text](https://octodex.github.com/images/femalecodertocat.png "femalecodertocat")
![alt text](https://octodex.github.com/images/shoptocat.png "shoptocat")
![alt text](https://octodex.github.com/images/pusheencat.png "pusheencat")
![alt text](https://octodex.github.com/images/homercat.png "homercat")
![alt text](https://octodex.github.com/images/octonaut.jpg "octonaut")
![alt text](https://octodex.github.com/images/daftpunktocat-guy.gif "daftpunktocat-guy")

:::

---

### Grid Layout

**Classes**:

- `grid-cols-[n]`

**Fenced div syntax**:

```markdown
:::grid-cols-5
:::
```

**HTML syntax**:

```markdown
<section class="grid-cols-5">
...
</section>
```

##### Images in Grid Layout

:::grid-cols-5

![alt text](https://octodex.github.com/images/original.png "octocat original")

![alt text](https://octodex.github.com/images/class-act.png "octocat class act")

![alt text](https://octodex.github.com/images/femalecodertocat.png "femalecodertocat")

![alt text](https://octodex.github.com/images/shoptocat.png "shoptocat")

![alt text](https://octodex.github.com/images/pusheencat.png "pusheencat")

![alt text](https://octodex.github.com/images/homercat.png "homercat")

![alt text](https://octodex.github.com/images/octonaut.jpg "octonaut")

![alt text](https://octodex.github.com/images/daftpunktocat-guy.gif "daftpunktocat-guy")

:::

---

### Flexbox Layout

**Classes**:

- `flex`

**Fenced div syntax**:

```markdown
:::{.flex .simple-table .dense-table .xline-table}
:::
```

**HTML syntax**:

```markdown
<section class="flex simple-table dense-table xline-table">
...
</section>
```

##### Tables in Flexbox Layout

:::{.flex .simple-table .dense-table .xline-table}

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

:::

---

### Float Left/Right

**Attribute syntax**:

```markdown
![alt text](img_url){.float-left}
![alt text](img_url){.float-right}
```

##### Example with List

![alt text](https://placehold.co/160x120/333/fff?text=float-left){.float-left}

- Lorem ipsum dolor sit amet, consectetur adipiscing elit.
- Aliquam vel ligula at nisi cursus aliquet.
- Integer euismod felis eget lacinia auctor.
- Duis ornare nisl eget mauris ultrices molestie.

##### Example with Paragraphs

![alt text](https://placehold.co/160x120/333/fff?text=float-left){.float-left}

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie augue sed massa aliquet condimentum. Praesent tempus suscipit pulvinar. Pellentesque nisi augue, maximus non ante ac, maximus feugiat risus. Praesent cursus est dolor, nec lobortis lectus molestie in. Vivamus ac luctus felis. Nam euismod dolor eget erat bibendum, vel placerat risus porttitor. Aenean eu luctus est.

![alt text](https://placehold.co/160x120/333/fff?text=float-right){.float-right}

Pellentesque convallis felis urna, a ultricies nisi consectetur nec. Nulla porta leo velit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris lobortis vitae nisi ac venenatis. Vestibulum molestie condimentum dictum. Morbi justo erat, pharetra id orci in, malesuada ornare enim. Donec semper tortor at tempor ornare. Nullam nisl felis, ultricies in pulvinar ac, vulputate non erat.
