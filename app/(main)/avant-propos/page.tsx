import Link from "next/link";

export default function AvantProposPage() {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 pt-8 pb-32">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-theme)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Accueil
        </Link>

        <div className="flex items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
            style={{ background: "var(--color-theme-light)" }}
          >
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
              <path d="M13 3C7.477 3 3 7.477 3 13s4.477 10 10 10 10-4.477 10-10S18.523 3 13 3Z" stroke="var(--color-theme)" strokeWidth="1.6" />
              <path d="M13 11v6M13 8.5v1" stroke="var(--color-theme)" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Avant-propos</h1>
            <p className="text-xs text-[var(--color-text-secondary)]">Soutien Scolaire — Guide d&apos;utilisation</p>
          </div>
        </div>
      </div>

      {/* Présentation */}
      <section className="mb-6">
        <div
          className="rounded-2xl p-5"
          style={{ background: "var(--color-theme-light)" }}
        >
          <p className="text-sm leading-relaxed text-[var(--color-text-primary)]">
            Cette application a été conçue pour accompagner les élèves dans leur parcours d&apos;apprentissage.
            Elle propose des leçons structurées, des exercices interactifs et un suivi de progression dans
            trois domaines : la <strong style={{ color: "var(--color-accent-lecture)" }}>Lecture & Alphabétisation</strong>,
            les <strong style={{ color: "var(--color-accent-alg)" }}>Mathématiques</strong> et
            le <strong style={{ color: "var(--color-accent-fr)" }}>Français</strong>.
          </p>
        </div>
      </section>

      {/* Sections de l'app */}
      <section className="mb-6 space-y-3">
        <h2 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wide">Sections de l&apos;application</h2>

        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "#f0eeff" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 4h12M3 8h8M3 12h10" stroke="var(--color-accent-lecture)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-accent-lecture)" }}>Lecture & Alphabétisation</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                Apprentissage du déchiffrage, de la lecture syllabique et de la compréhension de textes.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "#eef3fc" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M4 9h10M9 4v10" stroke="var(--color-accent-alg)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-accent-alg)" }}>Mathématiques</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                Numération, opérations, géométrie et algèbre, du niveau A1 au niveau avancé.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" style={{ background: "#fff7e6" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3 5h12M3 9h8M3 13h6" stroke="var(--color-accent-fr)" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--color-accent-fr)" }}>Français</p>
              <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">
                Vocabulaire, grammaire et expression écrite organisés par thèmes et niveaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comment utiliser */}
      <section className="mb-6 space-y-3">
        <h2 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wide">Comment utiliser l&apos;application</h2>
        <div className="rounded-xl border border-[var(--color-border-default)] bg-white p-4 space-y-3">
          {[
            { num: "1", text: "Appuie sur le bouton \"+\" au centre de la barre de navigation pour choisir une matière." },
            { num: "2", text: "Sélectionne un module dans la liste. Les modules verrouillés se débloquent au fur et à mesure de ta progression." },
            { num: "3", text: "Lis la théorie, puis fais les exercices d'entraînement. Appuie sur \"Valider\" pour voir les corrections." },
            { num: "4", text: "Quand tu es prêt(e), lance l'évaluation. Une note sur 6 (barème suisse) est calculée automatiquement." },
            { num: "5", text: "Une fois un module réussi (note ≥ 4.0), le module suivant se déverrouille." },
          ].map((step) => (
            <div key={step.num} className="flex items-start gap-3">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ background: "var(--color-theme)" }}
              >
                {step.num}
              </span>
              <p className="text-xs text-[var(--color-text-primary)] leading-relaxed pt-0.5">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Crédits */}
      <section className="mb-4 space-y-3">
        <h2 className="text-sm font-bold text-[var(--color-text-secondary)] uppercase tracking-wide">Crédits</h2>
        <div className="rounded-xl border border-[var(--color-border-default)] bg-white divide-y divide-[var(--color-border-default)]">
          <div className="flex items-center gap-4 p-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: "var(--color-theme)" }}
            >
              VP
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Van Thanh Phuoc</p>
              <p className="text-xs text-[var(--color-text-secondary)]">Conception et réalisation de l&apos;application</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4">
            <div
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
              style={{ background: "var(--color-accent-lecture)" }}
            >
              MS
            </div>
            <div>
              <p className="text-sm font-semibold text-[var(--color-text-primary)]">Mélina Schröter</p>
              <p className="text-xs text-[var(--color-text-secondary)]">Participation — Lecture & Alphabétisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Version */}
      <p className="pt-2 text-center text-xs text-[var(--color-text-secondary)]">
        Soutien Scolaire — Valais, Suisse
      </p>
    </main>
  );
}
