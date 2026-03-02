---
name: JAL
fullname: Jump and Link
inst: jal
format: "jal rd, offset"
description: Jumps to `PC + offset` and stores the return address (`PC + 4`) in `rd`
encoding: J
opcode: "1101111"
funct3: ""
funct7: ""
operation: "rd = PC + 4; PC = PC + sext(offset)"
exampleusage: "// Jump to label, save return address in x1 (ra)\njal x1, label"
notes:
  - The 20-bit offset allows jumps of ±1 MiB from the current PC
  - "`jal x1, offset` is the standard subroutine call (rd = ra)"
  - "`jal x0, offset` is an unconditional jump without saving return address (J pseudo-instruction)"
  - The offset is in multiples of 2 bytes (target must be 2-byte aligned)
---
