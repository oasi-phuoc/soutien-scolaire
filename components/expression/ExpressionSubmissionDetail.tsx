"use client";

import Link from "next/link";
import { useRef, useState, useTransition } from "react";
import { reviewExpressionAction, type ExpressionAnnotation, type ExpressionSubmission } from "@/app/actions/expression";

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

export function ExpressionSubmissionDetail({ item, isTeacher }: { item: ExpressionSubmission; isTeacher: boolean }) {
  const [correctedText, setCorrectedText] = useState(item.corrected_text ?? item.original_text);
  const [teacherComment, setTeacherComment] = useState(item.teacher_comment ?? "");
  const [annotations, setAnnotations] = useState<ExpressionAnnotation[]>(item.annotations ?? []);
  const [annotationComment, setAnnotationComment] = useState("");
  const [selection, setSelection] = useState<{ start: number; end: number; text: string } | null>(null);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const originalRef = useRef<HTMLDivElement>(null);

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
      const result = await reviewExpressionAction({ id: item.id, correctedText, teacherComment, annotations });
      setMessage(result.ok ? "Correction renvoyée à l’élève." : (result.reason ?? "Enregistrement impossible."));
    });
  }

  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-4 pb-32 pt-8">
      <header className="mb-6 flex items-center gap-3">
        <Link href="/messagerie" aria-label="Retour" className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-theme)] text-xl text-white">‹</Link>
        <div>
          <p className="text-xs font-bold uppercase text-[var(--color-theme)]">{item.lesson_code} · {item.lesson_code.startsWith("PO") ? "Production orale" : "Production écrite"}</p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">{item.prompt.title}</h1>
        </div>
      </header>

      <section className="mb-5 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/70 p-4">
        <p className="text-sm text-[var(--color-text-primary)]">{item.prompt.situation}</p>
        <p className="mt-2 text-sm font-semibold text-[var(--color-text-primary)]">{item.prompt.instruction}</p>
      </section>

      {isTeacher ? (
        <div className="space-y-6">
          <section>
            <h2 className="mb-2 font-bold text-[var(--color-text-primary)]">Texte de l’élève</h2>
            <div
              ref={originalRef}
              onMouseUp={captureSelection}
              onTouchEnd={() => setTimeout(captureSelection, 0)}
              className="w-full cursor-text select-text whitespace-pre-wrap rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4 text-base leading-7 [&::selection]:bg-amber-200"
            >
              {item.original_text}
            </div>
            {selection && (
              <p className="mt-1 truncate rounded bg-amber-50 px-2 py-1 text-xs text-amber-700">
                Sélectionné : <strong>« {selection.text} »</strong>
              </p>
            )}
            <div className="mt-2 flex gap-2">
              <input value={annotationComment} onChange={(event) => setAnnotationComment(event.target.value)} placeholder="Commentaire sur le passage sélectionné" className="min-h-10 flex-1 rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white px-3 text-sm outline-none focus:border-amber-500" />
              <button type="button" onClick={addAnnotation} disabled={!selection || !annotationComment.trim()} className="rounded-[var(--radius-md)] bg-amber-500 px-4 text-sm font-bold text-white disabled:opacity-35">Annoter</button>
            </div>
            {annotations.length > 0 && (
              <ul className="mt-3 space-y-2">
                {annotations.map((annotation, index) => (
                  <li key={index} className="flex items-start justify-between gap-3 rounded-lg bg-amber-50 px-3 py-2 text-xs">
                    <span><strong>« {annotation.text} »</strong> : {annotation.comment}</span>
                    <button type="button" onClick={() => setAnnotations((current) => current.filter((_, i) => i !== index))} className="font-bold text-amber-700" aria-label="Supprimer l’annotation">×</button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section>
            <label htmlFor="corrected-text" className="mb-2 block font-bold text-[var(--color-text-primary)]">Version corrigée</label>
            <textarea id="corrected-text" value={correctedText} onChange={(event) => setCorrectedText(event.target.value)} rows={10} className="w-full rounded-[var(--radius-md)] border-2 border-amber-300 bg-white p-4 text-base leading-7 outline-none focus:border-amber-500" />
            <p className="mt-1 text-xs text-[var(--color-text-secondary)]">Les modifications apparaîtront en ambre dans la messagerie de l’élève.</p>
          </section>

          <section>
            <label htmlFor="teacher-comment" className="mb-2 block font-bold text-[var(--color-text-primary)]">Commentaire général</label>
            <textarea id="teacher-comment" value={teacherComment} onChange={(event) => setTeacherComment(event.target.value)} rows={4} className="w-full rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white p-3 text-sm outline-none focus:border-amber-500" />
          </section>

          <button type="button" onClick={saveReview} disabled={pending || !correctedText.trim()} className="w-full rounded-[var(--radius-md)] bg-[var(--color-theme)] py-3 text-sm font-bold text-white disabled:opacity-40">{pending ? "Enregistrement…" : "Renvoyer la correction"}</button>
          {message && <p className="text-center text-sm font-semibold text-[var(--color-theme)]">{message}</p>}
        </div>
      ) : (
        <div className="space-y-6">
          <section>
            <h2 className="mb-2 font-bold text-[var(--color-text-primary)]">Votre texte</h2>
            <div className="rounded-[var(--radius-md)] border border-[var(--color-border-default)] bg-white/80 p-4"><AnnotatedOriginal text={item.original_text} annotations={item.annotations ?? []} /></div>
            {(item.annotations ?? []).length > 0 && (
              <ul className="mt-3 space-y-2">{item.annotations.map((annotation, index) => <li key={index} className="rounded-lg bg-amber-50 px-3 py-2 text-sm"><strong>« {annotation.text} »</strong> : {annotation.comment}</li>)}</ul>
            )}
          </section>
          {item.corrected_text ? (
            <section>
              <h2 className="mb-2 font-bold text-amber-600">Version corrigée</h2>
              <div className="rounded-[var(--radius-md)] border-2 border-amber-300 bg-white p-4"><CorrectedText original={item.original_text} corrected={item.corrected_text} /></div>
            </section>
          ) : <p className="rounded-[var(--radius-md)] bg-amber-50 p-4 text-sm text-amber-700">Votre professeur n’a pas encore renvoyé sa correction.</p>}
          {item.teacher_comment && <section className="rounded-[var(--radius-md)] border-l-4 border-amber-500 bg-white/75 p-4"><h2 className="font-bold text-[var(--color-text-primary)]">Commentaire du professeur</h2><p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[var(--color-text-primary)]">{item.teacher_comment}</p></section>}
        </div>
      )}
    </main>
  );
}
