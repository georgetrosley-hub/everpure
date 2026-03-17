"use client";

import { cn } from "@/lib/utils";
import { EverpureLogoIcon } from "@/components/ui/everpure-logo";

interface AdaptiveLogoProps {
  className?: string;
  size?: number;
}

/** Everpure mark (replaces prior vendor logos) */
export function AdaptiveLogoImage({ className, size = 24 }: AdaptiveLogoProps) {
  return <EverpureLogoIcon size={size ?? 24} className={cn("shrink-0", className)} />;
}

/** Everpure mark (replaces prior vendor logos) */
export function AdaptiveLogo({ className, size = 20 }: AdaptiveLogoProps) {
  return <EverpureLogoIcon size={size ?? 20} className={cn("shrink-0", className)} />;
}

/** Chat/assistant icon for Ask panel — keep as SVG for UI clarity */
export function AdaptiveChatIcon({ className, size = 20 }: AdaptiveLogoProps) {
  return <EverpureLogoIcon size={size ?? 20} className={cn("shrink-0", className)} />;
}
