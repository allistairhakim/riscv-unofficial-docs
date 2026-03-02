---
name: AND
inst: and
format: "and rd, rs1, rs2"
description: Performs bitwise AND on `rs1` and `rs2`, storing the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x7"
funct7: "0x00"
operation: "rd = rs1 & rs2"
exampleusage: "// x5 = x6 & x7\nand x5, x6, x7"
notes:
  - Useful for masking bits
---
