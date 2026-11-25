import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// The entry is one commit message, so the whole program is a single read,
// one length check, and one write — no parsing, no formatting, no surprises.
// The 100-character guard mirrors the bounty limit exactly: anything longer
// is rejected before it can reach the output directory.
const entry = readFileSync(join(__dirname, "entry.txt"), "utf8");

if (entry.length > 100) {
  console.error(`entry too long: ${entry.length} characters (max 100)`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
