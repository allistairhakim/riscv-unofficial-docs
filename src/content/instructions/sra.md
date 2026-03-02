---
name: SRA
fullname: Shift Right Arithmetic
inst: sra
format: "sra rd, rs1, rs2"
description: Performs arithmetic right shift on `rs1` by the shift amount in the lower 5 bits (RV32) or 6 bits (RV64) of `rs2`, storing the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x5"
funct7: "0x20"
operation: "rd = rs1 >>s rs2[4:0]"
exampleusage: "// x5 = x6 >> x7[4:0] (arithmetic)\nsra x5, x6, x7"
notes:
  - "`>>s` is the arithmetic (signed) right shift operator"
  - "`rs2[4:0]` means bits 4 down to 0 of rs2 (the lowest 5 bits), giving a shift amount of 0-31"
  - The sign bit (bit 31 in RV32) is copied into the vacated upper bits, preserving the sign of negative numbers
  - Arithmetic right shift treats the value as signed (use SRL for unsigned values)
  - Right shifting by n is equivalent to signed division by 2^n (rounding toward negative infinity)
---
