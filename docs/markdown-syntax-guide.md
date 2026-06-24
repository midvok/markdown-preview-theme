---
title: Markdown Syntax Guide
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
  headerTemplate: '<div style="width:100%;font-size:3mm;border-bottom:1pt solid black;margin:6mm 15mm 0;display:flex;justify-content:space-between;"><span class="title"></span><span><span class="pageNumber"></span>/<span class="totalPages"></span></span></div>'
  footerTemplate: '<div style="width:100%;font-size:3mm;text-align:center;"><span class="pageNumber"></span>/<span class="totalPages"></span></div>'
---

# Markdown Syntax Guide

- [Markdown Syntax Guide](#markdown-syntax-guide)
  - [This is a heading H2](#this-is-a-heading-h2)
    - [This is a heading H3](#this-is-a-heading-h3)
  - [Basic Writing and Formatting](#basic-writing-and-formatting)
    - [Styling Text](#styling-text)
    - [CSS Color Variables](#css-color-variables)
    - [Code Spans and Blocks](#code-spans-and-blocks)
    - [Lists](#lists)
    - [Line Breaks](#line-breaks)
    - [Blockquotes](#blockquotes)
    - [Images](#images)
    - [Tables {.page-break}](#tables-page-break)
  - [Extended Formatting Syntax](#extended-formatting-syntax)
    - [Math Typesetting](#math-typesetting)
    - [Admonitions (Callouts)](#admonitions-callouts)

**Markdown** is a **lightweight markup language** used for formatting plain text. Created by **_John Gruber_** in 2004, Markdown was designed to be both _easy-to-read_ and _easy-to-write_.

Over time, Markdown has evolved into several **flavors**, each tailored to specific platforms and use cases. For example, **GitHub Flavored Markdown (GFM)**, **GitLab Flavored Markdown**, and **MkDocs Markdown** extend the basic syntax with unique features. Additionally, **CommonMark** has emerged as a standardized specification to address ambiguities in the original syntax.

**GitHub Flavored Markdown**:

- [GitHub Docs | Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [GitHub Docs | Keyboard shortcuts](https://docs.github.com/en/get-started/accessibility/keyboard-shortcuts)
- [GitHub Flavored Markdown Spec](https://github.github.com/gfm/)

**Other Markdown Flavors**:

- [Obsidian Flavored Markdown](https://help.obsidian.md/obsidian-flavored-markdown)
- [GitLab Flavored Markdown](https://docs.gitlab.com/user/markdown/)
- [MkDocs | Admonitions](https://squidfunk.github.io/mkdocs-material/reference/admonitions/)

**Other References**:

- [Markdown Preview Enhanced](https://shd101wyy.github.io/markdown-preview-enhanced/#/) - VS Code extension for Markdown
- [BabelMark](https://babelmark.github.io/) - Online tool to compare Markdown implementations
- [Prism.js](https://prismjs.com/#supported-languages) - Syntax highlighter used by Obsidian

## This is a heading H2

### This is a heading H3

#### This is a heading H4

##### This is a heading H5

###### This is a heading H6

---

## Basic Writing and Formatting

### Styling Text

You can ==emphasize text in multiple ways==. Use _italics_, **bold**, ~~strikethrough~~, or combine these emphasis styles together.

| Style                     | Syntax             | Shortcut          | Example                                 |
| ------------------------- | ------------------ | ----------------- | --------------------------------------- |
| **Bold**                  | `** **` or `__ __` | <kbd>Ctrl+B</kbd> | `**This text will be bold ⬤**`          |
| _Italic_                  | `* *` or `_ _`     | <kbd>Ctrl+I</kbd> | `*This text will be italic*`            |
| **_All bold and italic_** | `*** ***`          | None              | `***All this text is important***`      |
| `Monospaced`              | `` ` ` ``          | None              | `` `code` ``                            |
| ~~Strikethrough~~         | `~~ ~~`            | None              | `~~This was mistaken text~~`            |
| Subscript x<sub>1</sub>   | `<sub> </sub>`     | None              | `This is a <sub>subscript</sub> text`   |
| Superscript x<sup>2</sup> | `<sup> </sup>`     | None              | `This is a <sup>superscript</sup> text` |
| <ins>Underline</ins>      | `<ins> </ins>`     | None              | `This is an <ins>underlined</ins> text` |

_This text will be italic._
_This will also be italic._

**This text will be bold.**
**This will also be bold.**

**_This text is really important!_**
**_This text is really important!_**

Use two equal signs to ==highlight text==.

~~The world is flat.~~ Today, we know that the world is round.

### CSS Color Variables

The following samples test the CSS color variables defined in the custom theme:

- <span style="color: var(--text-normal)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--text-normal)</tt></span>
- <span style="color: var(--text-muted)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--text-muted)</tt></span>
- <span style="color: var(--text-faint)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--text-faint)</tt></span>
- <span style="color: var(--color-red)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-red)</tt></span>
- <span style="color: var(--color-yellow)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-yellow)</tt></span>
- <span style="color: var(--color-green)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-green)</tt></span>
- <span style="color: var(--color-blue)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-blue)</tt></span>
- <span style="color: var(--color-purple)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-purple)</tt></span>
- <span style="color: var(--color-magenta)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-magenta)</tt></span>

On Blockquote Background:

> - <span style="color: var(--text-normal)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--text-normal)</tt></span>
> - <span style="color: var(--text-muted)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--text-muted)</tt></span>
> - <span style="color: var(--text-faint)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--text-faint)</tt></span>
> - <span style="color: var(--color-red)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-red)</tt></span>\
>   <span style="color: var(--code-red)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--code-red)</tt></span>
> - <span style="color: var(--color-yellow)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-yellow)</tt></span>\
>   <span style="color: var(--code-yellow)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--code-yellow)</tt></span>
> - <span style="color: var(--color-green)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-green)</tt></span>\
>   <span style="color: var(--code-green)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--code-green)</tt></span>
> - <span style="color: var(--color-blue)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-blue)</tt></span>\
>   <span style="color: var(--code-blue)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--code-blue)</tt></span>
> - <span style="color: var(--color-purple)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-purple)</tt></span>\
>   <span style="color: var(--code-purple)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--code-purple)</tt></span>
> - <span style="color: var(--color-magenta)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--color-magenta)</tt></span>\
>   <span style="color: var(--code-magenta)">This is normal 0123456789 and <b>bold text sample</b> ⬤ <tt>color: var(--code-magenta)</tt></span>

### Code Spans and Blocks

#### Inline Code Spans

To format text as inline code, wrap it in a single backtick <kbd>\`</kbd>. Markdown processors render inline code using the `<code>` HTML tag.

```markdown
- In Vim, `:wq` saves the file and quits, while `:q!` quits without saving any changes.
- In Markdown, to escape a backtick, use double backticks `` ` ``.
```

- In Vim, `:wq` saves the file and quits, while `:q!` quits without saving any changes.
- In Markdown, to escape a backtick, use double backticks `` ` ``.

#### Code Blocks

Code blocks are used for multi-line code snippets or longer examples. Markdown processors render them using the `<pre>` and `<code>` HTML tags together, which preserve whitespace and apply monospaced formatting.

> [!note]
> Obsidian uses **Prism.js** for syntax highlighting, a list of supported languages can be found [here](https://prismjs.com/#supported-languages).

There are several ways to create code blocks:

- **Fenced code blocks**: Wrap code in triple backticks <kbd>\`\`\`</kbd> or tildes <kbd>\~\~\~</kbd>.
- **Indented code blocks**: Alternatively, just indent each line by four spaces or one tab.
- **Syntax highlighting**: Specify a language (like python, bash, json) right after the opening backticks.
- **Line numbers**: Some processors support adding the `{.line-numbers}` class.
- **Escaping backticks in blocks**: If your code contains triple backticks, use four backticks <kbd>\`\`\`\`</kbd>.

#### Import File as Code Block

**Markdown Preview Enhanced**:

- To embed an external script as a code block, use the `@import` macro. The native engine requires the `as` attribute to properly apply the language grammar.
  ```markdown
  @import "script.py" {code_block=true as="python" class="line-numbers"}
  ```

#### Examples

##### Python Code

```python {.line-numbers}
class Person:
    """Represents a person with name and age attributes."""
    population: int = 0  # Class attribute shared among all instances

    def __init__(self, name: str, age: int):
        self.name = name
        self.age = age
        type(self).population += 1  # Preferred over hardcoding class name

    def __str__(self) -> str:
        return f"{self.name} -- age: {self.age}"

    def greet(self, other: str = "World") -> None:
        print(f"Hello, {other}! I'm {self.name}.")

    @classmethod
    def species_info(cls) -> str:
        return f"Total population: {cls.population}"

if __name__ == "__main__":
    p1 = Person("Alice", 30)
    p2 = Person("Bob", 17)
    print(p1)
    p1.greet(p2.name)
    print(Person.species_info())
```

##### C++ Code

```cpp {.line-numbers}
#include <iostream>
#include <string>

class Person {
  public:
    static inline int population = 0;  // Class variable shared by all instances

    // Constructor: uses member initializer list
    Person(std::string name, int age)
        : name_(std::move(name)),  // Transfers ownership to avoid duplication
          age_(age)
    {
        ++population;
    }

    // Read-only accessor: returns a reference of the private member
    const std::string& name() const { return name_; }

    std::string str() const {
        return name_ + " -- age: " + std::to_string(age_);
    }
    void greet(const std::string& other = "world") const {
        std::cout << "Hello, " << other << "! I'm " << name_ << ".\n";
    }
    static std::string species_info() {
        return "Total population: " + std::to_string(population);
    }

  private:  // Private member variables
    std::string name_;
    int age_;
};

int main() {
    Person p1("Alice", 30);
    Person p2("Bob", 17);
    std::cout << p1.str() << '\n';
    p1.greet(p2.name());
    std::cout << Person::species_info() << '\n';
}
```

##### XML Code

```xml
<?xml version='1.0' encoding='ISO-8859-1'  ?>
<!DOCTYPE index>
<!-- Some xml example -->
<index version="1.0" xmlns:pf="http://test">
   <name>Main Index</name>
   <indexitem text="rename" target="refactoring.rename"/>
   <indexitem text="move" target="refactoring.move"/>
   <indexitem text="migrate" target="refactoring.migrate"/>
   <indexitem text="usage search" target="find.findUsages"/>
   <indexitem>Matched tag name</indexitem>
   <someTextWithEntityRefs>&amp; &#x00B7;</someTextWithEntityRefs>
   <withCData><![CDATA[
          <object class="MyClass" key="constant">
          </object>
        ]]>
   </withCData>
   <indexitem text="project" target="project.management"/>
   <custom-tag>hello</custom-tag>
   <pf:foo pf:bar="bar"/>
</index>
```

### Lists

##### Unordered Lists

To create an unordered list, <kbd>ABCD</kbd> add dashes <kbd>-</kbd>, asterisks <kbd>\*</kbd>, or plus signs <kbd>+</kbd> in front of line items. Indent one or more items to create a nested list.

If a list item contains multiple paragraphs, each subsequent paragraph should be indented at least to the same level as the start of the list item text.

- First item
- Second item
- Third item
  - First _indented_ item
  - Second _indented_ item
- Fourth item

##### Ordered Lists

1. First item
2. Second item
3. Third item
   1. First _indented_ item
   2. Second _indented_ item
4. Fourth item

##### Task Lists

- [x] This is a _complete_ item
- [ ] This is an _incomplete_ item
- First item
- Second item

1. First ordered item
2. Second ordered item

##### Adding Elements in Lists

If a list item contains multiple paragraphs, subsequent paragraphs must be indented to align with the start of the list item text.

1. This is the first list item.\
   I need to add another paragraph below the first list item.

2. Here's the second list item.

   I need to add another paragraph below the second list item.

   I need to add another paragraph below the second list item.

3. And here's the third list item.

##### Description (Definition) Lists

A description list is a list of terms with corresponding descriptions. Each term can have multiple descriptions. In HTML this is represented with `<dl>` (description list), `<dt>` (description term), and `<dd>` (description details) tags.

While standard Markdown does not include a dedicated syntax for definition lists, they are supported by Markdown Preview Enhanced (MPE), MkDocs, and GitLab. Note that GitHub does not currently support this syntax.

```markdown
Term 1
: Definition of term 1

Term 2
: Definition of term 2
: Another definition for term 2
```

Term 1
: Definition of term 1

Term 2
: Definition of term 2
: Another definition for term 2

### Line Breaks

How line breaks are rendered depends on the **Markdown processor settings**. According to the **CommonMark** specification, a single line break is rendered as a **space**, not a new line.

To reliably force a **line break**, use one of the following methods:

- **Backslash (recommended)**: Use a backslash `\` at the end of the first line.

  ```markdown
  This example\
  Will span two lines
  ```

- **HTML Tag**: Use an HTML `<br>` tag.

  ```markdown
  This example<br>
  Will span two lines
  ```

- **Two Spaces**: Add two spaces at the end of the first line.
  ```markdown
  This example&nbsp;&nbsp;
  Will span two lines
  ```

**Example**:
This example\
Will span two lines

### Blockquotes

Blockquotes are created by starting a line with the <kbd>></kbd> symbol. They are typically used to indicate quoted text or to highlight information.

```markdown
> **Text that is a quote**\
> When viewing a conversation, you can automatically quote text in a comment by highlighting the text,
> then typing <kbd>R</kbd>.
```

> **Text that is a quote**\
> When viewing a conversation, you can automatically quote text in a comment by highlighting the text,
> then hitting <kbd>R</kbd>.

### Images

To add an image, use the following standard Markdown syntax:

```markdown
![Alt Text](URL "Optional caption/title.")
```

![Image](https://history-computer.com/ModernComputer/Electronic/Images/whirlwind1.jpg "This is a sample image.")

Some Markdown procesors support **resizing images** using a syntax that appends attributes in curly braces immediately after the image declaration such as `{width="200px"}`.

```markdown
![octocat](https://octodex.github.com/images/original.png "Octocat resized!"){width="200px"}
```

![octocat](https://octodex.github.com/images/original.png "Octocat resized!"){width="200px"}

### Tables {.page-break}

To create tables use vertical bars <kbd>|</kbd> and hyphens <kbd>-</kbd>. Vertical bars separate columns, and hyphens define the column header. Outer vertical bars are optional.

```markdown
| First name | Last name |
| ---------- | --------- |
| Max        | Planck    |
| Marie      | Curie     |
```

| First name | Last name |
| ---------- | --------- |
| Max        | Planck    |
| Marie      | Curie     |

You can align text to the left, right, or center of a column by adding colons <kbd>:</kbd> to the header row.

```markdown
| Left Aligned | Centered | Right Aligned |
| :----------- | :------: | ------------: |
| Cell 1       |  Cell 2  |        Cell 3 |
| Cell 4       |  Cell 5  |        Cell 6 |
```

| Left Aligned | Centered | Right Aligned |
| :----------- | :------: | ------------: |
| Cell 1       |  Cell 2  |        Cell 3 |
| Cell 4       |  Cell 5  |        Cell 6 |

## Extended Formatting Syntax

### Math Typesetting

Many Markdown processors support rendering of `\LaTeX` formulas via **KaTeX** or **MathJax**.

- **KaTeX** is fast and lightweight. Supports most common math, but not _everything_.\
  See the list of [KaTeX supported functions](https://katex.org/docs/supported.html).

- **MathJax** is slower, but provides near-complete $\text{\LaTeX}$ math support, including many extensions.

**Rendering Rules (by default)**:

- Expression enclosed in `$...$` or `\(...\)` are rendered _inline_.
- Expression enclosed in `$$...$$` or `\[...\]` or math code-block are rendered as _block_ equations.

##### Inline Math Examples

You can insert inline math like `$e^{2i\pi} = 1$`: $e^{2i\pi} = 1$.

##### Block Math Examples {.page-break}

```latex
% Fourier transform
\text{Fourier transform:}\quad
\boxed{F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt}

% Dirac delta function
\text{Dirac delta function:}\quad
\delta(t) = \begin{cases}
    0 & \text{for } t \ne 0 \\
    \infty & \text{for } t = 0
\end{cases},\hspace{1.5em}
\int_{-\infty}^{\infty} \delta(t) dt = 1

% Determinant
\det(\mathbf{A}) = \begin{vmatrix}
    a & b \\
    c & d
\end{vmatrix} = ad - bc

% Matrix
\mathbf{A}_{m,n} = \begin{pmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
    \vdots  & \vdots  & \ddots & \vdots  \\
    a_{m,1} & a_{m,2} & \cdots & a_{m,n}
\end{pmatrix}
```

$$
\text{Fourier transform:}\quad
\boxed{F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt}
$$

$$
\text{Dirac delta function:}\quad
\delta(t) = \begin{cases}
    0 & \text{for } t \ne 0 \\
    \infty & \text{for } t = 0
\end{cases},\hspace{1.5em}
\int_{-\infty}^{\infty} \delta(t) dt = 1
$$

$$
\det(\mathbf{A}) = \begin{vmatrix}
    a & b \\
    c & d
\end{vmatrix} = ad - bc
$$

$$
\mathbf{A}_{m,n} = \begin{pmatrix}
    a_{1,1} & a_{1,2} & \cdots & a_{1,n} \\
    a_{2,1} & a_{2,2} & \cdots & a_{2,n} \\
    \vdots  & \vdots  & \ddots & \vdots  \\
    a_{m,1} & a_{m,2} & \cdots & a_{m,n}
\end{pmatrix}
$$

### Admonitions (Callouts)

**Admonitions** (also called **alerts** or **callouts**) highlight important information, such as warnings, tips, or notes using a visually distinct block. While standard Markdown does not support alerts, many Markdown processors add them through custom syntax.

By default, a callout’s **title** is the type identifier shown in title case. This can be customized by adding text after the identifier.

#### GitHub Flavored Markdown & Obsidian

> [!note] Example `[!note]` Callout
>
> You can include multiple paragraphs, inline formatting such as **strong emphasis**, _italic highlights_, inline code like `const value = true`, and even keyboard shortcuts like <kbd>Ctrl+S</kbd>.
>
> Common **_use cases_** for a note callout include:
>
> - Adding background context or clarification without distracting from the main topic.
> - Documenting small but important details, flags, or configuration hints.
>
> Math example using $\text{\LaTeX}$ syntax:
>
> $$
> F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
> $$
>
> ```latex
> F(\omega) = \int_{-\infty}^{\infty} f(t) e^{-i\omega t} dt
> ```

> [!note]
> General **remarks** or **supplementary information** that adds context without interrupting the main flow.

> [!abstract]
> A brief **summary** or high-level overview of the content that follows.
> **Aliases**: `summary`, `tldr`

> [!info]
> Neutral, factual **information** meant to inform or clarify a concept.

> [!todo]
> Tasks, action items, or things that still need **to be done**.

> [!tip]
> Helpful **advices**, **best practices**, or **suggestions** to improve outcomes.
> **Aliases**: `hint`, `important`

> [!success]
> Confirmation that something **worked**, was **completed**, or achieved as expected.
> **Aliases**: `check`, `done`

> [!question]
> Questions, prompts for thinking, or areas where clarification is needed.
> **Aliases**: `help`, `faq`

> [!warning]
> Important notices about **potential issues** or situations requiring caution.
> **Aliases**: `caution`, `attention`

> [!failure]
> Descriptions of **unsuccessful** outcomes, **mistakes**, or unmet requirements.
> **Aliases**: `fail`, `missing`

> [!danger]
> Critical alerts about serious **risks**, **errors**, or situations that may cause harm.
> **Alias**: `error`

> [!bug]
> Known **defects**, glitches, or **unintended behavior** in a system or process.

> [!example]
> Concrete illustrations or **sample usage** to demonstrate a concept in practice.

> [!quote]
> Quoted text, **citations**, or **references** from an external source.
> **Alias**: `cite`

<div class="page-break"></div>

#### Markdown Preview Enhanced (VS Code Plugin)

The **MPE** extension natively supports only the [MKDocs syntax](https://squidfunk.github.io/mkdocs-material/reference/admonitions/) for admonitions.

If you also want to support the **GitHub callout syntax**, you need to extend the Markdown parser used by the extension:

- Run the command **Markdown Preview Enhanced: Extend Parser (Global)**.
- This opens the `parser.js` file.
- Override the `onWillParseMarkdown` hook with the follwing [code snippet](https://github.com/shd101wyy/vscode-markdown-preview-enhanced/issues/1911).

!!! note

    General remarks or supplementary information that adds context without interrupting the main flow.

!!! abstract

    A brief summary or high-level overview of the content that follows.

!!! info

    Neutral, factual information meant to inform or clarify a concept.

!!! tip

    Helpful advice, best practices, or suggestions to improve outcomes.

!!! success

    Confirmation that something worked, was completed, or achieved as expected.

!!! question

    Questions, prompts for thinking, or areas where clarification is needed.

!!! warning

    Important notices about potential issues or situations requiring caution.

!!! failure

    Descriptions of unsuccessful outcomes, mistakes, or unmet requirements.

!!! danger

    Critical alerts about serious risks, errors, or situations that may cause harm.

!!! bug

    Known defects, glitches, or unintended behavior in a system or process.

!!! example

    Concrete illustrations or sample usage to demonstrate a concept in practice.

!!! quote

    Quoted text, citations, or references from an external source.
