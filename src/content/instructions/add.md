---
name: ADD
inst: add
format: "add rd, rs1, rs2"
description: Adds two source registers (`rs1`, `rs2`) and loads the result into a destination register (`rd`)
encoding: R
opcode: "0110011"
funct3: "0x0"
funct7: "0x00"
operation: "rd = rs1 + rs2"
exampleusage: "// x5 = x6 + x7\nadd x5, x6, x7"
notes:
  - Overflow of the result is ignored (i.e. only the lower 32 bits of the result is loaded into `rd`)
---
