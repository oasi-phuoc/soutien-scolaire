/**
 * @deprecated Use `node scripts/regenerate-pe-sample-answers.mjs` instead.
 * This script previously padded samples with generic filler text.
 * Regeneration now builds structured French texts from scripts/pe-sample-data.mjs.
 */
import { spawnSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const result = spawnSync("node", [path.join(__dirname, "regenerate-pe-sample-answers.mjs")], {
  stdio: "inherit",
});
process.exit(result.status ?? 1);
