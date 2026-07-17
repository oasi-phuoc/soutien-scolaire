import { existsSync, readFileSync } from "fs";
import { join } from "path";

/**
 * Sert l'APK Android avec le bon Content-Type.
 * Priorité : build Gradle local → public/app.apk (déployé).
 */
export async function GET() {
  const candidates = [
    join(process.cwd(), "android", "app", "build", "outputs", "apk", "debug", "app-debug.apk"),
    join(process.cwd(), "public", "app.apk"),
  ];

  const apkPath = candidates.find((p) => existsSync(p));
  if (!apkPath) {
    return new Response("APK non disponible.", { status: 404 });
  }

  const file = readFileSync(apkPath);

  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/vnd.android.package-archive",
      "Content-Disposition": 'attachment; filename="soutien-scolaire.apk"',
      "Content-Length": String(file.length),
      "Cache-Control": "public, max-age=300",
    },
  });
}
