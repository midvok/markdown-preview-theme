---
markdown:
  image_dir: img/mermaid
  path: test-mermaid.gfm.md
  ignore_from_front_matter: true
---

# Mermaid Diagrams

**References**:

- [About Mermaid ](https://mermaid.ai/open-source/intro/)

## Examples

### Class Diagram

```mermaid {filename="mermaid-class.png"}
---
config:
  theme: redux-color
  look: neo
  layout: elk
---
classDiagram
    direction TB

    class Shape {
        <<abstract>>
        #string name
        #Point position
        +area()* double
        +perimeter()* double
        +moveBy(double dx, double dy) void
    }
    class Point {
        +double x
        +double y
        +distanceTo(Point other) double
    }
    class Circle {
        -double radius
        +area() double
        +perimeter() double
    }
    class Ellipse {
        -double radiusX
        -double radiusY
        +area() double
        +perimeter() double
    }
    class Rectangle {
        -double width
        -double height
        +area() double
        +perimeter() double
    }
    class Square {
        +side() double
    }
    class Triangle {
        -Point[3] vertices
        +area() double
        +perimeter() double
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

```mermaid {filename="mermaid-er.png"}
---
config:
  theme: redux-color
  look: neo
  layout: elk
---
erDiagram
    direction LR

    Customer ||--o{ Address : has
    Customer ||--o{ Order : places
    Address ||--o{ Order : "ships to"
    Category |o--o{ Category : "parent of"
    Category ||--o{ Product : contains
    Order ||--|{ OrderItem : contains
    Product ||--o{ OrderItem : "ordered as"
    Order ||--o{ Payment : "paid by"

    Customer {
        int id PK
        varchar(255) email UK
        varchar(100) first_name
        varchar(100) last_name
        varchar(20) phone "nullable"
        timestamp created_at
    }
    Address {
        int id PK
        int customer_id FK
        varchar(255) street
        varchar(100) city
        varchar(20) postal_code
        char(2) country_code
    }
    Category {
        int id PK
        int parent_id FK "nullable"
        varchar(100) name UK
    }
    Product {
        int id PK
        int category_id FK
        varchar(50) sku UK
        varchar(200) name
        text description "nullable"
        decimal unit_price
        int stock_qty
    }
    Order {
        int id PK
        int customer_id FK
        int shipping_address_id FK
        varchar(20) status
        timestamp ordered_at
    }
    OrderItem {
        int order_id PK, FK
        int product_id PK, FK
        int quantity
        decimal unit_price
    }
    Payment {
        int id PK
        int order_id FK
        varchar(20) method
        decimal amount
        varchar(20) status
        timestamp paid_at "nullable"
    }
```

### Flowchart

```mermaid {filename="mermaid-flowchart.png"}
---
config:
  theme: redux
  look: handDrawn
  layout: elk
---
flowchart TD
  IRQ([UART RX interrupt]) --> Read[Read byte from data register]
  Read --> Err{Framing or overrun error?}
  Err -- yes --> Clear[Clear error flags]
  Err -- no --> Full{Ring buffer full?}
  Full -- yes --> Drop[Drop byte, count overflow]
  Full -- no --> Store[Store byte, advance head index]
  Clear --> Exit([Return from interrupt])
  Drop --> Exit
  Store --> Exit
```

### Gantt Diagram

```mermaid {filename="mermaid-gantt.png"}
gantt
    title A Gantt Diagram
    dateFormat  YYYY-MM-DD
    section Section
    A task           :a1, 2014-01-01, 30d
    Another task     :after a1  , 20d
    section Another
    Task in sec      :2014-01-12  , 12d
    another task      : 24d
```

### TCP Packet

```mermaid {filename="mermaid-packet.png"}
---
title: "TCP Packet"
---
packet
0-15: "Source Port"
16-31: "Destination Port"
32-63: "Sequence Number"
64-95: "Acknowledgment Number"
96-99: "Data Offset"
100-105: "Reserved"
106: "URG"
107: "ACK"
108: "PSH"
109: "RST"
110: "SYN"
111: "FIN"
112-127: "Window"
128-143: "Checksum"
144-159: "Urgent Pointer"
160-191: "(Options and Padding)"
192-255: "Data (variable length)"
```

### XY Chart

```mermaid {filename="mermaid-xy.png"}
xychart
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]

```
