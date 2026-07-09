import type { ComponentPropsWithoutRef } from "react";
import {
  APP_SHELL,
  APP_SHELL_DETAIL,
  APP_SHELL_READER,
  APP_SHELL_WIDE,
  PB_ADMIN,
  PB_DEFAULT,
  PB_RUNNER,
} from "@/lib/layout/page-shell";

type Variant = "default" | "wide" | "detail" | "reader";
type Padding = "default" | "runner" | "admin" | "none";

const SHELL: Record<Variant, string> = {
  default: APP_SHELL,
  wide: APP_SHELL_WIDE,
  detail: APP_SHELL_DETAIL,
  reader: APP_SHELL_READER,
};

const PB: Record<Padding, string> = {
  default: PB_DEFAULT,
  runner: PB_RUNNER,
  admin: PB_ADMIN,
  none: "",
};

export function AppMain({
  variant = "default",
  padding = "default",
  className = "",
  children,
  ...props
}: ComponentPropsWithoutRef<"main"> & {
  variant?: Variant;
  padding?: Padding;
}) {
  const pb = PB[padding];
  return (
    <main className={`${SHELL[variant]} flex-1 py-8 ${pb} ${className}`.trim()} {...props}>
      {children}
    </main>
  );
}
