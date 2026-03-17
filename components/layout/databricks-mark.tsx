"use client";

import { EverpureLogoIcon, EverpureWordmark } from "@/components/ui/everpure-logo";

interface DatabricksMarkProps {
  subtitle?: string;
  compact?: boolean;
}

export function DatabricksMark({
  subtitle = "Lakehouse Platform for Life Sciences",
  compact = false,
}: DatabricksMarkProps) {
  return (
    <div className="flex items-start gap-3">
      <EverpureLogoIcon size={28} className="mt-0.5 shrink-0" />
      <div className="min-w-0">
        <EverpureWordmark className="truncate text-[13px]" />
        {!compact && <p className="mt-0.5 text-[11px] text-text-muted">{subtitle}</p>}
      </div>
    </div>
  );
}
