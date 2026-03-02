---
name: BEQ
fullname: Branch if Equal
inst: beq
format: "beq rs1, rs2, offset"
description: Branches to `PC + offset` if `rs1` equals `rs2`
encoding: B
opcode: "1100011"
funct3: "0x0"
funct7: ""
operation: "if (rs1 == rs2) PC = PC + sign-extend(offset)"
exampleusage: "// Branch to label if x5 == x6\nbeq x5, x6, label"
notes:
  - "`PC` is the Program Counter (address of the current instruction)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit, allowing branches backward (negative) or forward (positive)"
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
  - "`beq rs1, x0, offset` branches if `rs1` is zero (BEQZ pseudo-instruction)"
---
