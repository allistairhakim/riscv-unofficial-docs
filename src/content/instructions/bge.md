---
name: BGE
fullname: Branch if Greater or Equal
inst: bge
format: "bge rs1, rs2, offset"
description: Branches to `PC + offset` if `rs1` is greater than or equal to `rs2` (signed comparison)
encoding: B
opcode: "1100011"
funct3: "0x5"
funct7: ""
operation: "if (rs1 >=s rs2) PC = PC + sext(offset)"
exampleusage: "// Branch to label if x5 >= x6 (signed)\nbge x5, x6, label"
notes:
  - The 12-bit offset is sign-extended and added to the PC
  - Comparison is performed as signed integers
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
  - "`bge x0, rs2, offset` branches if `rs2` is <= 0 (BLEZ pseudo-instruction)"
---
