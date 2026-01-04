# Cursor Migration Guide

This document provides an overview of the codebase and instructions for disconnecting from Lovable.dev and running locally.

---

## 📋 Codebase Overview

This is a **personal portfolio website** for Alex Ibragimov, built as a single-page application with a dark, minimal aesthetic.

### Tech Stack

| Category | Technology |
|----------|------------|
| **Build Tool** | Vite 5.4 |
| **Framework** | React 18.3 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 3.4 |
| **UI Components** | shadcn/ui (40+ components pre-installed) |
| **Routing** | React Router DOM 6.30 |
| **Data Fetching** | TanStack React Query 5.83 |
| **Forms** | React Hook Form + Zod |
| **Charts** | Recharts |
| **Icons** | Lucide React |

### Project Structure

```
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Root component with providers & routing
│   ├── index.css             # Global styles & CSS variables
│   ├── App.css               # (Unused Vite default styles - can delete)
│   │
│   ├── pages/
│   │   ├── Index.tsx         # Main portfolio page
│   │   └── NotFound.tsx      # 404 page
│   │
│   ├── components/
│   │   ├── Header.tsx        # Fixed navigation header
│   │   ├── Hero.tsx          # Hero section with name/tagline
│   │   ├── Projects.tsx      # Projects grid section
│   │   ├── ProjectCard.tsx   # Individual project card
│   │   ├── StageIndicator.tsx# Project stage badge
│   │   ├── WhatIDo.tsx       # Skills/services section
│   │   ├── YCTracker.tsx     # YC application tracker
│   │   ├── LetsConnect.tsx   # Contact/social links section
│   │   ├── Footer.tsx        # Page footer
│   │   ├── AnimatedBackground.tsx
│   │   ├── NavMenu.tsx       # Navigation menu
│   │   ├── NavLink.tsx       # Navigation link component
│   │   └── ui/               # 40+ shadcn/ui components
│   │
│   ├── hooks/
│   │   ├── use-mobile.tsx    # Mobile detection hook
│   │   └── use-toast.ts      # Toast notification hook
│   │
│   └── lib/
│       └── utils.ts          # Utility functions (cn helper)
│
├── public/                   # Static assets
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tailwind.config.ts       # Tailwind configuration
├── components.json          # shadcn/ui configuration
├── tsconfig.json            # TypeScript configuration
├── eslint.config.js         # ESLint configuration
└── postcss.config.js        # PostCSS configuration
```

### Key Features

- **Dark theme** with CSS custom properties (HSL color system)
- **Animated background** effects
- **Project showcase** with stage indicators (Exploration → Building → Live)
- **Social links** section
- **Responsive design** with mobile-first approach

---

## 🔌 Disconnecting from Lovable

### Lovable Dependencies Found

**Good news!** This codebase is very clean. There are **no Lovable-specific runtime dependencies** in the code. The only Lovable-related content is:

1. ✅ `README.md` - Contains Lovable documentation (already replaced)

### Files Safe to Delete (Optional Cleanup)

| File | Reason |
|------|--------|
| `src/App.css` | Unused Vite default styles (not imported anywhere meaningful) |
| `bun.lockb` | If you prefer npm over bun |

### No Changes Required In

- `package.json` - No Lovable packages
- `vite.config.ts` - Standard Vite config
- All source code files - No Lovable imports or APIs

---

## 🚀 Local Development Setup

### Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** 9+ (comes with Node.js) or **bun**

### Step-by-Step Instructions

#### 1. Install Dependencies

```bash
npm install
```

Or if you prefer bun:

```bash
bun install
```

#### 2. Start Development Server

```bash
npm run dev
```

The app will be available at **http://localhost:8080**

#### 3. Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

#### 4. Preview Production Build

```bash
npm run preview
```

---

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 8080) |
| `npm run build` | Build for production |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🎨 Customization Guide

### Updating Personal Info

1. **Name/Tagline**: Edit `src/components/Hero.tsx`
2. **Projects**: Edit the `PROJECTS` array in `src/components/Projects.tsx`
3. **Social Links**: Edit the `SOCIAL_LINKS` array in `src/components/LetsConnect.tsx`
4. **Page Title**: Edit `index.html`

### Theming

All colors are defined as CSS custom properties in `src/index.css`:

```css
:root {
  --background: 0 0% 7%;     /* Near black */
  --foreground: 0 0% 95%;    /* Near white */
  --primary: 0 0% 95%;
  --muted-foreground: 0 0% 55%;
  /* ... more variables */
}
```

### Adding shadcn/ui Components

The project has `components.json` configured. To add new components:

```bash
npx shadcn@latest add [component-name]
```

---

## 🔧 Configuration Notes

### Vite Config

The dev server is configured to:
- Run on port **8080**
- Accept connections from any host (`::`)

To change the port, edit `vite.config.ts`:

```typescript
server: {
  host: "::",
  port: 3000,  // Change this
},
```

### TypeScript

The project uses relaxed TypeScript settings for rapid development:
- `noImplicitAny: false`
- `strictNullChecks: false`

Consider enabling stricter checks for production codebases.

---

## 🚢 Deployment Options

Since this is a static site, you can deploy to:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag & drop `dist/` folder or connect Git
- **GitHub Pages**: Use `gh-pages` package
- **Cloudflare Pages**: Connect Git repository
- **Any static host**: Upload contents of `dist/`

### Build Output

After running `npm run build`, the `dist/` folder contains:
- `index.html` - Entry point
- `assets/` - Bundled JS, CSS, and other assets

---

## ✅ Migration Checklist

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to verify local development works
- [ ] Update personal information in components
- [ ] (Optional) Delete `src/App.css` if not needed
- [ ] (Optional) Delete `bun.lockb` if using npm
- [ ] Run `npm run build` to verify production build works
- [ ] Deploy to your preferred hosting platform

---

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [React Router Documentation](https://reactrouter.com/)

---

*Generated for Cursor IDE migration from Lovable.dev*

