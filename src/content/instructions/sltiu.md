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
operation: "rd = (rs1 <u sign-extend(imm)) ? 1 : 0"
exampleusage: "// x5 = (x6 < 10) ? 1 : 0 (unsigned)\nsltiu x5, x6, 10"
notes:
  - "`<u` means unsigned comparison (treating values as positive integers)"
  - "`sign-extend(imm)` expands the 12-bit immediate to 32/64 bits, then the result is treated as unsigned for comparison"
  - "`sltiu rd, rs1, 1` sets `rd` to 1 if `rs1` equals zero (SEQZ pseudo-instruction)"
---
