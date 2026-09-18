import Image from "next/image";

/** Same pixel box for both CTAs — Fiverr matches Telegram size */
const ICON_PX = 20;

function CtaIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={ICON_PX}
      height={ICON_PX}
      className="size-5 shrink-0 rounded-full object-cover"
      aria-hidden
    />
  );
}

export function TelegramIcon() {
  return <CtaIcon src="/icons/telegram.png" />;
}

export function FiverrIcon() {
  return <CtaIcon src="/icons/fiverr.png" />;
}
