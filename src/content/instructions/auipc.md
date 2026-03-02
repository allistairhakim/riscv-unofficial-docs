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
  - "`PC` is the Program Counter (address of the current instruction)"
  - "`<< 12` means left shift by 12 bits, placing the 20-bit immediate in the upper bits"
  - Used for PC-relative addressing (calculating addresses relative to the current instruction)
  - Combined with ADDI or load/store instructions for full 32-bit PC-relative offsets
  - Essential for position-independent code (PIC) that can run at any memory address
  - The LA (load address) pseudo-instruction uses AUIPC + ADDI
---
