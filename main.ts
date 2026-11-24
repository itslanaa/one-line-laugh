import { mkdirSync, writeFileSync } from "node:fs";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, "I asked the GPS for the fastest route home, and it said 'therapy'.", "utf8");
