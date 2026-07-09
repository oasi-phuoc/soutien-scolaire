"use client";

import { useEffect, useState, useTransition } from "react";
import {
  createControlBankItemAction,
  deleteControlBankItemAction,
  getControlBankItemsAction,
  type ControlBankItem,
} from "@/app/actions/control-bank";
import { AppSelect } from "@/components/ui/AppSelect";

export function ControlBankPanel() {
  const [items, setItems] = useState<ControlBankItem[]>([]);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("maths");
  const [questionText, setQuestionText] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const reload = () => {
    void getControlBankItemsAction().then((res) => {
      if (res.ok) setItems(res.items);
    });
  };

  useEffect(() => { reload(); }, []);

  function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    startTransition(async () => {
      const res = await createControlBankItemAction({
        title: title.trim(),
        subject,
        question: { text: questionText.trim() },
        answerKey: answerText.trim() ? { text: answerText.trim() } : undefined,
        difficulty: "moyen",
      });
      if (!res.ok) { setError(res.reason ?? "Erreur"); return; }
      setTitle(""); setQuestionText(""); setAnswerText("");
      reload();
    });
  }

  function handleDelete(id: string) {
    startTransition(async () => {
      await deleteControlBankItemAction(id);
      reload();
    });
  }

  return (
    <div className="space-y-6">
      <form onSubmit={handleCreate} className="space-y-3 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-50">Nouvelle question</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre"
            required
            className="rounded-xl border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
          />
          <AppSelect
            value={subject}
            onChange={setSubject}
            options={[
              { value: "maths", label: "Maths" },
              { value: "francais", label: "Français" },
              { value: "lecture", label: "Lecture" },
            ]}
            className="w-full"
          />
        </div>
        <textarea
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Énoncé de la question"
          required
          rows={3}
          className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        <input
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
          placeholder="Réponse attendue (optionnel)"
          className="w-full rounded-xl border border-zinc-200 px-3 py-2 text-sm dark:border-zinc-700 dark:bg-zinc-900"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          type="submit"
          disabled={isPending}
          className="rounded-xl bg-[var(--color-theme)] px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
        >
          Ajouter à la banque
        </button>
      </form>

      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id} className="flex items-start justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
            <div>
              <p className="font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</p>
              <p className="text-xs text-zinc-500">{item.subject}</p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                {(item.question as { text?: string }).text ?? "—"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => handleDelete(item.id)}
              disabled={isPending}
              className="shrink-0 text-xs text-red-500 hover:underline"
            >
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
