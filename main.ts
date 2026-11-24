import { mkdirSync, writeFileSync } from "node:fs";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, "My plant died, so I bought a fake one, and now I water it out of guilt.", "utf8");
