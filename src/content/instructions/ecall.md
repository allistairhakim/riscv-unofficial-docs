---
name: ECALL
fullname: Environment Call
inst: ecall
format: "ecall"
description: Makes a service request to the execution environment (system call)
encoding: I
opcode: "1110011"
funct3: "0x0"
funct7: ""
funct12: "0x000"
operation: "RaiseException(EnvironmentCall)"
exampleusage: "// Make a system call (syscall number typically in a7)\necall"
notes:
  - Transfers control to the operating system or hypervisor
  - System call number and arguments are passed via registers (typically a7 for syscall number, a0-a5 for arguments)
  - The exact behavior depends on the execution environment
  - In Machine mode, causes an environment-call-from-M-mode exception
---
