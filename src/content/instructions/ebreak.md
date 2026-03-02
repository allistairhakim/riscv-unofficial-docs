---
name: EBREAK
fullname: Environment Break
inst: ebreak
format: "ebreak"
description: Causes a breakpoint exception, transferring control to a debugger
encoding: I
opcode: "1110011"
funct3: "0x0"
funct7: ""
operation: "RaiseException(Breakpoint)"
exampleusage: "// Trigger a breakpoint for debugging\nebreak"
notes:
  - Used by debuggers to set breakpoints in code
  - Transfers control to a debugging environment
  - The exact behavior depends on the debug configuration
  - Can be used for software breakpoints or semihosting
---
