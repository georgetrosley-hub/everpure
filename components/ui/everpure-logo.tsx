"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface EverpureLogoProps {
  className?: string;
  size?: number;
}

export function EverpureLogoIcon({ className, size = 24 }: EverpureLogoProps) {
  const s = size ?? 24;
  return (
    <span
      className={cn("inline-flex shrink-0 items-center justify-center", className)}
      style={{ width: s, height: s }}
      aria-label="Everpure"
      role="img"
    >
      <Image
        src="/everpure-logo.png"
        alt="Everpure"
        width={s}
        height={s}
        priority
        className="h-full w-full object-contain"
      />
    </span>
  );
}

export function EverpureWordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-semibold tracking-tight text-[15px] text-text-primary", className)}>
      Everpure
    </span>
  );
}

export function EverpureLogo({ className, size = 20 }: EverpureLogoProps) {
  return <EverpureLogoIcon className={className} size={size} />;
}

