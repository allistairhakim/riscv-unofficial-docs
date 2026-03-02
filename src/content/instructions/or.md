---
name: OR
inst: or
format: "or rd, rs1, rs2"
description: Performs bitwise OR on `rs1` and `rs2`, storing the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x6"
funct7: "0x00"
operation: "rd = rs1 | rs2"
exampleusage: "// x5 = x6 | x7\nor x5, x6, x7"
notes:
  - "`or rd, rs1, x0` copies `rs1` to `rd` (MV pseudo-instruction)"
---
