"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@supabase/supabase-js";
import { createSupabaseActionClient } from "@/lib/supabase/server";
import { commitBinaryToGitHub, isGitConfigured } from "@/lib/content-editor/github";
import { saveContentOverrideAction } from "@/app/actions/content-editor";
import type { ImageUploadResult } from "@/lib/content-editor/types";

function createServiceClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function requireAdmin(): Promise<
  | { ok: true; userId: string | null }
  | { ok: false; reason: string }
> {
  const openLocally = process.env.CONTENT_EDIT_OPEN === "1";
  const supabase = await createSupabaseActionClient();
  if (!supabase) {
    if (openLocally || !process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return { ok: true, userId: null };
    }
    return { ok: false, reason: "Non authentifié" };
  }
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    if (openLocally) return { ok: true, userId: null };
    return { ok: false, reason: "Non authentifié" };
  }
  const { data: role } = await supabase.rpc("get_my_role");
  if (role === "admin" || openLocally) return { ok: true, userId: user.id };
  return { ok: false, reason: "Réservé au compte admin" };
}

function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function extFromMime(mime: string, fallbackName: string): string {
  if (mime.includes("webp")) return "webp";
  if (mime.includes("png")) return "png";
  if (mime.includes("jpeg") || mime.includes("jpg")) return "jpg";
  if (mime.includes("gif")) return "gif";
  if (mime.includes("svg")) return "svg";
  const m = /\.([a-z0-9]+)$/i.exec(fallbackName);
  return (m?.[1] ?? "webp").toLowerCase();
}

/**
 * Upload une image curriculum vers Supabase Storage (public) + GitHub public/assets.
 * Domaines : vocab | lecture | ce | co
 */
export async function uploadCurriculumImageAction(
  formData: FormData,
): Promise<ImageUploadResult> {
  const auth = await requireAdmin();
  if (!auth.ok) return { ok: false, reason: auth.reason };

  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) {
    return { ok: false, reason: "Fichier invalide" };
  }
  if (file.size > 5 * 1024 * 1024) {
    return { ok: false, reason: "Image trop lourde (max 5 Mo)" };
  }

  const domain = String(formData.get("domain") ?? "vocab");
  const folder = String(formData.get("folder") ?? "").replace(/[^a-zA-Z0-9_-]/g, "");
  const wordHint = String(formData.get("word") ?? formData.get("slug") ?? "image");
  const label = String(formData.get("label") ?? wordHint);

  const ext = extFromMime(file.type || "", file.name);
  const base = slugify(wordHint) || `img-${Date.now()}`;
  const fileName = `${base}.${ext}`;

  let publicPath: string;
  switch (domain) {
    case "lecture":
      publicPath = `/assets/words/lecture/${fileName}`;
      break;
    case "ce":
    case "co":
      publicPath = `/assets/expression/images/scene/${fileName}`;
      break;
    case "vocab":
    default:
      publicPath = folder
        ? `/assets/words/vocab/${folder}/${fileName}`
        : `/assets/words/lecture/${fileName}`;
      break;
  }

  const relativeGitPath = `public${publicPath}`;
  const storageObjectPath = publicPath.replace(/^\//, "");
  const bytes = Buffer.from(await file.arrayBuffer());

  const notes: string[] = [];
  let supabaseOk = false;
  let gitOk = false;
  let url = publicPath;

  // Supabase Storage (public URL — visible immédiatement pour tous)
  const svc = createServiceClient();
  const authed = await createSupabaseActionClient();
  const db = svc ?? authed;
  if (db) {
    const { error } = await db.storage
      .from("curriculum-images")
      .upload(storageObjectPath, bytes, {
        contentType: file.type || `image/${ext}`,
        upsert: true,
      });
    if (error) {
      notes.push(`Supabase Storage: ${error.message}`);
    } else {
      supabaseOk = true;
      const { data } = db.storage
        .from("curriculum-images")
        .getPublicUrl(storageObjectPath);
      if (data?.publicUrl) url = data.publicUrl;
    }
  } else {
    notes.push("Supabase non configuré");
  }

  // GitHub — source de vérité long terme sous public/
  if (isGitConfigured()) {
    const git = await commitBinaryToGitHub({
      relativePath: relativeGitPath,
      bytes,
      message: `content(image): ${domain} ${fileName}`,
    });
    if (git.ok) gitOk = true;
    else notes.push(git.reason);
  } else {
    notes.push("GitHub non configuré (CONTENT_GITHUB_TOKEN)");
  }

  // Alias mot → image (utile CE/CO + résolution globale)
  if (label.trim()) {
    const { getContentOverridesMapAction } = await import(
      "@/app/actions/content-editor"
    );
    const mapRes = await getContentOverridesMapAction();
    const prev =
      (mapRes.map?.["catalog:image:aliases"]?.payload as Record<
        string,
        string
      >) ?? {};
    const nextAliases = { ...prev, [slugify(label)]: url };
    await saveContentOverrideAction({
      key: "catalog:image:aliases",
      label: "Alias images (mots)",
      payload: nextAliases,
      syncGit: true,
    });
  }

  // Méta asset
  await saveContentOverrideAction({
    key: `asset:image:${domain}:${base}`,
    label: `Image ${domain} — ${fileName}`,
    payload: {
      domain,
      fileName,
      publicPath,
      url,
      word: wordHint,
      label,
      updatedAt: new Date().toISOString(),
    },
    syncGit: true,
  });

  if (!supabaseOk && !gitOk) {
    return {
      ok: false,
      reason:
        notes.join(" · ") ||
        "Aucun backend image disponible (configurez Supabase et/ou CONTENT_GITHUB_TOKEN)",
    };
  }

  revalidatePath("/admin/contenu");
  revalidatePath("/francais");
  revalidatePath("/lecture");
  revalidatePath("/communication");

  return {
    ok: true,
    url,
    publicPath,
    persisted: { supabase: supabaseOk, git: gitOk },
    message: notes.length ? notes.join(" · ") : undefined,
  };
}
