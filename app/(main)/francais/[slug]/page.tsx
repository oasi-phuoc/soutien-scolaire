import Link from "next/link";
import { notFound } from "next/navigation";
import { getFrenchThemeBySlug } from "@/lib/curriculum/french-data";
import { PedagogicMarkerRow } from "@/components/PedagogicMarkerBadge";
import type { CompetenceCode } from "@/lib/curriculum/types";

const COMP: { code: CompetenceCode; label: string; hint: string }[] = [
  { code: "CO", label: "Compréhension orale", hint: "Écouter, discriminer, suivre des consignes orales." },
  { code: "CE", label: "Compréhension écrite", hint: "Lire, relier, anticiper à partir de textes et supports visuels." },
  { code: "PO", label: "Production orale", hint: "Répéter, dialoguer, monologuer guidé avec retour." },
  { code: "PE", label: "Production écrite", hint: "Copier, compléter, écrire sous dictée ou production guidée." },
];

type Props = { params: Promise<{ slug: string }> };

export default async function FrenchThemePage({ params }: Props) {
  const { slug } = await params;
  const th = getFrenchThemeBySlug(slug);
  if (!th) notFound();

  return (
    <main className="mx-auto w-full max-w-xl flex-1 space-y-6 px-4 py-8 pb-32">
      <div className="flex items-center gap-3">
        <Link
          href="/francais"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour au parcours français"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-medium uppercase text-[var(--color-accent-fr)]">{th.section}</p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {th.code} — {th.title}
          </h1>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{th.summary}</p>

      <div className="flex flex-wrap gap-2">
        <PedagogicMarkerRow markers={th.markers} />
      </div>

      <section aria-labelledby="comp" className="space-y-3">
        <h2 id="comp" className="text-sm font-semibold text-[var(--color-text-primary)]">
          Compétences travaillées (structure types)
        </h2>
        <ul className="space-y-3">
          {COMP.map((c) => (
            <li
              key={c.code}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-secondary)]/40 p-3"
            >
              <div className="flex items-center gap-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/icons/competences/icon-${c.code.toLowerCase()}.svg`}
                  alt=""
                  width={24}
                  height={24}
                />
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  {c.code} — {c.label}
                </p>
              </div>
              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{c.hint}</p>
              <p className="mt-2 text-[length:var(--font-size-xs)] text-[var(--color-text-secondary)]">
                Les activités détaillées (audio, micro, traceurs) seront branchées ici.
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-emphasis)] p-4 text-sm text-[var(--color-text-secondary)]">
        <p className="font-medium text-[var(--color-text-primary)]">Quiz associé</p>
        <p className="mt-1">
          Chronomètre, points, conversion 1–6, bonus de série : implémentation via le moteur commun décrit dans
          la structure (partie 3).
        </p>
      </div>
    </main>
  );
}
