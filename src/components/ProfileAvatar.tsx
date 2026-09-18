import Image from "next/image";
import { site } from "@/data/site";

export function ProfileAvatar() {
  return (
    <div className="relative mb-5 h-[5.5rem] w-[5.5rem] overflow-hidden rounded-full border border-border-strong bg-surface sm:h-24 sm:w-24 md:mb-2.5 md:h-[4.25rem] md:w-[4.25rem] lg:mb-3 lg:h-[4.5rem] lg:w-[4.5rem]">
      <Image
        src={site.profileImage}
        alt={site.profileImageAlt}
        fill
        sizes="(max-width: 768px) 96px, 72px"
        className="object-cover object-[center_20%]"
        priority
      />
    </div>
  );
}
