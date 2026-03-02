---
name: SLLI
fullname: Shift Left Logical Immediate
inst: slli
format: "slli rd, rs1, shamt"
description: Performs logical left shift on `rs1` by the shift amount `shamt`, storing the result in `rd`
encoding: I
opcode: "0010011"
funct3: "0x1"
funct7: "0x00"
operation: "rd = rs1 << shamt"
exampleusage: "// x5 = x6 << 3\nslli x5, x6, 3"
notes:
  - "`<<` is the left shift operator (moves bits toward more significant positions)"
  - "`shamt` (shift amount) is a 5-bit value (0-31) encoded in the instruction"
  - Zeros are shifted into the lower (least significant) bits
  - Left shifting by n is equivalent to multiplying by 2^n
---
