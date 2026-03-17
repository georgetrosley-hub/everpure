"use client";

import { cn } from "@/lib/utils";

interface EverpureLogoProps {
  className?: string;
  size?: number;
}

export function EverpureLogoIcon({ className, size = 24 }: EverpureLogoProps) {
  const s = size ?? 24;
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 256 256"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Pure Storage"
    >
      {/* Stylized Pure Storage mark (orange) */}
      <path
        fill="currentColor"
        d="M64 64c0-17.673 14.327-32 32-32h72c11.173 0 21.546 5.79 27.404 15.28l28.596 46.2c3.191 5.152 4.876 11.096 4.876 17.156V144c0 17.673-14.327 32-32 32H154.44l-22.32 37.44A32 32 0 0 1 104.68 224H96c-17.673 0-32-14.327-32-32V64Z"
        opacity="0"
      />
      {/* The actual logo shape */}
      <path
        fill="#ff6f1f"
        d="M85.2 63.9 124.5 39c7.2-4.6 15.6-7 24.2-7h54.6c9.7 0 18.7 5 23.7 13.3l25.7 42.2c4.1 6.7 6.3 14.4 6.3 22.2v34.9c0 18.3-14.8 33.1-33.1 33.1h-78.2l-25.5 41.5c-5.8 9.5-16.1 15.2-27.2 15.2H86.6c-18.3 0-33.1-14.8-33.1-33.1V98.6c0-13.4 6.7-25.9 17.7-34.7 4.3-3.5 9.1-6.6 14-10Z"
        opacity="0"
      />
      {/* Outer ring + inner cut approximating provided mark */}
      <path
        fill="#ff6f1f"
        d="M176.9 48H106.6c-12 0-23.1 6.4-29 16.8L48.8 116c-2.9 5.2-4.4 11.1-4.4 17.1V176c0 17.7 14.3 32 32 32h64.6c11.9 0 22.9-6.3 28.9-16.6l12.4-21.4h47.6c12 0 23.2-6.4 29.1-16.9l26-46.1c2.9-5.2 4.4-11.1 4.4-17.1 0-5.9-1.5-11.8-4.4-17.1L265.6 80c-5.9-10.5-17.1-17-29.1-17H176.9Zm59.6 25.7c1.6 2.9 2.4 6.1 2.4 9.4s-.8 6.5-2.4 9.4l-26 46.1c-3.1 5.5-9 8.9-15.3 8.9h-59.9l-27.7 47.9c-3.2 5.5-9 8.9-15.4 8.9H76.4c-8.8 0-16-7.2-16-16v-42.9c0-3.3.8-6.5 2.4-9.4l28.8-51.2c3.1-5.5 9-8.8 15.3-8.8h70.3l59.6 25.7Zm-59.6-25.7H106.6 176.9Z"
      />
      <path
        fill="#ffffff"
        d="M137.6 84.8h60.8c2.5 0 4.9 1.3 6.2 3.5l11.7 19.8c1.2 2.1 1.2 4.7 0 6.8l-11.7 19.8c-1.3 2.2-3.7 3.5-6.2 3.5h-60.8c-2.5 0-4.9-1.3-6.2-3.5l-11.7-19.8c-1.2-2.1-1.2-4.7 0-6.8l11.7-19.8c1.3-2.2 3.7-3.5 6.2-3.5Z"
      />
      <path
        fill="#ff6f1f"
        d="M175.4 152h-33.8l-23.5 40.7c-1.4 2.4.3 5.3 3.1 5.3h49.2c2.6 0 5-1.4 6.3-3.7l9.2-16.3H175.4Z"
      />
    </svg>
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

