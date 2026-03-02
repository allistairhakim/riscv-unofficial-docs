---
name: LB
fullname: Load Byte
inst: lb
format: "lb rd, offset(rs1)"
description: Loads a byte from memory at address `rs1 + offset`, sign-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x0"
funct7: ""
operation: "rd = sext(M[rs1 + sext(offset)][7:0])"
exampleusage: "// x5 = sign-extended byte at address (x6 + 4)\nlb x5, 4(x6)"
notes:
  - The 12-bit offset is sign-extended before adding to the base address
  - The loaded byte is sign-extended to fill the register
---
