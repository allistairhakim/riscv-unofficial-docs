---
name: SLL
fullname: Shift Left Logical
inst: sll
format: "sll rd, rs1, rs2"
description: Performs logical left shift on `rs1` by the shift amount in the lower 5 bits (RV32) or 6 bits (RV64) of `rs2`, storing the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x1"
funct7: "0x00"
operation: "rd = rs1 << rs2[4:0]"
exampleusage: "// x5 = x6 << x7[4:0]\nsll x5, x6, x7"
notes:
  - Zeros are shifted into the lower bits
  - Only the lower 5 bits of rs2 are used for the shift amount (RV32)
---
