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
  - "`>>` is the logical right shift operator (moves bits toward less significant positions)"
  - "`shamt` (shift amount) is a 5-bit value (0-31) encoded in the instruction"
  - Zeros are shifted into the upper (most significant) bits
  - Logical right shift treats the value as unsigned (use SRAI for signed values)
  - Right shifting by n is equivalent to unsigned division by 2^n
---
