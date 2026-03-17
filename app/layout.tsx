import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ApiKeyProvider } from "@/app/context/api-key-context";
import { ThemeProvider } from "@/app/context/theme-context";
import { ToastProvider } from "@/app/context/toast-context";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://www.purestorage.com/");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "GTM Command Center | Everpure (formerly Pure Storage)",
  description:
    "Internal GTM command center for Everpure (formerly Pure Storage). Territory of existing customers — land net-new logos and expand platform footprint across workloads. Platform narrative, deal playbooks, and field kit for the data platform.",
  icons: {
    icon: [{ url: "/everpure-logo.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/everpure-logo.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "GTM Command Center | Everpure",
    description:
      "Internal GTM hub for Everpure (formerly Pure Storage) — existing customers, net-new logos, and expansion. Platform story, deal execution, and field kit.",
    url: "/",
    siteName: "Everpure GTM",
    type: "website",
    images: [
      {
        url: "/everpure-logo.png",
        width: 512,
        height: 512,
        alt: "Everpure",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "GTM Command Center | Everpure",
    description: "Internal GTM hub for Everpure (formerly Pure Storage).",
    images: ["/everpure-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        var s = localStorage.getItem("everpure-gtm-theme");
        var theme = (s === "light" || s === "dark") ? s : "dark";
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle("dark", theme === "dark");
        document.documentElement.classList.toggle("light", theme === "light");
      } catch {}
    })();
  `;

  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ApiKeyProvider>
            <ToastProvider>{children}</ToastProvider>
          </ApiKeyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
