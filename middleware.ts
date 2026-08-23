import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * ============================================================
 * ROUTES PUBLIQUES
 * ============================================================
 *
 * Ces routes ne nécessitent aucune authentification.
 * Elles sont donc laissées passer AVANT toute initialisation
 * de Supabase.
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
 * Pages publiques mais qui doivent rediriger un utilisateur
 * déjà connecté :
 *
 * /connexion
 * /inscription
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
 * Préfixes nécessitant une vérification de rôle.
 */
const ADMIN_PREFIX = "/admin";
const IMPRESSIONS_PREFIX = "/impressions";
const SUIVI_PREFIX = "/suivi";

const TEACHER_PATHS = ["/messagerie"];

/**
 * ============================================================
 * UTILITAIRES
 * ============================================================
 */

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

function isPublicAsset(path: string): boolean {
  return /\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico|apk)$/i.test(
    path,
  );
}

function requiresRoleCheck(path: string): boolean {
  return (
    path.startsWith(ADMIN_PREFIX) ||
    path.startsWith(IMPRESSIONS_PREFIX) ||
    path.startsWith(SUIVI_PREFIX) ||
    TEACHER_PATHS.some((prefix) => path.startsWith(prefix))
  );
}

/**
 * ============================================================
 * MIDDLEWARE
 * ============================================================
 */

export async function middleware(request: NextRequest) {
  const path = normalizePath(request.nextUrl.pathname);

  /**
   * ----------------------------------------------------------
   * 1. IGNORER LES RESSOURCES TECHNIQUES
   * ----------------------------------------------------------
   *
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
   * 2. API PUBLIQUES
   * ----------------------------------------------------------
   *
   * Toutes les API sont laissées au Route Handler.
   *
   * IMPORTANT :
   * Le middleware ne doit pas faire de travail Supabase
   * avant une API.
   */

  if (path.startsWith("/api/")) {
    return NextResponse.next();
  }

  /**
   * ----------------------------------------------------------
   * 3. ROUTES PUBLIQUES
   * ----------------------------------------------------------
   *
   * Aucun client Supabase.
   * Aucun appel réseau.
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
   * Si Supabase n'est pas disponible, on laisse Next.js
   * continuer plutôt que de bloquer le Middleware.
   */

  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "[middleware] Supabase environment variables are missing",
    );

    return NextResponse.next();
  }

  /**
   * ----------------------------------------------------------
   * 5. RESPONSE + CLIENT SUPABASE
   * ----------------------------------------------------------
   */

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
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
           * Recréer la réponse afin de conserver
           * les cookies rafraîchis.
           */
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });

          /**
           * Copier les cookies vers la réponse.
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
   * 6. AUTHENTIFICATION AVEC getClaims()
   * ----------------------------------------------------------
   *
   * IMPORTANT :
   *
   * On n'utilise plus :
   *
   *   supabase.auth.getUser()
   *
   * car getUser() effectue une requête réseau vers Auth.
   *
   * getClaims() est adapté à la vérification de l'identité
   * dans le Middleware.
   */

  let claims: Record<string, unknown> | null = null;

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
    } else if (data?.claims) {
      claims = data.claims as Record<
        string,
        unknown
      >;
    }
  } catch (error) {
    console.error(
      "[middleware] getClaims exception:",
      error,
    );
  }

  /**
   * Identifiant utilisateur.
   *
   * Le "sub" du JWT correspond à l'ID utilisateur Supabase.
   */
  const userId =
    typeof claims?.sub === "string"
      ? claims.sub
      : null;

  const isAuthenticated =
    Boolean(userId);

  /**
   * ----------------------------------------------------------
   * 7. /connexion ET /inscription
   * ----------------------------------------------------------
   *
   * Accessibles sans connexion.
   *
   * Si l'utilisateur est déjà connecté :
   * → retour à l'accueil.
   */

  if (AUTH_PAGES.has(path)) {
    if (isAuthenticated) {
      return NextResponse.redirect(
        new URL("/", request.url),
      );
    }

    return response;
  }

  /**
   * ----------------------------------------------------------
   * 8. UTILISATEUR NON CONNECTÉ
   * ----------------------------------------------------------
   *
   * Toutes les pages privées redirigent vers /connexion.
   */

  if (!isAuthenticated && path !== "/") {
    const loginUrl = new URL(
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
   * 10. PAGES NORMALES
   * ----------------------------------------------------------
   *
   * Si ce n'est pas une zone nécessitant un rôle,
   * le Middleware s'arrête ici.
   *
   * AUCUN RPC.
   */

  if (
    !isAuthenticated ||
    !requiresRoleCheck(path)
  ) {
    return response;
  }

  /**
   * ----------------------------------------------------------
   * 11. RÉCUPÉRATION DU RÔLE
   * ----------------------------------------------------------
   *
   * Seulement pour :
   *
   * /admin/*
   * /impressions/*
   * /suivi/*
   * /messagerie/*
   */

  let role: string | null = null;

  try {
    const {
      data,
      error,
    } = await supabase.rpc(
      "get_my_role",
    );

    if (error) {
      console.error(
        "[middleware] get_my_role:",
        error.message,
      );
    } else if (
      typeof data === "string"
    ) {
      role = data;
    }
  } catch (error) {
    console.error(
      "[middleware] get_my_role exception:",
      error,
    );
  }

  /**
   * ----------------------------------------------------------
   * 12. ADMIN
   * ----------------------------------------------------------
   *
   * /admin/*
   *
   * Exception :
   * /admin/impression/*
   */

  const isAdminPath =
    path.startsWith(
      ADMIN_PREFIX,
    );

  const isOldPrintPath =
    path.startsWith(
      `${ADMIN_PREFIX}/impression`,
    );

  if (
    isAdminPath &&
    !isOldPrintPath
  ) {
    if (role !== "admin") {
      return NextResponse.redirect(
        new URL(
          role === "prof"
            ? "/suivi"
            : "/",
          request.url,
        ),
      );
    }

    return response;
  }

  /**
   * ----------------------------------------------------------
   * 13. IMPRESSIONS
   * ----------------------------------------------------------
   *
   * /impressions/*
   * /admin/impression/*
   *
   * Admin :
   * → accès direct.
   *
   * Prof / autres :
   * → vérification can_access_print().
   */

  const isPrintPath =
    path.startsWith(
      IMPRESSIONS_PREFIX,
    ) ||
    isOldPrintPath;

  if (isPrintPath) {
    /**
     * Admin = accès direct.
     */
    if (role === "admin") {
      return response;
    }

    let canPrint = false;

    try {
      const {
        data,
        error,
      } = await supabase.rpc(
        "can_access_print",
      );

      if (!error) {
        canPrint = Boolean(data);
      } else {
        console.error(
          "[middleware] can_access_print:",
          error.message,
        );

        /**
         * Fallback DB.
         */
        try {
          const {
            data: profile,
            error:
              profileError,
          } = await supabase
            .from("profiles")
            .select(
              "can_print",
            )
            .eq(
              "id",
              userId,
            )
            .maybeSingle();

          if (!profileError) {
            canPrint =
              Boolean(
                profile?.can_print,
              );
          }
        } catch (profileError) {
          console.error(
            "[middleware] profile fallback:",
            profileError,
          );
        }
      }
    } catch (error) {
      console.error(
        "[middleware] can_access_print exception:",
        error,
      );
    }

    if (!canPrint) {
      return NextResponse.redirect(
        new URL(
          role === "prof"
            ? "/suivi"
            : "/",
          request.url,
        ),
      );
    }

    return response;
  }

  /**
   * ----------------------------------------------------------
   * 14. SUIVI
   * ----------------------------------------------------------
   *
   * Admin :
   * → accès.
   *
   * Prof :
   * → has_suivi_access().
   *
   * Autres :
   * → refus.
   */

  const isSuiviPath =
    path.startsWith(
      SUIVI_PREFIX,
    );

  if (isSuiviPath) {
    if (
      role !== "admin" &&
      role !== "prof"
    ) {
      return NextResponse.redirect(
        new URL(
          "/",
          request.url,
        ),
      );
    }

    /**
     * Admin = pas de RPC supplémentaire.
     */
    if (role === "admin") {
      return response;
    }

    /**
     * Professeur :
     * vérification spécifique.
     */
    let hasAccess = false;

    try {
      const {
        data,
        error,
      } = await supabase.rpc(
        "has_suivi_access",
      );

      if (!error) {
        hasAccess =
          Boolean(data);
      } else {
        console.error(
          "[middleware] has_suivi_access:",
          error.message,
        );
      }
    } catch (error) {
      console.error(
        "[middleware] has_suivi_access exception:",
        error,
      );
    }

    if (!hasAccess) {
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
   * 15. MESSAGERIE
   * ----------------------------------------------------------
   *
   * Admin et prof :
   * → accès.
   *
   * Autres :
   * → refus.
   */

  const isTeacherPath =
    TEACHER_PATHS.some(
      (prefix) =>
        path.startsWith(prefix),
    );

  if (isTeacherPath) {
    if (
      role !== "admin" &&
      role !== "prof"
    ) {
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
   * 16. FIN
   * ----------------------------------------------------------
   */

  return response;
}

/**
 * ============================================================
 * MATCHER
 * ============================================================
 *
 * Le Middleware n'est pas exécuté sur :
 *
 * - fichiers Next.js
 * - images optimisées
 * - favicon
 * - PWA
 * - fichiers statiques
 * - audio
 * - images
 * - APK
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|sw\\.js|manifest\\.webmanifest|manifest\\.json|offline-manifest\\.json|offline\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico|apk)$).*)",
  ],
};
