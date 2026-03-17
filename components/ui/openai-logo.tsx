"use client";

import { cn } from "@/lib/utils";
import { EverpureLogoIcon } from "@/components/ui/everpure-logo";

interface OpenAILogoProps {
  className?: string;
  size?: number;
}

/** Everpure mark (replaces prior vendor logos) */
export function OpenAILogoImage({ className, size = 20 }: OpenAILogoProps) {
  return <EverpureLogoIcon size={size} className={cn("shrink-0", className)} />;
}

/** Everpure mark (replaces prior vendor logos) */
export function OpenAILogo({ className, size = 20 }: OpenAILogoProps) {
  return <EverpureLogoIcon size={size} className={cn("shrink-0", className)} />;
}

/** Everpure mark (replaces prior vendor icons) */
export function ChatGPTIcon({ className, size = 20 }: OpenAILogoProps) {
  return <EverpureLogoIcon size={size} className={cn("shrink-0", className)} />;
}
