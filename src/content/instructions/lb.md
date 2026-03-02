---
name: LB
fullname: Load Byte
inst: lb
format: "lb rd, offset(rs1)"
description: Loads a byte from memory at address `rs1 + offset`, sign-extends it to XLEN bits, and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x0"
funct7: ""
operation: "rd = sign-extend(Memory[rs1 + sign-extend(offset)][7:0])"
exampleusage: "// x5 = sign-extended byte at address (x6 + 4)\nlb x5, 4(x6)"
notes:
  - "`Memory[address]` reads from memory at the computed address"
  - "`[7:0]` means bits 7 down to 0 (the lowest 8 bits, i.e., one byte)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - "`sign-extend(...)` on the loaded byte expands it from 8 bits to 32/64 bits, preserving negative values (e.g., 0xFF becomes 0xFFFFFFFF)"
---
