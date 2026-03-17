# Everpure GTM Command Center

Internal GTM hub for Everpure (formerly Pure Storage) account teams. This territory is heavy on **existing customers** — the job is to **land net-new logos** and **expand platform footprint** within these accounts. This project provides a single place for platform narrative, deal playbooks, field kit, and war room tools.

## What’s inside

- **Platform Overview** — platform pillars, key metrics, and strategic message
- **Why now** — strategic transition, timeline highlights, buyer expansion
- **War Room** — Account-centric view (accounts N/A until configured)
- **Account Intelligence, Pipeline, Deal Playbook, Deal Progression, Account Log**
- **Stakeholder Map, Deal Plan**
- **First 90 Days, Deal Signals, Field Kit**
- **Use Case Library, ROI Calculator, Territory Engine**
- **Platform vs Alternatives** — competitive positioning

Content is aligned to an Everpure (formerly Pure Storage) land-and-expand motion across workloads and platform standardization.

## Accounts

Accounts are **N/A** for now. When you’re ready, add account data in `data/accounts.ts` and set the default in `data/accounts.ts` (`defaultAccountId`).

## Environment variables

Optional — for chat and AI-generated content:

- **ANTHROPIC_API_KEY** — Your API key (or add via the API Key button in the app)

## Run it

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech stack

Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Recharts. Optional Claude API for chat and generation. Client-side state; prototype-grade.

## Deploy & push to GitHub

Repo: **https://github.com/georgetrosley-hub/everpure**

```bash
git remote add origin https://github.com/georgetrosley-hub/everpure.git
# or, if origin exists: git remote set-url origin https://github.com/georgetrosley-hub/everpure.git
git add -A
git commit -m "Set up Everpure GTM Command Center"
git push -u origin main
```

(Use `master` if your default branch is `master`.)

---

Built for Everpure (formerly Pure Storage) internal GTM.
