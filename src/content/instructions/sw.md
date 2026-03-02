---
name: SW
fullname: Store Word
inst: sw
format: "sw rs2, offset(rs1)"
description: Stores the lowest word (32 bits) of `rs2` to memory at address `rs1 + offset`
encoding: S
opcode: "0100011"
funct3: "0x2"
funct7: ""
operation: "Memory[rs1 + sign-extend(offset)] = rs2[31:0]"
exampleusage: "// Store word in x5 to address (x6 + 8)\nsw x5, 8(x6)"
notes:
  - "`Memory[address] = value` writes to memory at the computed address"
  - "`rs2[31:0]` means bits 31 down to 0 of rs2 (the lowest 32 bits, i.e., one word)"
  - "`sign-extend(offset)` expands the 12-bit offset to 32/64 bits by copying its sign bit"
  - In RV32, the entire register is stored; in RV64, only the lowest 32 bits
  - Address should be naturally aligned (4-byte boundary) for best performance
---
