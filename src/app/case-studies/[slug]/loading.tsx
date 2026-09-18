export default function CaseStudyLoading() {
  return (
    <div className="relative min-h-dvh animate-pulse">
      <main className="mx-auto w-full max-w-2xl px-5 py-10 sm:px-6 md:py-14 lg:max-w-3xl lg:px-8">
        <div className="h-4 w-28 rounded bg-surface" />
        <div className="mt-8 flex gap-2">
          <div className="h-6 w-16 rounded-full bg-surface" />
          <div className="h-6 w-20 rounded-full bg-surface" />
        </div>
        <div className="mt-6 h-10 w-full max-w-lg rounded bg-surface md:h-12" />
        <div className="mt-4 h-6 w-full max-w-md rounded bg-surface" />
        <div className="mt-10 space-y-4 border-t border-border pt-10">
          <div className="h-4 w-full rounded bg-surface" />
          <div className="h-4 w-full rounded bg-surface" />
          <div className="h-4 w-11/12 rounded bg-surface" />
          <div className="h-4 w-full rounded bg-surface" />
          <div className="h-4 w-10/12 rounded bg-surface" />
        </div>
      </main>
    </div>
  );
}
