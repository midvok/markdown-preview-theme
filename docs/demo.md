---
title: Markdown Theme Demo
class: "headnum"
---

# Markdown Theme Demo

## This is a heading H2

### This is a heading H3

#### This is a heading H4

##### This is a heading H5

###### This is a heading H6

## Style Examples

#### Tables

| Class            | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `page-break`     | Enforce a page break before an element                           |
| `no-break`       | Prevent an element from being split across pages                 |
| `keep-with-next` | Prevent an element from being separated from the following block |

#### Code Blocks

```python {.line-numbers}
# Python 3: Fibonacci series up to n
def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()
fib(10)
```

#### Callouts

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

> [!tip]
> Helpful **advices**, **best practices**, or **suggestions** to improve outcomes.
> **Aliases**: `hint`, `important`

> [!warning]
> Important notices about **potential issues** or situations requiring caution.
> **Aliases**: `caution`, `attention`

> [!danger]
> Critical alerts about serious **risks**, **errors**, or situations that may cause harm.
> **Alias**: `error`
