import { redirect } from "next/navigation";

export default async function AdminClassSlugRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(`/suivi/classes/${slug}`);
}
