# 🚀 VyomGarud — Precision UAV Systems  
A modern React + Tailwind website featuring custom animations, glassmorphism UI, reveal-on-scroll motion, and premium defense-tech design aesthetics.

---

## 📌 Overview

VyomGarud is a high-performance frontend project built with:

- **React (Vite / Next.js compatible)**
- **TailwindCSS**
- **Custom Animation Engine** using CSS keyframes + Intersection Observer
- **Reusable components** (Hero, Highlights, ProductCard, ContactForm, Navbar)
- **Accessible motion system** respecting reduced-motion preferences

The design is inspired by **military-grade UAV systems**: dark UI, warm gradients, precision motion, and clean typography.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React (Vite or Next.js App Router) |
| Styling | TailwindCSS |
| Animations | CSS Keyframes + IntersectionObserver |
| Fonts | Poppins, Inter, Montserrat |
| Build Tool | React |

---

## 📦 Installation & Setup

### 1️⃣ Clone the repo
```bash
git clone https://github.com/yourname/vyomgarud.git
cd vyomgarud
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start the dev server
bash
Copy code
npm run dev
4️⃣ Build for production
bash
Copy code
npm run build
🗂 Folder Structure
css
Copy code
src/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── ProductCard/
│   ├── Highlights/
│   ├── ContactForm/
│
├── hooks/
│   ├── useRevealOnScroll.js
│   ├── usePrefersReducedMotion.js
│
├── styles/
│   ├── globals.css
│
├── assets/
│   ├── hero-bg.jpg
│
└── pages/
    └── Home.jsx
🎨 Design System
🌈 Accent Gradient
Used across buttons, icons, and badges:

yaml
Copy code
from: #ff8a00
to:   #ffb76b
🪟 Glassmorphism Panels
css
Copy code
bg-white/5
backdrop-blur-md
border border-white/10
shadow-2xl
✨ Motion Language
Soft ease: cubic-bezier(.15,.9,.25,1)

Hover lift: hover:-translate-y-2 hover:scale-[1.03]

Scroll reveal: smooth fade-up

Modern, premium, subtle.

🧲 Scroll Reveal Animation Engine
Your animation engine works using:

✔ CSS Classes
Hidden state:

css
Copy code
.reveal {
  opacity: 0;
  transform: translateY(22px);
  transition: opacity 780ms cubic-bezier(.15,.9,.25,1),
              transform 780ms cubic-bezier(.15,.9,.25,1);
}
Visible state:

css
Copy code
.reveal-visible {
  opacity: 1;
  transform: none;
}
🔍 useRevealOnScroll Hook
Automatically reveals elements marked with data-reveal:

jsx
Copy code
<div data-reveal data-reveal-delay="200ms" className="reveal">...</div>
Features:
Reveal only once

Supports staggered delays via attributes

Uses Intersection Observer

Respects reduced-motion

♿ usePrefersReducedMotion
Disables animations for users who prefer reduced motion.

If enabled:

All reveal elements instantly visible

No transitions applied

Fully accessible

🧱 Components
🚁 Hero
Gradient overlay

Headline + subtext

CTA buttons

Right-side stat card

Reveal animations applied to every element

⭐ Highlights
Feature cards with icons

Hover-lift motion

Reveal-on-scroll animation

Grid responsive layout

📦 ProductCard
Gradient + glass panel

Floating hover effect

Reveal animation support

📨 ContactForm
Blurred panel

Status messages (success/failure)

Fake async API call

Styled inputs & validation

📌 Navbar
Hide-on-scroll logic

Underline hover animation

Gradient background

Mobile drawer

Focus-visible accessibility

🪄 Add Animations to a New Element
Just add:

jsx
Copy code
<div data-reveal data-reveal-delay="150ms" className="reveal">
  Animated content
</div>
Works everywhere.

🔧 Add a New Product Card
jsx
Copy code
<ProductCard
  title="Thermal Vision Module"
  desc="Long-range infrared detection with AI stabilization."
  icon="🔥"
  delay="350ms"
/>
