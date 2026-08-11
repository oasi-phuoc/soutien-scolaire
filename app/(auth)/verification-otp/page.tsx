import { verifyOtpAction } from "@/app/actions/auth";

type Props = { searchParams?: Promise<{ phone?: string; erreur?: string }> };

export default async function VerificationOtpPage({ searchParams }: Props) {
  const q = (await searchParams) ?? {};
  const phone = q.phone ?? "";

  return (
    <div className="mx-auto w-full max-w-md px-4">
    <main className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Vérification par SMS
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Un code à 6 chiffres a été envoyé au{" "}
        <span className="font-semibold text-zinc-900 dark:text-zinc-100">{phone}</span>.
      </p>

      {q.erreur && (
        <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 dark:bg-red-950/50 dark:text-red-200">
          {q.erreur}
        </p>
      )}

      <form action={verifyOtpAction} className="mt-6 flex flex-col gap-4">
        <input type="hidden" name="phone" value={phone} />
        <div>
          <label htmlFor="token" className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
            Code de vérification
          </label>
          <input
            id="token"
            name="token"
            type="text"
            inputMode="numeric"
            pattern="[0-9]{6}"
            maxLength={6}
            required
            autoComplete="one-time-code"
            placeholder="123456"
            className="mt-1 min-h-12 w-full rounded-xl border border-zinc-300 bg-white px-3 text-center text-xl font-bold tracking-widest outline-none focus:border-teal-500 dark:border-zinc-600 dark:bg-zinc-950"
          />
        </div>
        <button
          type="submit"
          className="min-h-12 rounded-xl bg-teal-700 text-base font-semibold text-white dark:bg-teal-600"
        >
          Vérifier
        </button>
      </form>
    </main>
    </div>
  );
}
