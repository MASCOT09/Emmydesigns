import { Hero } from "@/components/Hero";
import { PortfolioTabs } from "@/components/PortfolioTabs";
import { SiteTopBar } from "@/components/SiteTopBar";
import { SocialLinks } from "@/components/SocialLinks";

export default function Home() {
  return (
    <div id="top" className="relative min-h-dvh md:flex md:h-dvh md:overflow-hidden">
      <div
        aria-hidden
        className="hero-glow pointer-events-none absolute inset-x-0 top-0 h-[480px] md:h-[640px]"
      />

      <aside className="layout-sidebar bio-panel relative z-10 flex shrink-0 flex-col px-5 pt-6 sm:px-6 md:fixed md:inset-y-0 md:left-0 md:h-dvh md:w-[var(--layout-sidebar)] md:overflow-hidden md:bg-background md:px-9 md:py-5 lg:px-11 lg:py-6">
        <SiteTopBar />
        <Hero />
        <SocialLinks />
      </aside>

      <div className="relative z-20 flex min-h-0 min-w-0 flex-1 flex-col md:ml-[var(--layout-sidebar)] md:h-dvh md:w-[calc(100%-var(--layout-sidebar))]">
        <PortfolioTabs />
      </div>
    </div>
  );
}
