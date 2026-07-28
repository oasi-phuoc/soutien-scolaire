import { getNavAccess } from "@/lib/auth/nav-access";
import { HomeProgressCards } from "@/components/home/HomeProgressCards";
import { TeacherHomeCard } from "@/components/home/TeacherHomeCard";

export async function HomeTeacherSection() {
  const access = await getNavAccess();
  if (access.role !== "admin" && access.role !== "prof") {
    return <HomeProgressCards />;
  }

  if (access.role === "prof" && !access.hasSuiviAccess) {
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
