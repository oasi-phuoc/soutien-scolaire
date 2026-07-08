import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { ClassDashboardClient } from "@/components/admin/ClassDashboardClient";

type Props = { params: Promise<{ slug: string }> };

export default async function AdminClassDetailPage({ params }: Props) {
  const { slug } = await params;
  const classLabel = decodeURIComponent(slug);

  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion");

  const { data: myRole } = await supabase.rpc("get_my_role");
  if (myRole !== "admin" && myRole !== "prof") redirect("/");

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 pb-28">
      <div className="mb-6 flex items-center gap-2">
        <Link href="/admin/classes" className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--color-theme)] text-white">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{classLabel}</h1>
          <p className="text-sm text-zinc-500">Tableau de bord classe</p>
        </div>
      </div>
      <ClassDashboardClient classLabel={classLabel} />
    </main>
  );
}
