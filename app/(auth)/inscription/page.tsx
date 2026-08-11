import { InscriptionForm } from "@/components/auth/InscriptionForm";
import { LearnUpLogo } from "@/components/brand/LearnUpLogo";
import { APP_SHELL } from "@/lib/layout/page-shell";

type Props = { searchParams?: Promise<{ erreur?: string }> };

export default async function InscriptionPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  return (
    <div className={`${APP_SHELL}`}>
      <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm lg:p-8 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h1 className="text-xl font-semibold text-zinc-900 lg:text-2xl dark:text-zinc-50">
              Créer un compte
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Remplis les champs obligatoires pour rejoindre LearnUp.
            </p>
          </div>
          <div className="shrink-0">
            <LearnUpLogo href={null} iconSize={40} showTagline centered />
          </div>
        </div>
        <InscriptionForm error={q.erreur} />
      </main>
    </div>
  );
}
