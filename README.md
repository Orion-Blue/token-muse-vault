# V14 Design System - Payment App

A production-ready design system and payment application built with React, TypeScript, and Tailwind CSS. Features a comprehensive token-based design system optimized for modern web applications.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4)](https://tailwindcss.com/)

---

## ✨ Features

### Design System
- **🎨 Complete Token Library**: 100% token coverage for colors, typography, spacing, shadows
- **📐 Systematic Spacing**: Component-based hierarchy (16px/20px/24px)
- **📝 Typography Scale**: 1.333 ratio (Perfect Fourth) from 10px to 40px
- **🎯 Accessibility**: WCAG AA compliant with proper focus states and ARIA labels
- **🔄 Figma-Ready**: Export tokens compatible with Figma (free version)

### Technical
- **⚛️ React 18.3**: Latest React with TypeScript
- **🎨 Tailwind CSS**: Utility-first with custom design tokens
- **📦 Component Library**: Shadcn/ui components customized for V14 system
- **🚀 Vite**: Lightning-fast build tool and dev server
- **📱 Responsive**: Mobile-first approach with elegant desktop scaling

---

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd v14-design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
v14-design-system/
├── tokens/                  # 🎨 Design Tokens (Tokens Studio format)
│   ├── $tokens.json        # Main token file for GitHub sync
│   └── README.md           # Setup guide for Figma integration
│
├── docs/                    # 📚 Documentation
│   ├── DESIGN_SYSTEM.md    # Complete design system docs
│   ├── FIGMA_TOKENS_COMPLETE_GUIDE.md  # Full Figma setup guide
│   ├── GITHUB_SETUP_GUIDE.md           # Git & GitHub walkthrough
│   └── FIGMA_TOKENS_SETUP.md           # Quick Figma setup
│
├── src/
│   ├── components/         # React components
│   │   └── ui/            # Shadcn/ui components
│   ├── pages/             # Page components
│   ├── index.css          # Global styles + design tokens
│   └── App.tsx            # Main app component
│
├── tailwind.config.ts      # Tailwind + token configuration
└── package.json
```

---

## 🎨 Design System Overview

### Color Palette

**Brand Colors**
```css
Primary Yellow:  hsl(48, 100%, 50%)  /* #FFCC00 */
Brand Dark:      hsl(0, 0%, 8%)      /* #141414 */
```

**Accent Colors**
- Blue: `hsl(217, 91%, 60%)`
- Green: `hsl(142, 71%, 45%)`
- Red: `hsl(0, 84%, 60%)`
- Purple: `hsl(258, 90%, 66%)`
- Orange: `hsl(25, 95%, 53%)`

### Typography Scale

| Style | Size | Weight | Use Case |
|-------|------|--------|----------|
| Display | 40px | 700 | Hero headlines |
| H1 | 32px | 700 | Page titles |
| H2 | 24px | 700 | Section headers |
| H3 | 18px | 700 | Card titles |
| H4 | 16px | 600 | Subtitles |
| Body Large | 15px | 400 | Emphasized text |
| Body | 14px | 400 | Default text |
| Body Small | 12px | 400 | Secondary text |
| Caption | 11px | 600 | Labels |
| Micro | 10px | 600 | Fine print |

### Spacing System

```javascript
atoms: 16px          // Basic component padding
molecules: 20px      // Composite components
organisms: 24px      // Complex components
large-cards: 28px    // Hero sections
```

---

## 🎯 Using the Design System

### In React/TypeScript

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

function MyComponent() {
  return (
    <Card className="p-molecules bg-card/80 backdrop-glass">
      <h1 className="text-h1 text-foreground">
        Welcome
      </h1>
      <Button variant="default" className="interaction-scale">
        Get Started
      </Button>
    </Card>
  );
}
```

### In CSS

```css
.my-component {
  background: hsl(var(--brand-yellow));
  padding: var(--spacing-molecules);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}
```

### In Tailwind

```html
<div class="bg-brand-yellow text-brand-dark p-molecules rounded-lg shadow-card">
  <h2 class="text-h2">Card Title</h2>
  <p class="text-body text-muted-foreground">Card content</p>
</div>
```

---

## 📦 Design Tokens

### Available Token Files

**Primary Token File** (for Figma Tokens Studio GitHub Sync)
- **`tokens/$tokens.json`** - Complete token library in Tokens Studio format
  - Optimized for GitHub synchronization
  - Direct import into Figma Tokens Studio plugin
  - Includes primitives, semantic tokens, and component tokens

**Implementation Files**
- **`src/index.css`** - CSS custom properties
  - Native browser implementation
  - Runtime theme switching ready

### Token Categories

- ✅ **Colors** - Full primitive scales (50-950) + semantic tokens (light/dark)
- ✅ **Typography** - Complete font scales, weights, line heights
- ✅ **Spacing** - 0-24 scale + semantic spacing (atoms, molecules, organisms)
- ✅ **Shadows** - 4 elevation levels (sm, md, card, lg)
- ✅ **Border Radius** - sm to full (8px - 9999px)
- ✅ **Effects** - Opacity, blur, border widths
- ✅ **Sizing** - Icons, avatars, touch targets
- ✅ **Components** - Button, Card, Input, Badge variants

---

## 🎨 Figma Integration

### 🚀 GitHub Sync (Recommended)

**Sync your Figma designs directly with this repository:**

1. Install [Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178978)
2. In Tokens Studio → Settings → Sync Providers → GitHub
3. Connect to repository: `your-username/your-repo-name`
4. File path: `$tokens.json`
5. Pull tokens → All designs sync automatically ✨

**Benefits:**
- ✅ Two-way sync between Figma and code
- ✅ Always up-to-date design tokens
- ✅ No manual imports needed
- ✅ Team collaboration made easy

### 📥 Manual Import

1. Copy content from `tokens/$tokens.json`
2. In Tokens Studio → Settings → Import → JSON string
3. Paste and import

**Complete guides:**
- [Complete Figma Tokens Guide](./docs/FIGMA_TOKENS_COMPLETE_GUIDE.md) - Full setup with examples
- [Quick Setup Guide](./docs/FIGMA_TOKENS_SETUP.md) - Fast track guide

---

## 📚 Documentation

### Getting Started Guides
- 📖 [**GitHub Setup Guide**](./docs/GITHUB_SETUP_GUIDE.md) - Complete walkthrough from Git installation to pushing code
- 🎨 [**Figma Tokens Complete Guide**](./docs/FIGMA_TOKENS_COMPLETE_GUIDE.md) - Full Figma Tokens Studio setup with GitHub sync
- ⚡ [**Quick Figma Setup**](./docs/FIGMA_TOKENS_SETUP.md) - Fast track Tokens Studio integration

### Design System
- [Design System Overview](./docs/DESIGN_SYSTEM.md) - Complete design system documentation
- [Design Token Reference](./tokens/README.md) - Token usage, GitHub sync, and troubleshooting
- [Figma-to-Code Workflow](./docs/FIGMA_TO_CODE_WORKFLOW.md) - Sync strategies

---

## 🛠️ Tech Stack

### Core
- **React** 18.3 - UI library
- **TypeScript** 5.5 - Type safety
- **Vite** 5.4 - Build tool
- **Tailwind CSS** 3.4 - Styling

### UI Components
- **Shadcn/ui** - Accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Utilities
- **clsx** + **tailwind-merge** - Class name management
- **React Router** - Navigation
- **React Query** - Data fetching

---

## 🎯 Key Principles

1. **Design Token First**: Everything derives from tokens
2. **Mobile First**: Optimized for 428px, scales elegantly
3. **Accessibility**: WCAG AA compliance, keyboard navigation
4. **Performance**: Optimized builds, lazy loading, code splitting
5. **Type Safety**: Full TypeScript coverage

---

## 🤝 Contributing

1. Follow the design token system
2. Maintain component naming conventions
3. Ensure accessibility standards
4. Test across breakpoints
5. Update documentation

---

## 📝 License

MIT License - see [LICENSE](./LICENSE) file for details

---

## 🔗 Links

- **Documentation**: [docs/](./docs/)
- **Design Tokens**: [tokens/](./tokens/) ← Use this for Figma GitHub sync
- **Live Demo**: [Your deployment URL]
- **Figma File**: [Your Figma link]

---

## ⚙️ Version

**Current Version:** 14.0.0  
**Last Updated:** January 2025  
**Status:** Production Ready

---

## 🙏 Acknowledgments

- Design System: V14
- Component Library: Shadcn/ui
- Icons: Lucide
- Typography Scale: Perfect Fourth (1.333 ratio)

---

**Built with ❤️ using modern web technologies**
