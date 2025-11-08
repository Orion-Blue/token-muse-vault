# V14 Design Tokens

Design tokens for the V14 Payment App Design System, available in multiple formats for easy integration with various tools and platforms.

## 📦 Available Formats

### 1. Standard JSON (`tokens.json`)
Complete token library in standard JSON format with type annotations and descriptions.

**Use for:**
- Documentation reference
- Custom tooling integration
- Token visualization tools

### 2. Figma Tokens (`figma-tokens.json`)
Formatted for the Figma Tokens plugin (free version compatible).

**Use for:**
- Importing into Figma using Tokens Studio plugin
- Syncing design and code tokens
- Creating Figma variables (manual conversion needed)

### 3. CSS Variables (`implemented in src/index.css`)
Native CSS custom properties ready to use.

**Use for:**
- Direct browser implementation
- Runtime theme switching
- CSS-in-JS frameworks

## 🎨 Token Categories

### Colors
- **Brand**: Primary yellow (`#FFCC00`) and dark (`#141414`)
- **Accents**: Blue, Green, Red, Purple, Orange
- **Neutrals**: Background, foreground, borders, muted states
- **Semantic**: Success, error/destructive states

### Typography
- **Scale**: 1.333 ratio (Perfect Fourth) from 10px to 40px
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Line Heights**: Tight (1.25), Normal (1.5), Comfortable (1.625)

### Spacing
- **Component Padding**: 16px (atoms), 20px (molecules), 24px (organisms)
- **Gaps**: 8px to 32px
- **Margins**: Section spacing and safe areas

### Shadows
- **Elevation Levels**: sm, md, card, lg
- **Usage**: Consistent depth perception across UI

### Border Radius
- **Sizes**: 16px (default), 20px (lg), 24px (xl), 9999px (full)

## 🔄 Importing to Figma (Free Version)

Since Figma's free version doesn't have dev mode, here's the recommended workflow:

### Method 1: Tokens Studio Plugin (Recommended)
1. Install **Tokens Studio for Figma** (free plugin)
2. In Figma: Plugins → Tokens Studio → Import
3. Select `figma-tokens.json`
4. Tokens will be available as local variables

### Method 2: Manual Variables Creation
1. Open `tokens.json` for reference
2. In Figma: Create → Variables
3. Create variable collections:
   - **Colors**: All color tokens
   - **Spacing**: All spacing values
   - **Typography**: Font sizes, line heights, weights
   - **Effects**: Shadow styles

### Method 3: Copy Styles from Code
1. Use the implemented design in this repo
2. Inspect elements in browser dev tools
3. Copy computed styles to Figma
4. Create matching styles/components

## 📝 Token Naming Convention

```
{category}.{subcategory}.{variant}

Examples:
- color.brand.primary
- typography.fontSize.h1
- spacing.atoms
- shadow.card
```

## 🔗 Integration Examples

### React/TypeScript
```tsx
import tokens from './design-tokens/tokens.json';

const primaryColor = tokens.color.brand.primary.value;
```

### Tailwind CSS
Already integrated via `tailwind.config.ts`:
```tsx
<div className="bg-brand-yellow text-brand-dark p-molecules">
  Styled with design tokens
</div>
```

### CSS Custom Properties
```css
.my-component {
  background: hsl(var(--brand-yellow));
  padding: var(--spacing-molecules);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-card);
}
```

## 🎯 Best Practices

1. **Always use tokens** instead of hard-coded values
2. **Reference semantic tokens** (e.g., `success`, `destructive`) for status colors
3. **Use spacing tokens** for consistent component padding
4. **Apply shadow tokens** for elevation hierarchy
5. **Follow typography scale** for visual hierarchy

## 📊 Token Coverage

- ✅ **100% Color coverage** - All UI colors defined
- ✅ **100% Typography coverage** - Complete type scale
- ✅ **100% Spacing coverage** - All component padding/margins
- ✅ **100% Shadow coverage** - All elevation levels
- ✅ **100% Radius coverage** - All corner treatments

## 🔄 Syncing with Figma

To keep Figma in sync with code tokens:

1. **Make changes** in `tokens.json`
2. **Re-export** `figma-tokens.json` (if using Tokens Studio)
3. **Import** into Figma via plugin
4. **Update** component instances in Figma

OR

1. **Update code** tokens
2. **Deploy** app
3. **Inspect** in browser
4. **Manually update** Figma styles

## 📚 Additional Resources

- [Design System Documentation](../docs/DESIGN_SYSTEM.md)
- [Figma Import Guide](../docs/FIGMA_IMPORT_GUIDE.md)
- [Component Library](../docs/COMPONENT_LIBRARY.md)

## ⚙️ Version

**Current Version:** 14.0.0  
**Last Updated:** January 2025  
**Status:** Production Ready
