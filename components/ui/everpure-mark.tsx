"use client";

import { cn } from "@/lib/utils";
import { EverpureLogoIcon } from "@/components/ui/everpure-logo";

type EverpureMarkProps = {
  className?: string;
  size?: number;
  strokeWidth?: number;
};

/**
 * Drop-in replacement for lucide icons in places where a "sparkle/snowflake" mark
 * was being used as branding. Accepts lucide-like props to minimize call-site edits.
 */
export function EverpureMark({ className, size = 16 }: EverpureMarkProps) {
  return <EverpureLogoIcon size={size} className={cn("shrink-0", className)} />;
}

