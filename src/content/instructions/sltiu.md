---
name: SLTIU
fullname: Set Less Than Immediate Unsigned
inst: sltiu
format: "sltiu rd, rs1, imm"
description: Sets `rd` to 1 if `rs1` is less than the sign-extended immediate using unsigned comparison, otherwise sets `rd` to 0
encoding: I
opcode: "0010011"
funct3: "0x3"
funct7: ""
operation: "rd = (rs1 <u sext(imm)) ? 1 : 0"
exampleusage: "// x5 = (x6 < 10) ? 1 : 0 (unsigned)\nsltiu x5, x6, 10"
notes:
  - The immediate is first sign-extended, then treated as unsigned for comparison
  - "`sltiu rd, rs1, 1` sets `rd` to 1 if `rs1` equals zero (SEQZ pseudo-instruction)"
---
