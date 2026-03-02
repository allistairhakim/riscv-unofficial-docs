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
operation: "if (rs1 >=s rs2) PC = PC + sign-extend(offset)"
exampleusage: "// Branch to label if x5 >= x6 (signed)\nbge x5, x6, label"
notes:
  - "`>=s` means signed greater-or-equal comparison (treats values as two's complement signed integers)"
  - "`PC` is the Program Counter (address of the current instruction)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
  - "`bge x0, rs2, offset` branches if `rs2` is <= 0 (BLEZ pseudo-instruction)"
---
