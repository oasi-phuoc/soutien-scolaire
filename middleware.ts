import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

const PUBLIC_PATHS = new Set([
  "/connexion",
  "/mot-de-passe-oublie",
  "/reinitialiser-mot-de-passe",
  "/verification-otp",
  "/api/download-app",
]);

const ADMIN_PREFIX = "/admin";
const TEACHER_PATHS = ["/messagerie", "/admin"];

function isPublicAsset(path: string): boolean {
  return /\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico)$/i.test(path);
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/_next") || path.startsWith("/api/") && path !== "/api/download-app") {
    return NextResponse.next({ request });
  }
  if (isPublicAsset(path)) {
    return NextResponse.next({ request });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anon) {
    return NextResponse.next({ request });
  }

  let response = NextResponse.next({ request: { headers: request.headers } });

  const supabase = createServerClient(url, anon, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet: { name: string; value: string; options: CookieOptions }[]) {
        cookiesToSet.forEach(({ name, value }) =>
          request.cookies.set(name, value),
        );
        response = NextResponse.next({ request: { headers: request.headers } });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options),
        );
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPublic = PUBLIC_PATHS.has(path);

  if (!user && !isPublic && path !== "/") {
    const login = new URL("/connexion", request.url);
    login.searchParams.set("next", path);
    return NextResponse.redirect(login);
  }

  if (path === "/connexion" && user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (path === "/" && !user) {
    return NextResponse.redirect(new URL("/connexion", request.url));
  }

  if (user && (path.startsWith(ADMIN_PREFIX) || TEACHER_PATHS.some((p) => path.startsWith(p)))) {
    const { data: role } = await supabase.rpc("get_my_role");
    if (path.startsWith(ADMIN_PREFIX) && role !== "admin" && role !== "prof") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac)$).*)",
  ],
};
