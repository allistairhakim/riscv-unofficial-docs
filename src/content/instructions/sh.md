---
name: SH
fullname: Store Halfword
inst: sh
format: "sh rs2, offset(rs1)"
description: Stores the lowest halfword (16 bits) of `rs2` to memory at address `rs1 + offset`
encoding: S
opcode: "0100011"
funct3: "0x1"
funct7: ""
operation: "Memory[rs1 + sign-extend(offset)] = rs2[15:0]"
exampleusage: "// Store lowest halfword of x5 to address (x6 + 4)\nsh x5, 4(x6)"
notes:
  - "`Memory[address] = value` writes to memory at the computed address"
  - "`rs2[15:0]` means bits 15 down to 0 of rs2 (the lowest 16 bits, i.e., one halfword)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - Only the lowest 16 bits of rs2 are stored; the upper bits are ignored
  - Address should be naturally aligned (2-byte boundary) for best performance
---
