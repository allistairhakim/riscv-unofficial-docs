---
name: XOR
inst: xor
format: "xor rd, rs1, rs2"
description: Performs bitwise exclusive OR on `rs1` and `rs2`, storing the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x4"
funct7: "0x00"
operation: "rd = rs1 ^ rs2"
exampleusage: "// x5 = x6 ^ x7\nxor x5, x6, x7"
notes:
  - XOR with -1 (all ones) inverts all bits (NOT pseudo-instruction)
---
