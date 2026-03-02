---
name: LHU
fullname: Load Halfword Unsigned
inst: lhu
format: "lhu rd, offset(rs1)"
description: Loads a halfword (16 bits) from memory at address `rs1 + offset`, zero-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x5"
funct7: ""
operation: "rd = zero-extend(Memory[rs1 + sign-extend(offset)][15:0])"
exampleusage: "// x5 = zero-extended halfword at address (x6 + 4)\nlhu x5, 4(x6)"
notes:
  - "`Memory[address]` reads from memory at the computed address"
  - "`[15:0]` means bits 15 down to 0 (the lowest 16 bits, i.e., one halfword)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - "`zero-extend(...)` pads the upper bits with zeros (e.g., 0xFFFF becomes 0x0000FFFF, not 0xFFFFFFFF)"
  - Address should be naturally aligned (2-byte boundary) for best performance
  - Use LHU (not LH) when loading unsigned halfword values
---
