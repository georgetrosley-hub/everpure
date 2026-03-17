"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cpu,
  Code,
  Shield,
  TrendingUp,
  Sparkles,
  Layers,
  Globe,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { EverpureLogo } from "@/components/ui/everpure-logo";

const PLATFORM_PILLARS = [
  {
    title: "Data platform",
    icon: Database,
    items: [
      "FlashArray for mission-critical block workloads (databases, virtualization)",
      "FlashBlade for high-throughput file/object workloads (analytics, AI pipelines)",
      "Unified operations and visibility with Pure1",
    ],
  },
  {
    title: "AI-ready infrastructure",
    icon: Cpu,
    items: [
      "High-performance data paths for AI training/inference and analytics",
      "Simple scaling + consistent performance for GPU-adjacent pipelines",
      "Hybrid patterns where data stays governed and available",
    ],
  },
  {
    title: "Cloud + app platform",
    icon: Code,
    items: [
      "Evergreen subscription operating model (upgrade/refresh-free outcomes)",
      "Evergreen//One (as-a-service) where it fits",
      "Portworx for Kubernetes data services (where applicable)",
    ],
  },
  {
    title: "Resilience & trust",
    icon: Shield,
    items: [
      "Immutable protection patterns (e.g., SafeMode-style immutability) and recovery planning",
      "Ransomware resilience posture: detect → contain → recover",
      "Operational consistency across on-prem and hybrid estates",
    ],
  },
];

const METRICS = [
  { label: "Territory focus", value: "Land + expand", sub: "existing + net-new" },
  { label: "Primary motion", value: "Standardize", sub: "platform footprint" },
  { label: "Buyer map", value: "IT + Security", sub: "Apps + Infra" },
  { label: "Workloads", value: "Tier-1 + AI", sub: "data + resilience" },
  { label: "Deal hygiene", value: "MEDDPICC", sub: "multi-threaded" },
  { label: "Outcome", value: "Fewer outages", sub: "faster recovery" },
];

export function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-10 sm:space-y-12"
    >
      <SectionHeader
        title="Platform Overview"
        subtitle="Everpure (formerly Pure Storage) — AI-ready data platform with an outcomes-led operating model"
        showLogo
      />

      {/* Hero thesis */}
      <div className="rounded-2xl border border-accent/20 bg-accent/[0.06] p-5 sm:p-6">
        <p className="text-[15px] font-medium leading-relaxed text-text-primary">
          Everpure is sold on outcomes: simplify the estate, raise resilience, and standardize the data platform across mission-critical workloads.
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-text-secondary">
          The winning platform story is consistency: predictable performance, reduced operational drag, and a clear land-and-expand path from a first workload into standardization, cyber recovery posture, and AI-adjacent data pipelines.
        </p>
      </div>

      {/* Key metrics */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
          <TrendingUp className="h-4 w-4" />
          Key metrics (FY26)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-surface-border/50 bg-surface-elevated/40 px-4 py-3"
            >
              <p className="text-[11px] uppercase tracking-wider text-text-faint">{m.label}</p>
              <p className="mt-0.5 font-semibold text-accent">{m.value}</p>
              {m.sub && <p className="text-[12px] text-text-muted">{m.sub}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Platform pillars */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-muted">
          <Layers className="h-4 w-4" />
          Platform pillars
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {PLATFORM_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-xl border border-surface-border/50 bg-surface-elevated/30 p-4 sm:p-5"
              >
                <div className="flex items-center gap-2 text-accent">
                  <Icon className="h-4 w-4" />
                  <h3 className="font-semibold text-text-primary">{pillar.title}</h3>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[12px] text-text-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategic message */}
      <div className="rounded-2xl border border-surface-border/50 bg-surface-elevated/30 p-5 sm:p-6">
        <h2 className="mb-3 flex items-center gap-2 text-[15px] font-semibold text-text-primary">
          <Globe className="h-4 w-4 text-accent" />
          The strategic message
        </h2>
        <p className="text-[13px] leading-relaxed text-text-secondary">
          Enterprises do not need a fragile patchwork of arrays, point tools, and “one-off” recovery plans. Standardize the platform, modernize cyber recovery, and make AI/data growth sustainable without constant migrations.
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-3 rounded-xl border border-surface-border/40 bg-surface-muted/20 px-4 py-3">
        <EverpureLogo size={24} />
        <p className="text-[12px] text-text-muted">
          Internal GTM · Platform narrative for account teams · everpure (formerly Pure Storage)
        </p>
      </div>
    </motion.div>
  );
}
