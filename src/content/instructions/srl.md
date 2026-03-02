---
name: SRL
fullname: Shift Right Logical
inst: srl
format: "srl rd, rs1, rs2"
description: Performs logical right shift on `rs1` by the shift amount in the lower 5 bits (RV32) or 6 bits (RV64) of `rs2`, storing the result in `rd`
encoding: R
opcode: "0110011"
funct3: "0x5"
funct7: "0x00"
operation: "rd = rs1 >> rs2[4:0]"
exampleusage: "// x5 = x6 >> x7[4:0] (logical)\nsrl x5, x6, x7"
notes:
  - Zeros are shifted into the upper bits
  - Only the lower 5 bits of rs2 are used for the shift amount (RV32)
---
