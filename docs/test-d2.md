---
markdown:
  image_dir: img/d2
  path: test-d2.gfm.md
  ignore_from_front_matter: true
---

# D2 Diagram Examples

**References**:

- [D2 Docs](https://d2lang.com/)

## Examples

### Class Diagram

```d2
direction: up

# UML relationship styles
classes: {
  extends: {
    target-arrowhead: {shape: triangle; style.filled: false}
  }
  composition: {
    source-arrowhead: {shape: diamond; style.filled: true}
    target-arrowhead.shape: arrow
  }
}

# "shape" is a reserved keyword, so the id is "base"
base: "«abstract» Shape" {
  shape: class
  "#name": string
  "#position": Point
  +area(): double
  +perimeter(): double
  +moveBy(dx double, dy double): void
}

point: Point {
  shape: class
  +x: double
  +y: double
  +distanceTo(other Point): double
}

circle: Circle {
  shape: class
  -radius: double
  +area(): double
  +perimeter(): double
}

ellipse: Ellipse {
  shape: class
  -radiusX: double
  -radiusY: double
  +area(): double
  +perimeter(): double
}

rectangle: Rectangle {
  shape: class
  -width: double
  -height: double
  +area(): double
  +perimeter(): double
}

square: Square {
  shape: class
  +side(): double
}

triangle: Triangle {
  shape: class
  -vertices: "Point[3]"
  +area(): double
  +perimeter(): double
}

circle -> base: {class: extends}
ellipse -> base: {class: extends}
rectangle -> base: {class: extends}
triangle -> base: {class: extends}
square -> rectangle: {class: extends}
base <-> point: "position" {class: composition}
triangle <-> point: "3 vertices" {class: composition}
```

### Entity Relationship

```d2
direction: right

# Crow's foot notation: "many" at the FK side, "one" at the PK side
(** <-> **)[*].source-arrowhead.shape: cf-many
(** <-> **)[*].target-arrowhead.shape: cf-one-required

customer: Customer {
  shape: sql_table
  id: int {constraint: primary_key}
  email: varchar(255) {constraint: unique}
  first_name: varchar(100)
  last_name: varchar(100)
  phone: varchar(20)
  created_at: timestamp
}

address: Address {
  shape: sql_table
  id: int {constraint: primary_key}
  customer_id: int {constraint: foreign_key}
  street: varchar(255)
  city: varchar(100)
  postal_code: varchar(20)
  country_code: char(2)
}

category: Category {
  shape: sql_table
  id: int {constraint: primary_key}
  parent_id: int {constraint: foreign_key}
  name: varchar(100) {constraint: unique}
}

product: Product {
  shape: sql_table
  id: int {constraint: primary_key}
  category_id: int {constraint: foreign_key}
  sku: varchar(50) {constraint: unique}
  name: varchar(200)
  description: text
  unit_price: "decimal(10,2)"
  stock_qty: int
}

order: Order {
  shape: sql_table
  id: int {constraint: primary_key}
  customer_id: int {constraint: foreign_key}
  shipping_address_id: int {constraint: foreign_key}
  status: varchar(20)
  ordered_at: timestamp
}

order_item: OrderItem {
  shape: sql_table
  order_id: int {constraint: [primary_key; foreign_key]}
  product_id: int {constraint: [primary_key; foreign_key]}
  quantity: int
  unit_price: "decimal(10,2)"
}

payment: Payment {
  shape: sql_table
  id: int {constraint: primary_key}
  order_id: int {constraint: foreign_key}
  method: varchar(20)
  amount: "decimal(10,2)"
  status: varchar(20)
  paid_at: timestamp
}

address.customer_id <-> customer.id
category.parent_id <-> category.id: {target-arrowhead.shape: cf-one}
product.category_id <-> category.id
order.customer_id <-> customer.id
order.shipping_address_id <-> address.id
order_item.order_id <-> order.id: {source-arrowhead.shape: cf-many-required}
order_item.product_id <-> product.id
payment.order_id <-> order.id
```

### Flowchart

###### UART RX Interrupt

```d2
entry: UART RX IRQ {shape: oval}
status: Read status register
err: Framing / parity\nerror? {shape: diamond}
clear: Clear error flags
read: Read data register {shape: parallelogram}
full: Ring buffer full? {shape: diamond}
store: Store byte,\nadvance head
drop: Set overflow flag
exit: Return from interrupt {shape: oval}

entry -> status -> err
err -> clear: yes
err -> read: no
read -> full
full -> drop: yes
full -> store: no
clear -> exit
store -> exit
drop -> exit
```

