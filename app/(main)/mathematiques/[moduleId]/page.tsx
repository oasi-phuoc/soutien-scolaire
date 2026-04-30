import { notFound } from "next/navigation";
import Link from "next/link";
import { MathModuleWorkspace } from "@/components/math/MathModuleWorkspace";
import { getMathModule } from "@/lib/curriculum/math-data";

type Props = { params: Promise<{ moduleId: string }> };

export default async function MathModulePage({ params }: Props) {
  const { moduleId } = await params;
  const mod = getMathModule(moduleId.toUpperCase());
  if (!mod) notFound();

  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-4 py-8 pb-32">
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/mathematiques"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--color-border-default)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-secondary)]"
          aria-label="Retour mathématiques"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <p className="text-xs font-medium uppercase text-[var(--color-accent-alg)]">Module</p>
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {mod.code} — {mod.title}
          </h1>
        </div>
      </div>
      <MathModuleWorkspace moduleId={mod.id} />
    </main>
  );
}
