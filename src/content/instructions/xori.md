---
name: XORI
fullname: XOR Immediate
inst: xori
format: "xori rd, rs1, imm"
description: Performs bitwise exclusive OR on `rs1` and the sign-extended 12-bit immediate, storing the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x4"
funct7: ""
operation: "rd = rs1 ^ sext(imm)"
exampleusage: "// x5 = x6 ^ 0xFF\nxori x5, x6, 0xFF"
notes:
  - "`xori rd, rs1, -1` inverts all bits of `rs1` (NOT pseudo-instruction)"
---
