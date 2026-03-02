---
name: FENCE
inst: fence
format: "fence pred, succ"
description: Orders memory operations; ensures all memory accesses in `pred` set complete before any in `succ` set begin
encoding: I
opcode: "0001111"
funct3: "0x0"
funct7: ""
operation: "fence(pred, succ)"
exampleusage: "// Order all memory operations (full fence)\nfence iorw, iorw"
notes:
  - "The 12-bit immediate is split: fm[3:0] (bits 31-28), pred[3:0] (bits 27-24), succ[3:0] (bits 23-20)"
  - The `pred` and `succ` fields are 4-bit bitmasks specifying memory access types
  - "Bits: i=input (device), o=output (device), r=read (memory), w=write (memory)"
  - "fm (fence mode) is reserved for future use; standard fence uses fm=0000"
  - "`fence` with no operands defaults to `fence iorw, iorw` (full fence)"
  - Used to enforce ordering between memory operations in multi-threaded code
  - Does not guarantee ordering with respect to instruction fetches (use FENCE.I)
---
