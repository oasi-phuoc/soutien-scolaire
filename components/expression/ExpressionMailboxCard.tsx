"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getExpressionUnreadCountAction } from "@/app/actions/expression";

export function ExpressionMailboxCard() {
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    void getExpressionUnreadCountAction().then(setUnread);
  }, []);

  return (
    <Link
      href="/messagerie"
      className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-[var(--color-theme)]/25 bg-white/75 p-4 shadow-sm transition-transform hover:-translate-y-0.5"
    >
      <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-theme-light)] text-[var(--color-theme)]">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" />
        </svg>
        {unread > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-500 px-1 text-[10px] font-bold text-white ring-2 ring-white">
            {unread > 9 ? "9+" : unread}
          </span>
        )}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-[var(--color-text-primary)]">Messagerie</span>
        <span className="block text-xs text-[var(--color-text-secondary)]">
          {unread ? `${unread} nouvelle${unread > 1 ? "s" : ""} production${unread > 1 ? "s" : ""}` : "Productions écrites et corrections"}
        </span>
      </span>
      <span className="text-xl text-[var(--color-theme)]">›</span>
    </Link>
  );
}
