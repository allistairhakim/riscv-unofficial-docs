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
operation: "M[rs1 + sext(offset)] = rs2[15:0]"
exampleusage: "// Store lowest halfword of x5 to address (x6 + 4)\nsh x5, 4(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - Only the lowest 16 bits of rs2 are stored
  - Address should be naturally aligned (2-byte boundary) for best performance
---
