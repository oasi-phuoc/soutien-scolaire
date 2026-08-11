"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUpAction } from "@/app/actions/auth";
import { AppSelect } from "@/components/ui/AppSelect";
import { buildLoginId } from "@/lib/auth/identifier";
import { ELEVE_CLASSE_TYPE_OPTIONS, HSS_CLASSE_HINT, usesClasseReferenceField } from "@/lib/eleve-classe-types";
import { PIVOT_LANGS } from "@/lib/pivot-langs";

const LANGUES = [
  ...PIVOT_LANGS.map(l => ({ code: l.code, label: l.labelFr })),
  { code: "other", label: "Autre" },
].sort((a, b) => {
  if (a.code === "other") return 1;
  if (b.code === "other") return -1;
  return a.label.localeCompare(b.label, "fr");
});

const CLASSE_NUM_OPTIONS = Array.from({ length: 20 }, (_, i) => ({
  value: String(i + 1),
  label: String(i + 1).padStart(2, "0"),
}));

const inputCls = "mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base outline-none focus:border-green-500 dark:border-zinc-600 dark:bg-zinc-950";
/** Même hauteur / rayon que AppSelect (md) — pour le champ Référence à côté de Filière. */
const selectMatchInputCls =
  "h-10 min-h-10 w-full rounded-[22px] border border-zinc-300 bg-white px-4 text-sm outline-none focus:border-green-500 dark:border-zinc-600 dark:bg-zinc-950";
const labelCls = "text-sm font-medium text-zinc-800 dark:text-zinc-200";
const reqTag = <span className="text-red-500"> *</span>;
const optTag = <span className="font-normal text-zinc-400 dark:text-zinc-500"> (optionnel)</span>;

function IconCopy() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function SuccessPopup({ loginId, password, onClose }: { loginId: string; password: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  function copyId() {
    navigator.clipboard.writeText(loginId).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 dark:text-green-400">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>

        <h2 className="mb-1 text-lg font-bold text-zinc-900 dark:text-zinc-50">Inscription réussie !</h2>
        <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
          Notez ces informations — elles seront nécessaires pour vous connecter.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">Identifiant</p>
            <div className="flex items-center justify-between gap-2">
              <p className="font-mono text-lg font-bold text-green-700 dark:text-green-400">{loginId}</p>
              <button
                type="button"
                onClick={copyId}
                className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700"
              >
                <IconCopy />
                {copied ? "Copié !" : "Copier"}
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">Mot de passe</p>
            <p className="font-mono text-base font-medium text-zinc-900 dark:text-zinc-100">{password}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full min-h-12 rounded-xl bg-green-700 text-base font-semibold text-white dark:bg-green-600"
        >
          Se connecter
        </button>
      </div>
    </div>
  );
}

export function InscriptionForm({ error: initialError }: { error?: string }) {
  const router = useRouter();
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [classeType, setClasseType] = useState("");
  const [classeNum, setClasseNum] = useState("");
  const [langue, setLangue] = useState("");
  const [formError, setFormError] = useState(initialError ?? null);
  const [popup, setPopup] = useState<{ loginId: string; password: string } | null>(null);
  const [pending, startTransition] = useTransition();

  const loginId = buildLoginId(prenom, nom);
  const usesReference = usesClasseReferenceField(classeType);

  const passwordMismatch = confirmPassword.length > 0 && password !== confirmPassword;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (password !== confirmPassword) {
      setFormError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (!classeType) {
      setFormError("Veuillez sélectionner une filière.");
      return;
    }
    if (!classeNum) {
      setFormError(
        usesReference
          ? "Veuillez saisir une référence."
          : "Veuillez sélectionner un numéro de classe.",
      );
      return;
    }
    if (!langue) {
      setFormError("Veuillez sélectionner une langue.");
      return;
    }
    setFormError(null);
    const formData = new FormData(e.currentTarget);
    startTransition(async () => {
      try {
        const result = await signUpAction(formData);
        if (result.ok) {
          setPopup({ loginId: result.loginId, password });
        } else {
          setFormError(result.reason);
        }
      } catch {
        setFormError("Une erreur inattendue s'est produite. Veuillez réessayer.");
      }
    });
  }

  if (popup) {
    return (
      <SuccessPopup
        loginId={popup.loginId}
        password={popup.password}
        onClose={() => router.push("/connexion")}
      />
    );
  }

  return (
    <>
      {formError && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {formError}
        </p>
      )}

      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-5 lg:gap-6">

        {/* Identité */}
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Identité
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="prenom" className={labelCls}>Prénom{reqTag}</label>
              <input
                id="prenom" name="prenom" type="text" required autoComplete="given-name"
                value={prenom} onChange={e => setPrenom(e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="nom" className={labelCls}>Nom{reqTag}</label>
              <input
                id="nom" name="nom" type="text" required autoComplete="family-name"
                value={nom} onChange={e => setNom(e.target.value)}
                className={inputCls}
              />
            </div>
          </div>

          <div>
            <label className={labelCls}>Identifiant de connexion</label>
            <input
              name="login_id"
              type="text"
              readOnly
              value={loginId}
              placeholder="Saisissez le prénom et le nom"
              className="mt-1 min-h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 text-base font-mono text-green-700 outline-none cursor-default dark:border-zinc-700 dark:bg-zinc-800 dark:text-green-400"
            />
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Cet identifiant sera utilisé pour se connecter. Il est généré automatiquement.
            </p>
          </div>
        </section>

        {/* Classe & langue */}
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Classe &amp; langue
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            <div>
              <label className={labelCls}>Classe{reqTag}</label>
              <div className="mt-1 grid grid-cols-2 gap-2">
                <AppSelect
                  name="classe_type"
                  value={classeType}
                  onChange={(v) => { setClasseType(v); setClasseNum(""); }}
                  options={ELEVE_CLASSE_TYPE_OPTIONS}
                  placeholder="Filière"
                  emptyOption={{ value: "", label: "Filière" }}
                  className="w-full"
                />
                {usesReference ? (
                  <input
                    name="classe_num"
                    type="text"
                    required
                    value={classeNum}
                    onChange={(e) => setClasseNum(e.target.value)}
                    placeholder="Référence"
                    className={selectMatchInputCls}
                  />
                ) : (
                  <AppSelect
                    name="classe_num"
                    value={classeNum}
                    onChange={setClasseNum}
                    options={CLASSE_NUM_OPTIONS}
                    placeholder="N°"
                    emptyOption={{ value: "", label: "N°" }}
                    className="w-full"
                  />
                )}
              </div>
              {usesReference && (
                <p className="mt-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                  {HSS_CLASSE_HINT}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="langue" className={labelCls}>Langue parlée{reqTag}</label>
              <AppSelect
                id="langue"
                name="langue"
                value={langue}
                onChange={setLangue}
                options={LANGUES.map((l) => ({ value: l.code, label: l.label }))}
                placeholder="Sélectionner une langue"
                emptyOption={{ value: "", label: "Sélectionner une langue" }}
                className="mt-1 w-full"
              />
            </div>
          </div>
        </section>

        {/* Mot de passe */}
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Mot de passe
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="password" className={labelCls}>Mot de passe{reqTag}</label>
              <input
                id="password" name="password" type="password" required minLength={8}
                autoComplete="new-password" value={password}
                onChange={e => setPassword(e.target.value)}
                className={inputCls}
              />
              <p className="mt-1 text-xs text-zinc-500">Au moins 8 caractères.</p>
            </div>
            <div>
              <label htmlFor="confirm_password" className={labelCls}>Confirmer le mot de passe{reqTag}</label>
              <input
                id="confirm_password" name="confirm_password" type="password" required
                autoComplete="new-password" value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className={`${inputCls} ${passwordMismatch ? "border-red-400 focus:border-red-500" : ""}`}
              />
              {passwordMismatch && (
                <p className="mt-1 text-xs text-red-600 dark:text-red-400">Les mots de passe ne correspondent pas.</p>
              )}
            </div>
          </div>
        </section>

        {/* Coordonnées */}
        <section className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Coordonnées{optTag}
          </p>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="lg:col-span-2">
              <label htmlFor="adresse" className={labelCls}>Adresse</label>
              <input id="adresse" name="adresse" type="text" autoComplete="street-address" className={inputCls} />
            </div>
            <div>
              <label htmlFor="npa" className={labelCls}>NPA</label>
              <input id="npa" name="npa" type="text" inputMode="numeric" autoComplete="postal-code" placeholder="1234" className={inputCls} />
            </div>
            <div>
              <label htmlFor="localite" className={labelCls}>Localité</label>
              <input id="localite" name="localite" type="text" autoComplete="address-level2" className={inputCls} />
            </div>
            <div className="lg:col-span-2">
              <label htmlFor="telephone" className={labelCls}>Téléphone</label>
              <input id="telephone" name="telephone" type="tel" autoComplete="tel" placeholder="+41 79 123 45 67" className={inputCls} />
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={pending || !loginId || passwordMismatch}
            className="min-h-12 rounded-xl bg-green-700 px-8 text-base font-semibold text-white disabled:opacity-60 dark:bg-green-600 sm:min-w-[12rem]"
          >
            {pending ? "Inscription en cours…" : "M'inscrire"}
          </button>
          <p className="text-center text-sm text-zinc-600 sm:text-right dark:text-zinc-400">
            Déjà un compte ?{" "}
            <Link href="/connexion" className="font-semibold text-green-800 underline dark:text-green-400">
              Connexion
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
