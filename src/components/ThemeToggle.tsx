"use client";

import { useTheme } from "./ThemeProvider";

function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2.75v2.5M12 18.75v2.5M4.68 4.68l1.77 1.77M17.55 17.55l1.77 1.77M2.75 12h2.5M18.75 12h2.5M4.68 19.32l1.77-1.77M17.55 6.45l1.77-1.77"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Filled crescent moon — clear half-moon silhouette at small sizes */
function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7.003 7.003 0 0 0 9.79 9.79z" />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-foreground transition hover:bg-surface-hover md:h-8 md:w-8"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
