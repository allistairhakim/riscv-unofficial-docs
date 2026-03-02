---
name: SUB
fullname: Subtract
inst: sub
format: "sub rd, rs1, rs2"
description: Subtracts `rs2` from `rs1` and stores the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x0"
funct7: "0x20"
operation: "rd = rs1 - rs2"
exampleusage: "// x5 = x6 - x7\nsub x5, x6, x7"
notes:
  - Overflow is ignored; only the lower XLEN bits are written to `rd`
  - The only difference from ADD is bit 30 of funct7
---
