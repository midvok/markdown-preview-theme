---
markdown:
  image_dir: img/plantuml
  path: test-plantuml.gfm.md
  ignore_from_front_matter: true
---

# PlantUML Diagrams

**References**:

- [PlantUML](https://plantuml.com/)

> [!IMPORTANT]
>
> ##### Requirements
>
> MPE renders PlantUML locally, so these must be installed:
>
> - **PlantUML** – the `plantuml.jar` file
> - **Java** – runtime used to run the jar (e.g. OpenJDK 21)
> - **GraphViz** – required for most diagram types except sequence diagrams
>
> **GraphViz** provides a program called **dot** which is expected to be found in PATH
>
> - You can also specify the environment variable `GRAPHVIZ_DOT` to set its location:\
>    `export GRAPHVIZ_DOT=/usr/bin/dot`
>
> **VS Code Settings**
>
> Then set the jar path in VS Code `settings.json`:
>
> ```json
> "markdown-preview-enhanced.plantumlJarPath": "/usr/share/java/plantuml.jar"
> ```

## Custom Style

PlantUML diagrams can be styled in three ways, from simplest to most flexible:

1. **Built-in themes**: one line, complete look
2. **Skinparams**: individual colors, fonts, borders, and connectors
3. **Inline overrides**: color of a single element or connector

They can be combined: a theme first, then skinparams to override parts of it, then inline colors for single elements.

### Built-in Themes

Add `!theme <name>` as the first line of the diagram:

```puml {code_block=true}
!theme sunlust
```

- **Light**: `plain`, `mono`, `sunlust`, `vibrant` (default)
- **Colorful**: `cerulean`, `cerulean-outline`, `cyborg`, `cyborg-outline`, `materia`, `materia-outline`, `spacelab`
- **Special**: `sketchy`, `sketchy-outline`, `blueprint`, `crt-green`, `crt-amber`

> [!TIP]
> To list all themes available in your PlantUML version, render a diagram containing only `help themes`.

### Skinparam Syntax

#### Direct Parameters

Each `skinparam` line sets one parameter. The name is `<Element><Property>`:

```puml {code_block=true}
skinparam BackgroundColor transparent
skinparam defaultFontName "Noto Sans"
skinparam defaultFontSize 13
skinparam classFontSize 15
skinparam classBorderColor #0284c7
skinparam activityDiamondBackgroundColor #fef3c7
```

- `default*` parameters apply to all elements unless overridden.
- Names are **case-insensitive**.
- Colors can be hex `#0284c7`, names `LightBlue`, or `transparent`.

#### Grouped Parameters

Parameters with the same element prefix can be grouped into a block. These two are equal:

```puml {code_block=true}
skinparam classBackgroundColor #f8fafc
skinparam classBorderColor #0284c7

skinparam class {
  BackgroundColor #f8fafc
  BorderColor #0284c7
}
```

A block without a prefix holds global parameters:

```puml {code_block=true}
skinparam {
  BackgroundColor transparent
  Shadowing false
  RoundCorner 10
}
```

### Parameter Reference

> [!TIP]
> To list all supported skinparams, render a diagram containing only `skinparameters`.

#### Global

| Parameter             | Description                                                      | Example       |
| --------------------- | ---------------------------------------------------------------- | ------------- |
| `BackgroundColor`     | Diagram background                                               | `transparent` |
| `DefaultFontName`     | Font of all text                                                 | `"Noto Sans"` |
| `DefaultFontSize`     | Size of all text                                                 | `13`          |
| `DefaultFontColor`    | Color of all text                                                | `#1e293b`     |
| `Shadowing`           | Drop shadows                                                     | `false`       |
| `RoundCorner`         | Corner radius of boxes                                           | `10`          |
| `Linetype`            | Connector routing: `ortho` (right angles), `polyline` (straight) | `ortho`       |
| `Nodesep` / `Ranksep` | Horizontal / vertical spacing between elements (px)              | `60`          |
| `Padding`             | Inner padding of elements                                        | `4`           |
| `Monochrome`          | Black and white only                                             | `true`        |
| `Handwritten`         | Sketchy hand-drawn look                                          | `true`        |

#### Connectors

Apply to arrows in all diagram types:

| Parameter                                            | Description              |
| ---------------------------------------------------- | ------------------------ |
| `ArrowColor`                                         | Line and arrowhead color |
| `ArrowThickness`                                     | Line width               |
| `ArrowFontColor` / `ArrowFontSize` / `ArrowFontName` | Arrow label text         |

#### Class and ER Diagrams

ER `entity` boxes use the same `class` parameters.

| Parameter (`skinparam class { ... }`)                            | Description                                                   |
| ---------------------------------------------------------------- | ------------------------------------------------------------- |
| `BackgroundColor`                                                | Box body                                                      |
| `HeaderBackgroundColor`                                          | Title area                                                    |
| `BorderColor` / `BorderThickness`                                | Outline                                                       |
| `FontColor` / `FontSize` / `FontName` / `FontStyle`              | Title text                                                    |
| `AttributeFontColor` / `AttributeFontSize` / `AttributeFontName` | Attributes and methods                                        |
| `StereotypeFontColor` / `StereotypeFontSize`                     | `<<stereotype>>` text                                         |
| `AttributeIconSize`                                              | Visibility icons (`+ - # ~`); `0` shows plain symbols instead |

Other useful settings:

| Setting                               | Description                                                              |
| ------------------------------------- | ------------------------------------------------------------------------ |
| `hide circle`                         | Hides the `C` / `E` / `A` letter icon in the header                      |
| `hide empty members`                  | Hides empty attribute/method sections                                    |
| `skinparam MinClassWidth 120`         | Minimum box width for a uniform look                                     |
| `skinparam package { ... }`           | Package/namespace frames (`BackgroundColor`, `BorderColor`, `FontColor`) |

#### Flowcharts (Activity)

| Parameter (`skinparam activity { ... }`)              | Description                      |
| ----------------------------------------------------- | -------------------------------- |
| `BackgroundColor` / `BorderColor` / `BorderThickness` | Action boxes                     |
| `FontColor` / `FontSize` / `FontName`                 | Action text                      |
| `DiamondBackgroundColor` / `DiamondBorderColor`       | `if` / `while` decision diamonds |
| `DiamondFontColor` / `DiamondFontSize`                | Decision text                    |
| `StartColor`                                          | `start` circle                   |
| `BarColor`                                            | `fork` / `end fork` bars         |

Decision diamonds have no padding of their own, so their text nearly touches the border. The global `skinparam Padding 4` adds space inside them (and slightly enlarges other boxes too). `skinparam ConditionEndStyle diamond` draws a merge diamond where `if` branches join.

Related blocks:

| Block                         | Description                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------- |
| `skinparam partition { ... }` | `partition` frames (`BackgroundColor`, `BorderColor`, `FontColor`)                  |
| `skinparam swimlane { ... }`  | Swimlanes (`BorderColor`, `TitleFontColor`, `Width`)                                |
| `skinparam note { ... }`      | Notes (`BackgroundColor`, `BorderColor`, `FontColor`); applies to all diagram types |

#### State Diagrams

| Parameter (`skinparam state { ... }`)                 | Description                            |
| ----------------------------------------------------- | -------------------------------------- |
| `BackgroundColor` / `BorderColor` / `BorderThickness` | State boxes                            |
| `FontColor` / `FontSize` / `FontName`                 | State name                             |
| `AttributeFontColor` / `AttributeFontSize`            | Description lines (e.g. `entry / ...`) |

`hide empty description` removes the empty lower section from states without description.

> [!TIP]
> Some parts have no `skinparam`, for example the `stop` circle in flowcharts and the `[*]` circles in state diagrams. Use the newer `<style>` syntax for those:
>
> ```puml {code_block=true}
> <style>
> stateDiagram {
>   circle { BackgroundColor #16a34a; LineColor #16a34a }
> }
> </style>
> ```

### Inline Overrides

Color a single element or connector directly in the diagram code:

```puml {code_block=true}
entity "Order" as o #fef9c3 ##[bold]ca8a04 { ... }
#fecaca:Critical step;
state Error #fecaca
customer ||-[#dc2626,dashed]-o{ order
A -[#16a34a,bold]-> B
```

| Syntax                  | Description                                         |
| ----------------------- | --------------------------------------------------- |
| `#color` after the name | Background color                                    |
| `##[style]color`        | Border style (`bold`, `dashed`, `dotted`) and color |
| `-[#color,style]->`     | Connector color and style                           |

### Shared Style File

To reuse a style across all diagrams, save the skinparams in a file (e.g. `my-style.iuml`) and include it at the top of each diagram:

```puml {code_block=true}
!include plantuml/my-style.iuml

class Car
Driver - Car : drives >
```

- Relative paths are resolved from the folder of the markdown file. MPE passes it to PlantUML as `-Dplantuml.include.path`.
- Absolute paths work too: `!include /home/user/plantuml/my-style.iuml`.

### Style Examples

#### Class and ER Diagram

:::flex

```puml {filename="class-default.png"}
title "Default theme"
hide circle
hide empty members

!$t = "<#transparent,#transparent>"
entity "Customer" as customer {
  $t| **id** | int        | PK  |
  | email    | varchar(255) | UNQ |
}
entity "Order" as order {
  $t| **id**    | int | PK |
  | customer_id | int | FK |
}
class Uart <<driver>> {
  -baud : int
  +read() : byte
}
customer ||--o{ order
```

```puml {filename="class-custom.png"}
title "Custom theme"
hide circle
hide empty members

skinparam linetype ortho
skinparam {
  BackgroundColor transparent
  DefaultFontName "Noto Sans"
  DefaultFontSize 13
  DefaultFontColor #1e293b
  RoundCorner 16
  Shadowing true
  ArrowColor #64748b
  ArrowFontColor #475569
  ArrowFontSize 11
  ArrowThickness 1.2
}
skinparam class {
  BackgroundColor #f8fafc
  HeaderBackgroundColor #e0f2fe
  BorderColor #0284c7
  BorderThickness 1.2
  FontColor #0c4a6e
  FontSize 15
  AttributeFontColor #334155
  StereotypeFontColor #0369a1
}
skinparam note {
  BackgroundColor #fef9c3
  BorderColor #ca8a04
  FontColor #713f12
}

!$t = "<#transparent,#transparent>"
entity "Customer" as customer {
  $t| **id** | int        | PK  |
  | email    | varchar(255) | UNQ |
}
entity "Order" as order {
  $t| **id**    | int | PK |
  | customer_id | int | FK |
}
class Uart <<driver>> {
  -baud : int
  +read() : byte
}
customer ||--o{ order
```

:::

#### Flowchart

:::flex

```puml {filename="flowchart-default.png"}
title "Default theme"

start
partition "UART RX" {
:Read status register;
if (Error?) then (yes)
  :Clear error flags;
else (no)
  :Read data register; <<input>>
  if (Buffer full?) then (yes)
    :Set overflow flag;
  else (no)
    :Store byte;
    :Set RX ready flag;
  endif
endif
}
note right: ISR context
stop
```

```puml {filename="flowchart-custom.png"}
title "Custom theme"

skinparam {
  BackgroundColor transparent
  DefaultFontName "Noto Sans"
  DefaultFontSize 13
  DefaultFontColor #1e293b
  Shadowing false
  RoundCorner 16
  ArrowColor #64748b
  ArrowThickness 1.2
  ArrowFontColor #475569
  ArrowFontSize 11
}
skinparam activity {
  BackgroundColor #e0f2fe
  BorderColor #0284c7
  BorderThickness 1.2
  FontColor #0c4a6e
  DiamondBackgroundColor #fef3c7
  DiamondBorderColor #d97706
  DiamondFontColor #78350f
  StartColor #16a34a
}
skinparam note {
  BackgroundColor #fef9c3
  BorderColor #ca8a04
  FontColor #713f12
}
skinparam partition {
  BackgroundColor #f8fafc
  BorderColor #94a3b8
  FontColor #475569
}

start
partition "UART RX" {
:Read status register;
if (Error?) then (yes)
  :Clear error flags;
else (no)
  :Read data register; <<input>>
  if (Buffer full?) then (yes)
    :Set overflow flag;
  else (no)
    :Store byte;
    :Set RX ready flag;
  endif
endif
}
note right: ISR context
stop
```

:::

#### State Diagram

```puml {filename="state-custom.png"}
skinparam {
  BackgroundColor transparent
  DefaultFontName "Noto Sans"
  DefaultFontSize 13
  DefaultFontColor #1e293b
  Shadowing false
  RoundCorner 10
  ArrowColor #64748b
  ArrowThickness 1.2
  ArrowFontColor #475569
  ArrowFontSize 11
}
skinparam note {
  BackgroundColor #fef9c3
  BorderColor #ca8a04
  FontColor #713f12
}
skinparam state {
  BackgroundColor #ede9fe
  BorderColor #7c3aed
  BorderThickness 1.2
  FontColor #4c1d95
  AttributeFontColor #5b21b6
  StartColor #16a34a
  EndColor #dc2626
}
<style>
stateDiagram {
  circle { BackgroundColor #475569; LineColor #475569 }
}
</style>

hide empty description
[*] --> Idle
Idle --> Receiving : start bit
Receiving --> Idle : stop bit
Receiving --> Error : framing error
Error --> Idle : flags cleared
Receiving : entry / reset bit counter
Idle --> [*] : disable
```

## Examples

### Class Diagram

```puml {filename="example-class.png"}
skinparam {
  BackgroundColor transparent
  DefaultFontName "Noto Sans"
  DefaultFontSize 13
  DefaultFontColor #1e293b
  RoundCorner 16
  Shadowing true
  ArrowColor #64748b
  ArrowFontColor #475569
  ArrowFontSize 11
  ArrowThickness 1.2
}
skinparam class {
  BackgroundColor #f8fafc
  HeaderBackgroundColor #e0f2fe
  BorderColor #0284c7
  BorderThickness 1.2
  FontColor #0c4a6e
  FontSize 15
  AttributeFontColor #334155
  StereotypeFontColor #0369a1
}
skinparam note {
  BackgroundColor #fef9c3
  BorderColor #ca8a04
  FontColor #713f12
}

hide empty members

abstract class Shape {
  #name : string
  #position : Point
  {abstract} +area() : double
  {abstract} +perimeter() : double
  +moveBy(dx : double, dy : double) : void
}

class Point {
  +x : double
  +y : double
  +distanceTo(other : Point) : double
}

class Circle {
  -radius : double
  +area() : double
  +perimeter() : double
}

class Ellipse {
  -radiusX : double
  -radiusY : double
  +area() : double
  +perimeter() : double
}

class Rectangle {
  -width : double
  -height : double
  +area() : double
  +perimeter() : double
}

class Square {
  +side() : double
}

class Triangle {
  -vertices : Point[3]
  +area() : double
  +perimeter() : double
}

Shape <|-- Circle
Shape <|-- Ellipse
Shape <|-- Rectangle
Shape <|-- Triangle
Rectangle <|-- Square
Shape *-- "1" Point : position
Triangle *-- "3" Point : vertices
```

### Entity Relationship

```puml {filename="example-er.png"}
skinparam {
  BackgroundColor transparent
  DefaultFontName "Noto Sans"
  DefaultFontSize 13
  DefaultFontColor #1e293b
  RoundCorner 16
  Shadowing true
  ArrowColor #64748b
  ArrowFontColor #475569
  ArrowFontSize 11
  ArrowThickness 1.2
}
skinparam class {
  BackgroundColor #f8fafc
  HeaderBackgroundColor #e0f2fe
  BorderColor #0284c7
  BorderThickness 1.2
  FontColor #0c4a6e
  FontSize 15
  AttributeFontColor #334155
  StereotypeFontColor #0369a1
}
skinparam note {
  BackgroundColor #fef9c3
  BorderColor #ca8a04
  FontColor #713f12
}
skinparam linetype ortho
hide circle

' Attributes as a borderless table: name | type | key (bold = PK, ? = nullable)
!$t = "<#transparent,#transparent>"

entity "Customer" as customer {
  $t| **id** | int | PK |
  | email | varchar(255) | UNQ |
  | first_name | varchar(100) | |
  | last_name | varchar(100) | |
  | phone | varchar(20)? | |
  | created_at | timestamp | |
}

entity "Address" as address {
  $t| **id** | int | PK |
  | customer_id | int | FK |
  | street | varchar(255) | |
  | city | varchar(100) | |
  | postal_code | varchar(20) | |
  | country_code | char(2) | |
}

entity "Category" as category {
  $t| **id** | int | PK |
  | parent_id | int? | FK |
  | name | varchar(100) | UNQ |
}

entity "Product" as product {
  $t| **id** | int | PK |
  | category_id | int | FK |
  | sku | varchar(50) | UNQ |
  | name | varchar(200) | |
  | description | text? | |
  | unit_price | decimal(10,2) | |
  | stock_qty | int | |
}

entity "Order" as order {
  $t| **id** | int | PK |
  | customer_id | int | FK |
  | shipping_address_id | int | FK |
  | status | varchar(20) | |
  | ordered_at | timestamp | |
}

entity "OrderItem" as order_item {
  $t| **order_id** | int | PK, FK |
  | **product_id** | int | PK, FK |
  | quantity | int | |
  | unit_price | decimal(10,2) | |
}

entity "Payment" as payment {
  $t| **id** | int | PK |
  | order_id | int | FK |
  | method | varchar(20) | |
  | amount | decimal(10,2) | |
  | status | varchar(20) | |
  | paid_at | timestamp? | |
}

customer ||--o{ address
customer ||--o{ order
address ||--o{ order
category |o--o{ category
category ||--o{ product
order ||--|{ order_item
product ||--o{ order_item
order ||--o{ payment
```

### Flowchart

```puml {filename="example-flowchart-uart.png"}
title Classic PIC18F EUSART – UART RX Interrupt

skinparam {
  BackgroundColor transparent
  DefaultFontName "Noto Sans"
  DefaultFontSize 13
  DefaultFontColor #1e293b
  Shadowing false
  RoundCorner 16
  ArrowColor #64748b
  ArrowThickness 1.2
  ArrowFontColor #475569
  ArrowFontSize 11
}
skinparam activity {
  BackgroundColor #e0f2fe
  BorderColor #0284c7
  BorderThickness 1.2
  FontColor #0c4a6e
  DiamondBackgroundColor #fef3c7
  DiamondBorderColor #d97706
  DiamondFontColor #78350f
  StartColor #16a34a
}
skinparam note {
  BackgroundColor #fef9c3
  BorderColor #ca8a04
  FontColor #713f12
}
skinparam partition {
  BackgroundColor #f8fafc
  BorderColor #94a3b8
  FontColor #475569
}
skinparam ConditionEndStyle diamond
' skinparam Padding 4

' $r() = register/bit name: bold monospace blue
!function $r($x)
!return "<font:monospaced><b><color:#0369a1>" + $x + "</color></b></font>"
!endfunction

' $v() = firmware variable/function: monospace red
!function $v($x)
!return "<font:monospaced><color:#dc2626>" + $x + "</color></font>"
!endfunction

start
:UART RX interrupt
($r("PIR1.RCIF") = 1 and $r("PIE1.RCIE") = 1,
enabled by $r("INTCON.GIE") = 1 and $r("INTCON.PEIE") = 1);

if (Overrun error?\n$r("RCSTA.OERR") = 1) then (yes)
  :Reset receiver to clear $r("OERR"):
  $r("RCSTA.CREN") = 0
  $r("RCSTA.CREN") = 1;
  :Set $v("rx_overrun") flag
  (for main loop);
else (no)
endif

while (Byte in RX FIFO?\n$r("PIR1.RCIF") = 1) is (yes)
  :Read status register $r("RCSTA")
  ($r("FERR"), $r("RX9D") of the next byte); <<input>>
  :Read data register $r("RCREG")
  (pops one byte from FIFO); <<input>>
  note right
    $r("RCIF") is read-only: it can't be
    cleared in software. Hardware clears
    it when the FIFO is empty.
  end note
  if (Framing error?\n$r("FERR") = 1) then (yes)
    :Discard byte
    (stop bit was 0);
  else (no)
    if (Ring buffer full?\n$v("next(head) == tail")) then (yes)
      :Discard byte,
      set $v("rx_overflow") flag;
    else (no)
      :Store byte in $v("rx_buf[head]"),
      advance $v("head");
    endif
  endif
endwhile (no, FIFO empty)

:Return from interrupt ($r("RETFIE"));
stop
```

### Timing Diagram

```puml {filename="example-timing-uart.png"}

title UART frame: 0x4B ('K'), 8E1, LSB first
caption t_bit = 1/baud | idle = high (mark) | even parity: count of 1s in D0..D7 + P is even
scale 10 as 75 pixels
hide time-axis

concise "Frame" as F
binary "TX → RX" as TX
binary "TXE" as TXE
binary "TC" as TC
binary "Sample" as S
binary "RXNE" as RXNE
binary "Idle frame" as IF
binary "Break frame" as BF

@0
F is Idle
TX is high
TXE is high
TC is high
S is low
RXNE is low
IF is high
BF is high

@10
TXE is low
TC is low

@20
F is Start #FFD6A5
TX is low
TXE is high
BF is low

@25
S is high
@30
S is low
F is "D0 (LSB)" #CAFFBF
TX is high
@35
S is high
@40
S is low
F is D1 #CAFFBF
@45
S is high
@50
S is low
F is D2 #CAFFBF
TX is low
@55
S is high
@60
S is low
F is D3 #CAFFBF
TX is high
@65
S is high
@70
S is low
F is D4 #CAFFBF
TX is low
@75
S is high
@80
S is low
F is D5 #CAFFBF
@85
S is high
@90
S is low
F is D6 #CAFFBF
TX is high
@95
S is high
@100
S is low
F is "D7 (MSB)" #CAFFBF
TX is low
@105
S is high
@110
S is low
F is Parity #A0C4FF
@115
S is high
@120
S is low
F is Stop #FFC6FF
TX is high
@125
S is high
RXNE is high
@130
S is low
F is Idle
TC is high
BF is high
@140
RXNE is low

highlight 20 to 130
F@20 <-> @130 : 1 frame = 11 bits (8E1)
TX@20 <-> @30 : t_bit
S@125 -> RXNE@125
RXNE@125 <-> @140 : ISR
```
