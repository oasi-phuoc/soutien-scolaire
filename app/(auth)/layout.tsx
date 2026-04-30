import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-4 py-10">
        <p className="mb-6 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-teal-800 underline underline-offset-4 dark:text-teal-400"
          >
            ← Retour à l’accueil
          </Link>
        </p>
        {children}
      </div>
    </div>
  );
}
