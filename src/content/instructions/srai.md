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
  - The shift amount is encoded in the lower 5 bits of the immediate (RV32) or 6 bits (RV64)
  - The sign bit is preserved (shifted into upper bits)
  - Used for signed division by 2^shamt
  - Distinguished from SRLI by bit 30
---
