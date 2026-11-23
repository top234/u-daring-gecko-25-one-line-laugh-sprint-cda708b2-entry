// One-Line Laugh Sprint — make.fun entry.
// Writes a single original funny line to $OUTPUT_DIR/entry.txt (Node 22, stdlib only).
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My plants died, so I replaced them with plastic ones — now I water them out of guilt and apologise to the real ones I killed.";

const len = [...line].length;
if (len < 1 || len > 200) {
  throw new Error(`line must be 1-200 characters, got ${len}`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
