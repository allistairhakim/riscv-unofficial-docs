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
  - "`|` is the bitwise OR operator (each bit of the result is 1 if either corresponding bit is 1)"
  - While `or rd, rs1, x0` can copy a register, the canonical MV pseudo-instruction uses `addi rd, rs1, 0`
---
