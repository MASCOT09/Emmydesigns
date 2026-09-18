"use client";

import { site } from "@/data/site";

export function SiteFooter() {
  function scrollToTop(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    document.getElementById("portfolio-scroll")?.scrollTo({ top: 0, behavior: "smooth" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="relative z-10 w-full border-t border-border bg-background">
      <div className="flex px-5 py-10 sm:px-6 md:justify-end md:px-12 md:py-12 lg:px-16">
        <a
          href="#top"
          onClick={scrollToTop}
          className="font-display text-3xl font-medium tracking-tight text-muted md:text-4xl"
        >
          {site.copyright}
        </a>
      </div>
    </footer>
  );
}
