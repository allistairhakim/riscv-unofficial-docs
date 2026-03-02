---
name: LW
fullname: Load Word
inst: lw
format: "lw rd, offset(rs1)"
description: Loads a word (32 bits) from memory at address `rs1 + offset` and stores in `rd`
encoding: I
opcode: "0000011"
funct3: "0x2"
funct7: ""
operation: "rd = sign-extend(Memory[rs1 + sign-extend(offset)][31:0])"
exampleusage: "// x5 = word at address (x6 + 8)\nlw x5, 8(x6)"
notes:
  - "`Memory[address]` reads from memory at the computed address"
  - "`[31:0]` means bits 31 down to 0 (the lowest 32 bits, i.e., one word)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - In RV64, the loaded 32-bit word is sign-extended to 64 bits
  - Address should be naturally aligned (4-byte boundary) for best performance
---
