import Link from "next/link";

export default function ConditionsUtilisationPage() {
  return (
    <main className="app-shell flex-1 pt-8 pb-32 lg:pb-28">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Link
            href="/compte"
            aria-label="Retour aux réglages"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-colors hover:brightness-95"
            style={{ background: "var(--color-theme-light)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 18l-6-6 6-6" stroke="var(--color-theme)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div>
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">Conditions d&apos;utilisation</h1>
            <p className="text-xs text-[var(--color-text-secondary)]">Dernière mise à jour : juin 2026</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">

        {/* Article 1 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">1. Objet</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            L&apos;application <strong className="text-[var(--color-text-primary)]">LearnUp</strong> est un outil pédagogique numérique développé pour accompagner les élèves dans leur apprentissage du français et des mathématiques. Elle est mise à disposition dans le cadre du programme SCAI du Service de l&apos;action sociale — Office de l&apos;asile, destiné aux personnes requérantes d&apos;asile. Son utilisation est réservée à des fins éducatives.
          </p>
        </div>

        {/* Article 2 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">2. Accès et compte</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            L&apos;accès à l&apos;application nécessite la création d&apos;un compte. Chaque utilisateur est responsable de la confidentialité de ses identifiants. Tout usage frauduleux d&apos;un compte doit être signalé immédiatement. Nous nous réservons le droit de supprimer un compte ou de restreindre l&apos;accès à toute personne ne faisant pas partie du programme scolaire concerné, ainsi qu&apos;en cas d&apos;usage non conforme aux présentes conditions.
          </p>
        </div>

        {/* Article 3 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">3. Données personnelles</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            Les données collectées sont limitées à la progression pédagogique (exercices réalisés, notes obtenues). Ces données sont stockées de façon sécurisée et ne sont jamais transmises à des tiers à des fins commerciales. La progression est également sauvegardée localement sur l&apos;appareil de l&apos;utilisateur.
          </p>
        </div>

        {/* Article 4 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">4. Utilisation acceptable</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            L&apos;application est mise à disposition gratuitement à des fins d&apos;apprentissage. Toute utilisation à des fins commerciales, toute reproduction non autorisée du contenu, ou tout acte susceptible de perturber le bon fonctionnement du service est interdit.
          </p>
        </div>

        {/* Article 5 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">5. Propriété intellectuelle</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            L&apos;ensemble du contenu (leçons, exercices, illustrations, code source) est la propriété de <strong className="text-[var(--color-text-primary)]">Van Thanh Phuoc</strong>, avec la participation de <strong className="text-[var(--color-text-primary)]">Mélina Schröter</strong> pour la partie Lecture & Alphabétisation. Toute reproduction sans autorisation préalable est interdite.
          </p>
        </div>

        {/* Article 6 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">6. Disponibilité du service</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            L&apos;application est fournie &quot;en l&apos;état&quot;. Nous nous efforçons d&apos;assurer sa disponibilité, mais aucune garantie de disponibilité continue n&apos;est offerte. Des interruptions peuvent survenir pour maintenance ou mise à jour.
          </p>
        </div>

        {/* Article 7 */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">7. Modifications</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            Ces conditions peuvent être mises à jour à tout moment. La date de dernière mise à jour est indiquée en haut de cette page. L&apos;utilisation continue de l&apos;application après modification vaut acceptation des nouvelles conditions.
          </p>
        </div>

        {/* Contact */}
        <div className="rounded-2xl border border-[var(--color-border-default)] bg-white p-5">
          <h2 className="mb-2 text-sm font-bold text-[var(--color-text-primary)]">Contact</h2>
          <p className="text-sm leading-relaxed text-justify text-[var(--color-text-secondary)]">
            Pour toute question relative à ces conditions ou à vos données personnelles, vous pouvez contacter le développeur via l&apos;établissement scolaire ou par e-mail à l&apos;adresse indiquée dans l&apos;application.
          </p>
        </div>

      </div>

      <p className="pt-6 text-center text-xs leading-snug text-[var(--color-text-secondary)]">
        LearnUp - Thanh Phuoc VAN
        <br />
        Centre de formation « Le Botza »
      </p>
    </main>
  );
}
