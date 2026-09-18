import Link from "next/link";
import { site } from "@/data/site";
import { FiverrIcon, TelegramIcon } from "./CtaIcons";
import { ProfileAvatar } from "./ProfileAvatar";

export function Hero() {
  return (
    <header className="pt-3 md:pt-2">
      <ProfileAvatar />

      <div>
        <h1 className="font-display text-[2rem] font-semibold leading-tight tracking-tight sm:text-[2.25rem] md:text-[1.75rem] lg:text-[1.85rem]">
          {site.name}
        </h1>
        <p className="mt-1 text-base text-muted md:mt-0.5 md:text-[0.9rem]">{site.handle}</p>
      </div>

      <p className="mt-6 max-w-xl text-[1.65rem] font-semibold leading-[1.2] tracking-tight sm:text-[1.85rem] md:mt-3.5 md:max-w-none md:text-[1.28rem] md:leading-[1.24] lg:mt-4 lg:text-[1.38rem] lg:leading-[1.22]">
        <span className="text-muted">{site.taglineLead}</span>
        <span className="text-foreground">{site.taglineEmphasis}</span>
      </p>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-muted md:mt-2.5 md:max-w-none md:text-[0.8125rem] md:leading-[1.45] lg:mt-3 lg:text-[0.875rem]">
        {site.bio}
      </p>

      <div className="mt-6 flex flex-row flex-wrap items-center gap-2 md:mt-3.5">
        <Link
          href={site.cta.placeOrder.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-lift-fade cta-primary-hover inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full bg-foreground px-4 text-sm font-medium text-background md:h-9 md:gap-2 md:px-5 md:text-[0.8125rem]"
        >
          <FiverrIcon />
          {site.cta.placeOrder.label}
        </Link>
        <Link
          href={site.cta.message.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-lift-fade cta-secondary-hover inline-flex h-10 shrink-0 items-center justify-center gap-1.5 rounded-full border border-border-strong bg-surface px-4 text-sm font-medium text-foreground md:h-9 md:gap-2 md:px-5 md:text-[0.8125rem]"
        >
          <TelegramIcon />
          {site.cta.message.label}
        </Link>
      </div>
    </header>
  );
}
