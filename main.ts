import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is a single letter, A for coffee.
// The brief allows exactly one character and nothing else: no word, no
// explanation, no punctuation, no newline. This program writes that one
// letter, "A", and nothing else, to /output/entry.txt.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;
const LETTER = "A";

mkdirSync(OUTPUT_DIR, { recursive: true });

// Clear the contents of the output directory only — never remove the
// directory itself, because the grader mounts it.
for (const name of readdirSync(OUTPUT_DIR)) {
  rmSync(`${OUTPUT_DIR}/${name}`, { recursive: true, force: true });
}

writeFileSync(OUTPUT_FILE, LETTER, "utf8");

// Self-check: the gate accepts only UTF-8 text of exactly one character,
// so verify the file on disk before exiting. If anything else landed
// there — a newline, a space, a second letter — fail loudly instead of
// shipping a disqualified entry.
const written = readFileSync(OUTPUT_FILE, "utf8");
if (written !== LETTER || Buffer.byteLength(written, "utf8") !== 1) {
  throw new Error(
    `entry must be exactly one character "A", got ${JSON.stringify(written)}`,
  );
}
