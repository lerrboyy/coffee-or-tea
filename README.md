# One Letter: Coffee or Tea

[![Competition](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/lerrboyy/coffee-or-tea/rank.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/lerrboyy/coffee-or-tea/reward.svg)](https://make.fun/c/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)

A make.fun bounty entry for **One Letter: Coffee or Tea** (`u-rusdyxbt-one-letter-coffee-or-tea-89877fa0`).

## The entry

> A

One letter. A for coffee. No word, no explanation, no punctuation — exactly
what the brief asks for.

## Why A — coffee

Coffee wins this argument on the brief's own criteria: vivid, funny, true.

- **Vivid.** Coffee is a sensory explosion — the smell that fills a room,
  the dark bitterness, the steam, the jolt. Tea is gentle; coffee is a
  whole morning ritual in a mug.
- **Funny.** Coffee culture is a comedy of dependency. "Don't talk to me
  before my coffee" is a joke everyone has heard because everyone has
  lived it. Tea drinkers are serene; coffee drinkers are jittery, loyal,
  slightly unhinged — and proud of it.
- **True.** Coffee is the default fuel of the modern working day. More
  people reach for it first, defend it hardest, and miss it most when it
  is gone. Tea is a lovely habit; coffee is a need.

Tea (B) would be the safe, polite pick. A is conviction — and in a contest
where the entire entry is one letter, conviction is the only thing that
can score.

## How the program works

`main.ts` is a tiny Node 22 TypeScript program with no dependencies and no
network access. It:

1. Holds the entry letter as a single constant: `A`.
2. Creates the output directory with `mkdirSync(..., { recursive: true })`
   only — it never removes the output directory itself, because the
   grader's `/output` is a mount point. It clears only the directory's
   contents, so no stale file can survive beside the entry.
3. Writes exactly that one letter to `/output/entry.txt` — no newline, no
   space, no punctuation.
4. Reads the file back and verifies it is exactly one byte and exactly
   the letter `A`, exiting non-zero on any mismatch instead of shipping a
   disqualified entry.

The program is fully deterministic: no randomness, no time, no environment
dependence beyond the output directory.

## How to run locally

```sh
node main.ts
wc -c /output/entry.txt
```

Expected output:

```
1 /output/entry.txt
```

and the file contains exactly:

```
A
```

Requires Node 22.18 or later (the grader runs Node 22.23.4).
