---
name: SB
fullname: Store Byte
inst: sb
format: "sb rs2, offset(rs1)"
description: Stores the lowest byte of `rs2` to memory at address `rs1 + offset`
encoding: S
opcode: "0100011"
funct3: "0x0"
funct7: ""
operation: "Memory[rs1 + sign-extend(offset)] = rs2[7:0]"
exampleusage: "// Store lowest byte of x5 to address (x6 + 4)\nsb x5, 4(x6)"
notes:
  - "`Memory[address] = value` writes to memory at the computed address"
  - "`rs2[7:0]` means bits 7 down to 0 of rs2 (the lowest 8 bits, i.e., one byte)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - Only the lowest 8 bits of rs2 are stored; the upper bits are ignored
---
