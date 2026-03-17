"use client";

import { motion } from "framer-motion";
import { Building2, CircleCheck, CircleDashed, CircleX } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { accounts } from "@/data/accounts";
import { cn } from "@/lib/utils";

function CustomerBadge({ status }: { status?: "Y" | "N" | "?" }) {
  if (status === "Y") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] font-medium text-emerald-300/90">
        <CircleCheck className="h-3.5 w-3.5" strokeWidth={1.8} />
        Customer
      </span>
    );
  }

  if (status === "N") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-2 py-1 text-[11px] font-medium text-rose-300/90">
        <CircleX className="h-3.5 w-3.5" strokeWidth={1.8} />
        Not customer
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2 py-1 text-[11px] font-medium text-text-muted">
      <CircleDashed className="h-3.5 w-3.5" strokeWidth={1.8} />
      Unknown
    </span>
  );
}

export function AccountListDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="space-y-8 sm:space-y-10"
    >
      <SectionHeader
        title="Account list"
        subtitle="Your Everpure territory list with customer status (Y/N) and initial land/expand plays. As you share what each customer has, we’ll replace placeholders with precise workload + product attach."
      />

      <div className="rounded-[22px] border border-accent/20 bg-white/[0.02] overflow-hidden">
        <div className="flex items-center justify-between border-b border-surface-border/40 px-4 py-3 sm:px-5">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-accent/80" strokeWidth={1.8} />
            <span className="text-[12px] font-medium text-text-secondary">
              {accounts.length} accounts
            </span>
          </div>
          <p className="text-[11px] text-text-muted">
            Tip: switch accounts in the top bar to populate War Room.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-[13px]">
            <thead>
              <tr className="border-b border-surface-border/40">
                <th className="px-4 py-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                  Account
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                  Best way in (land)
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                  Expansion plays (if customer)
                </th>
                <th className="px-4 py-3 text-left text-[10px] font-medium uppercase tracking-wider text-text-faint">
                  Likely blockers
                </th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, idx) => (
                <motion.tr
                  key={account.id}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, duration: 0.25 }}
                  className="border-b border-surface-border/20 last:border-b-0 transition-colors hover:bg-surface-muted/20"
                >
                  <td className="px-4 py-3 font-medium text-text-primary">{account.name}</td>
                  <td className="px-4 py-3">
                    <CustomerBadge status={account.customerStatus} />
                  </td>
                  <td className="px-4 py-3 text-text-secondary">{account.firstWedge}</td>
                  <td className="px-4 py-3 text-text-muted">
                    <ul className={cn("space-y-1", account.customerStatus === "Y" ? "" : "opacity-60")}>
                      {(account.customerStatus === "Y"
                        ? account.topExpansionPaths.slice(0, 3)
                        : ["—"]).map((item) => (
                        <li key={item} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-3 text-text-muted">
                    <ul className="space-y-1">
                      {account.topBlockers.slice(0, 3).map((item) => (
                        <li key={item} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

