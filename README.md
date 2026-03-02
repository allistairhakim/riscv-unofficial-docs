# RISC-V Instruction Reference

Minimal Astro documentation site for instructions.

## Usage

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build static site
```

## Structure

```
src/
├── content/instructions/   # One .md file per instruction (DATA)
│   └── add.md
├── pages/instructions/
│   └── [slug].astro        # Template for all instruction pages (LAYOUT)
└── components/
    └── BitDiagram.astro    # Encoding diagram component
```

## Adding an Instruction

Create `src/content/instructions/sub.md`:

```yaml
---
name: SUB
format: "SUB rd, rs1, rs2"
description: Subtract two registers
encoding: R
operation: "rd = rs1 - rs2"
notes:
  - Overflow is ignored.
---
```

## Changing How Instructions Look

Edit `src/pages/instructions/[slug].astro` — this template controls the layout for ALL instruction pages.
