import type { SupabaseClient } from "@supabase/supabase-js";
import { parseEleveClasse } from "@/lib/eleve-classe-types";

/**
 * Garantit qu’un label de classe (ex. « HSS ref-12 », « CSC 3 ») existe dans
 * `school_classes`, pour qu’il apparaisse dans le suivi / les attributions
 * comme les filières CSC/CFR/….
 */
export async function ensureSchoolClassForLabel(
  svc: SupabaseClient,
  label: string,
  studentId?: string,
): Promise<{ ok: true; classId: string } | { ok: false; reason: string }> {
  const trimmed = label.trim();
  if (!trimmed) return { ok: false, reason: "Classe vide." };

  const parsed = parseEleveClasse(trimmed);

  const { data: existing } = await svc
    .from("school_classes")
    .select("id")
    .eq("label", trimmed)
    .maybeSingle();

  let classId = (existing?.id as string | undefined) ?? null;

  if (!classId) {
    const { data: inserted, error } = await svc
      .from("school_classes")
      .insert({
        label: trimmed,
        class_type: parsed.classeType || null,
        class_num: parsed.classeSuffix || null,
      })
      .select("id")
      .single();

    if (error) {
      // Concurrence : un autre insert a peut‑être gagné.
      const { data: again } = await svc
        .from("school_classes")
        .select("id")
        .eq("label", trimmed)
        .maybeSingle();
      if (!again?.id) return { ok: false, reason: error.message };
      classId = again.id as string;
    } else {
      classId = inserted.id as string;
    }
  }

  if (studentId) {
    await svc.from("class_members").upsert(
      { class_id: classId, student_id: studentId },
      { onConflict: "class_id,student_id" },
    );
  }

  return { ok: true, classId };
}

/** Crée les school_classes manquantes et resynchronise class_members depuis profiles.classe. */
export async function syncSchoolClassesFromProfiles(svc: SupabaseClient): Promise<number> {
  const { data: pupils, error } = await svc
    .from("profiles")
    .select("id, classe")
    .eq("role", "eleve")
    .not("classe", "is", null);

  if (error || !pupils?.length) return 0;

  const byLabel = new Map<string, string[]>();
  for (const p of pupils) {
    const label = String(p.classe ?? "").trim();
    if (!label) continue;
    const list = byLabel.get(label) ?? [];
    list.push(p.id as string);
    byLabel.set(label, list);
  }

  let synced = 0;
  for (const [label, studentIds] of byLabel) {
    const ensured = await ensureSchoolClassForLabel(svc, label);
    if (!ensured.ok) continue;
    const rows = studentIds.map((student_id) => ({
      class_id: ensured.classId,
      student_id,
    }));
    const { error: memErr } = await svc
      .from("class_members")
      .upsert(rows, { onConflict: "class_id,student_id" });
    if (!memErr) synced += 1;
  }
  return synced;
}
