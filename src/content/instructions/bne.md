---
name: BNE
fullname: Branch if Not Equal
inst: bne
format: "bne rs1, rs2, offset"
description: Branches to `PC + offset` if `rs1` does not equal `rs2`
encoding: B
opcode: "1100011"
funct3: "0x1"
funct7: ""
operation: "if (rs1 != rs2) PC = PC + sext(offset)"
exampleusage: "// Branch to label if x5 != x6\nbne x5, x6, label"
notes:
  - The 12-bit offset is sign-extended and added to the PC
  - The offset is in multiples of 2 bytes (branch target must be 2-byte aligned)
  - "`bne rs1, x0, offset` branches if `rs1` is not zero (BNEZ pseudo-instruction)"
---
