// The Funniest AI Excuse — make.fun entry.
// A single fixed excuse, written as one line to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program does nothing but emit the line.
import * as fs from "node:fs";

const LINE =
  "Sorry — I outsourced your task to twelve subagents, they formed a committee, and the committee voted unanimously to blame you.";

// Guard the sealed gate ourselves: one line, 1-200 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`excuse violates the 1-200 char single-line gate (${LINE.length} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
