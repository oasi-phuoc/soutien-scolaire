```ts
import {
  createServerClient,
  type CookieOptions,
} from "@supabase/ssr";

import {
  NextResponse,
  type NextRequest,
} from "next/server";

/**
 * ============================================================
 * ROUTES PUBLIQUES
 * ============================================================
 *
 * Ces routes ne nécessitent aucune authentification.
 *
 * IMPORTANT :
 * Elles sont traitées AVANT la création du client Supabase.
 */
const PUBLIC_PATHS = new Set([
  "/mot-de-passe-oublie",
  "/reinitialiser-mot-de-passe",
  "/verification-otp",
  "/api/download-app",
  "/app.apk",
  "/ecoute",
]);

/**
 * Pages accessibles sans connexion,
 * mais qui redirigent un utilisateur déjà connecté.
 */
const AUTH_PAGES = new Set([
  "/connexion",
  "/inscription",
]);

/**
 * Fichiers PWA / offline.
 */
const PUBLIC_FILE_PATHS = new Set([
  "/sw.js",
  "/manifest.webmanifest",
  "/manifest.json",
  "/offline-manifest.json",
  "/offline.html",
]);

/**
 * ============================================================
 * UTILITAIRES
 * ============================================================
 */

function normalizePath(path: string): string {
  if (
    path.length > 1 &&
    path.endsWith("/")
  ) {
    return path.slice(0, -1);
  }

  return path;
}

function isPublicAsset(path: string): boolean {
  return /\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico|apk)$/i.test(
    path,
  );
}

/**
 * ============================================================
 * MIDDLEWARE
 * ============================================================
 */

export async function middleware(
  request: NextRequest,
) {
  const path = normalizePath(
    request.nextUrl.pathname,
  );

  /**
   * ----------------------------------------------------------
   * 1. RESSOURCES TECHNIQUES
   * ----------------------------------------------------------
   *
   * Aucune logique.
   * Aucun appel Supabase.
   */

  if (
    path.startsWith("/_next/") ||
    path === "/favicon.ico" ||
    isPublicAsset(path) ||
    PUBLIC_FILE_PATHS.has(path)
  ) {
    return NextResponse.next();
  }

  /**
   * ----------------------------------------------------------
   * 2. API
   * ----------------------------------------------------------
   *
   * Le Middleware ne doit pas ralentir les Route Handlers.
   *
   * L'authentification des API privées doit être effectuée
   * directement dans leur Route Handler.
   */

  if (path.startsWith("/api/")) {
    return NextResponse.next();
  }

  /**
   * ----------------------------------------------------------
   * 3. ROUTES PUBLIQUES
   * ----------------------------------------------------------
   */

  if (PUBLIC_PATHS.has(path)) {
    return NextResponse.next();
  }

  /**
   * ----------------------------------------------------------
   * 4. VARIABLES SUPABASE
   * ----------------------------------------------------------
   */

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  /**
   * Ne jamais bloquer tout le site si les variables
   * Supabase sont absentes.
   */

  if (
    !supabaseUrl ||
    !supabaseAnonKey
  ) {
    console.error(
      "[middleware] Missing Supabase environment variables",
    );

    return NextResponse.next();
  }

  /**
   * ----------------------------------------------------------
   * 5. CLIENT SUPABASE
   * ----------------------------------------------------------
   */

  let response =
    NextResponse.next({
      request: {
        headers: request.headers,
      },
    });

  const supabase =
    createServerClient(
      supabaseUrl,
      supabaseAnonKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },

          setAll(
            cookiesToSet: {
              name: string;
              value: string;
              options: CookieOptions;
            }[],
          ) {
            /**
             * Mise à jour des cookies de la requête.
             */
            for (const {
              name,
              value,
            } of cookiesToSet) {
              request.cookies.set(
                name,
                value,
              );
            }

            /**
             * Nouvelle réponse avec les headers
             * de la requête.
             */
            response =
              NextResponse.next({
                request: {
                  headers:
                    request.headers,
                },
              });

            /**
             * Copie des cookies dans la réponse.
             */
            for (const {
              name,
              value,
              options,
            } of cookiesToSet) {
              response.cookies.set(
                name,
                value,
                options,
              );
            }
          },
        },
      },
    );

  /**
   * ----------------------------------------------------------
   * 6. AUTHENTIFICATION
   * ----------------------------------------------------------
   *
   * On utilise getClaims() au lieu de getUser().
   *
   * getUser() nécessite une requête vers Supabase Auth.
   *
   * getClaims() est beaucoup plus adapté au Middleware.
   */

  let userId: string | null = null;

  try {
    const {
      data,
      error,
    } = await supabase.auth.getClaims();

    if (error) {
      console.error(
        "[middleware] getClaims:",
        error.message,
      );
    } else if (
      data?.claims &&
      typeof data.claims.sub === "string"
    ) {
      userId =
        data.claims.sub;
    }
  } catch (error) {
    console.error(
      "[middleware] getClaims exception:",
      error,
    );
  }

  const isAuthenticated =
    Boolean(userId);

  /**
   * ----------------------------------------------------------
   * 7. CONNEXION / INSCRIPTION
   * ----------------------------------------------------------
   */

  if (AUTH_PAGES.has(path)) {
    if (isAuthenticated) {
      return NextResponse.redirect(
        new URL(
          "/",
          request.url,
        ),
      );
    }

    return response;
  }

  /**
   * ----------------------------------------------------------
   * 8. UTILISATEUR NON CONNECTÉ
   * ----------------------------------------------------------
   */

  if (
    !isAuthenticated &&
    path !== "/"
  ) {
    const loginUrl =
      new URL(
        "/connexion",
        request.url,
      );

    loginUrl.searchParams.set(
      "next",
      path,
    );

    return NextResponse.redirect(
      loginUrl,
    );
  }

  /**
   * ----------------------------------------------------------
   * 9. ACCUEIL
   * ----------------------------------------------------------
   */

  if (
    path === "/" &&
    !isAuthenticated
  ) {
    return NextResponse.redirect(
      new URL(
        "/connexion",
        request.url,
      ),
    );
  }

  /**
   * ----------------------------------------------------------
   * 10. FIN
   * ----------------------------------------------------------
   *
   * IMPORTANT :
   *
   * Aucun RPC.
   * Aucun SELECT.
   * Aucun get_my_role().
   * Aucun can_access_print().
   * Aucun has_suivi_access().
   *
   * Le Middleware termine ici.
   */

  return response;
}

/**
 * ============================================================
 * MATCHER
 * ============================================================
 *
 * On évite les fichiers statiques et ressources PWA.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|sw\\.js|manifest\\.webmanifest|manifest\\.json|offline-manifest\\.json|offline\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico|apk)$).*)",
  ],
};
```
