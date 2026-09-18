import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCaseStudyBySlug, site } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return site.caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Case study not found" };
  return {
    title: `${study.title} — ${site.name}`,
    description: study.description,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  const previewSrc =
    "detailImage" in study && study.detailImage
      ? study.detailImage
      : "image" in study
        ? study.image
        : undefined;
  const previewAlt =
    "detailImageAlt" in study && study.detailImageAlt
      ? study.detailImageAlt
      : "imageAlt" in study && study.imageAlt
        ? study.imageAlt
        : `${study.title} preview`;

  return (
    <div className="relative min-h-dvh">
      <main className="mx-auto w-full max-w-2xl px-5 py-10 sm:px-6 md:py-14 lg:max-w-3xl lg:px-8">
        <Link
          href="/#portfolio"
          className="text-sm text-muted transition hover:text-foreground"
        >
          ← Back to portfolio
        </Link>

        <div className="mt-8 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="font-display mt-6 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
          {study.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted md:text-xl">{study.description}</p>

        {previewSrc ? (
          <figure className="mt-8 overflow-hidden rounded-[1.25rem] border border-border bg-surface p-3 md:mt-10 md:rounded-[1.5rem] md:p-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1rem] border border-border bg-background md:aspect-auto md:min-h-[28rem]">
              <Image
                src={previewSrc}
                alt={previewAlt}
                fill
                className="object-contain object-top"
                sizes="(max-width: 768px) 100vw, 48rem"
                priority
              />
            </div>
            <figcaption className="sr-only">Project preview</figcaption>
          </figure>
        ) : null}

        {"liveUrl" in study && study.liveUrl ? (
          <p className="mt-6">
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground"
            >
              View live project ↗
            </a>
          </p>
        ) : null}

        <div className="mt-10 space-y-5 border-t border-border pt-10">
          {study.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-muted md:text-[1.05rem]">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}
