import { notFound } from "next/navigation";
import { PageBackButton } from "@/components/ui/PageBackButton";
import type { CSSProperties } from "react";
import { getMathModule, isMathModuleAccessibleToStudent } from "@/lib/curriculum/math-data";
import { ModuleRevisionEval } from "@/components/math/ModuleRevisionEval";
import { MathModuleComingSoon } from "@/components/math/MathModuleComingSoon";
import { createSupabaseServerClient } from "@/lib/supabase/server";

type Props = { params: Promise<{ moduleId: string }> };

export default async function ModuleEvaluationPage({ params }: Props) {
  const { moduleId } = await params;
  const upper = moduleId.toUpperCase();
  const mod = getMathModule(upper);
  if (!mod) notFound();

  const supabase = await createSupabaseServerClient();
  let isAdmin = false;
  if (supabase) {
    const { data: myRole } = await supabase.rpc("get_my_role");
    isAdmin = myRole === "admin" || myRole === "prof";
  }

  const isGeometry = mod.branch === "geometry";
  const backHref = isGeometry ? "/mathematiques?tab=geometry" : "/mathematiques";

  if (!isAdmin && !isMathModuleAccessibleToStudent(mod)) {
    return (
      <main className="math-module-page app-shell flex-1 py-8 pb-32 lg:pb-28">
        <MathModuleComingSoon moduleCode={mod.code} moduleTitle={mod.title} backHref={backHref} />
      </main>
    );
  }

  const tabLabel = isGeometry ? "Formes" : "Calculs";
  const pageStyle = isGeometry
    ? ({ "--color-accent-alg": "var(--color-accent-geo)" } as CSSProperties)
    : undefined;

  return (
    <main className="math-module-page app-shell flex-1 py-8 pb-32 lg:pb-28" style={pageStyle}>
      <header className="mb-5 space-y-1">
        <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-accent-alg)]">
          Mathématiques · {tabLabel} · {mod.code}
        </p>
        <div className="flex items-center gap-2">
          <PageBackButton href={backHref} ariaLabel="Retour aux mathématiques" />
          <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
            {mod.code} — Évaluation
          </h1>
        </div>
      </header>
      <ModuleRevisionEval moduleId={upper} />
    </main>
  );
}
