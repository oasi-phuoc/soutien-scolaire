import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

/**
 * Routes totalement publiques.
 *
 * Ces routes ne nécessitent aucune vérification Supabase.
 * On les laisse donc passer AVANT de créer le client Supabase.
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
 * Routes publiques nécessaires au fonctionnement de la PWA.
 */
const PUBLIC_FILE_PATHS = new Set([
  "/sw.js",
  "/manifest.webmanifest",
  "/manifest.json",
  "/offline-manifest.json",
  "/offline.html",
]);

const ADMIN_PREFIX = "/admin";
const IMPRESSIONS_PREFIX = "/impressions";
const SUIVI_PREFIX = "/suivi";

const TEACHER_PATHS = ["/messagerie"];

/**
 * Normalise une URL :
 * /page/ -> /page
 */
function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

/**
 * Vérifie si le chemin correspond à un fichier statique.
 */
function isPublicAsset(path: string): boolean {
  return /\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico|apk)$/i.test(
    path,
  );
}

/**
 * Vérifie si le chemin nécessite une vérification de rôle.
 */
function requiresRoleCheck(path: string): boolean {
  return (
    path.startsWith(ADMIN_PREFIX) ||
    path.startsWith(IMPRESSIONS_PREFIX) ||
    path.startsWith(SUIVI_PREFIX) ||
    TEACHER_PATHS.some((prefix) => path.startsWith(prefix))
  );
}

/**
 * Middleware principal.
 */
export async function middleware(request: NextRequest) {
  const path = normalizePath(request.nextUrl.pathname);

  /**
   * ---------------------------------------------------------
   * 1. Ignorer immédiatement les fichiers / routes techniques
   * ---------------------------------------------------------
   */

  if (
    path.startsWith("/_next") ||
    path === "/favicon.ico" ||
    path.startsWith("/api/")
  ) {
    /**
     * Exception :
     * /api/download-app est explicitement publique,
     * mais dans tous les cas elle peut passer ici sans Supabase.
     */
    return NextResponse.next();
  }

  if (isPublicAsset(path) || PUBLIC_FILE_PATHS.has(path)) {
    return NextResponse.next();
  }

  /**
   * ---------------------------------------------------------
   * 2. Routes totalement publiques
   * ---------------------------------------------------------
   *
   * IMPORTANT :
   * On ne crée même pas de client Supabase ici.
   *
   * Cela évite un appel réseau inutile pour :
   * - mot de passe oublié
   * - réinitialisation
   * - OTP
   * - téléchargement
   * - écoute
   */

  if (PUBLIC_PATHS.has(path)) {
    return NextResponse.next();
  }

  /**
   * ---------------------------------------------------------
   * 3. Variables Supabase
   * ---------------------------------------------------------
   */

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  /**
   * Si Supabase n'est pas configuré, on ne bloque pas
   * complètement le site.
   */
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error(
      "[Middleware] Variables Supabase manquantes.",
    );

    return NextResponse.next();
  }

  /**
   * ---------------------------------------------------------
   * 4. Client Supabase SSR
   * ---------------------------------------------------------
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
          cookiesToSet.forEach(
            ({ name, value }) => {
              request.cookies.set(name, value);
            },
          );

          /**
           * Recréation de la réponse pour conserver
           * les headers de la requête.
           */
          response = NextResponse.next({
            request: {
              headers: request.headers,
            },
          });

          /**
           * Mise à jour des cookies dans la réponse.
           */
          cookiesToSet.forEach(
            ({ name, value, options }) => {
              response.cookies.set(
                name,
                value,
                options,
              );
            },
          );
        },
      },
    },
  );

  /**
   * ---------------------------------------------------------
   * 5. Récupération de l'utilisateur
   * ---------------------------------------------------------
   *
   * getUser() vérifie réellement la session auprès de
   * Supabase Auth.
   *
   * On ne l'appelle donc qu'après avoir éliminé toutes les
   * routes qui n'en ont pas besoin.
   */

  let user = null;

  try {
    const {
      data: { user: authenticatedUser },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error(
        "[Middleware] Supabase getUser:",
        error.message,
      );
    } else {
      user = authenticatedUser;
    }
  } catch (error) {
    console.error(
      "[Middleware] Erreur Supabase Auth:",
      error,
    );
  }

  /**
   * ---------------------------------------------------------
   * 6. Pages connexion / inscription
   * ---------------------------------------------------------
   *
   * Ces pages sont accessibles sans connexion.
   * Mais un utilisateur déjà connecté doit être redirigé
   * vers l'accueil.
   */

  if (path === "/connexion" || path === "/inscription") {
    if (user) {
      return NextResponse.redirect(
        new URL("/", request.url),
      );
    }

    return response;
  }

  /**
   * ---------------------------------------------------------
   * 7. Accès général
   * ---------------------------------------------------------
   *
   * Toutes les autres pages nécessitent une connexion,
   * sauf la racine qui possède sa propre logique.
   */

  if (!user && path !== "/") {
    const loginUrl = new URL(
      "/connexion",
      request.url,
    );

    loginUrl.searchParams.set("next", path);

    return NextResponse.redirect(loginUrl);
  }

  /**
   * ---------------------------------------------------------
   * 8. Accueil
   * ---------------------------------------------------------
   */

  if (path === "/" && !user) {
    return NextResponse.redirect(
      new URL("/connexion", request.url),
    );
  }

  /**
   * Si aucune vérification de rôle n'est nécessaire,
   * on termine immédiatement.
   *
   * Cela évite tout appel RPC supplémentaire pour toutes
   * les pages normales.
   */
  if (!user || !requiresRoleCheck(path)) {
    return response;
  }

  /**
   * ---------------------------------------------------------
   * 9. Récupération du rôle
   * ---------------------------------------------------------
   *
   * IMPORTANT :
   * get_my_role() n'est maintenant appelé que pour :
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
    } = await supabase.rpc("get_my_role");

    if (error) {
      console.error(
        "[Middleware] get_my_role:",
        error.message,
      );
    } else {
      role = data ?? null;
    }
  } catch (error) {
    console.error(
      "[Middleware] Erreur get_my_role:",
      error,
    );
  }

  /**
   * ---------------------------------------------------------
   * 10. ADMIN
   * ---------------------------------------------------------
   *
   * /admin/*
   * est réservé aux administrateurs.
   *
   * Exception :
   * /admin/impression
   */

  const isAdminPath =
    path.startsWith(ADMIN_PREFIX);

  const isOldPrintPath =
    path.startsWith(
      `${ADMIN_PREFIX}/impression`,
    );

  if (isAdminPath && !isOldPrintPath) {
    if (role !== "admin") {
      return NextResponse.redirect(
        new URL(
          role === "prof" ? "/suivi" : "/",
          request.url,
        ),
      );
    }

    return response;
  }

  /**
   * ---------------------------------------------------------
   * 11. IMPRESSIONS
   * ---------------------------------------------------------
   *
   * /impressions
   * /impressions/*
   * /admin/impression/*
   *
   * Admin = accès automatique.
   *
   * Autres utilisateurs = can_print.
   */

  const isPrintPath =
    path.startsWith(IMPRESSIONS_PREFIX) ||
    isOldPrintPath;

  if (isPrintPath) {
    if (role === "admin") {
      return response;
    }

    let canPrint = false;

    try {
      const {
        data: printAccess,
        error,
      } = await supabase.rpc(
        "can_access_print",
      );

      if (!error) {
        canPrint = Boolean(printAccess);
      } else {
        console.error(
          "[Middleware] can_access_print:",
          error.message,
        );

        /**
         * Fallback vers profiles.can_print.
         */
        try {
          const {
            data: profile,
            error: profileError,
          } = await supabase
            .from("profiles")
            .select("can_print")
            .eq("id", user.id)
            .maybeSingle();

          if (!profileError) {
            canPrint = Boolean(
              profile?.can_print,
            );
          } else {
            console.error(
              "[Middleware] profiles.can_print:",
              profileError.message,
            );
          }
        } catch (profileError) {
          console.error(
            "[Middleware] Erreur profil impression:",
            profileError,
          );
        }
      }
    } catch (error) {
      console.error(
        "[Middleware] Erreur can_access_print:",
        error,
      );
    }

    if (!canPrint) {
      return NextResponse.redirect(
        new URL(
          role === "prof" ? "/suivi" : "/",
          request.url,
        ),
      );
    }

    return response;
  }

  /**
   * ---------------------------------------------------------
   * 12. SUIVI
   * ---------------------------------------------------------
   *
   * Admin = accès.
   * Prof = accès si has_suivi_access().
   * Autres = refus.
   */

  const isSuiviPath =
    path.startsWith(SUIVI_PREFIX);

  if (isSuiviPath) {
    if (role !== "admin" && role !== "prof") {
      return NextResponse.redirect(
        new URL("/", request.url),
      );
    }

    /**
     * Les admins n'ont pas besoin de vérifier
     * has_suivi_access().
     */
    if (role === "admin") {
      return response;
    }

    /**
     * Professeur :
     * vérification supplémentaire.
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
        hasAccess = Boolean(data);
      } else {
        console.error(
          "[Middleware] has_suivi_access:",
          error.message,
        );
      }
    } catch (error) {
      console.error(
        "[Middleware] Erreur has_suivi_access:",
        error,
      );
    }

    if (!hasAccess) {
      return NextResponse.redirect(
        new URL("/", request.url),
      );
    }

    return response;
  }

  /**
   * ---------------------------------------------------------
   * 13. MESSAGERIE
   * ---------------------------------------------------------
   *
   * Admin et prof = accès.
   * Autres = refus.
   */

  const isTeacherPath =
    TEACHER_PATHS.some(
      (prefix) => path.startsWith(prefix),
    );

  if (isTeacherPath) {
    if (
      role !== "admin" &&
      role !== "prof"
    ) {
      return NextResponse.redirect(
        new URL("/", request.url),
      );
    }

    return response;
  }

  /**
   * ---------------------------------------------------------
   * 14. Fin du middleware
   * ---------------------------------------------------------
   */

  return response;
}

/**
 * ---------------------------------------------------------
 * Matcher
 * ---------------------------------------------------------
 *
 * On évite autant que possible de déclencher le middleware
 * sur les ressources statiques.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sw\\.js|manifest\\.webmanifest|manifest\\.json|offline-manifest\\.json|offline\\.html|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp3|wav|ogg|m4a|aac|ico|apk)$).*)",
  ],
};