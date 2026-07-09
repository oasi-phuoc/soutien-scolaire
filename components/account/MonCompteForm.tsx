"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import {
  changePasswordAction,
  updateMyProfileAction,
  type MyProfile,
} from "@/app/actions/account";
import { AppSelect } from "@/components/ui/AppSelect";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

const CLASSE_NUM_OPTIONS = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1).padStart(2, "0"),
}));

const LANGUES_OPTIONS = [
  ...PIVOT_LANGS.map((l) => ({ code: l.code, label: l.labelFr })),
  { code: "other", label: "Autre" },
];

const inputCls =
  "w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)] dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-50";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5 shadow-sm">
      {children}
    </div>
  );
}

function IconSave() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </svg>
  );
}

function IconCancel() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg className="animate-spin" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

function parseClasse(classe: string | null) {
  if (!classe) return { classeType: "", classeNum: "" };
  if (classe.startsWith("ancien")) {
    return { classeType: "ancien", classeNum: classe.slice("ancien".length).trim() };
  }
  const parts = classe.split(" ");
  return { classeType: parts[0] ?? "", classeNum: parts[1] ?? "" };
}

export function MonCompteForm({ profile }: { profile: MyProfile }) {
  const parsed = parseClasse(profile.classe);
  const [form, setForm] = useState({
    prenom: profile.prenom ?? "",
    nom: profile.nom ?? "",
    classeType: parsed.classeType,
    classeNum: parsed.classeNum,
    adresse: profile.adresse ?? "",
    npa: profile.npa ?? "",
    localite: profile.localite ?? "",
    telephone: profile.telephone ?? "",
    langue: profile.langue ?? "en",
  });
  const [profileMsg, setProfileMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [profilePending, startProfileTransition] = useTransition();

  const [pwdOpen, setPwdOpen] = useState(false);
  const [newPwd, setNewPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [pwdStatus, setPwdStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [pwdMsg, setPwdMsg] = useState<string | null>(null);

  function saveProfile() {
    setProfileMsg(null);
    startProfileTransition(async () => {
      const classe =
        profile.role === "eleve"
          ? form.classeType === "ancien"
            ? (form.classeNum ? `ancien ${form.classeNum}` : "ancien")
            : form.classeType && form.classeNum
              ? `${form.classeType} ${form.classeNum}`
              : undefined
          : undefined;
      const result = await updateMyProfileAction({
        prenom: form.prenom,
        nom: form.nom,
        classe,
        adresse: form.adresse,
        npa: form.npa,
        localite: form.localite,
        telephone: form.telephone,
        langue: form.langue,
      });
      if (!result.ok) {
        setProfileMsg({ ok: false, text: result.reason });
        return;
      }
      setProfileMsg({ ok: true, text: "Données enregistrées." });
      window.setTimeout(() => setProfileMsg(null), 2500);
    });
  }

  async function handlePasswordChange() {
    setPwdStatus("loading");
    setPwdMsg(null);
    const result = await changePasswordAction(newPwd, confirmPwd);
    if (result.ok) {
      setPwdStatus("ok");
      setPwdMsg("Mot de passe mis à jour.");
      setNewPwd("");
      setConfirmPwd("");
      window.setTimeout(() => {
        setPwdStatus("idle");
        setPwdMsg(null);
        setPwdOpen(false);
      }, 2500);
    } else {
      setPwdStatus("error");
      setPwdMsg(result.reason);
    }
  }

  return (
    <main className="app-shell flex-1 space-y-4 pt-8 pb-32 lg:pb-28">
      <div className="relative overflow-hidden rounded-[var(--radius-lg)] px-5 py-4" style={{ background: "color-mix(in oklch, var(--color-theme) 11%, white)" }}>
        <div className="relative z-10 flex items-center gap-3">
          <Link
            href="/compte"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-theme)] text-white transition-opacity hover:opacity-80"
            aria-label="Retour aux réglages"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-theme)]">Compte</p>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Mon compte</h1>
          </div>
        </div>
      </div>

      <Card>
        <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Modifier les données</h2>
        {profile.loginId && (
          <p className="mt-1 font-mono text-sm font-semibold text-[var(--color-theme)]">{profile.loginId}</p>
        )}
        <p className="text-sm text-[var(--color-text-secondary)]">{profile.email}</p>

        <div className="mt-4 space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Prénom</label>
              <input type="text" value={form.prenom} onChange={(e) => setForm((f) => ({ ...f, prenom: e.target.value }))} className={inputCls} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Nom</label>
              <input type="text" value={form.nom} onChange={(e) => setForm((f) => ({ ...f, nom: e.target.value }))} className={inputCls} />
            </div>
          </div>

          {profile.role === "eleve" && (
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Classe</label>
              <div className="grid grid-cols-2 gap-2">
                <AppSelect
                  value={form.classeType}
                  onChange={(v) => setForm((f) => ({ ...f, classeType: v, classeNum: v === "ancien" ? f.classeNum : f.classeNum }))}
                  options={[
                    ...["CSC", "CFR", "EPL", "CPR"].map((c) => ({ value: c, label: c })),
                    { value: "ancien", label: "Ancien élève" },
                  ]}
                  placeholder="Filière"
                  emptyOption={{ value: "", label: "Filière" }}
                  className="w-full"
                />
                {form.classeType === "ancien" ? (
                  <input
                    type="text"
                    placeholder="Année"
                    value={form.classeNum}
                    onChange={(e) => setForm((f) => ({ ...f, classeNum: e.target.value }))}
                    className={inputCls}
                  />
                ) : (
                  <AppSelect
                    value={form.classeNum}
                    onChange={(v) => setForm((f) => ({ ...f, classeNum: v }))}
                    options={CLASSE_NUM_OPTIONS}
                    placeholder="N°"
                    emptyOption={{ value: "", label: "N°" }}
                    className="w-full"
                  />
                )}
              </div>
            </div>
          )}

          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Adresse</label>
            <input type="text" value={form.adresse} onChange={(e) => setForm((f) => ({ ...f, adresse: e.target.value }))} className={inputCls} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">NPA</label>
              <input type="text" placeholder="1234" value={form.npa} onChange={(e) => setForm((f) => ({ ...f, npa: e.target.value }))} className={inputCls} />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Localité</label>
              <input type="text" value={form.localite} onChange={(e) => setForm((f) => ({ ...f, localite: e.target.value }))} className={inputCls} />
            </div>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Téléphone</label>
            <input type="text" placeholder="+41 79 …" value={form.telephone} onChange={(e) => setForm((f) => ({ ...f, telephone: e.target.value }))} className={inputCls} />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium text-zinc-600 dark:text-zinc-400">Langue parlée</label>
            <AppSelect
              value={form.langue}
              onChange={(v) => setForm((f) => ({ ...f, langue: v }))}
              options={LANGUES_OPTIONS.map((l) => ({ value: l.code, label: l.label }))}
              className="w-full"
            />
          </div>
        </div>

        {profileMsg && (
          <p className={`mt-3 text-sm ${profileMsg.ok ? "text-emerald-700" : "text-red-600"}`} role="status">
            {profileMsg.text}
          </p>
        )}

        <div className="mt-5 flex justify-end gap-2">
          <Link
            href="/compte"
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300"
            aria-label="Annuler"
          >
            <IconCancel />
          </Link>
          <button
            type="button"
            onClick={saveProfile}
            disabled={profilePending}
            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-theme)] text-white hover:opacity-90 disabled:opacity-60"
            aria-label="Enregistrer"
          >
            {profilePending ? <Spinner /> : <IconSave />}
          </button>
        </div>
      </Card>

      <Card>
        <button
          type="button"
          onClick={() => { setPwdOpen((v) => !v); setPwdStatus("idle"); setPwdMsg(null); }}
          className="flex w-full items-center justify-between text-left"
        >
          <h2 className="text-base font-semibold text-[var(--color-text-primary)]">Changer le mot de passe</h2>
          <svg
            width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`shrink-0 text-zinc-400 transition-transform ${pwdOpen ? "rotate-90" : ""}`}
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {pwdOpen && (
          <div className="mt-4 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">Mot de passe</label>
              <input
                type="password"
                value={newPwd}
                onChange={(e) => { setNewPwd(e.target.value); setPwdMsg(null); }}
                autoComplete="new-password"
                className="min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-4 text-base outline-none focus:border-[var(--color-accent-alg)] focus:ring-2 focus:ring-[var(--color-accent-alg)]/15"
              />
              <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Au moins 8 caractères.</p>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-[var(--color-text-primary)]">Confirmer le mot de passe</label>
              <input
                type="password"
                value={confirmPwd}
                onChange={(e) => { setConfirmPwd(e.target.value); setPwdMsg(null); }}
                autoComplete="new-password"
                className={`min-h-12 w-full rounded-xl border bg-white px-4 text-base outline-none focus:ring-2 ${
                  confirmPwd.length > 0 && confirmPwd !== newPwd
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500/15"
                    : "border-zinc-300 focus:border-[var(--color-accent-alg)] focus:ring-[var(--color-accent-alg)]/15"
                }`}
              />
              {confirmPwd.length > 0 && confirmPwd !== newPwd && (
                <p className="mt-1 text-xs text-red-600">Les mots de passe ne correspondent pas.</p>
              )}
            </div>
            <button
              type="button"
              onClick={() => void handlePasswordChange()}
              disabled={pwdStatus === "loading" || newPwd.length < 8 || newPwd !== confirmPwd}
              className="min-h-12 w-full rounded-xl bg-[var(--color-accent-alg)] px-4 text-base font-semibold text-white transition-opacity disabled:opacity-50"
            >
              {pwdStatus === "loading" ? "Enregistrement…" : "Enregistrer"}
            </button>
            {pwdMsg && (
              <p className={`text-sm ${pwdStatus === "ok" ? "text-emerald-700" : "text-red-600"}`} role="status">
                {pwdMsg}
              </p>
            )}
          </div>
        )}
      </Card>
    </main>
  );
}
