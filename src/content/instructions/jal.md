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
operation: "rd = PC + 4; PC = PC + sign-extend(offset)"
exampleusage: "// Jump to label, save return address in x1 (ra)\njal x1, label"
notes:
  - "`PC` is the Program Counter (address of the current instruction)"
  - "`PC + 4` is the address of the next instruction (return address), saved in `rd`"
  - "`sign-extend(offset)` expands the 20-bit offset to 32/64 bits by copying its sign bit"
  - The 20-bit offset allows jumps of ±1 MiB (±1,048,576 bytes) from the current PC
  - "`jal x1, offset` is the standard subroutine call (rd = ra, the return address register)"
  - "`jal x0, offset` is an unconditional jump without saving return address (J pseudo-instruction)"
  - The offset is in multiples of 2 bytes (target must be 2-byte aligned)
---
