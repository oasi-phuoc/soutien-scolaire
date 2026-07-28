"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import dynamic from "next/dynamic";

const ImpressionHubClient = dynamic(
  () =>
    import("@/components/admin/ImpressionHubClient").then((m) => m.ImpressionHubClient),
  {
    ssr: false,
    loading: () => (
      <div className="flex min-h-[24rem] items-center justify-center rounded-[var(--radius-lg)] border border-[var(--color-border-default)] bg-[var(--color-bg-primary)] px-4 py-16 text-sm text-[var(--color-text-secondary)]">
        Chargement de l&apos;impression…
      </div>
    ),
  },
);

type BoundaryState = { error: Error | null; nonce: number };

/**
 * Charge le hub uniquement côté client (évite mismatch SSR/hydratation
 * lié aux seeds aléatoires et aux previews d’exercices) + filet d’erreur.
 */
export class ImpressionHubBoundary extends Component<
  { children?: ReactNode },
  BoundaryState
> {
  state: BoundaryState = { error: null, nonce: 0 };

  static getDerivedStateFromError(error: Error): Partial<BoundaryState> {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("[impression] client crash", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto max-w-lg space-y-4 rounded-[var(--radius-lg)] border border-amber-300 bg-amber-50 px-5 py-8 text-center">
          <h1 className="text-lg font-bold text-amber-900">Impression indisponible</h1>
          <p className="text-sm text-amber-800">
            Une erreur est survenue en chargeant le module d&apos;impression.
            Réessayez — si le problème continue, rechargez la page.
          </p>
          <button
            type="button"
            className="rounded-xl bg-[var(--color-theme)] px-4 py-2.5 text-sm font-bold text-white"
            onClick={() =>
              this.setState((s) => ({ error: null, nonce: s.nonce + 1 }))
            }
          >
            Réessayer
          </button>
        </div>
      );
    }
    return <ImpressionHubClient key={this.state.nonce} />;
  }
}
