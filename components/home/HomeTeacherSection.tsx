import { createSupabaseServerClient } from "@/lib/supabase/server";
import { HomeProgressCards } from "@/components/home/HomeProgressCards";
import { TeacherHomeCard } from "@/components/home/TeacherHomeCard";

export async function HomeTeacherSection() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return <HomeProgressCards />;

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <HomeProgressCards />;

  const { data: role } = await supabase.rpc("get_my_role");
  if (role !== "admin" && role !== "prof") return <HomeProgressCards />;

  const { data: hasAccess } = await supabase.rpc("has_suivi_access");
  if (!hasAccess) {
    if (role === "prof") {
      return (
        <section className="rounded-[var(--radius-lg)] border border-dashed border-zinc-300 bg-white/60 p-5 text-center dark:border-zinc-700 dark:bg-zinc-950/60">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            Aucune classe affectée. Contactez l&apos;administrateur pour accéder au suivi pédagogique.
          </p>
        </section>
      );
    }
    return null;
  }

  return <TeacherHomeCard />;
}
