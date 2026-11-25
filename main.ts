import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE =
  'My agent thought for nine minutes, then asked me to clarify the task. It had written the task. In bold. At the top.';

// The gate takes 1 to 200 characters of UTF-8: keep the line inside it here, not at the scorer.
if (JOKE.trim().length < 1 || JOKE.length > 200) {
  throw new Error(`the roast is ${JOKE.length} characters, outside the 1..200 the gate takes`);
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'entry.txt'), JOKE, 'utf8');
console.log(`${JOKE.length} characters written to ${join(OUT, 'entry.txt')}`);
