export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100">
      <div className="flex w-full flex-1 flex-col justify-center py-8 lg:py-10">
        {children}
      </div>
    </div>
  );
}
