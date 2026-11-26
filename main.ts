// The One-Liner Groan-Off — u-alfasurya91-the-one-liner-groan-off-5a1febd5
// Writes one original one-line dad joke to <output dir>/entry.txt.
// The output directory comes from the OUTPUT_DIR environment variable,
// falling back to the default "output" folder when it is not set.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original dad joke: a household fridge, a midnight-snack routine,
// and a pun that lands on the very last word.
const JOKE =
  "I told my fridge to stop judging my midnight snacks, but it just keeps giving me the cold shoulder.";

const MIN_LENGTH = 1;
const MAX_LENGTH = 140;

function main(): void {
  // The gate: the entry must be 1 to 140 characters, and not only whitespace.
  // The sealed scorer applies the same 1-140 check to /output/entry.txt,
  // so the program refuses to write a line that would fail it.
  if (JOKE.length < MIN_LENGTH || JOKE.length > MAX_LENGTH) {
    throw new Error(
      `Entry is ${JOKE.length} characters; the gate requires ${MIN_LENGTH} to ${MAX_LENGTH}.`,
    );
  }
  if (JOKE.trim().length === 0) {
    throw new Error("Entry must not be only whitespace.");
  }

  const outputDir = process.env.OUTPUT_DIR || "output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, JOKE, "utf8");
  console.log(`Wrote ${JOKE.length}-character entry to ${outputPath}`);
}

main();
