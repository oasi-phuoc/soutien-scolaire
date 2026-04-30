"use client";

import { createSupabaseBrowserClient } from "@/lib/supabase/client";

export function SupabaseConfigHint() {
  const client = createSupabaseBrowserClient();
  const ok = client !== null;

  return (
    <p className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
        Compte cloud (Supabase)
      </span>
      <br />
      {ok
        ? "Variables détectées — tu peux ajouter l’écran de connexion quand le projet est créé sur supabase.com."
        : "Ajoute NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY dans .env.local (voir .env.example)."}
    </p>
  );
}
