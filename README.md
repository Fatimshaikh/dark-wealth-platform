# 🖤 Vantage Point — Private Wealth Management

A private wealth management landing page built as a design showcase, exploring **Dark Mode UI** — a near-black palette with a restrained metallic gold accent, positioned to feel like old-money private banking rather than a trendy tech startup.

**[Live Demo](#)** · **[Repo](https://github.com/Fatimshaikh/dark-wealth-platform)**

---

## ✨ Features

- **Trust-first hero** — no lifestyle photography; instead, three stat panels (AUM, client families, years of discipline) build credibility through numbers, matching real private banking conventions
- **Subtle grid background** at low opacity, signaling technical precision without competing with content
- **Numbered service cards** instead of icon illustrations — a deliberate choice, since numbers read as more serious/institutional than playful icon sets
- **Restrained hover states** — a faint gold border shift only, no scale or shadow pop, since finance sites earn trust through restraint rather than flashy interaction
- **Deliberate copy choices** — "Request Access" instead of "Sign Up," and a compliance-style footer disclaimer, both reflecting how real private wealth firms position themselves
- **Scroll-aware navbar** — transparent over the hero, solidifies with a blur on scroll

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Fonts | Libre Baskerville (headings) · Inter (body) — via `next/font` |

## 📁 Project Structure

src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css # dark theme tokens + grid background + glow utility
├── components/
│ ├── Navbar.tsx
│ ├── Hero.tsx
│ ├── Services.tsx
│ └── Footer.tsx
└── data/
└── services.ts


## 🚀 Getting Started

```bash
git clone https://github.com/Fatimshaikh/dark-wealth-platform.git
cd dark-wealth-platform
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 🎯 Purpose

Part of a series of design-style showcase projects demonstrating the same core stack (Next.js, TypeScript, Tailwind, Framer Motion) applied to distinct visual identities — this one aimed at finance, legal, and other high-trust industries where a dark, restrained aesthetic signals seriousness and commands a premium price point.

## 📄 License

MIT — free to use as a learning reference.