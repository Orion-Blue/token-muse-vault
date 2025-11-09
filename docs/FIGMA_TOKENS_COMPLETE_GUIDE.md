# Complete Figma Tokens Studio Setup Guide

## 📋 Overview

This guide will help you import the **complete V14 Design System** into Figma using the Tokens Studio plugin. The design system now includes:

- ✅ **Primitive Color Scales** (50-950 shades for all colors)
- ✅ **Semantic Tokens** (light & dark modes)
- ✅ **Component Tokens** (button, card, input, badge)
- ✅ **Typography System** (complete font scales, weights, line heights)
- ✅ **Spacing Scale** (0-24 + semantic spacing)
- ✅ **Effects** (shadows, borders, blur, opacity)
- ✅ **Sizing** (icons, avatars, touch targets)

---

## 🎯 Token Structure

The tokens are organized in **sets** for optimal Figma workflow:

```
primitives/
├── colors          → Base color palette (neutral, brand, accents)
├── typography      → Font families, sizes, weights, line heights
├── spacing         → Spacing scale (0-24 + semantic)
├── effects         → Shadows, borders, blur, opacity
└── sizing          → Icons, avatars, touch targets

semantic/
├── light           → Light mode semantic tokens
└── dark            → Dark mode semantic tokens

components/
├── button          → Button-specific tokens
├── card            → Card-specific tokens
├── input           → Input field tokens
└── badge           → Badge component tokens
```

---

## 📥 Step-by-Step Import Process

### Step 1: Install Tokens Studio Plugin

1. Open Figma
2. Press `Shift + I` to open Resources panel
3. Search for **"Tokens Studio for Figma"**
4. Click **Install** (it's free)

### Step 2: Prepare the Token File

1. Open `design-tokens/figma-tokens.json` in your code editor
2. **Copy the ENTIRE file contents** (Ctrl/Cmd + A, then Ctrl/Cmd + C)

### Step 3: Import into Tokens Studio

1. In Figma, run the **Tokens Studio** plugin (Plugins → Tokens Studio for Figma)
2. In the plugin panel, click the **Settings icon** (⚙️) in the bottom left
3. Click **"Import"** tab
4. Select **"JSON string"** as the import method
5. **Paste** the copied JSON content
6. Click **"Import"** button

### Step 4: Verify Token Sets

After import, you should see these token sets in the plugin:

- ✅ primitives/colors
- ✅ primitives/typography
- ✅ primitives/spacing
- ✅ primitives/effects
- ✅ primitives/sizing
- ✅ semantic/light
- ✅ semantic/dark
- ✅ components/button
- ✅ components/card
- ✅ components/input
- ✅ components/badge

**Enable the sets you need** by toggling them on (they should all be on by default).

---

## 🎨 Using Tokens in Figma

### Applying Color Tokens

1. Select any element in Figma
2. Open Tokens Studio plugin
3. Click on the **"Inspect"** tab
4. Find the color property you want to apply (Fill, Stroke, etc.)
5. Click the **token selector** and choose a token:
   - **Primitives**: `primitives/colors.brand.500` (direct colors)
   - **Semantic**: `semantic/light.primary` (theme-aware)
   - **Component**: `components/button.primary.bg`

### Applying Typography

1. Select text element
2. In Tokens Studio plugin:
   - **Font Size**: Choose from `primitives/typography.fontSize.*`
   - **Font Weight**: Choose from `primitives/typography.fontWeight.*`
   - **Line Height**: Choose from `primitives/typography.lineHeight.*`
   - **Letter Spacing**: Choose from `primitives/typography.letterSpacing.*`

### Applying Spacing

1. Select a frame or component
2. Apply spacing tokens:
   - **Padding**: Use `primitives/spacing.4` (16px), `primitives/spacing.6` (24px), etc.
   - **Gap**: Use `primitives/spacing.gap-normal`, `gap-comfortable`, etc.
   - **Semantic**: Use `primitives/spacing.atoms`, `molecules`, `organisms`

### Applying Shadows

1. Select element
2. In Effects panel, add Drop Shadow
3. In Tokens Studio, apply `primitives/effects.shadow.card` or other shadow tokens

### Applying Border Radius

1. Select element with corner radius
2. Apply `primitives/effects.borderRadius.md`, `lg`, `xl`, etc.

---

## 🌓 Dark Mode Setup

The system includes both light and dark semantic tokens:

### Method 1: Token Sets (Recommended)

1. Create two **modes** in Tokens Studio:
   - Mode: **Light** → Enable `semantic/light`
   - Mode: **Dark** → Enable `semantic/dark`
2. Tokens Studio will automatically swap semantic tokens based on mode

### Method 2: Manual Variables

1. In Figma, go to **Local Variables**
2. Create a **Color collection** named "Semantic Colors"
3. Add two modes: **Light** and **Dark**
4. For each semantic token (background, foreground, primary, etc.):
   - In Light mode: Reference `primitives/colors.neutral.50`, etc.
   - In Dark mode: Reference `primitives/colors.neutral.950`, etc.

---

## 🧩 Creating Components with Tokens

### Example: Button Component

1. Create a button frame
2. Apply component tokens:
   - **Fill**: `components/button.primary.bg`
   - **Text color**: `components/button.primary.fg`
   - **Padding**: `components/button.padding.md`
   - **Height**: `components/button.height.md`
   - **Border Radius**: `components/button.borderRadius`
3. Create a hover variant:
   - **Fill**: `components/button.primary.hover-bg`

### Example: Card Component

1. Create a card frame
2. Apply component tokens:
   - **Fill**: `components/card.bg`
   - **Stroke**: `components/card.border`
   - **Padding**: `components/card.padding`
   - **Border Radius**: `components/card.borderRadius`
   - **Effects**: `components/card.shadow`

---

## 🔄 Syncing Token Updates

When tokens are updated in code:

1. Copy updated `design-tokens/figma-tokens.json` content
2. In Tokens Studio plugin → Settings → Import → JSON string
3. Paste and import
4. **All elements using tokens will update automatically** 🎉

---

## 📚 Token Reference Tables

### Color Primitives

| Token | Value | Usage |
|-------|-------|-------|
| `primitives/colors.neutral.50` | #FAFAFA | Lightest neutral |
| `primitives/colors.neutral.500` | #737373 | Mid neutral |
| `primitives/colors.neutral.900` | #1A1A1A | Darkest neutral |
| `primitives/colors.brand.500` | #FFCC00 | Primary yellow |
| `primitives/colors.blue.500` | #4A90E2 | Sky blue accent |
| `primitives/colors.green.500` | #34A853 | Success green |
| `primitives/colors.red.500` | #EA4335 | Error red |

### Semantic Tokens (Light Mode)

| Token | References | Usage |
|-------|-----------|-------|
| `semantic/light.background` | neutral.50 | Page background |
| `semantic/light.foreground` | neutral.900 | Text color |
| `semantic/light.primary` | brand.500 | Primary actions |
| `semantic/light.card` | white | Card backgrounds |
| `semantic/light.border` | neutral.300 | Borders |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `primitives/spacing.1` | 4px | Tiny spacing |
| `primitives/spacing.2` | 8px | Small spacing |
| `primitives/spacing.4` | 16px | Base spacing |
| `primitives/spacing.6` | 24px | Medium spacing |
| `primitives/spacing.atoms` | 16px | Button/input padding |
| `primitives/spacing.molecules` | 20px | Card padding |

### Typography Scale

| Token | Value | Usage |
|-------|-------|-------|
| `primitives/typography.fontSize.display` | 40px | Hero headlines |
| `primitives/typography.fontSize.h1` | 32px | Page titles |
| `primitives/typography.fontSize.body` | 14px | Body text |
| `primitives/typography.fontWeight.semibold` | 600 | Headers |

---

## 💡 Best Practices

### 1. **Use Semantic Tokens for Components**
   - ✅ `semantic/light.primary` (adapts to themes)
   - ❌ `primitives/colors.brand.500` (hardcoded)

### 2. **Use Component Tokens for Variants**
   - Create button variants using `components/button.*`
   - Ensures consistency across design

### 3. **Keep Primitives as Base**
   - Never delete primitive tokens
   - They are the foundation for semantic/component tokens

### 4. **Organize with Token Sets**
   - Enable only the sets you need
   - Turn off unused component sets to reduce clutter

### 5. **Document Custom Tokens**
   - If you add new tokens, document them
   - Use descriptions in the JSON file

---

## 🐛 Troubleshooting

### "Token references are broken"
- **Solution**: Make sure all token sets are enabled (toggle them on in Tokens Studio)
- Check that `primitives/*` sets are loaded before `semantic/*` sets

### "Colors look wrong"
- **Solution**: Verify you're using the correct mode (light vs dark)
- Check if semantic tokens are enabled

### "Tokens don't apply"
- **Solution**: Refresh Figma plugin (close and reopen Tokens Studio)
- Try re-importing the JSON file

### "Can't see all tokens"
- **Solution**: Scroll down in token sets list
- Make sure JSON import was successful (check for error messages)

---

## 🎓 Learning Resources

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Design Tokens W3C Spec](https://design-tokens.github.io/community-group/format/)
- [V14 Design System Docs](../README.md)

---

## ✅ Checklist

After completing this guide, you should be able to:

- ✅ Import complete token library into Figma
- ✅ See all primitive, semantic, and component token sets
- ✅ Apply color tokens to elements
- ✅ Apply typography tokens to text
- ✅ Use spacing and sizing tokens
- ✅ Create components using component tokens
- ✅ Switch between light and dark modes
- ✅ Update tokens when code changes

---

**Need help?** Check the [troubleshooting section](#-troubleshooting) or refer to the [Tokens Studio docs](https://docs.tokens.studio/).
