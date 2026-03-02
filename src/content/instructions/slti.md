---
name: SLTI
fullname: Set Less Than Immediate
inst: slti
format: "slti rd, rs1, imm"
description: Sets `rd` to 1 if `rs1` is less than the sign-extended immediate using signed comparison, otherwise sets `rd` to 0
encoding: I
opcode: "0010011"
funct3: "0x2"
funct7: ""
operation: "rd = (rs1 <s sext(imm)) ? 1 : 0"
exampleusage: "// x5 = (x6 < 10) ? 1 : 0 (signed)\nslti x5, x6, 10"
notes:
  - Comparison is performed as signed integers
  - Result is always 0 or 1
---
