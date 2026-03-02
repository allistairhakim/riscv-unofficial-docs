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
  - "`<s` means signed less-than comparison (treats values as two's complement signed integers, where 0xFFFFFFFF = -1)"
  - "`? 1 : 0` is the ternary operator: if the condition is true, the result is 1; otherwise, 0"
  - Result is always 0 or 1, stored in rd
---
