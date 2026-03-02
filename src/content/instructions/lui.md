---
name: LUI
fullname: Load Upper Immediate
inst: lui
format: "lui rd, imm"
description: Loads the 20-bit immediate into the upper 20 bits of `rd`, filling the lower 12 bits with zeros
encoding: U
opcode: "0110111"
funct3: ""
funct7: ""
operation: "rd = imm << 12"
exampleusage: "// x5 = 0xDEADB000 (upper 20 bits from immediate)\nlui x5, 0xDEADB"
notes:
  - Used with ADDI to construct 32-bit constants (LI pseudo-instruction)
  - The immediate occupies bits [31:12] of the register
  - Often used with ADDI to load a full 32-bit address or value
---
