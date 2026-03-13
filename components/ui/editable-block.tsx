"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EditableBlockProps {
  children: ReactNode;
  className?: string;
}

export function EditableBlock({ children, className }: EditableBlockProps) {
  return (
    <div
      className={cn(
        "rounded-[22px] border border-surface-border/40 bg-surface-muted/20 px-4 py-3 transition-colors",
        "hover:border-claude-coral/25 hover:bg-black/20",
        "focus-within:border-claude-coral/35 focus-within:bg-black/25",
        className
      )}
    >
      {children}
    </div>
  );
}

