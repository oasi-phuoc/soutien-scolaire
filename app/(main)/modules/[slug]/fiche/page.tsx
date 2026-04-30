import Link from "next/link";
import { notFound } from "next/navigation";
import { PrintButton } from "@/components/PrintButton";
import { MODULES, TRACK_LABELS, getModuleBySlug, getRecommendedTitles } from "@/lib/modules";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MODULES.map((m) => ({ slug: m.slug }));
}

export default async function ModuleFichePage({ params }: Props) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod || !mod.hasPdf) notFound();

  const reco = getRecommendedTitles(mod.recommendedAfterSlugs);

  return (
    <>
      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6 print:max-w-none print:px-8 print:py-6">
        <div className="mb-4 print:hidden">
          <Link
            href={`/modules/${slug}`}
            className="text-sm font-semibold text-teal-800 underline underline-offset-2 hover:text-teal-950 dark:text-teal-400"
          >
            ← Retour au module
          </Link>
          <h1 className="sr-only">Fiche · {mod.titleFr}</h1>
        </div>
        <div className="mb-4 flex flex-wrap gap-2 print:hidden">
          <PrintButton label="Imprimer ou enregistrer en PDF" />
          <Link
            href={`/modules/${slug}/quiz`}
            className="flex min-h-12 items-center rounded-xl border border-zinc-300 px-5 text-base font-semibold dark:border-zinc-600"
          >
            Mini-test
          </Link>
        </div>

        <article className="rounded-2xl border border-zinc-200 bg-white p-6 text-black shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 print:border-2 print:shadow-none">
          <header className="border-b border-zinc-200 pb-4 dark:border-zinc-700 print:border-black">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500 print:text-black">
              Soutien scolaire — fiche élève
            </p>
            <h1 className="mt-2 text-2xl font-bold print:text-black">{mod.titleFr}</h1>
            <p className="mt-1 text-sm text-zinc-600 print:text-black">
              {TRACK_LABELS[mod.track]} · environ {mod.estimatedMinutes} min
            </p>
          </header>

          <section className="mt-6">
            <h2 className="text-base font-bold print:text-black">En bref</h2>
            <p className="mt-2 text-sm leading-relaxed print:text-base">{mod.summaryFr}</p>
          </section>

          {reco.length > 0 ? (
            <section className="mt-6">
              <h2 className="text-base font-bold print:text-black">Avant ce module</h2>
              <ul className="mt-2 list-disc pl-5 text-sm print:text-base">
                {reco.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <section className="mt-8 grid gap-4 sm:grid-cols-2 print:gap-6">
            <div>
              <h2 className="text-base font-bold print:text-black">Mots nouveaux (FR)</h2>
              <p className="mt-2 border-b border-dotted border-zinc-300 pb-12 text-sm text-zinc-400 print:border-black">
                &nbsp;
              </p>
            </div>
            <div dir="rtl" lang="ar">
              <h2 className="text-base font-bold print:text-black" dir="ltr" lang="fr">
                Traduction ou aide (pivot)
              </h2>
              <p className="mt-2 border-b border-dotted border-zinc-300 pb-12 text-sm text-zinc-400 print:border-black">
                &nbsp;
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-base font-bold print:text-black">Exemple / exercice papier</h2>
            <div className="mt-4 min-h-[8rem] rounded-lg border border-dashed border-zinc-300 bg-zinc-50 p-4 print:border-black print:bg-white" />
          </section>

          <section className="mt-10">
            <h2 className="text-base font-bold print:text-black">Comment j’ai travaillé</h2>
            <table className="mt-4 w-full border-collapse text-sm print:text-base">
              <thead>
                <tr>
                  <th className="border border-zinc-300 p-2 text-left font-semibold print:border-black">
                    Date
                  </th>
                  <th className="border border-zinc-300 p-2 text-left font-semibold print:border-black">
                    Ce que j’ai fait
                  </th>
                  <th className="border border-zinc-300 p-2 text-left font-semibold print:border-black">
                    Note (0–5)
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 6 }).map((_, i) => (
                  <tr key={i}>
                    <td className="border border-zinc-300 p-4 print:border-black" />
                    <td className="border border-zinc-300 p-4 print:border-black" />
                    <td className="border border-zinc-300 p-4 print:border-black" />
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </article>
      </main>
      <FichePrintHint />
    </>
  );
}

function FichePrintHint() {
  return (
    <div className="hidden print:block print:p-8 print:text-xs print:text-black">
      <p>Document imprimé depuis soutien-scolaire — usage personnel uniquement.</p>
    </div>
  );
}
