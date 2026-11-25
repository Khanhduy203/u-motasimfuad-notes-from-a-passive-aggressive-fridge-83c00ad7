// Notes From a Passive-Aggressive Fridge — entry generator.
// Writes exactly one line to <output dir>/entry.txt.
// Node-stdlib only; deterministic (no randomness, no clock reads).

const fs = require("node:fs");
const path = require("node:path");

const NOTE =
  "Your yogurt expired three weeks ago. I've started calling it a roommate.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), NOTE + "\n", "utf8");
