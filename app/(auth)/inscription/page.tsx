import { InscriptionForm } from "@/components/auth/InscriptionForm";

type Props = { searchParams?: Promise<{ erreur?: string }> };

export default async function InscriptionPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  return (
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Créer un compte</h1>
      <InscriptionForm error={q.erreur} />
    </main>
  );
}
