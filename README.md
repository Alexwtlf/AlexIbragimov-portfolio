# Alex Ibragimov — Portfolio

Personal portfolio website showcasing projects, skills, and ways to connect.

![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss&logoColor=white)

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS + shadcn/ui
- **Routing:** React Router
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at **http://localhost:8080**

### Build

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/     # UI components
│   ├── ui/         # shadcn/ui components
│   └── ...         # Custom components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utilities
└── index.css       # Global styles & theme
```

## Customization

- **Personal info:** `src/components/Hero.tsx`
- **Projects:** `src/components/Projects.tsx`
- **Social links:** `src/components/LetsConnect.tsx`
- **Theme colors:** `src/index.css`

## Deployment

Build the project and deploy the `dist/` folder to any static hosting:

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

## License

MIT
