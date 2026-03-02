---
name: SLT
fullname: Set Less Than
inst: slt
format: "slt rd, rs1, rs2"
description: Sets `rd` to 1 if `rs1` is less than `rs2` using signed comparison, otherwise sets `rd` to 0
encoding: R
opcode: "0110011"
funct3: "0x2"
funct7: "0x00"
operation: "rd = (rs1 <s rs2) ? 1 : 0"
exampleusage: "// x5 = (x6 < x7) ? 1 : 0 (signed)\nslt x5, x6, x7"
notes:
  - Comparison is performed as signed integers
  - Result is always 0 or 1
---
