---
name: AUIPC
fullname: Add Upper Immediate to PC
inst: auipc
format: "auipc rd, imm"
description: Adds the 20-bit immediate (shifted left by 12) to the PC and stores the result in `rd`
encoding: U
opcode: "0010111"
funct3: ""
funct7: ""
operation: "rd = PC + (imm << 12)"
exampleusage: "// x5 = PC + 0x12345000\nauipc x5, 0x12345"
notes:
  - Used for PC-relative addressing
  - Combined with ADDI or load/store instructions for full 32-bit PC-relative offsets
  - Essential for position-independent code (PIC)
  - The LA (load address) pseudo-instruction uses AUIPC + ADDI
---
