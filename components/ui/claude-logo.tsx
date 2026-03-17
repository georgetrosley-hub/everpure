"use client";

import { cn } from "@/lib/utils";
import { EverpureLogoIcon } from "@/components/ui/everpure-logo";

interface ClaudeLogoIconProps {
  className?: string;
  size?: number;
}

/** Claude sparkle-style icon for UI branding */
export function ClaudeSparkle({ className, size = 20 }: ClaudeLogoIconProps) {
  return <EverpureLogoIcon size={size} className={cn("shrink-0", className)} />;
}
