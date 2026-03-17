"use client";

import { motion } from "framer-motion";
import { ExternalLink, Zap, Users, Target, Calendar, Globe } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { EverpureLogo } from "@/components/ui/everpure-logo";

const TIMELINE_HIGHLIGHTS = [
  { date: "Now", event: "AI infrastructure demand is reshaping data estates and budgets" },
  { date: "Now", event: "Ransomware resilience and recovery posture is non-negotiable" },
  { date: "Now", event: "Platform standardization beats one-off point solutions at scale" },
  { date: "Now", event: "Hybrid remains the default: cloud where it fits, on-prem where it must" },
];

const BUYER_PERSONAS = [
  "Platform engineering",
  "Data engineering",
  "Analytics engineering",
  "App engineering",
  "AI engineering",
  "Security / governance leaders",
  "Architecture leadership",
];

export function WhyGeorge() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-10 sm:space-y-12"
    >
      <SectionHeader
        title="Everpure GTM POV"
        subtitle="How to win the territory: outcomes-led platform standardization"
        showLogo
      />

      {/* Thesis */}
      <div className="rounded-2xl border border-accent/20 bg-accent/[0.06] p-5 sm:p-6">
        <p className="text-[15px] font-medium leading-relaxed text-text-primary">
          The winning motion is simple: land a high-pain workload, prove operational outcomes, then expand by standardizing the platform across adjacent teams and environments.
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-text-secondary">
          Buyers reward clarity: performance where it matters, resilience you can measure, and a refresh-free operating model that reduces migrations and surprise costs.
        </p>
      </div>

      {/* What changed */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-text-primary">
          <Calendar className="h-4 w-4 text-accent" />
          What changed in the last 12 months
        </h2>
        <ul className="space-y-2">
          {TIMELINE_HIGHLIGHTS.map((item) => (
            <li
              key={`${item.date}-${item.event.slice(0, 30)}`}
              className="flex gap-3 rounded-lg border border-surface-border/40 bg-surface-elevated/30 px-4 py-2.5"
            >
              <span className="shrink-0 text-[11px] font-medium uppercase text-accent/90">{item.date}</span>
              <span className="text-[13px] text-text-secondary">{item.event}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Buyer expansion */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-text-primary">
          <Users className="h-4 w-4 text-accent" />
          The buyer universe is expanding
        </h2>
        <p className="text-[13px] leading-relaxed text-text-secondary">
          Not just data leaders anymore. Increasingly relevant personas:
        </p>
        <div className="flex flex-wrap gap-2">
          {BUYER_PERSONAS.map((p) => (
            <span
              key={p}
              className="rounded-md border border-surface-border/50 bg-surface-muted/30 px-3 py-1.5 text-[12px] text-text-secondary"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Workload specificity — what strong managers look for */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-text-primary">
          <Target className="h-4 w-4 text-accent" />
          Workload specificity
        </h2>
        <p className="text-[13px] leading-relaxed text-text-secondary">
          Think in specific workloads, not “expand the platform.” Strong reps lead with:
        </p>
        <ul className="list-disc space-y-1 pl-5 text-[13px] text-text-secondary">
          <li>Tier-1 databases/virtualization · enterprise imaging · backup/recovery · AI-adjacent file/object pipelines</li>
        </ul>
        <p className="mt-2 text-[13px] leading-relaxed text-text-secondary">
          Example expansion path: <strong className="text-text-primary">Land Epic/VMware performance + resilience → expand into cyber recovery posture → expand into enterprise imaging + AI data pipelines.</strong>
        </p>
      </section>

      {/* Consumption math — usage model */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-text-primary">
          <Zap className="h-4 w-4 text-accent" />
          Consumption expansion math
        </h2>
        <p className="text-[13px] leading-relaxed text-text-secondary">
          Frame expansion in outcomes and multi-year platform footprint, not one refresh:
        </p>
        <div className="mt-2 grid grid-cols-3 gap-2 rounded-xl border border-surface-border/50 bg-surface-muted/20 p-3">
          <div className="rounded-lg bg-surface-elevated/50 px-3 py-2 text-center">
            <p className="text-[10px] font-medium uppercase text-text-faint">Year 1</p>
            <p className="mt-0.5 font-semibold tabular-nums text-accent">Land</p>
            <p className="text-[11px] text-text-muted">first workload</p>
          </div>
          <div className="rounded-lg bg-surface-elevated/50 px-3 py-2 text-center">
            <p className="text-[10px] font-medium uppercase text-text-faint">Year 2</p>
            <p className="mt-0.5 font-semibold tabular-nums text-accent">Expand</p>
            <p className="text-[11px] text-text-muted">adjacent teams</p>
          </div>
          <div className="rounded-lg bg-surface-elevated/50 px-3 py-2 text-center">
            <p className="text-[10px] font-medium uppercase text-text-faint">Year 3</p>
            <p className="mt-0.5 font-semibold tabular-nums text-accent">Standardize</p>
            <p className="text-[11px] text-text-muted">platform footprint</p>
          </div>
        </div>
      </section>

      {/* Partner ecosystem */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-text-primary">
          <Globe className="h-4 w-4 text-accent" />
          Partner ecosystem
        </h2>
        <p className="text-[13px] leading-relaxed text-text-secondary">
          Most enterprise deals are ecosystem deals. Show partner leverage where it fits:
        </p>
        <div className="flex flex-wrap gap-2">
          {["VMware", "Cisco", "NVIDIA", "Veeam", "Rubrik", "Accenture", "Deloitte"].map((p) => (
            <span
              key={p}
              className="rounded-md border border-surface-border/50 bg-surface-muted/30 px-3 py-1.5 text-[12px] text-text-secondary"
            >
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* GTM implications */}
      <section className="space-y-3">
        <h2 className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-text-primary">
          <Target className="h-4 w-4 text-accent" />
          GTM implications
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-[13px] text-text-secondary">
          <li>Land-and-expand with workload-specific paths (e.g. feature store → analytics → AI agents), not generic “platform expansion.”</li>
          <li>Lead with consumption expansion math (Year 1 → 2 → 3) alongside strategy.</li>
          <li>Leverage partners (cloud, data tools, SIs) to accelerate land and expand.</li>
          <li>The most strategic deals are won where technical leverage and enterprise trust meet.</li>
        </ul>
      </section>

      {/* Punchy line */}
      <div className="rounded-2xl border border-surface-border/50 bg-surface-elevated/30 p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Zap className="h-5 w-5 shrink-0 text-accent" />
          <div>
            <p className="font-medium text-text-primary">
              The value is fewer migrations, fewer outages, and faster recovery. In enterprise estates, speed only matters if it survives governance, security, and operations.
            </p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-3">
        <a
          href="https://www.purestorage.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-accent/90"
        >
          Everpure site
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://www.purestorage.com/products.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-surface-border bg-surface-elevated px-4 py-2 text-[13px] font-medium text-text-primary transition-colors hover:bg-surface-muted"
        >
          Platform overview
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://www.purestorage.com/solutions.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-transparent px-4 py-2 text-[13px] font-medium text-accent transition-colors hover:bg-accent/10"
        >
          Solutions
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-surface-border/40 bg-surface-muted/20 px-4 py-3">
        <EverpureLogo size={20} />
        <p className="text-[12px] text-text-muted">
          Internal GTM · Everpure (formerly Pure Storage)
        </p>
      </div>
    </motion.div>
  );
}
