---
name: JALR
fullname: Jump and Link Register
inst: jalr
format: "jalr rd, rs1, offset"
description: Jumps to `(rs1 + offset) & ~1` and stores the return address (`PC + 4`) in `rd`
encoding: I
opcode: "1100111"
funct3: "0x0"
funct7: ""
operation: "rd = PC + 4; PC = (rs1 + sext(offset)) & ~1"
exampleusage: "// Jump to address in x5, save return address in x1\njalr x1, x5, 0"
notes:
  - The target address is computed as (rs1 + sign-extended offset) with the lowest bit cleared
  - Used for indirect jumps, function returns, and computed jumps
  - "`jalr x0, x1, 0` is the standard return from subroutine (RET pseudo-instruction)"
  - Combined with AUIPC for long-range jumps (CALL pseudo-instruction)
  - The 12-bit offset allows fine-grained target adjustment
---
