"use client";

import Link from "next/link";
import { useRef, useState, useTransition } from "react";
import { reviewExpressionAction, type ExpressionAnnotation, type ExpressionSubmission } from "@/app/actions/expression";
import { formatMailboxFullDate } from "@/lib/messagerie/inbox";

function AnnotatedOriginal({ text, annotations }: { text: string; annotations: ExpressionAnnotation[] }) {
  const sorted = [...annotations].sort((a, b) => a.start - b.start).filter((item) => item.start >= 0 && item.end > item.start);
  const parts: React.ReactNode[] = [];
  let cursor = 0;
  sorted.forEach((item, index) => {
    if (item.start < cursor || item.start >= text.length) return;
    parts.push(text.slice(cursor, item.start));
    parts.push(<mark key={index} title={item.comment} className="rounded bg-amber-200 px-0.5 text-inherit underline decoration-amber-600 decoration-2">{text.slice(item.start, Math.min(item.end, text.length))}</mark>);
    cursor = Math.min(item.end, text.length);
  });
  parts.push(text.slice(cursor));
  return <p className="whitespace-pre-wrap text-base leading-7 text-[var(--color-text-primary)]">{parts}</p>;
}

function CorrectedText({ original, corrected }: { original: string; corrected: string }) {
  const before = original.split(/(\s+)/u);
  const after = corrected.split(/(\s+)/u);
  return (
    <p className="whitespace-pre-wrap text-base leading-7 text-[var(--color-text-primary)]">
      {after.map((token, index) => (
        <span key={index} className={token !== before[index] && token.trim() ? "font-semibold text-amber-600" : undefined}>{token}</span>
      ))}
    </p>
  );
}

function EmailMeta({
  subject,
  from,
  to,
  date,
  tags,
}: {
  subject: string;
  from: string;
  to: string;
  date: string;
  tags: string[];
}) {
  return (
    <div className="border-b border-[var(--color-border-default)] bg-[var(--color-theme-light)]/25 px-4 py-4 sm:px-6">
      <h2 className="text-lg font-bold text-[var(--color-text-primary)] sm:text-xl">{subject}</h2>
      {tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded bg-white/80 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--color-theme)]">
              {tag}
            </span>
          ))}
        </div>
      )}
      <dl className="mt-4 space-y-2 text-sm">
        <div className="grid grid-cols-[4.5rem_1fr] gap-x-3 gap-y-1 sm:grid-cols-[5.5rem_1fr]">
          <dt className="font-semibold text-[var(--color-text-secondary)]">De</dt>
          <dd className="text-[var(--color-text-primary)]">{from}</dd>
          <dt className="font-semibold text-[var(--color-text-secondary)]">À</dt>
          <dd className="text-[var(--color-text-primary)]">{to}</dd>
          <dt className="font-semibold text-[var(--color-text-secondary)]">Date</dt>
          <dd className="text-[var(--color-text-primary)]">{formatMailboxFullDate(date)}</dd>
        </div>
      </dl>
    </div>
  );
}

export function ExpressionSubmissionDetail({
  item,
  isTeacher,
  correspondentName,
}: {
  item: ExpressionSubmission;
  isTeacher: boolean;
  correspondentName?: string;
}) {
  const [correctedText, setCorrectedText] = useState(item.corrected_text ?? item.original_text);
  const [teacherComment, setTeacherComment] = useState(item.teacher_comment ?? "");
  const [annotations, setAnnotations] = useState<ExpressionAnnotation[]>(item.annotations ?? []);
  const [teacherPoints, setTeacherPoints] = useState(item.teacher_points != null ? String(item.teacher_points) : "");
  const [finalResult, setFinalResult] = useState(item.final_result ?? "");
  const [annotationComment, setAnnotationComment] = useState("");
  const [selection, setSelection] = useState<{ start: number; end: number; text: string } | null>(null);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const originalRef = useRef<HTMLDivElement>(null);
  const maxPoints = item.teacher_max_points ?? 25;

  const isOral = item.lesson_code.startsWith("PO");
  const kindLabel = isOral ? "Production orale" : "Production écrite";
  const subject = isTeacher
    ? `À corriger : ${item.prompt.title}`
    : item.status === "reviewed"
      ? `Correction : ${item.prompt.title}`
      : `Envoi : ${item.prompt.title}`;
  const from = isTeacher ? (correspondentName || "Élève") : item.status === "reviewed" ? (correspondentName || "Professeur") : "Moi";
  const to = isTeacher ? "Moi" : (correspondentName || "Professeur");

  function captureSelection() {
    const sel = window.getSelection();
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return;
    const range = sel.getRangeAt(0);
    const container = originalRef.current;
    if (!container || !container.contains(range.commonAncestorContainer)) return;
    const preRange = range.cloneRange();
    preRange.selectNodeContents(container);
    preRange.setEnd(range.startContainer, range.startOffset);
    const start = preRange.toString().length;
    const selectedText = range.toString();
    if (selectedText.trim()) setSelection({ start, end: start + selectedText.length, text: selectedText });
  }

  function addAnnotation() {
    if (!selection || !annotationComment.trim()) return;
    setAnnotations((current) => [...current, {
      start: selection.start,
      end: selection.end,
      text: selection.text,
      comment: annotationComment.trim(),
    }]);
    setSelection(null);
    setAnnotationComment("");
  }

  function saveReview() {
    startTransition(async () => {
      const points = Number(teacherPoints.replace(",", "."));
      const result = await reviewExpressionAction({
        id: item.id,
        correctedText,
        teacherComment,
        annotations,
        teacherPoints: points,
        finalResult,
      });
      setMessage(result.ok ? "Correction et résultat renvoyés à l'élève." : (result.reason ?? "Enregistrement impossible."));
    });
  }

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-3 pb-28 pt-4 sm:px-4 sm:pt-6">
      <header className="mb-4 flex items-center gap-3 border-b border-[var(--color-border-default)] pb-4">
        <Link
          href="/messagerie"
          aria-label="Retour à la boîte de réception"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-theme-light)] hover:text-[var(--color-theme)]"
        >
          ‹
        </Link>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-theme)]">{kindLabel}</p>
          <h1 className="truncate text-lg font-bold text-[var(--color-text-primary)] sm:text-xl">{item.prompt.title}</h1>
        </div>
      </header>

      <article className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-white shadow-sm">
        <EmailMeta
          subject={subject}
          from={from}
          to={to}
          date={item.reviewed_at ?? item.created_at}
          tags={[item.lesson_code, kindLabel, item.level]}
        />

        <div className="space-y-6 px-4 py-6 sm:px-6">
          <section className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-theme-light)]/15 p-4">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">Consigne</p>
            <p className="mt-2 text-sm text-[var(--color-text-primary)]">{item.prompt.situation}</p>
            <p className="mt-2 text-sm font-medium text-[var(--color-text-secondary)]">{item.prompt.instruction}</p>
          </section>

          {isTeacher ? (
            <div className="space-y-6">
              <section>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">Corps du message</h3>
                <div
                  ref={originalRef}
                  onMouseUp={captureSelection}
                  onTouchEnd={() => setTimeout(captureSelection, 0)}
                  className="w-full cursor-text select-text whitespace-pre-wrap rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4 text-base leading-7 [&::selection]:bg-amber-200"
                >
                  {item.original_text}
                </div>
                {selection && (
                  <p className="mt-1 truncate rounded bg-amber-50 px-2 py-1 text-xs text-amber-700">
                    Sélectionné : <strong>« {selection.text} »</strong>
                  </p>
                )}
                <div className="mt-2 flex gap-2">
                  <input value={annotationComment} onChange={(event) => setAnnotationComment(event.target.value)} placeholder="Commentaire sur le passage sélectionné" className="min-h-10 flex-1 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-[var(--color-theme)]" />
                  <button type="button" onClick={addAnnotation} disabled={!selection || !annotationComment.trim()} className="rounded-[var(--radius-md)] bg-[var(--color-theme)] px-4 text-sm font-bold text-white disabled:opacity-35">Annoter</button>
                </div>
                {annotations.length > 0 && (
                  <ul className="mt-3 space-y-2">
                    {annotations.map((annotation, index) => (
                      <li key={index} className="flex items-start justify-between gap-3 rounded-lg bg-amber-50 px-3 py-2 text-xs">
                        <span><strong>« {annotation.text} »</strong> : {annotation.comment}</span>
                        <button type="button" onClick={() => setAnnotations((current) => current.filter((_, i) => i !== index))} className="font-bold text-amber-700" aria-label="Supprimer l'annotation">×</button>
                      </li>
                    ))}
                  </ul>
                )}
              </section>

              <section>
                <label htmlFor="corrected-text" className="mb-2 block text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">Version corrigée</label>
                <textarea id="corrected-text" value={correctedText} onChange={(event) => setCorrectedText(event.target.value)} rows={10} className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4 text-base leading-7 outline-none focus:border-[var(--color-theme)]" />
              </section>

              <section className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-[var(--color-theme-light)]/15 p-4">
                <h3 className="mb-3 font-bold text-[var(--color-text-primary)]">Notation</h3>
                <div className="grid gap-3 sm:grid-cols-[1fr_2fr]">
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-[var(--color-text-primary)]">Points sur {maxPoints}</span>
                    <input
                      type="text"
                      inputMode="decimal"
                      value={teacherPoints}
                      onChange={(event) => setTeacherPoints(event.target.value.replace(/[^0-9,.]/g, ""))}
                      placeholder={`0 à ${maxPoints}`}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-sm font-semibold text-[var(--color-text-primary)]">Résultat final</span>
                    <select
                      value={finalResult}
                      onChange={(event) => setFinalResult(event.target.value)}
                      className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 py-2 text-sm outline-none focus:border-[var(--color-theme)]"
                    >
                      <option value="">Choisir un résultat</option>
                      <option value="Réussi">Réussi</option>
                      <option value="À retravailler">À retravailler</option>
                      <option value="Non validé">Non validé</option>
                    </select>
                  </label>
                </div>
              </section>

              <section>
                <label htmlFor="teacher-comment" className="mb-2 block text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">Commentaire</label>
                <textarea id="teacher-comment" value={teacherComment} onChange={(event) => setTeacherComment(event.target.value)} rows={4} className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-3 text-sm outline-none focus:border-[var(--color-theme)]" />
              </section>

              <button type="button" onClick={saveReview} disabled={pending || !correctedText.trim() || !teacherPoints.trim() || !finalResult.trim()} className="w-full rounded-[var(--radius-md)] bg-[var(--color-theme)] py-3 text-sm font-bold text-white disabled:opacity-40">{pending ? "Envoi…" : "Répondre avec la correction"}</button>
              {message && <p className="text-center text-sm font-semibold text-[var(--color-theme)]">{message}</p>}
            </div>
          ) : (
            <div className="space-y-6">
              {item.status === "reviewed" && item.teacher_points != null && item.final_result && (
                <section className="rounded-[var(--radius-md)] border border-[var(--color-theme)]/25 bg-[var(--color-theme-light)]/50 p-4">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-theme)]">Résultat</h3>
                  <p className="mt-2 text-2xl font-black text-[var(--color-text-primary)]">
                    {Number(item.teacher_points).toLocaleString("fr-CH")} / {maxPoints} pts
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-theme)]">{item.final_result}</p>
                </section>
              )}
              <section>
                <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">Votre texte</h3>
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-4"><AnnotatedOriginal text={item.original_text} annotations={item.annotations ?? []} /></div>
                {(item.annotations ?? []).length > 0 && (
                  <ul className="mt-3 space-y-2">{item.annotations.map((annotation, index) => <li key={index} className="rounded-lg bg-amber-50 px-3 py-2 text-sm"><strong>« {annotation.text} »</strong> : {annotation.comment}</li>)}</ul>
                )}
              </section>
              {item.corrected_text ? (
                <section>
                  <h3 className="mb-2 text-sm font-bold uppercase tracking-wide text-amber-600">Version corrigée</h3>
                  <div className="rounded-[var(--radius-md)] border border-amber-200 bg-white p-4"><CorrectedText original={item.original_text} corrected={item.corrected_text} /></div>
                </section>
              ) : <p className="rounded-[var(--radius-md)] bg-amber-50 p-4 text-sm text-amber-700">Votre professeur n&apos;a pas encore renvoyé sa correction.</p>}
              {item.teacher_comment && (
                <section className="rounded-[var(--radius-md)] border-l-4 border-[var(--color-theme)] bg-[var(--color-theme-light)]/20 p-4">
                  <h3 className="font-bold text-[var(--color-text-primary)]">Réponse du professeur</h3>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[var(--color-text-primary)]">{item.teacher_comment}</p>
                </section>
              )}
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
