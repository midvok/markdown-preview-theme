# WaveDrom Diagrams

> [!WARNING]
> WaveDrom diagrams do not render correctly in the current version of **Markdown Preview Enhanced** (MPE). Some lines are missing from the figures.

## Examples

###### Official Example

```wavedrom
{ signal: [
  { name: "clk",         wave: "p.....|..." },
  { name: "Data",        wave: "x.345x|=.x", data: ["head", "body", "tail", "data"] },
  { name: "Request",     wave: "0.1..0|1.0" },
  {},
  { name: "Acknowledge", wave: "1.....|01." }
]}
```

###### UART Frame

```wavedrom
{ signal: [
  { node: "..A..........B", period: 2 },
  { name: "Frame",    wave: "=.34444444456=.", period: 2,
    data: ["Idle", "Start", "D0 (LSB)", "D1", "D2", "D3", "D4", "D5", "D6",
           "D7 (MSB)", "Parity", "Stop", "Idle"] },
  { name: "TX → RX",  wave: "1.01.010.10.1..", period: 2 },
  { node: "...CD", period: 2 },
  {},
  ["Transmitter",
    { name: "TXE",    wave: "101............", period: 2 },
    { name: "TC",     wave: "10...........1.", period: 2 }
  ],
  {},
  ["Receiver",
    { name: "Sample", wave: "0....PlPlPlPlPlPlPlPlPlPlPl...",
      node: ".........................E" },
    { name: "RXNE",   wave: "0........................1..0.",
      node: ".........................F..G" }
  ],
  {},
  ["Special",
    { name: "Idle frame",  wave: "1..............", period: 2 },
    { name: "Break frame", wave: "1.0..........1.", period: 2 }
  ]
],
  edge: [
    "A<->B 1 frame = 11 bits (8E1)",
    "C<->D t_bit",
    "E-|>F",
    "F<->G ISR"
  ],
  head: { text: "UART frame: 0x4B ('K'), 8E1, LSB first" },
  foot: { text: "t_bit = 1/baud · idle = high (mark) · even parity: count of 1s in D0..D7 + P is even" }
}
```
