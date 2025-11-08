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
├── design-tokens/           # Design token files
│   ├── tokens.json         # Complete token library
│   ├── figma-tokens.json   # Figma-compatible format
│   └── README.md           # Token documentation
│
├── docs/                    # Documentation
│   ├── DESIGN_SYSTEM.md    # Complete design system docs
│   ├── FIGMA_IMPORT_GUIDE.md  # Figma integration guide
│   └── [other docs]
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

1. **`design-tokens/tokens.json`**
   - Complete token library
   - Includes descriptions and types
   - Use for documentation reference

2. **`design-tokens/figma-tokens.json`**
   - Formatted for Figma Tokens Studio plugin
   - Compatible with Figma free version
   - Ready for import

3. **`src/index.css`**
   - CSS custom properties
   - Native browser implementation
   - Runtime theme switching ready

### Token Categories

- ✅ Colors (brand, accent, neutral, semantic)
- ✅ Typography (sizes, weights, line heights)
- ✅ Spacing (component-based hierarchy)
- ✅ Shadows (elevation levels)
- ✅ Border Radius (corner treatments)
- ✅ Transitions (interaction timing)

---

## 🎨 Figma Integration

### Quick Import (Tokens Studio Plugin)

1. Install [Tokens Studio for Figma](https://www.figma.com/community/plugin/843461159747178978)
2. Load `design-tokens/figma-tokens.json`
3. Tokens automatically available in Figma

### Manual Setup

See complete guide: [docs/FIGMA_IMPORT_GUIDE.md](./docs/FIGMA_IMPORT_GUIDE.md)

**Three Methods Available:**
- Tokens Studio Plugin (automated)
- Manual Variables (full control)
- Copy from Live Implementation (most accurate)

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [DESIGN_SYSTEM.md](./docs/DESIGN_SYSTEM.md) | Complete design system documentation |
| [FIGMA_IMPORT_GUIDE.md](./docs/FIGMA_IMPORT_GUIDE.md) | Import tokens to Figma (free version compatible) |
| [Design Tokens README](./design-tokens/README.md) | Token usage and integration guide |

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
- **Design Tokens**: [design-tokens/](./design-tokens/)
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
