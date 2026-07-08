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
  if (role === "prof" && !hasAccess) {
    return (
      <section className="rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-3 text-center">
        <p className="text-xs text-[var(--color-text-secondary)]">
          Aucune classe affectée. Contactez l&apos;administrateur pour accéder au suivi pédagogique.
        </p>
      </section>
    );
  }

  return <TeacherHomeCard />;
}
