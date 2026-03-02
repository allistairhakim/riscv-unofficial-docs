---
name: SRLI
fullname: Shift Right Logical Immediate
inst: srli
format: "srli rd, rs1, shamt"
description: Performs logical right shift on `rs1` by the shift amount `shamt`, storing the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x5"
funct7: "0x00"
operation: "rd = rs1 >> shamt"
exampleusage: "// x5 = x6 >> 3 (logical)\nsrli x5, x6, 3"
notes:
  - The shift amount is encoded in the lower 5 bits of the immediate (RV32) or 6 bits (RV64)
  - Zeros are shifted into the upper bits
  - Equivalent to unsigned division by 2^shamt
---
