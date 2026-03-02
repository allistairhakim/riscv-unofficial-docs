---
name: SRAI
fullname: Shift Right Arithmetic Immediate
inst: srai
format: "srai rd, rs1, shamt"
description: Performs arithmetic right shift on `rs1` by the shift amount `shamt`, storing the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x5"
funct7: "0x20"
operation: "rd = rs1 >>s shamt"
exampleusage: "// x5 = x6 >> 3 (arithmetic)\nsrai x5, x6, 3"
notes:
  - "`>>s` is the arithmetic (signed) right shift operator"
  - "`shamt` (shift amount) is a 5-bit value (0-31) encoded in the instruction"
  - The sign bit (bit 31 in RV32) is copied into the vacated upper bits, preserving the sign of negative numbers
  - Arithmetic right shift treats the value as signed (use SRLI for unsigned values)
  - Right shifting by n is equivalent to signed division by 2^n (rounding toward negative infinity)
---
