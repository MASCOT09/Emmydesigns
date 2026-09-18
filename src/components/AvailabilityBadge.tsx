export function AvailabilityBadge() {
  return (
    <span className="font-availability inline-flex items-center gap-2.5 text-[0.8125rem] font-medium tracking-[0.04em] text-foreground/90 md:text-sm">
      <span className="relative flex h-2.5 w-2.5 items-center justify-center">
        <span className="status-dot-ring absolute h-2.5 w-2.5 rounded-full bg-accent" aria-hidden />
        <span className="status-dot-core relative h-2 w-2 rounded-full bg-accent" aria-hidden />
      </span>
      Available for projects
    </span>
  );
}
