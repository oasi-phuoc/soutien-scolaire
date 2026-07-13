"use client";
import { useEffect, useState, Fragment, type ReactNode } from "react";
import { resolveVocabImage } from "@/lib/curriculum/vocab-image";
import type { VocabTheme, VocabTheoryBlock, VocabWord } from "@/lib/curriculum/vocabulary-data";
import Image from "next/image";
import { playWord, SoundIcon } from "./vocabUtils";
import { usePivotLang } from "@/components/math/usePivotLang";
import { useTranslation } from "@/components/TranslationProvider";
import { definitionLabel, pickWordDefinition } from "@/lib/curriculum/vocab-definition-utils";
import { pickVocabTitle, resolveVocabTheoryBlock } from "@/lib/curriculum/vocab-theme-utils";

function AnalogClock({ h, m, size = 90 }: { h: number; m: number; size?: number }) {
  const cx = size / 2, cy = size / 2, r = size * 0.44;
  const hourDeg = ((h % 12) + m / 60) * 30;
  const minuteDeg = m * 6;
  function toXY(deg: number, len: number) {
    const rad = (deg - 90) * (Math.PI / 180);
    return { x: cx + len * Math.cos(rad), y: cy + len * Math.sin(rad) };
  }
  const hourEnd = toXY(hourDeg, r * 0.55);
  const minuteEnd = toXY(minuteDeg, r * 0.82);
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <circle cx={cx} cy={cy} r={r} fill="var(--color-bg-primary)" stroke="var(--color-border-emphasis)" strokeWidth="1.5" />
      {Array.from({ length: 12 }, (_, i) => {
        const outer = toXY(i * 30, r);
        const inner = toXY(i * 30, r * (i % 3 === 0 ? 0.8 : 0.88));
        return <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="var(--color-text-secondary)" strokeWidth={i % 3 === 0 ? 2 : 1} />;
      })}
      <line x1={cx} y1={cy} x2={hourEnd.x} y2={hourEnd.y} stroke="var(--color-text-primary)" strokeWidth="3" strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={minuteEnd.x} y2={minuteEnd.y} stroke="var(--color-accent-fr)" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="2.5" fill="var(--color-text-primary)" />
    </svg>
  );
}

function TheoryBlock({ block }: { block: VocabTheoryBlock }) {
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-default)]">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-accent-fr)]/10">
              {block.headers.map((h) => (
                <th key={h} className="px-3 py-2 text-left text-xs font-bold uppercase tracking-wide text-[var(--color-accent-fr)]">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, i) => (
              <tr key={i} className={i % 2 === 1 ? "bg-[var(--color-bg-secondary)]" : ""}>
                {row.map((cell, j) => (
                  <td key={j} className={`px-3 py-2 text-[var(--color-text-primary)] ${j === 0 ? "font-semibold" : ""}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (block.type === "clocks") {
    const cols = block.cols ?? 4;
    return (
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
        {block.items.map((clk, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <AnalogClock h={clk.h} m={clk.m} size={72} />
            {clk.label && (
              <p className="text-center text-xs text-[var(--color-text-secondary)]">{clk.label}</p>
            )}
          </div>
        ))}
      </div>
    );
  }
  if (block.type === "section") {
    return (
      <div>
        {block.title && (
          <p className="mb-2 text-xs font-bold text-[var(--color-accent-fr)]">{block.title}</p>
        )}
        <ul className="space-y-1 border-l-2 border-[var(--color-accent-fr)]/40 pl-3">
          {block.items.map((item, i) => (
            <li key={i} className="text-sm text-[var(--color-text-primary)]">{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  if (block.type === "note") {
    return (
      <div className="rounded-[var(--radius-lg)] border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800/40 dark:bg-amber-900/10">
        <p className="text-xs text-amber-700 dark:text-amber-400">{block.text}</p>
      </div>
    );
  }
  return null;
}

function parseCountryWord(relatedWord: string): { articlePart: string; namePart: string } | null {
  const match = relatedWord.match(/^(le |la |l'|les )(.+)$/i);
  if (!match) return null;
  return { articlePart: match[1].trimEnd(), namePart: match[2] };
}

function femArticle(art?: string): string {
  return art === "le" ? "la" : art === "un" ? "une" : art ?? "";
}

function MfRows({ word, feminine, article }: { word: string; feminine?: string; article?: string }) {
  const art = article ?? "";
  const artF = femArticle(article);
  const hasArt = !!art;
  return (
    <div className="mt-1.5 space-y-0.5 text-xs">
      <div className="flex items-baseline">
        <span className="w-5 shrink-0 font-bold text-[var(--color-accent-fr)]">m.</span>
        {hasArt && <span className="w-7 shrink-0 text-[var(--color-text-secondary)]">{art}</span>}
        <span className="text-[var(--color-text-primary)]">{word}</span>
      </div>
      <div className="flex items-baseline">
        <span className="w-5 shrink-0 font-bold text-[var(--color-accent-fr)]">f.</span>
        {hasArt && <span className="w-7 shrink-0 text-[var(--color-text-secondary)]">{artF}</span>}
        <span className="text-[var(--color-text-primary)]">{feminine ?? word}</span>
      </div>
    </div>
  );
}

function resolveImage(image: string | undefined, folder: string): string | undefined {
  return resolveVocabImage(image, folder);
}

function DefinitionToggle({
  isOpen,
  onToggle,
  ariaLabel,
}: {
  isOpen: boolean;
  onToggle: () => void;
  ariaLabel: string;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      aria-expanded={isOpen}
      className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[11px] font-bold leading-none transition-colors ${
        isOpen
          ? "border-[var(--color-accent-fr)] bg-[var(--color-accent-fr)] text-white"
          : "border-[var(--color-accent-fr)]/35 bg-[var(--color-accent-fr)]/10 text-[var(--color-accent-fr)]"
      }`}
    >
      ?
    </button>
  );
}

function WordTitle({
  children,
  definitionButton,
  bold = true,
}: {
  children: ReactNode;
  definitionButton: ReactNode;
  bold?: boolean;
}) {
  return (
    <div className={`grid w-full grid-cols-[1.25rem_minmax(0,1fr)_1.25rem] items-center gap-1 text-sm leading-tight text-[var(--color-text-primary)] ${bold ? "font-bold" : ""}`}>
      <div className="flex justify-start">{definitionButton}</div>
      <p className="min-w-0 text-center">{children}</p>
      <div aria-hidden className="h-5 w-5" />
    </div>
  );
}

function DefinitionText({
  w,
  isOpen,
}: {
  w: VocabWord;
  isOpen: boolean;
}) {
  const pivot = usePivotLang();
  const { showPivot } = useTranslation();
  const picked = pickWordDefinition(w, pivot, showPivot);
  const synonyms = w.synonym?.filter((item) => item.trim().length > 0) ?? [];
  if (!isOpen || (!picked.text && synonyms.length === 0)) return null;
  const isRtl = showPivot && (pivot === "ar" || pivot === "fa" || pivot === "ps");

  return (
    <div
      className="mt-1 rounded-[var(--radius-md)] bg-[var(--color-accent-fr)]/8 px-2 py-1.5 text-left text-xs leading-snug text-[var(--color-text-secondary)]"
      lang={showPivot && picked.translated ? pivot : "fr"}
      dir={isRtl && picked.translated ? "rtl" : "ltr"}
    >
      {picked.text && (
        <p>
          <span className="font-bold text-[var(--color-accent-fr)]">{definitionLabel(showPivot ? pivot : "fr")} : </span>
          <span>{picked.text}</span>
        </p>
      )}
      {synonyms.length > 0 && (
        <p className={picked.text ? "mt-1" : ""}>
          <span className="font-bold text-[var(--color-accent-fr)]">Synonymes : </span>
          <span>{synonyms.join(", ")}</span>
        </p>
      )}
    </div>
  );
}

function WordCard({ w, cardLayout, imageFolder }: { w: VocabWord; cardLayout?: "mf"; imageFolder: string }) {
  const country = w.relatedWords?.[0] ? parseCountryWord(w.relatedWords[0]) : null;
  const [imgFailed, setImgFailed] = useState(false);
  const [definitionOpen, setDefinitionOpen] = useState(false);
  const src = resolveImage(w.image, imageFolder);
  const hasDefinition = !!(w.definition || w.definitionPivot);
  const definitionButton = hasDefinition ? (
    <DefinitionToggle
      isOpen={definitionOpen}
      onToggle={() => setDefinitionOpen((open) => !open)}
      ariaLabel={`${definitionOpen ? "Masquer" : "Afficher"} la définition de ${w.word}`}
    />
  ) : null;

  return (
    <div className="flex flex-col gap-1.5 rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] p-2">
      {/* Image with audio overlay */}
      <div className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white" style={{ aspectRatio: "4/3" }}>
        {src && !imgFailed ? (
          <Image src={src} alt={w.word} fill
            className="object-cover"
            onError={() => setImgFailed(true)}
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 160px" />
        ) : (
          <div className="h-full w-full bg-white" aria-hidden />
        )}
        <button
          type="button"
          onClick={() => playWord(w)}
          className="absolute top-1.5 right-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 text-[var(--color-accent-fr)] shadow-sm backdrop-blur-sm transition-colors hover:bg-white active:scale-90"
          aria-label={`Écouter ${w.word}`}
        >
          <SoundIcon />
        </button>
      </div>

      {/* Word info */}
      <div className="w-full">
        {cardLayout === "mf" ? (
          <>
            <WordTitle definitionButton={definitionButton}>{w.relatedWords?.[0] ?? w.word}</WordTitle>
            <DefinitionText w={w} isOpen={definitionOpen} />
            <MfRows word={w.word} feminine={w.feminine} article={w.article} />
          </>
        ) : country ? (
          <>
            <WordTitle definitionButton={definitionButton} bold={false}>
              <span className={`font-normal text-[var(--color-text-secondary)]${country.articlePart.endsWith("'") ? "" : " mr-0.5"}`}>{country.articlePart}</span>
              <strong>{country.namePart}</strong>
            </WordTitle>
            <DefinitionText w={w} isOpen={definitionOpen} />
            <MfRows word={w.word} feminine={w.feminine ?? w.word} article="un" />
          </>
        ) : w.feminine ? (
          <>
            <WordTitle definitionButton={definitionButton}>
              {w.article && <span className="mr-0.5 font-normal text-[var(--color-text-secondary)]">{w.article}</span>}
              <span>{w.word}</span>
            </WordTitle>
            <DefinitionText w={w} isOpen={definitionOpen} />
            <MfRows word={w.word} feminine={w.feminine} article={w.article} />
          </>
        ) : (
          <>
            <WordTitle definitionButton={definitionButton}>
              {w.article && <span className="mr-0.5 font-normal text-[var(--color-text-secondary)]">{w.article}</span>}
              <span>{w.word}</span>
            </WordTitle>
            <DefinitionText w={w} isOpen={definitionOpen} />
            {w.relatedWords && w.relatedWords.length > 0 && (
              <div className="mt-1 text-xs text-[var(--color-text-secondary)]">
                {w.relatedWords.map((rw) => <p key={rw}>{rw}</p>)}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

interface Props {
  theme: VocabTheme;
  onCanValidateChange: (can: boolean) => void;
}

export function VocabCards({ theme, onCanValidateChange }: Props) {
  const pivot = usePivotLang();
  const { showPivot } = useTranslation();
  const isRtl = showPivot && (pivot === "ar" || pivot === "fa" || pivot === "ps");
  const displayTitle = pickVocabTitle(theme, pivot, showPivot);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { onCanValidateChange(false); }, []);

  // Group words by their `group` field
  const sections: { group?: string; words: VocabWord[] }[] = [];
  for (const w of theme.words) {
    const last = sections[sections.length - 1];
    if (!last || w.group !== last.group) {
      sections.push({ group: w.group, words: [w] });
    } else {
      last.words.push(w);
    }
  }

  return (
    <div>
      <p
        className="mb-4 text-xl font-bold text-[var(--color-text-primary)]"
        lang={showPivot && pivot !== "fr" ? pivot : "fr"}
        dir={isRtl ? "rtl" : "ltr"}
      >
        {displayTitle}
      </p>
      <div className="space-y-4">
        {sections.map((sec, si) => (
          <div key={si}>
            {sec.group && (
              <p className="mb-2 text-base font-bold text-[var(--color-text-primary)]">{sec.group}</p>
            )}
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-5">
              {sec.words.map((w) => <WordCard key={w.word} w={w} cardLayout={theme.cardLayout} imageFolder={theme.imageFolder ?? theme.section} />)}
            </div>
          </div>
        ))}
      </div>

      {theme.theory && theme.theory.length > 0 && (
        <div className="mt-6 space-y-4">
          <p className="text-sm font-bold text-[var(--color-accent-fr)]">Théorie</p>
          {theme.theory.map((block, i) => (
            <Fragment key={i}>
              <TheoryBlock block={resolveVocabTheoryBlock(block, i, theme, pivot, showPivot)} />
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
