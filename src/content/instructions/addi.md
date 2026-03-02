---
name: ADDI
fullname: Add Immediate
inst: addi
format: "addi rd, rs1, imm"
description: Adds the sign-extended 12-bit immediate to `rs1` and stores the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x0"
funct7: ""
operation: "rd = rs1 + sign-extend(imm)"
exampleusage: "// x5 = x6 + 10\naddi x5, x6, 10"
notes:
  - "`sign-extend(imm)` means the 12-bit immediate is expanded to 32/64 bits by copying its sign bit (bit 11) into all upper bits, preserving negative values"
  - "`addi rd, rs1, 0` is used as the MV (move) pseudo-instruction"
  - "`addi rd, x0, imm` is used as the LI (load immediate) pseudo-instruction"
  - "`addi x0, x0, 0` is encoded as NOP"
---
