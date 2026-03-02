---
name: LHU
fullname: Load Halfword Unsigned
inst: lhu
format: "lhu rd, offset(rs1)"
description: Loads a halfword (16 bits) from memory at address `rs1 + offset`, zero-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x5"
funct7: ""
operation: "rd = zext(M[rs1 + sext(offset)][15:0])"
exampleusage: "// x5 = zero-extended halfword at address (x6 + 4)\nlhu x5, 4(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - The loaded halfword is zero-extended (not sign-extended) to fill the register
  - Address should be naturally aligned (2-byte boundary) for best performance
  - Use for unsigned halfword data
---
