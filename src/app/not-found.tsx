import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-lg flex-col items-start justify-center px-5">
      <p className="text-sm text-muted">404</p>
      <h1 className="font-display mt-2 text-2xl font-semibold">Page not found</h1>
      <Link href="/" className="mt-6 text-sm text-foreground underline-offset-4 hover:underline">
        Back home
      </Link>
    </main>
  );
}
