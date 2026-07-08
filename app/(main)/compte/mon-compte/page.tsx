import { redirect } from "next/navigation";
import { getMyProfileAction } from "@/app/actions/account";
import { MonCompteForm } from "@/components/account/MonCompteForm";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function MonComptePage() {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/compte");

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/connexion?next=/compte/mon-compte");

  const result = await getMyProfileAction();
  if (!result.ok) redirect("/compte");

  return <MonCompteForm profile={result.profile} />;
}
