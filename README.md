# Markdown Preview Theme

A highly customizable theme designed for the VS Code Extension [Markdown Preview Enhanced](https://github.com/shd101wyy/vscode-markdown-preview-enhanced) (MPE).

**Main Features**:

- **Clean LESS stylesheet**: Easily modify variables, change fonts, and toggle specific theme components.
- **Improved print layout**: Dedicated style for PDF export, handling page breaks and margins more reliably.
- **Visual enhancements**: Colorful headings and a built-in _"click-to-zoom"_ effect for images.
- **Heading numbering**: Toggle heading numbering starting from H1 or H2.
- **Front-matter configuration**: Apply custom CSS classes via Markdown YAML front matter to style the entire document.
- **Utility CSS classes**: Additional classes for fine-grained layout control directly within your Markdown.
- **Customized TOC**: Control the visible depth of the Table of Contents tree in the sidebar.

![alt text](https://i.imgur.com/jnaiwSA.png)

## Theme Installation

Ensure you have the [Markdown Preview Enhanced](https://github.com/shd101wyy/vscode-markdown-preview-enhanced) extension installed.

There are two ways to apply the theme stylesheet:

- **Option 1**:
  - In VS Code, run the command **Markdown Preview Enhanced: Customize CSS**.
  - This opens the `style.less`.
  - Replace its contents with the theme file located at `theme/style.less`.
- **Option 2**:
  - Locate the `style.less` file in your home directory.
  - The default path on Windows is: `%USERPROFILE%\.crossnote\style.less`.
  - Replace it with the theme file `theme/style.less`.

## Theme Customization

### Global Theme Variables

The beginning of the stylesheet contains several global variables that allow you to alter the theme's default behavior:

```less
// Select base text font family
// {sans, serif, mono}
@base-font: serif;

// Import web fonts if they are not installed on your system
// {true, false}
@import-fonts: true;

// Toggle colorful headings
// {true, false}
@colorful-headings: true;

// Automatic heading numbering
// {true, false}
@heading-numbering: false;

// Limit the depth of the sidebar TOC tree
// {1..6}
@toc-depth: 3;

// Enable ellipsis overflow for long TOC items
// {true, false}
@toc-ellipsis: false;

// Zoom images on image click (alternative to "Enable Image Lightbox" in MPE settings)
// {true, false}
@click-to-zoom: false;
```

### Global Styles via Front Matter

You can specify CSS classes in the **Markdown YAML front matter** section and they will be applied to the **entire document**.

This theme supports the following classes:

| Class                      | Description                                     |
| -------------------------- | ----------------------------------------------- |
| `sans`, `serif`, `mono`    | Override the document font family               |
| `fs12px` .. `fs18px`       | Override the document font size                 |
| `[no]centerimg`            | Toggle image centering                          |
| `[no]centertable`          | Toggle table centering                          |
| `[no]colorhead`            | Toggle colorful headings                        |
| `headnum-h1`               | Add heading numbering (starting from H1)        |
| `headnum[-h2]`             | Add heading numbering (starting from H2)        |
| `wrapcode`                 | Wrap long lines in code blocks                  |
| `simple-table`             | Apply simplified table styling                  |
| `[x\|y\|xy\|no]line-table` | Control which internal borders appear in tables |
| `nohead-table`             | Hide the table header row                       |
| `dense-table `             | Reduce table cell padding                       |

**Example**:

```markdown
---
class: "sans fs15px headnum simple-table xline-table"
---
```

### Utility Classes

Some Markdown processors support **Pandoc-style attribute syntax**, which allows adding classes, IDs, and custom attributes using curly braces.

The **MPE** extension supports this syntax for headings only. This is particularly useful for controlling page breaks during PDF export.

| Class            | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `page-break`     | Enforce a page break before an element                           |
| `no-break`       | Prevent an element from being split across pages                 |
| `keep-with-next` | Prevent an element from being separated from the following block |

**Example**:

```markdown
## Enforce a page break before this heading {.page-break}

###### This heading will be red {style="color: red"}
```

#### Layout Helpers

For more complex layouts, you can wrap your Markdown in HTML tags like `<div>` or `<section>`. See additional examples in [this demo file](docs/markdown-utility-classes.md).

| Class                 | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `cols-[n]`            | Create a **multi-column** layout with `n` columns (up to 10) |
| `cols-rule`           | Add vertical divider lines between columns                   |
| `nomark-list`         | Remove list item markers                                     |
| `grid-cols-[n]`       | Create a **CSS grid** layout with `n` columns                |
| `grid-cols-auto`      | Create a **CSS grid** layout with `auto-fit` columns         |
| `flex`                | Apply a **Flexbox** container to child elements              |
| `float-[left\|right]` | Allow to wrap text around images set to float left or right  |

**Example**: Flexbox layout to display tables side by side

```markdown
:::{.flex .simple-table .dense-table .xline-table}

| Markdown syntax    |                 |
| ------------------ | --------------- |
| `#` - `######`     | Heading H1 - H6 |
| `** **` or `__ __` | **Bold text**   |
| `* *` or `_ _`     | _Italic text_   |
| `[text](url)`      | Link            |
| `![alt](url)`      | Image           |

| LaTeX syntax |                    |
| ------------ | ------------------ |
| `$ $`        | Inline math        |
| `$$ $$`      | Display math block |
| `\sum`       | Summation symbol   |
| `\int`       | Integral symbol    |
| `\frac{}{}`  | Fraction           |

:::
```

![alt text](https://i.imgur.com/fZiM8d1.png)

## Extension Tweaks

### Support GitHub Syntax for Admonitions

The **MPE** extension natively supports only the [MKDocs syntax](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) for admonitions.

If you also want to support the **GitHub callout syntax**, you need to extend the Markdown parser used by the extension:

- Run the command **Markdown Preview Enhanced: Extend Parser (Global)**.
- This opens the `parser.js` file.
- Override the `onWillParseMarkdown` hook with the follwing [code snippet](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/1911).

```js
// Enable GitHub syntax for admonitions
// https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/1911
onWillParseMarkdown: async function (markdown) {
    return new Promise((resolve, reject) => {
        const calloutRegex = /^> ?\[!(?<type>\w+)\](?<title>.*)?\r?\n(?<content>(?:>.*\r?\n?)*)/gm;
        const newMarkdown = markdown.replace(calloutRegex, (match, type, title, content) => {
            const admonitionType = type.toLowerCase();
            const admonitionTitle = title && title.trim() ? `${title.trim()}` : "";
            const admonitionContent = content
                .replace(/^> ?/gm, "")
                .split(/\r?\n/)
                .map((line) => `    ${line}`)
                .join("\n");
            return `!!! ${admonitionType} ${admonitionTitle}\n${admonitionContent}\n\n`;
        });
        return resolve(newMarkdown);
    });
},
```

### Configure PDF Export

You can use the **Markdown front matter** section to configure print options for the **Chrome (Puppeteer) PDF export**.

You can adjust page format, margins, and document scale. Supported options are documented [here](https://pptr.dev/api/puppeteer.pdfoptions).

```markdown
---
title: Document Title
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
  headerTemplate: "<div></div>"
  footerTemplate: "<div></div>"
---
```

The `headerTemplate` and `footerTemplate` must be valid HTML with the following classes used to inject values into them:

- `date` formatted print date
- `title` document title
- `url` document location
- `pageNumber` current page number
- `totalPages` total pages in the document

**Example header template**:

- Show the document `title` on the left and `pageNumber` / `totalPages` on the right, with a thin border line.

  ```html
  <div
    style="width: 100%; display: flex; justify-content: space-between;
      font-size: 3mm;
      margin: 6mm 15mm 0;
      border-bottom: 1pt solid black;"
  >
    <span class="title"></span>
    <span><span class="pageNumber"></span>/<span class="totalPages"></span></span>
  </div>
  ```

**Example footer template**:

- Show centered page numbering `pageNumber` / `totalPages`.

  ```html
  <div style="width: 100%; font-size: 3mm; text-align: center">
    <span class="pageNumber"></span>/<span class="totalPages"></span>
  </div>
  ```
