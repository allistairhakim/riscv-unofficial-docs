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
  - "`<<` is the left shift operator (moves bits toward more significant positions)"
  - "`rs2[4:0]` means bits 4 down to 0 of rs2 (the lowest 5 bits), giving a shift amount of 0-31"
  - Zeros are shifted into the lower (least significant) bits
  - Left shifting by n is equivalent to multiplying by 2^n
---
