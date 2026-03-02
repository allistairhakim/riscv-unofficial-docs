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
  - "`<< 12` means left shift by 12 bits, effectively placing the immediate in bits [31:12]"
  - "`[31:12]` means bits 31 down to 12 (the upper 20 bits of a 32-bit value)"
  - The lower 12 bits of rd are filled with zeros
  - Used with ADDI to construct 32-bit constants (LI pseudo-instruction uses LUI + ADDI)
  - "Example: to load 0x12345678 into x5, use `lui x5, 0x12345` then `addi x5, x5, 0x678`"
---
