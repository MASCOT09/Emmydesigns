export const site = {
  name: "Emmy",
  handle: "@emmy_designs",
  available: true,
  taglineLead: "Hey, I'm Emmy, an independent ",
  taglineEmphasis: "Web & Product designer for businesses.",
  profileImage: "/profile/emmy-avatar.png",
  profileImageAlt: "Emmy — professional headshot in navy suit",
  bio: "I design sites and products that feel premium and turn visitors into actual customers. I care a lot about the small stuff — spacing, copy, the one extra click that shouldn't be there.",
  cta: {
    placeOrder: {
      label: "Place order",
      href: "https://www.fiverr.com/s/lrjAvXA",
    },
    message: {
      label: "Message me",
      href: "https://t.me/emmmydev",
    },
  },
  chatPrompt: "got a project in mind? let's chat :)",
  social: [
    { label: "X", href: "https://x.com/designpreacher?s=11" },
    {
      label: "INSTAGRAM",
      href: "https://www.instagram.com/emmy_olugoke?stkn=anQ2cDZnYzAydHVy&utm_source=qr",
    },
    { label: "EMAIL", href: "mailto:emmanuelolugoke@gmail.com" },
  ],
  workSamples: [
    {
      title: "Cube Sky Villa",
      category: "Web design",
      year: "2025",
      featured: true,
      image: "/work/cube-sky-villa.png",
      imageAlt: "STUX — Cube Sky Villa hero, California USA",
    },
    {
      title: "Music streaming app",
      category: "Mobile UI",
      year: "2025",
      image: "/work/music-streaming-app.png",
      imageAlt: "Music app home screens — recommendations and made-for-you rows",
    },
    {
      title: "Roofer — West London",
      category: "Web design",
      year: "2025",
      image: "/work/roofer-west-london.png",
      imageAlt: "Roofer — Roofing Service in West London homepage hero",
    },
    {
      title: "MIXTAPE",
      category: "Landing page",
      year: "2025",
      image: "/work/mixtape-landing.png",
      imageAlt: "MIXTAPE coming-soon landing with cassette illustration",
    },
    {
      title: "Marina Cole — Artist site",
      category: "Web design",
      year: "2025",
      image: "/work/marina-cole-hero.png",
      imageAlt: "Marina Cole musician homepage hero",
    },
    {
      title: "Marina Cole — Releases",
      category: "Web design",
      year: "2025",
      image: "/work/marina-cole-releases.png",
      imageAlt: "Marina Cole releases and testimonials layout",
    },
  ],
  caseStudies: [
    {
      slug: "hestora-real-estate",
      title: "Luxury real estate that feels worth the listing price",
      description:
        "End-to-end marketing site for HESTORA — editorial hero, full buyer journey, and trust built for high-intent property search.",
      body: [
        "HESTORA needed a presence that matched the caliber of its properties. Most real estate sites look interchangeable: stock layouts, crowded menus, and CTAs that compete instead of guide. High-intent buyers and investors bounce before they feel confident enough to reach out.",
        "I mapped the site around a single line — “Where exceptional living begins” — and built every section to support it. About establishes credibility (“Built on trust, driven by excellence”). Services cover buying, selling, investment advisory, and management with outcome-first copy. Signature collections showcase flagship listings. A four-step flow — Discover, Connect, Decide, Own — makes the process tangible for first-time buyers and seasoned investors alike.",
        "The hero is intentionally cinematic: full-bleed architecture at dusk, oversized serif brand type, and one primary action (“Browse Properties”) so the first screen reads premium, not cluttered. Navigation stays minimal; deeper pages use rhythm — overlapping about imagery, card-based listings, testimonial grid, FAQ — so long scrolls stay scannable on desktop and mobile.",
        "Social proof and content reinforce trust without noise: named testimonials, market insights on the blog, and FAQs that address viewings, verified listings, and personalized recommendations. Closing CTA (“Your next address starts here”) echoes the hero promise and drives to contact — the same confident tone from first pixel to last.",
        "Designed and shipped in Framer for responsive polish and quick iteration. The live site covers the full journey from discovery to conversion while feeling like a luxury brand, not a template — view it at beloved-need-010230.framer.app.",
      ],
      tags: ["Web design", "Real estate", "Framer"],
      image: "/case-studies/hestora-card.png",
      imageAlt: "HESTORA homepage hero — Where Exceptional Living Begins",
      detailImage: "/case-studies/hestora-detail.png",
      detailImageAlt:
        "HESTORA marketing site — hero, about, and services sections",
      liveUrl: "https://beloved-need-010230.framer.app/",
    },
    {
      slug: "bosak-fintech-marketing",
      title: "Fintech marketing that turns complexity into confidence",
      description:
        "Brand and landing experience for BOSAK — a payments and cash-flow platform positioned for global businesses, with product UI woven into the story.",
      body: [
        "BOSAK sits in a crowded fintech category where every homepage promises “smarter money.” The risk is sounding interchangeable: dense feature lists, vague trust badges, and CTAs that compete before visitors understand the product. The site needed to feel credible to finance-minded buyers while staying approachable for founders evaluating their first cross-border stack.",
        "The narrative anchors on a clear promise — “Your money. Moving smarter.” — and supports it with proof, not jargon. Above the fold: availability for global businesses, dual CTAs (“Get started” and “Explore BOSAK”), and a live-style dashboard preview showing balance, revenue, expenses, and cash flow so the product reads tangible in seconds.",
        "Mid-page structure follows how teams actually evaluate tools. A “One platform / Complete financial control” section breaks value into Payments (cross-border routes such as Lagos → London), Cash Flow visibility, and Insights for decision-making — each with a focused headline and short outcome copy instead of feature dumps.",
        "Visual storytelling carries the rest of the scroll: a “See the bigger picture” analytics block, a global cities motif (“Money shouldn’t have borders”), and a security band (256-bit encryption, real-time monitoring, fraud detection, MFA) that answers compliance concerns without breaking rhythm. Logo strip social proof (NOVA, ARC, VANTA, LUMA, MOTION) adds credibility between story beats.",
        "The closing CTA — “Build a smarter financial future” — mirrors the hero and drives back to signup. Built and shipped in Framer for responsive polish and fast iteration; the live experience is at similar-championship-089222.framer.app.",
      ],
      tags: ["Web design", "Fintech", "Framer"],
      image: "/case-studies/bosak-card.png",
      imageAlt: "BOSAK homepage — Your money. Moving smarter.",
      detailImage: "/case-studies/bosak-detail.png",
      detailImageAlt:
        "BOSAK marketing site — hero with dashboard preview and platform overview",
      liveUrl: "https://similar-championship-089222.framer.app/",
    },
  ],
  copyright: `©${new Date().getFullYear()} Emmy`,
} as const;

export type WorkSample = (typeof site.workSamples)[number];

export type CaseStudy = (typeof site.caseStudies)[number];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return site.caseStudies.find((study) => study.slug === slug);
}
