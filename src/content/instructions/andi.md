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
operation: "rd = rs1 & sign-extend(imm)"
exampleusage: "// x5 = x6 & 0xFF\nandi x5, x6, 0xFF"
notes:
  - "`&` is the bitwise AND operator (each bit of the result is 1 only if both corresponding bits are 1)"
  - "`sign-extend(imm)` expands the 12-bit immediate to 32/64 bits by copying its sign bit"
  - Useful for masking (keeping only certain bits) and clearing bits
---
