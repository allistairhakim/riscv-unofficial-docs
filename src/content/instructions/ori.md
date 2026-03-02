---
name: ORI
fullname: OR Immediate
inst: ori
format: "ori rd, rs1, imm"
description: Performs bitwise OR on `rs1` and the sign-extended 12-bit immediate, storing the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x6"
funct7: ""
operation: "rd = rs1 | sign-extend(imm)"
exampleusage: "// x5 = x6 | 0xFF\nori x5, x6, 0xFF"
notes:
  - "`|` is the bitwise OR operator (each bit of the result is 1 if either corresponding bit is 1)"
  - "`sign-extend(imm)` expands the 12-bit immediate to 32/64 bits by copying its sign bit"
  - Useful for setting specific bits to 1
---
