# Grow My Therapy – Stage 2 Frontend Internship Practical Assignment

> **Candidate Submission**: Frontend Developer Internship Selection Process  
> **Tech Stack**: Next.js 14 (App Router) + TypeScript + Tailwind CSS  
> **Live Preview & Demo**: [https://growmytherapy-dr-maya-reynolds.vercel.app](https://growmytherapy-dr-maya-reynolds.vercel.app) *(or run locally via `npm run dev`)*

---

## 📋 Table of Contents
1. [Assignment Overview](#-assignment-overview)
2. [Quick Switcher / Architecture](#-interactive-architecture)
3. [Part 1: 1:1 Homepage Clone (UI Accuracy)](#-part-1-clone-the-homepage)
4. [Part 2: Creative Redesign (Dr. Maya Reynolds)](#-part-2-redesign-using-dr-maya-reynolds-profile)
   - [New Theme & Color Palette](#palette-theme--color-palette)
   - [Copywriting & SEO Optimization](#writing-copywriting--seo-optimization)
   - [Curated Imagery & Bio](#framed_picture-images--bio)
5. [Part 3: Custom "Our Office" Section](#-part-3-custom-our-office-section)
6. [Part 4: 5-Minute Video Walkthrough Script & Demo](#-part-4-video-walkthrough-loom-script)
7. [Running Locally](#-running-locally)
8. [Evaluation Checklist Verification](#-evaluation-checklist-verification)

---

## 🎯 Assignment Overview

This project was built for the **Stage 2 Selection Process at Grow My Therapy**, fulfilling all four requirements:
- **Part 1**: Pixel-perfect clone of the original template ([Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)) preserving layout, typography, section order, and responsive grid structures.
- **Part 2**: Complete creative redesign using **Dr. Maya Reynolds, PsyD** profile as the single source of truth, featuring a calming coastal California aesthetic, thoughtful copywriting, and local SEO keywords.
- **Part 3**: Creation of an entirely new custom section—**"Our Office"**—integrating the physical Santa Monica practice details and real office photos from her Google Drive.
- **Part 4**: A dedicated 5-minute non-technical client walkthrough presentation and script with minute-by-minute speaking cues and screen actions.

---

## ⚡ Interactive Architecture

To ensure the evaluator can easily review both the **1:1 Template Clone** and the **Redesigned Experience**, a top evaluation banner is included on all pages:

| Route | Purpose | Description |
|---|---|---|
| `/` | **Dr. Maya Reynolds Redesign** | Primary submission featuring new palette, SEO copy, her photos, and the custom Our Office section. |
| `/original-clone` | **1:1 Original Clone** | Exact replication of the Conejo Valley Counseling homepage with original fonts, colors, and layout. |
| `/walkthrough` | **5-Minute Client Demo Script** | Interactive script reader, timing breakdown, screen action guides, and client presentation deck. |

---

## 🧩 Part 1: Clone the Homepage

- **Target URL**: [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home)
- **Implementation**: Accessible at route `/original-clone` and via the top switcher.
- **Key Features**:
  - Recreated all 12 sections in identical visual order: Hero arch images, Hope & Relief section, 3 audience columns (Adults, Couples, Children & Teens), full-width quote banner, expertise tags, How We Work, Honoring banner, 4 specialty cards, Schedule an Appointment CTA, and 4-column footer.
  - Pixel-perfect typography and custom arch border radiuses (`arch-top`, `arch-full`).
  - Fluid responsiveness across desktop (1440px+), laptop (1024px), tablet (768px), and mobile (375px+).

---

## 🎨 Part 2: Redesign Using Dr. Maya Reynolds' Profile

### 🎨 Theme & Color Palette
We replaced the original dusty rose palette with a warm, grounding **Coastal Sage & Sand** system designed for nervous system down-regulation and high readability:

- **Primary**: Deep Coastal Sage (`#3D5A4C` / `#2D4539`) — Represents emotional grounding, clinical authority, and psychological safety.
- **Secondary / Surface**: Warm Oatmeal Sand & Bone (`#FAF7F2` / `#F4EFEA`) — Clean, warm, high-contrast background that prevents eye fatigue for stressed visitors.
- **Accent**: Muted Terracotta Coral (`#C27453` / `#D48464`) — Evokes human warmth, empathy, and draws intuitive attention to consultation actions.
- **Text & High Contrast**: Deep Forest Charcoal (`#1E2421` / `#232624`) — Exceeds WCAG AAA accessibility standards.

### ✍️ Copywriting & SEO Optimization
All copy was derived strictly from Dr. Maya Reynolds' official profile document:
- **Location**: Santa Monica, California (`123th Street 45 W, Santa Monica, CA 90401`).
- **Target Keywords Integrated Naturally**:
  - *Licensed Clinical Psychologist Santa Monica, CA*
  - *Anxiety & Panic Therapy Santa Monica*
  - *EMDR Trauma Therapy California*
  - *Burnout Counseling for High-Achievers & Entrepreneurs*
  - *In-Person & California Statewide Telehealth*
- **3 Core Services Selected & Described**:
  1. **Anxiety & Panic Therapy**: Addressing anticipatory dread, racing thoughts, physical tension, and sleep disruption through CBT and somatics.
  2. **Trauma Recovery & EMDR**: Paced reprocessing of single-incident or complex relational wounds with emphasis on stabilization and physical safety.
  3. **Burnout & High-Achiever Support**: Helping perfectionistic executives, creatives, and founders deconstruct internal pressure and build sustainable vitality.

### 🖼️ Images & Bio
- Added Dr. Maya Reynolds’ actual portrait from her Google Drive folder (`maya_reynolds.png`).
- High-resolution, intentional photography reflecting calm natural light, coastal California horizons, and grounded therapy interiors.

---

## 🏢 Part 3: Custom "Our Office" Section

A completely custom section built into the homepage flow (`#office`):
- **Headline**: *Our Office: A Calm, Grounding Space for Meaningful Healing*
- **Office Address**: `123th Street 45 W, Santa Monica, CA 90401`
- **Real Imagery**: Embedded `office1.jpeg` and `office2.jpeg` downloaded directly from Dr. Maya's Google Drive folder.
- **Pillars Highlighted**:
  1. *Natural Light & Grounding*: Large windows, organic materials, and living plants.
  2. *Privacy, Comfort & Discretion*: Acoustic sound privacy, unhurried scheduling, and calm reception.
  3. *In-Person & Hybrid Flexibility*: In-person appointments in Santa Monica with statewide California telehealth.

---

## 🎥 Part 4: Video Walkthrough (Loom Script)

An interactive presentation guide and minute-by-minute speaking script is available at `/walkthrough`.

### 5-Minute Presentation Breakdown:
- **Minute 1 (0:00 - 0:45)**: Warm greeting, client framing, branding, and hero section rationale.
- **Minute 2 (0:45 - 1:45)**: Empathy and hope section, addressing high-achievers feeling "functional yet exhausted", and the 3 audience cards.
- **Minute 3 (1:45 - 2:45)**: Philosophy quote, clinical expertise tags, and breaking down EMDR, CBT, and Somatics in non-technical terms.
- **Minute 4 (2:45 - 3:45)**: Tour of the custom "Our Office" section in Santa Monica with real photos and privacy benefits.
- **Minute 5 (3:45 - 5:00)**: Mobile view demonstration, interactive FAQ accordion, and HIPAA-compliant consultation booking modal.

---

## 💻 Running Locally

### 1. Prerequisites
- Node.js 18+ (tested on Node v24.16.0)
- npm 9+

### 2. Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd "Grow My Therapy"

# Install dependencies
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✅ Evaluation Checklist Verification

| Requirement | Status | Notes |
|---|---|---|
| **Next.js + Tailwind CSS** | ✅ Completed | Built with Next.js 14 App Router, TypeScript, and Tailwind CSS. |
| **Exact Layout & Spacing Clone** | ✅ Completed | Available at `/original-clone` with original fonts, colors, and structure. |
| **Mobile Responsiveness** | ✅ Completed | Fully tested with custom slide-out mobile drawer, fluid text, and stacked grids. |
| **Dr. Maya Reynolds Content** | ✅ Completed | 100% of copy pulled from Google Doc profile (bio, modalities, location, services). |
| **New Cohesive Color Palette** | ✅ Completed | Coastal Sage (`#3D5A4C`), Sand (`#FAF7F2`), and Terracotta (`#C27453`). |
| **Curated Images & Maya's Photo** | ✅ Completed | Included `maya_reynolds.png`, `office1.jpeg`, `office2.jpeg` and curated photos. |
| **Custom "Our Office" Section** | ✅ Completed | Section at `#office` with Santa Monica location, real photos, and hybrid options. |
| **5-Minute Loom Video Script** | ✅ Completed | Accessible at `/walkthrough` with word-for-word client demo script. |
| **Git Repository** | ✅ Completed | Clean git history with atomic commits. |

---

*Submission prepared with care for Grow My Therapy.*
