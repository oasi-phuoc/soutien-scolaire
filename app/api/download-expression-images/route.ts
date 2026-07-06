import { createReadStream, existsSync } from "fs";
import { mkdir, stat } from "fs/promises";
import { join } from "path";
import { execFile } from "child_process";
import { promisify } from "util";
import { Readable } from "stream";

const execFileAsync = promisify(execFile);

const IMAGES_DIR = join(process.cwd(), "public/assets/expression/images");
const ZIP_PATH = join(process.cwd(), "public/downloads/expression-images.zip");

async function ensureZip(): Promise<void> {
  const imagesStat = await stat(IMAGES_DIR);
  if (existsSync(ZIP_PATH)) {
    const zipStat = await stat(ZIP_PATH);
    if (zipStat.mtimeMs >= imagesStat.mtimeMs) return;
  }
  await mkdir(join(process.cwd(), "public/downloads"), { recursive: true });
  await execFileAsync("zip", ["-r", ZIP_PATH, "images"], {
    cwd: join(process.cwd(), "public/assets/expression"),
  });
}

export async function GET() {
  try {
    await ensureZip();
    const zipStat = await stat(ZIP_PATH);
    const stream = createReadStream(ZIP_PATH);
    return new Response(Readable.toWeb(stream) as ReadableStream, {
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="expression-images.zip"',
        "Content-Length": String(zipStat.size),
      },
    });
  } catch {
    return new Response("Impossible de créer l'archive des images.", { status: 500 });
  }
}
