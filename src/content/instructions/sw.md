---
name: SW
fullname: Store Word
inst: sw
format: "sw rs2, offset(rs1)"
description: Stores the lowest word (32 bits) of `rs2` to memory at address `rs1 + offset`
encoding: S
opcode: "0100011"
funct3: "0x2"
funct7: ""
operation: "M[rs1 + sext(offset)] = rs2[31:0]"
exampleusage: "// Store word in x5 to address (x6 + 8)\nsw x5, 8(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - In RV32, the entire register is stored; in RV64, only the lowest 32 bits
  - Address should be naturally aligned (4-byte boundary) for best performance
---
