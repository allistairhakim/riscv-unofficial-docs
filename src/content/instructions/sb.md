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
operation: "M[rs1 + sext(offset)] = rs2[7:0]"
exampleusage: "// Store lowest byte of x5 to address (x6 + 4)\nsb x5, 4(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - Only the lowest 8 bits of rs2 are stored
---
