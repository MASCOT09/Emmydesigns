import Link from "next/link";
import { site } from "@/data/site";

export function SocialLinks() {
  return (
    <div className="mt-12 shrink-0 border-t border-border pt-8 md:mt-5 md:border-t-0 md:pt-0 lg:mt-6">
      <p className="mb-4 text-sm font-semibold text-foreground md:mb-3 md:text-[0.8125rem] lg:text-[0.875rem]">
        {site.chatPrompt}
      </p>

      <nav
        aria-label="Social and contact"
        className="flex flex-row flex-wrap items-center gap-6 md:gap-8"
      >
        {site.social.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            target={item.href.startsWith("http") ? "_blank" : undefined}
            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="social-nav-link inline-flex origin-left items-center gap-1.5 border-b-2 border-foreground/75 pb-1 text-base font-semibold tracking-wide text-foreground/85 md:text-lg"
          >
            {item.label}
            <span className="text-sm leading-none md:text-base" aria-hidden>
              ↗
            </span>
          </Link>
        ))}
      </nav>

      <div aria-hidden className="mt-6 border-b border-border md:hidden" />
    </div>
  );
}
