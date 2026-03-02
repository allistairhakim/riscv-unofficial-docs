---
name: LW
fullname: Load Word
inst: lw
format: "lw rd, offset(rs1)"
description: Loads a word (32 bits) from memory at address `rs1 + offset` and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x2"
funct7: ""
operation: "rd = sext(M[rs1 + sext(offset)][31:0])"
exampleusage: "// x5 = word at address (x6 + 8)\nlw x5, 8(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - In RV64, the loaded word is sign-extended to 64 bits
  - Address should be naturally aligned (4-byte boundary) for best performance
---
