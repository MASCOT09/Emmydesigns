"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { site } from "@/data/site";
import { previewGradients } from "@/lib/previewGradients";

export function CaseStudiesList() {
  const router = useRouter();

  const prefetchStudy = useCallback(
    (slug: string) => {
      router.prefetch(`/case-studies/${slug}`);
    },
    [router],
  );

  return (
    <ul className="flex flex-col gap-5 md:gap-6">
      {site.caseStudies.map((study, index) => {
        const href = `/case-studies/${study.slug}`;
        const image = "image" in study ? study.image : undefined;
        const imageAlt =
          "imageAlt" in study && study.imageAlt ? study.imageAlt : study.title;
        const hasImage = Boolean(image);

        return (
          <li key={study.slug}>
            <article
              className="overflow-hidden rounded-[1.35rem] border border-border bg-surface md:rounded-[1.5rem]"
              onMouseEnter={() => prefetchStudy(study.slug)}
            >
              <div className="p-3 md:p-4">
                <div
                  className={`relative aspect-[4/3] w-full overflow-hidden rounded-[1rem] md:aspect-[16/10] md:min-h-[20rem] lg:min-h-[22rem] ${
                    hasImage
                      ? "border border-border bg-background"
                      : `bg-gradient-to-br ${previewGradients[(index + 2) % previewGradients.length]}`
                  }`}
                >
                  {hasImage && image ? (
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, min(56rem, calc(100vw - 40vw))"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  ) : null}
                </div>
              </div>

              <div className="px-5 pb-6 pt-1 md:px-6 md:pb-7">
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display mt-3 text-xl font-medium leading-snug text-foreground md:text-2xl">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-base md:leading-relaxed">
                  {study.description}
                </p>
                <Link
                  href={href}
                  prefetch
                  className="case-study-read mt-4 inline-flex"
                  onMouseEnter={() => prefetchStudy(study.slug)}
                  onFocus={() => prefetchStudy(study.slug)}
                >
                  Read case study
                  <span className="case-study-read-arrow" aria-hidden>
                    →
                  </span>
                </Link>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
