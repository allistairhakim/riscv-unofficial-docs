---
name: BLTU
fullname: Branch if Less Than Unsigned
inst: bltu
format: "bltu rs1, rs2, offset"
description: Branches to `PC + offset` if `rs1` is less than `rs2` (unsigned comparison)
encoding: B
opcode: "1100011"
funct3: "0x6"
funct7: ""
operation: "if (rs1 <u rs2) PC = PC + sext(offset)"
exampleusage: "// Branch to label if x5 < x6 (unsigned)\nbltu x5, x6, label"
notes:
  - The 12-bit offset is sign-extended and added to the PC
  - Comparison is performed as unsigned integers
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
---
