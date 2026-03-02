---
name: LH
fullname: Load Halfword
inst: lh
format: "lh rd, offset(rs1)"
description: Loads a halfword (16 bits) from memory at address `rs1 + offset`, sign-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x1"
funct7: ""
operation: "rd = sext(M[rs1 + sext(offset)][15:0])"
exampleusage: "// x5 = sign-extended halfword at address (x6 + 4)\nlh x5, 4(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - The loaded halfword is sign-extended to fill the register
  - Address should be naturally aligned (2-byte boundary) for best performance
---
