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
operation: "rd = PC + 4; PC = (rs1 + sign-extend(offset)) & ~1"
exampleusage: "// Jump to address in x5, save return address in x1\njalr x1, x5, 0"
notes:
  - "`PC` is the Program Counter (address of the current instruction)"
  - "`PC + 4` is the address of the next instruction (return address), saved in `rd`"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - "`& ~1` clears the lowest bit of the result. `~1` is the bitwise NOT of 1 (binary: ...11111110), so ANDing with it forces the address to be even, ensuring 2-byte alignment"
  - Used for indirect jumps, function returns, and computed jumps
  - "`jalr x0, x1, 0` is the standard return from subroutine (RET pseudo-instruction)"
  - Combined with AUIPC for long-range jumps (CALL pseudo-instruction)
---
