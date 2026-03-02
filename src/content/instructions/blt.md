---
name: BLT
fullname: Branch if Less Than
inst: blt
format: "blt rs1, rs2, offset"
description: Branches to `PC + offset` if `rs1` is less than `rs2` (signed comparison)
encoding: B
opcode: "1100011"
funct3: "0x4"
funct7: ""
operation: "if (rs1 <s rs2) PC = PC + sext(offset)"
exampleusage: "// Branch to label if x5 < x6 (signed)\nblt x5, x6, label"
notes:
  - The 12-bit offset is sign-extended and added to the PC
  - Comparison is performed as signed integers
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
---
