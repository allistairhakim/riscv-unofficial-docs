---
name: LBU
fullname: Load Byte Unsigned
inst: lbu
format: "lbu rd, offset(rs1)"
description: Loads a byte from memory at address `rs1 + offset`, zero-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x4"
funct7: ""
operation: "rd = zero-extend(Memory[rs1 + sign-extend(offset)][7:0])"
exampleusage: "// x5 = zero-extended byte at address (x6 + 4)\nlbu x5, 4(x6)"
notes:
  - "`Memory[address]` reads from memory at the computed address"
  - "`[7:0]` means bits 7 down to 0 (the lowest 8 bits, i.e., one byte)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - "`zero-extend(...)` pads the upper bits with zeros (e.g., 0xFF becomes 0x000000FF, not 0xFFFFFFFF)"
  - Use LBU (not LB) when loading unsigned byte values to avoid incorrect negative interpretation
---
