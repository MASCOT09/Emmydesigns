import Image from "next/image";
import { site, type WorkSample } from "@/data/site";
import { previewGradients } from "@/lib/previewGradients";

export function WorkSamplesGrid() {
  return (
    <ul className="flex w-full flex-col gap-5 md:gap-6">
      {site.workSamples.map((item: WorkSample, index) => {
        const { image, imageAlt, title } = item;
        const featured = "featured" in item && item.featured === true;
        const hasImage = Boolean(image);

        return (
          <li key={title} className="w-full">
            <figure className="w-full overflow-hidden rounded-[1.35rem] border border-border bg-surface p-3 md:rounded-[1.5rem] md:p-4">
              <div
                className={`relative w-full overflow-hidden rounded-[1rem] border border-border bg-background ${
                  featured
                    ? "aspect-[4/3] md:aspect-[16/9] md:min-h-[26rem] lg:min-h-[28rem]"
                    : "aspect-[4/3] md:aspect-[16/10] md:min-h-[18rem] lg:min-h-[20rem]"
                } ${!hasImage ? `bg-gradient-to-br ${previewGradients[index % previewGradients.length]}` : ""}`}
              >
                {hasImage && image ? (
                  <div className="absolute inset-2 rounded-[0.75rem] border border-border bg-background md:inset-3">
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      className="object-contain object-center p-1 md:p-1.5"
                      sizes="(max-width: 768px) 100vw, min(56rem, calc(100vw - 40vw))"
                      priority={index === 0}
                    />
                  </div>
                ) : null}
              </div>
              <figcaption className="sr-only">{title}</figcaption>
            </figure>
          </li>
        );
      })}
    </ul>
  );
}
