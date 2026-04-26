<div align="center">

# 🚀 Neev Lila | Frontend & AI Engineer

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fneevlila.vercel.app&up_message=Online&down_message=Offline&style=for-the-badge&logo=vercel)](https://neevlila.vercel.app)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-100%2F100-success?style=for-the-badge&logo=lighthouse)](https://neevlila.vercel.app)
[![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

An interactive, hyper-optimized developer portfolio showcasing production-grade frontend engineering, interactive WebGL, and seamless large language model (LLM) integrations.

🔗 **[neevlila.vercel.app](https://neevlila.vercel.app)**  

</div>

<br />

## 🌟 Overview

Welcome to the source code of my personal portfolio! This project isn't just a static resume—it's a demonstration of modern web engineering best practices. 

I built this site to bridge the gap between **gorgeous interactive design** (WebGL particle systems, glassmorphism) and **ruthless performance optimization** (100% Lighthouse scores, SEO structured data, code-splitting). 

### 🎯 Key Highlights:
- **AI-Driven Focus:** Showcases real-world deployments of the Google Gemini API, including an AI Legal Chatbot built for Smart India Hackathon 2025.
- **Flawless Optimization:** Achieves a **100/100 Lighthouse score** across Performance, Accessibility, Best Practices, and SEO.
- **Dynamic 3D Background:** Implements a custom WebGL particle engine using Three.js and React Three Fiber, perfectly balanced to avoid main-thread blocking.

---

## 🛠️ Tech Stack & Architecture

| Category | Technologies |
| :--- | :--- |
| **Core** | React 18, TypeScript, Vite |
| **Styling & UI** | Tailwind CSS, shadcn/ui, Radix UI |
| **WebGL & 3D** | Three.js, React Three Fiber (`@react-three/fiber`) |
| **Icons & Assets** | Lucide React |
| **Deployment & CI/CD** | Vercel |

---

## ⚡ Performance Engineering

This portfolio was explicitly engineered to pass rigorous web core vital standards. Key optimizations include:

* **Dynamic Code Splitting:** The heavy `Three.js` payload (`~220KB`) is lazily loaded out of the critical rendering path. On mobile devices, the WebGL payload is completely halted to guarantee instant First Contentful Paint (FCP) on weak processors.
* **WCAG Accessibility:** Strict adherence to Web Content Accessibility Guidelines. All text passes the 4.5:1 `AA` contrast ratio, and all interactive SVG icons utilize semantic `aria-label` screen-reader fallbacks.
* **Search Engine Optimization (SEO):** Injects dynamic `JSON-LD` (Schema.org) structured data into the `<head>`, explicitly defining the `Person` entity for rich Google Search indexing.
* **Network Graph Optimization:** Built with heavily cacheable direct vendor CDNs (AWS, Google, Nvidia) and strategic TCP `<link rel="preconnect">` tags to minimize connection latency.

---

## 📂 Project Structure

```text
├── public/                 # Static assets and favicon
├── src/
│   ├── components/         # Reusable UI components (Hero, Skills, Projects, Footer)
│   ├── components/ui/      # Base UI components (shadcn/ui primitives)
│   ├── pages/              # Main view assemblies (Index.tsx)
│   ├── index.css           # Global typography and Tailwind color variables
│   └── main.tsx            # React hydration and application entry
├── index.html              # HTML shell & SEO meta configuration
├── tailwind.config.ts      # Tailwind design system configuration
└── vite.config.ts          # Build optimization & chunking rules
```

---

## 🚀 Getting Started

Want to run this project locally to explore the architecture or WebGL setup? 

### 1. Clone the Repository
```bash
git clone https://github.com/neevlila/Neev-Lila-portfolio.git
cd Neev-Lila-portfolio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Spin up the Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to see the live application.

---

## 🤝 Let's Connect!

I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.

* **Email:** [neevlila@gmail.com](mailto:neevlila@gmail.com)
* **LinkedIn:** [linkedin.com/in/neevlila](https://linkedin.com/in/neevlila/)
* **GitHub:** [github.com/neevlila](https://github.com/neevlila)

<br />

<div align="center">
  <sub>Built with ❤️ by Neev Lila. Deployed on Vercel.</sub>
</div>