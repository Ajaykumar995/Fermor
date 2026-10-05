# Fermor • The Intelligent Financial Operating System

> **Frontend Developer Assignment Submission for Fermor**  
> *Built with React.js, Vite, Tailwind CSS, Lucide Icons, & Framer Motion.*

---

## 📌 Executive Summary & Product Vision

**Fermor** is building a better way for people to **understand, act, and grow** financially. 

Traditional finance tools suffer from fragmentation: users log into four different banking apps, maintain broken spreadsheets, leave idle cash earning 0.01% in checking accounts, and suffer from unnoticed subscription leakage.

This homepage implementation presents **Fermor 2.0**: an intelligent financial operating system that synthesizes multi-bank aggregation, automated yield sweeps, autonomous leakage guardrails, and precision wealth projection engines into a single, cohesive experience.

---

## 🚀 Key Interactive Features

Unlike static designs or generic landing templates, this application is a **fully functional, interactive product experience**:

1. **Live Interactive Financial OS Sandbox (`#platform`)**:
   - **Understand Module**: Real-time net worth tracking, multi-account sync, expense categorization, and plain-English cashflow audits.
   - **Act Module**: Dynamic rule builder (e.g., *Smart Cash Sweep to 5.15% APY*, *Subscription Leakage Shield*). Users can click **"Run Instant Cash Sweep"** to watch balances optimize in real time!
   - **Grow Module**: Interactive 10-year SVG wealth trajectory comparing Fermor's tax-optimized compounding against traditional low-yield banks.

2. **Interactive Yield & Compound Growth Calculator (`#calculator`)**:
   - Slider-based calculation engine allowing users to adjust initial cash, monthly savings, APY boost, and time horizon.
   - Calculates total wealth, interest earned, and highlights the **Fermor Advantage** (+${extraGain} in extra yield).

3. **60-Second Financial Health Checkup Audit**:
   - Interactive 3-step wizard accessible from the header and hero section.
   - Generates a personalized **Financial Health Score** (e.g., 72/100) with custom action items and celebratory confetti!

4. **Product Architecture Comparison Matrix (`#comparison`)**:
   - Side-by-side feature comparison: *Fermor OS* vs *Traditional Banks* vs *Spreadsheets* vs *Wealth Advisors*.

5. **Instant Command Palette (`Cmd + K` or `Ctrl + K`)**:
   - Pressing `Cmd+K` opens a command launcher to trigger quick audits, switch themes, navigate sections, or run calculations.

6. **Interactive Pricing Calculator (`#pricing`)**:
   - Monthly and annual billing switch (20% discount) with clear tier breakdowns (Starter, Pro, Wealth).

7. **Categorized & Searchable FAQ Accordion (`#faq`)**:
   - Live search input filter across questions and category tab selectors.

8. **Theme Toggle (Dark / Light Mode)**:
   - Modern obsidian dark theme by default, with smooth light mode toggle.

9. **Onboarding & Waitlist Modal**:
   - Interactive signup form with email validation, celebratory confetti, and unique referral link generator (`app.fermor.com/join?ref=FM-XXXXXX`).

---

## 🧠 Key Product & Design Decisions

1. **Structure Built Around the 3 Core Pillars**:
   - **Understand**: Clean typography, high-contrast net worth metrics, plain-English notifications.
   - **Act**: One-click automation triggers and clear status badges (`🟢 Active & Guarding`).
   - **Grow**: SVG vector charts rendering realistic exponential wealth curves.

2. **Visual Hierarchy & Modern Fintech Aesthetic**:
   - Inspired by world-class software interfaces (Stripe, Linear, Mercury, Arc).
   - Glassmorphic card backdrops (`backdrop-blur-xl`), fine micro-borders (`border-slate-800`), glowing mesh background gradients, and high-legibility typography (Inter & JetBrains Mono).

3. **Responsive Mobile-First Architecture**:
   - Tailored breakpoints for Desktop, Tablet, and Mobile devices.
   - Touch-friendly drawers, responsive slider inputs, and dynamic scroll-to-section navigation.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: React.js 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4 & Custom CSS Utilities
- **Icons**: Lucide React
- **Animations & Effects**: Canvas-Confetti & CSS Keyframes
- **Language**: JavaScript (ES6+) — *Strictly no TypeScript used as per assignment instructions.*

---

## 💻 Local Setup & Installation Instructions

Follow these simple steps to run the project locally on your machine:

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm (v9.0.0 or higher)

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/fermor-homepage.git
   cd fermor-homepage
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Build for Production**:
   ```bash
   npm run build
   ```

5. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## 🌐 Live Deployment & Hosting

This project is optimized for 1-click deployment on modern hosting platforms:

- **Vercel / Netlify**: Simply connect the GitHub repository and use the default Vite build settings:
  - **Build Command**: `npm run build`
  - **Output Directory**: `dist`
- **GitHub Pages**: Can be deployed directly via `gh-pages` or GitHub Actions.

---

## 📸 Screenshots & Previews

| Desktop View | Interactive Financial OS Sandbox |
| :---: | :---: |
| *Modern Dark Theme Landing* | *Tabbed Understand, Act, Grow Modules* |

| Interactive Yield Calculator | Financial Health Audit Modal |
| :---: | :---: |
| *Slider Compound Interest Engine* | *3-Step Diagnostic Wizard with Confetti* |

---

## ⚖️ Final Verification Checklist

- [x] **Strict Stack Adherence**: React.js + Vite + Tailwind CSS + JavaScript (No TypeScript).
- [x] **Working Implementation**: Full interactive sandbox, calculators, search modal, and audit wizard.
- [x] **Production Build Verified**: `npm run build` compiles cleanly with zero errors.
- [x] **Fully Responsive**: Verified layout across mobile, tablet, and desktop screens.
- [x] **Clean Structure**: Modular components, mock data separation, and maintainable CSS.

---

*Submitted with ❤️ for the Fermor Frontend Developer Assignment.*
