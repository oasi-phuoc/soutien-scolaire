"use client";

import { useState, useTransition } from "react";
import { changePasswordAction } from "@/app/actions/admin";
import { useStatusToast } from "@/components/ui/StatusToast";
import { IconKeyReset, IconSaveDisk, SaveIconButton } from "@/components/ui/SaveIconButton";

/** Mot de passe de réinitialisation rapide (oubli / dépannage). */
export const STUDENT_RESET_PASSWORD = "Perdu123+";

const inputCls =
  "h-10 min-h-10 min-w-0 flex-1 rounded-[22px] border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-[var(--color-theme)] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50";

/**
 * Changer / réinitialiser le mot de passe d’un élève.
 * Admin + prof (fiche élève et infos suivi de classe).
 */
export function StudentPasswordEditor({
  studentId,
  compact = false,
}: {
  studentId: string;
  compact?: boolean;
}) {
  const [pwd, setPwd] = useState("");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { showToast, toastEl } = useStatusToast();

  function applyPassword(next: string, clearField: boolean) {
    if (next.length < 8) {
      setError("Au moins 8 caractères requis.");
      return;
    }
    setError(null);
    showToast("Enregistrement en cours...");
    startTransition(async () => {
      const r = await changePasswordAction(studentId, next);
      if (!r.ok) {
        setError(r.reason ?? "Erreur");
        showToast(r.reason ?? "Erreur");
        return;
      }
      if (clearField) setPwd("");
      showToast("Mot de passe mis à jour...");
    });
  }

  function saveCustom() {
    applyPassword(pwd, true);
  }

  function resetDefault() {
    applyPassword(STUDENT_RESET_PASSWORD, true);
  }

  const shell = compact
    ? "rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-700 dark:bg-zinc-950"
    : "rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950";

  return (
    <>
      <div className={`${shell} ${pending ? "opacity-80" : ""}`}>
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-400">
          Change mot de passe
        </p>
        <div className="flex items-center gap-2">
          <input
            type="password"
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value);
              setError(null);
            }}
            placeholder="Nouveau mot de passe (min. 8)"
            autoComplete="new-password"
            className={inputCls}
          />
          <SaveIconButton
            label="Enregistrer le mot de passe"
            pending={pending}
            disabled={pwd.length < 8}
            onClick={saveCustom}
          >
            <IconSaveDisk />
          </SaveIconButton>
          <SaveIconButton
            label={`Réinitialiser à ${STUDENT_RESET_PASSWORD}`}
            pending={pending}
            variant="secondary"
            onClick={resetDefault}
          >
            <IconKeyReset />
          </SaveIconButton>
        </div>
        {error && (
          <p className="mt-2 text-xs text-red-600 dark:text-red-400">{error}</p>
        )}
        <p className="mt-2 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
          La clé réinitialise le mot de passe à <span className="font-semibold">{STUDENT_RESET_PASSWORD}</span>.
          La disquette enregistre le nouveau mot de passe saisi dans le champ.
        </p>
      </div>
      {toastEl}
    </>
  );
}
