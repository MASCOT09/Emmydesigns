import { site } from "@/data/site";
import { AvailabilityBadge } from "./AvailabilityBadge";
import { ThemeToggle } from "./ThemeToggle";

export function SiteTopBar() {
  return (
    <div className="flex items-center justify-end gap-2 pt-2 md:mb-1 md:gap-2 md:pt-0">
      {site.available ? <AvailabilityBadge /> : null}
      <ThemeToggle />
    </div>
  );
}
