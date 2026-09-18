"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { site } from "@/data/site";
import { CaseStudiesList } from "./CaseStudiesList";
import { SiteFooter } from "./SiteFooter";
import { WorkSamplesGrid } from "./WorkSamplesGrid";

type Tab = "work" | "case-studies";

const tabs: { id: Tab; label: string }[] = [
  { id: "work", label: "Work samples" },
  { id: "case-studies", label: "Case studies" },
];

function TabBar({
  active,
  onSelect,
  idSuffix = "",
}: {
  active: Tab;
  onSelect: (tab: Tab) => void;
  idSuffix?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label="Portfolio sections"
      className="relative isolate inline-flex w-[17rem] max-w-full rounded-full border border-border bg-surface p-0.5 md:min-w-[17rem] md:p-1"
    >
      <span
        aria-hidden
        className="portfolio-tab-thumb pointer-events-none absolute inset-y-0.5 left-0.5 z-0 w-[calc(50%-0.125rem)] rounded-full bg-foreground md:inset-y-1 md:left-1 md:w-[calc(50%-0.25rem)]"
        style={{
          transform:
            active === "case-studies" ? "translateX(100%)" : "translateX(0)",
        }}
      />
      {tabs.map((tab) => {
        const selected = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`tab-${tab.id}${idSuffix}`}
            aria-selected={selected}
            aria-controls={`panel-${tab.id}`}
            onClick={() => onSelect(tab.id)}
            className={`portfolio-tab-btn relative z-[1] min-h-[2.25rem] min-w-0 flex-1 cursor-pointer rounded-full px-2 py-2 text-center text-[0.6875rem] font-medium leading-tight md:flex-none md:px-5 md:py-2 md:text-[0.7rem] ${
              selected ? "text-background" : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

const hasWorkSamples = site.workSamples.length > 0;
const hasCaseStudies = site.caseStudies.length > 0;
const showTabs = hasWorkSamples && hasCaseStudies;

export function PortfolioTabs() {
  const [active, setActive] = useState<Tab>(hasWorkSamples ? "work" : "case-studies");
  const router = useRouter();

  useEffect(() => {
    if (active !== "case-studies") return;
    for (const study of site.caseStudies) {
      router.prefetch(`/case-studies/${study.slug}`);
    }
  }, [active, router]);

  const workPanel = (
    <div
      key="work-panel"
      role={showTabs ? "tabpanel" : undefined}
      id="panel-work"
      aria-label="Work samples"
      className="animate-tab-in md:pb-10 lg:pb-12"
    >
      <WorkSamplesGrid />
    </div>
  );

  const casePanel = (
    <div
      key="case-panel"
      role={showTabs ? "tabpanel" : undefined}
      id="panel-case-studies"
      aria-label="Case studies"
      className="animate-tab-in md:pb-10 lg:pb-12"
    >
      <CaseStudiesList />
    </div>
  );

  const panels = !showTabs ? (
    hasWorkSamples ? (
      workPanel
    ) : hasCaseStudies ? (
      casePanel
    ) : null
  ) : active === "work" ? (
    workPanel
  ) : (
    casePanel
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {/* Desktop: fixed chrome — full-width rule meets sidebar vertical divider */}
      {showTabs ? (
        <div className="hidden shrink-0 border-b border-border-strong bg-background md:block">
          <div className="mx-auto w-full max-w-[var(--layout-card-max)] px-6 pb-5 pt-8 lg:px-8 lg:pt-9">
            <TabBar active={active} onSelect={setActive} />
          </div>
        </div>
      ) : null}

      <div
        id="portfolio-scroll"
        className="min-h-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain md:overflow-y-scroll"
      >
        <section id="portfolio" className="scroll-mt-20 md:scroll-mt-0">
          <div className="mx-auto w-full max-w-[var(--layout-card-max)] px-5 pb-10 sm:px-6 md:px-6 md:pb-8 md:pt-6 lg:px-8 lg:pb-9">
            {showTabs ? (
              <div className="mb-6 md:hidden">
                <TabBar active={active} onSelect={setActive} idSuffix="-mobile" />
              </div>
            ) : null}
            {panels}
          </div>
        </section>
        <SiteFooter />
      </div>
    </div>
  );
}
