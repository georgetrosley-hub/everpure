"use client";

import { motion } from "framer-motion";
import { Shield, Check, Minus } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

type Strength = "strong" | "strongest" | "moderate" | "improving" | "unknown";

const rows: {
  factor: string;
  everpure: Strength;
  netapp: Strength;
  dell: Strength;
  hpe?: Strength;
}[] = [
  {
    factor: "Operational simplicity at scale",
    everpure: "strongest",
    netapp: "strong",
    dell: "moderate",
    hpe: "moderate",
  },
  {
    factor: "Consistent Tier-1 performance",
    everpure: "strongest",
    netapp: "strong",
    dell: "moderate",
    hpe: "moderate",
  },
  {
    factor: "Cyber recovery posture (runbooks + immutability patterns)",
    everpure: "strong",
    netapp: "strong",
    dell: "strong",
    hpe: "moderate",
  },
  {
    factor: "AI/analytics file+object throughput",
    everpure: "strong",
    netapp: "strong",
    dell: "moderate",
    hpe: "moderate",
  },
  {
    factor: "Footprint standardization playbook",
    everpure: "strongest",
    netapp: "strong",
    dell: "strong",
    hpe: "strong",
  },
  {
    factor: "Procurement + bundle leverage",
    everpure: "moderate",
    netapp: "strong",
    dell: "strongest",
    hpe: "strong",
  },
];

function StrengthBadge({ s }: { s: Strength }) {
  if (s === "strongest") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-2 py-0.5 text-[11px] font-medium text-emerald-400">
        <Check className="h-3 w-3" strokeWidth={2.5} />
        strongest
      </span>
    );
  }
  if (s === "strong") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[11px] text-emerald-400/90">
        <Check className="h-3 w-3" strokeWidth={2.5} />
        strong
      </span>
    );
  }
  if (s === "improving") {
    return (
      <span className="rounded-md bg-amber-500/10 px-2 py-0.5 text-[11px] text-amber-400/90">
        improving
      </span>
    );
  }
  if (s === "moderate") {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-text-muted">
        <Minus className="h-3 w-3" strokeWidth={2} />
        moderate
      </span>
    );
  }
  return (
    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-text-faint">
      unknown
    </span>
  );
}

export function EnterpriseComparison() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="space-y-8 sm:space-y-10"
    >
      <SectionHeader
        title="Platform vs Alternatives"
        subtitle="AI Data Cloud positioning — governed data, multi-model AI, developer workflow, and trust. Not point solutions."
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-[13px]">
          <thead>
            <tr className="border-b border-surface-border/40">
              <th className="pb-3 pr-4 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                Factor
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-accent">
                Everpure
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                NetApp
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                Dell EMC
              </th>
              <th className="px-4 pb-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                HPE
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.factor} className="border-b border-surface-border/20">
                <td className="py-3 pr-4 text-text-secondary">{row.factor}</td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.everpure} />
                </td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.netapp} />
                </td>
                <td className="px-4 py-3">
                  <StrengthBadge s={row.dell} />
                </td>
                <td className="px-4 py-3">
                  {row.hpe && <StrengthBadge s={row.hpe} />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-surface-border/40 bg-surface-elevated/30 px-4 py-3">
        <p className="text-[12px] text-text-muted">
          <Shield className="inline h-3.5 w-3.5 mr-1 text-accent" />
          Internal GTM reference. Use for competitive positioning and deal conversations. Keep it honest: competitor strengths are real, but win on operational outcomes and standardization.
        </p>
      </div>
    </motion.div>
  );
}
