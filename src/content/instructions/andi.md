---
name: ANDI
fullname: AND Immediate
inst: andi
format: "andi rd, rs1, imm"
description: Performs bitwise AND on `rs1` and the sign-extended 12-bit immediate, storing the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x7"
funct7: ""
operation: "rd = rs1 & sext(imm)"
exampleusage: "// x5 = x6 & 0xFF\nandi x5, x6, 0xFF"
notes:
  - Useful for masking and clearing bits
---
