import { readFileSync } from "fs";
import { join } from "path";

export async function GET() {
  const apkPath = join(process.cwd(), "android", "app", "build", "outputs", "apk", "debug", "app-debug.apk");

  let file: Buffer;
  try {
    file = readFileSync(apkPath);
  } catch {
    return new Response("APK non disponible.", { status: 404 });
  }

  return new Response(file, {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="soutien-scolaire.apk"',
      "Content-Length": String(file.length),
    },
  });
}
