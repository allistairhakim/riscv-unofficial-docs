---
name: SLTU
fullname: Set Less Than Unsigned
inst: sltu
format: "sltu rd, rs1, rs2"
description: Sets `rd` to 1 if `rs1` is less than `rs2` using unsigned comparison, otherwise sets `rd` to 0
encoding: R
opcode: "0110011"
funct3: "0x3"
funct7: "0x00"
operation: "rd = (rs1 <u rs2) ? 1 : 0"
exampleusage: "// x5 = (x6 < x7) ? 1 : 0 (unsigned)\nsltu x5, x6, x7"
notes:
  - "`<u` means unsigned less-than comparison (treats values as positive integers, where 0xFFFFFFFF is the largest value)"
  - "`? 1 : 0` is the ternary operator: if the condition is true, the result is 1; otherwise, 0"
  - Result is always 0 or 1, stored in rd
  - "`sltu rd, x0, rs2` sets `rd` to 1 if `rs2` is not zero (SNEZ pseudo-instruction)"
---
