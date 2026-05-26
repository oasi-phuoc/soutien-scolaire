import { ConnexionForm } from "@/components/auth/ConnexionForm";

type Props = { searchParams?: Promise<{ erreur?: string; msg?: string }> };

export default async function ConnexionPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  return (
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Connexion</h1>
      <ConnexionForm error={q.erreur} msg={q.msg} />
    </main>
  );
}
