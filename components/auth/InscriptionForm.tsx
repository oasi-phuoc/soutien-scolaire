"use client";

import Link from "next/link";
import { signUpAction, resendConfirmationAction } from "@/app/actions/auth";

const inputCls = "mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-base outline-none focus:border-teal-500 dark:border-zinc-600 dark:bg-zinc-950";
const labelCls = "text-sm font-medium text-zinc-800 dark:text-zinc-200";
const optTag = <span className="font-normal text-zinc-400 dark:text-zinc-500"> (optionnel)</span>;
const reqTag = <span className="text-red-500"> *</span>;

export function InscriptionForm({ error, msg, confirmedEmail }: { error?: string; msg?: string; confirmedEmail?: string }) {
  if (confirmedEmail !== undefined) {
    return (
      <>
        <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-5 dark:border-teal-800 dark:bg-teal-950/30">
          <p className="text-sm font-semibold text-teal-900 dark:text-teal-100">
            Veuillez valider le lien envoyé par e-mail.
          </p>
          <p className="mt-2 text-sm text-teal-800 dark:text-teal-200">
            Si vous n&apos;avez pas reçu d&apos;e-mail de confirmation, vérifiez les courriers indésirables.
          </p>
          {msg && <p className="mt-3 text-xs font-medium text-teal-700 dark:text-teal-300">{msg}</p>}
          {error && <p className="mt-3 text-xs font-medium text-red-600 dark:text-red-400">{error}</p>}
        </div>
        <form action={resendConfirmationAction} className="mt-4">
          <input type="hidden" name="email" value={confirmedEmail} />
          <button
            type="submit"
            className="w-full rounded-xl border border-zinc-300 py-2.5 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-600 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            Renvoyer l&apos;e-mail de confirmation
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/connexion" className="font-semibold text-teal-800 underline dark:text-teal-400">
            Retour à la connexion
          </Link>
        </p>
      </>
    );
  }

  return (
    <>
      {error && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {error}
        </p>
      )}
      {msg && (
        <p className="mt-4 rounded-lg bg-teal-50 px-3 py-2 text-sm text-teal-900 dark:bg-teal-950/40 dark:text-teal-100">
          {msg}
        </p>
      )}

      <form action={signUpAction} className="mt-6 flex flex-col gap-4">

        {/* Prénom + Nom */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="prenom" className={labelCls}>Prénom{reqTag}</label>
            <input id="prenom" name="prenom" type="text" required autoComplete="given-name" className={inputCls} />
          </div>
          <div>
            <label htmlFor="nom" className={labelCls}>Nom{reqTag}</label>
            <input id="nom" name="nom" type="text" required autoComplete="family-name" className={inputCls} />
          </div>
        </div>

        {/* Classe */}
        <div>
          <label className={labelCls}>Classe{reqTag}</label>
          <div className="mt-1 grid grid-cols-2 gap-2">
            <select
              name="classe_type"
              required
              className={inputCls}
              defaultValue=""
            >
              <option value="" disabled>Filière</option>
              {["CSC", "CFR", "EPL", "CPR"].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              name="classe_num"
              type="number"
              required
              min={1}
              max={20}
              placeholder="Numéro (1–20)"
              className={inputCls}
            />
          </div>
        </div>

        {/* E-mail */}
        <div>
          <label htmlFor="email" className={labelCls}>E-mail{reqTag}</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputCls} />
        </div>

        {/* Mot de passe */}
        <div>
          <label htmlFor="password" className={labelCls}>Mot de passe{reqTag}</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            className={inputCls}
          />
          <p className="mt-1 text-xs text-zinc-500">Au moins 8 caractères.</p>
        </div>

        {/* Séparateur coordonnées */}
        <div className="pt-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400 dark:text-zinc-500">
            Coordonnées{optTag}
          </p>
          <div className="mt-3 flex flex-col gap-4">
            <div>
              <label htmlFor="adresse" className={labelCls}>Adresse</label>
              <input id="adresse" name="adresse" type="text" autoComplete="street-address" className={inputCls} />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label htmlFor="npa" className={labelCls}>NPA</label>
                <input id="npa" name="npa" type="text" inputMode="numeric" autoComplete="postal-code" placeholder="1234" className={inputCls} />
              </div>
              <div>
                <label htmlFor="localite" className={labelCls}>Localité</label>
                <input id="localite" name="localite" type="text" autoComplete="address-level2" className={inputCls} />
              </div>
            </div>

            <div>
              <label htmlFor="telephone" className={labelCls}>Téléphone</label>
              <input id="telephone" name="telephone" type="tel" autoComplete="tel" placeholder="+41 79 123 45 67" className={inputCls} />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          M&apos;inscrire
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-600 dark:text-zinc-400">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="font-semibold text-teal-800 underline dark:text-teal-400">
          Connexion
        </Link>
      </p>
    </>
  );
}
