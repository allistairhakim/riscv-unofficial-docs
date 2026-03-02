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
operation: "if (rs1 <u rs2) PC = PC + sign-extend(offset)"
exampleusage: "// Branch to label if x5 < x6 (unsigned)\nbltu x5, x6, label"
notes:
  - "`<u` means unsigned less-than comparison (treats values as positive integers, where 0xFFFFFFFF is the largest value)"
  - "`PC` is the Program Counter (address of the current instruction)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
---
