import {
  createServerClient,
  type CookieOptions,
} from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/** OAuth / magic-link : échange du code contre une session navigateur */
export async function GET(request: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }

  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const rawNext = searchParams.get("next") ?? "/compte";
  const nextPath =
    rawNext.startsWith("/") &&
    !rawNext.startsWith("//") &&
    !rawNext.includes(":")
      ? rawNext
      : "/compte";

  if (!code) {
    return NextResponse.redirect(
      `${origin}/connexion?erreur=${encodeURIComponent("Pas de code de connexion")}`,
    );
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(url, anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(
        cookiesToSet: {
          name: string;
          value: string;
          options: CookieOptions;
        }[],
      ) {
        cookiesToSet.forEach(({ name, value, options }) =>
          cookieStore.set(name, value, options),
        );
      },
    },
  });

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(
      `${origin}/connexion?erreur=${encodeURIComponent(error.message)}`,
    );
  }

  return NextResponse.redirect(`${origin}${nextPath}`);
}
