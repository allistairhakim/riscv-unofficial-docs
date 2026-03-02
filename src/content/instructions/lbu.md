---
name: LBU
fullname: Load Byte Unsigned
inst: lbu
format: "lbu rd, offset(rs1)"
description: Loads a byte from memory at address `rs1 + offset`, zero-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x4"
funct7: ""
operation: "rd = zext(M[rs1 + sext(offset)][7:0])"
exampleusage: "// x5 = zero-extended byte at address (x6 + 4)\nlbu x5, 4(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - The loaded byte is zero-extended (not sign-extended) to fill the register
  - Use for unsigned byte data
---
