"use client";

import { cn } from "@/lib/utils";
import { EverpureLogoIcon, EverpureWordmark } from "@/components/ui/everpure-logo";

interface DatabricksLogoIconProps {
  className?: string;
  size?: number;
}

export function DatabricksLogoIcon({ className, size = 20 }: DatabricksLogoIconProps) {
  return <EverpureLogoIcon size={size} className={cn("shrink-0", className)} />;
}

interface DatabricksWordmarkProps {
  className?: string;
}

export function DatabricksWordmark({ className }: DatabricksWordmarkProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <EverpureLogoIcon size={16} />
      <EverpureWordmark className="text-[13px]" />
    </div>
  );
}
