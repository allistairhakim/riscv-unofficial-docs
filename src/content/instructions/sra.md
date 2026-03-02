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
  - The sign bit is preserved (shifted into upper bits)
  - Used for signed division by powers of 2
  - The only difference from SRL is bit 30 of funct7
---
