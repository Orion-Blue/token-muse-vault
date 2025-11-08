# Figma Import Guide - V14 Design System

Complete guide for importing and using V14 Design System tokens in Figma Free version (without Dev Mode).

---

## 🎯 Overview

This guide provides **3 different methods** to transfer design tokens from code to Figma:
1. **Tokens Studio Plugin** (Recommended - Most Automated)
2. **Manual Variables Creation** (Most Control)
3. **Copy from Live Implementation** (Most Accurate)

---

## Method 1: Tokens Studio Plugin (Recommended)

### Prerequisites
- Figma account (free version works)
- Access to install plugins

### Step-by-Step Installation

1. **Install Tokens Studio Plugin**
   - Open Figma
   - Go to: Menu → Plugins → Browse plugins
   - Search for "Tokens Studio for Figma"
   - Click "Install"

2. **Prepare Token File**
   - Locate `design-tokens/figma-tokens.json` in this repository
   - Download or copy the file content

3. **Import Tokens**
   - In Figma: Right-click → Plugins → Tokens Studio
   - Click "Import" in the plugin panel
   - Select or paste `figma-tokens.json` content
   - Click "Save"

4. **Apply Tokens**
   - Tokens will appear in the plugin's token list
   - They can be applied to:
     - Fill colors
     - Text styles
     - Spacing values
     - Border radius
     - Effects (shadows)

### Token Categories in Plugin

After import, you'll see these token sets:

- **colors** → Use for fills, strokes, text colors
- **spacing** → Use for padding, gaps, margins
- **typography** → Use for text sizes, line heights, weights
- **borderRadius** → Use for corner radius
- **effects** → Use for drop shadows

### Usage in Figma

```
Example: Applying brand yellow to a button
1. Select button frame
2. Open Tokens Studio plugin
3. Navigate to: colors → brand → primary
4. Click to apply to fill
```

---

## Method 2: Manual Variables Creation

### Creating Color Variables

1. **Open Variables Panel**
   - In Figma: Right sidebar → Variables icon
   - Or: Shortcut `⌥ ⌘ K` (Mac) / `Alt + Ctrl + K` (Windows)

2. **Create Color Collection**
   - Click "+ Create collection"
   - Name it "V14 Colors"

3. **Add Brand Colors**
   ```
   Create these variables in the collection:

   Brand/Primary
   - Value: #FFCC00
   - Description: Primary brand color - Golden yellow

   Brand/Primary Light
   - Value: #FFD633
   - Description: Lighter variant

   Brand/Primary Dark
   - Value: #CCA300
   - Description: Darker variant

   Brand/Dark
   - Value: #141414
   - Description: Text on yellow surfaces
   ```

4. **Add Accent Colors**
   ```
   Accent/Blue → #4A90E2
   Accent/Green → #34A853
   Accent/Red → #EA4335
   Accent/Purple → #A855F7
   Accent/Orange → #FF6B35
   ```

5. **Add Neutral Colors**
   ```
   Neutral/Background → #FAFAFA
   Neutral/Foreground → #1A1A1A
   Neutral/Card → #FFFFFF
   Neutral/Border → #E3E3E3
   Neutral/Muted → #EDEDED
   Neutral/Muted Foreground → #737373
   ```

### Creating Number Variables (Spacing)

1. **Create Spacing Collection**
   - New collection: "V14 Spacing"
   - Variable type: Number

2. **Add Spacing Values**
   ```
   Atoms → 16
   Molecules → 20
   Organisms → 24
   Large Cards → 28
   
   Gap/Tight → 8
   Gap/Normal → 12
   Gap/Comfortable → 16
   Gap/Loose → 24
   ```

### Creating Text Styles

1. **Open Text Styles Panel**
   - Select any text layer
   - In right panel: Click text style dropdown
   - Click "+" to create new style

2. **Create Typography Styles**
   ```
   Style: Display
   - Font Size: 40px
   - Line Height: 50px (1.25)
   - Font Weight: Bold (700)
   - Letter Spacing: -0.5px

   Style: Heading 1
   - Font Size: 32px
   - Line Height: 40px (1.25)
   - Font Weight: Bold (700)
   - Letter Spacing: -0.3px

   Style: Heading 2
   - Font Size: 24px
   - Line Height: 33px (1.375)
   - Font Weight: Bold (700)

   Style: Heading 3
   - Font Size: 18px
   - Line Height: 27px (1.5)
   - Font Weight: Bold (700)

   Style: Body Large
   - Font Size: 15px
   - Line Height: 24px (1.625)
   - Font Weight: Regular (400)

   Style: Body
   - Font Size: 14px
   - Line Height: 23px (1.625)
   - Font Weight: Regular (400)

   Style: Body Small
   - Font Size: 12px
   - Line Height: 20px (1.625)
   - Font Weight: Regular (400)

   Style: Caption
   - Font Size: 11px
   - Line Height: 14px (1.25)
   - Font Weight: Semibold (600)
   - Letter Spacing: 0.5px
   - Text Case: Uppercase

   Style: Micro
   - Font Size: 10px
   - Line Height: 13px (1.25)
   - Font Weight: Semibold (600)
   - Letter Spacing: 0.5px
   - Text Case: Uppercase
   ```

### Creating Effect Styles (Shadows)

1. **Create Shadow Effects**
   - Select any frame
   - In effects panel: Click "+"
   - Choose "Drop shadow"
   - Click style icon → "Create style"

2. **Shadow Configurations**
   ```
   Shadow SM
   - X: 0, Y: 1
   - Blur: 2, Spread: 0
   - Color: #000000 at 5% opacity

   Shadow MD
   - X: 0, Y: 4
   - Blur: 6, Spread: -1
   - Color: #000000 at 10% opacity

   Shadow Card
   - X: 0, Y: 10
   - Blur: 15, Spread: -3
   - Color: #000000 at 10% opacity

   Shadow LG
   - X: 0, Y: 20
   - Blur: 25, Spread: -5
   - Color: #000000 at 10% opacity
   ```

---

## Method 3: Copy from Live Implementation

### Prerequisites
- Browser with DevTools
- Running instance of the app (`npm run dev`)

### Step-by-Step Process

1. **Run the Application**
   ```bash
   npm install
   npm run dev
   ```

2. **Open Browser DevTools**
   - Navigate to `http://localhost:8080`
   - Press F12 or Right-click → Inspect

3. **Inspect Design Tokens**
   - In DevTools: Elements/Inspector tab
   - Look at root element styles
   - Find CSS custom properties (variables starting with `--`)

4. **Extract Color Values**
   - In Console, run:
   ```javascript
   const styles = getComputedStyle(document.documentElement);
   console.log('Primary:', styles.getPropertyValue('--brand-yellow'));
   console.log('Background:', styles.getPropertyValue('--background'));
   ```

5. **Copy to Figma**
   - Use extracted HSL values
   - Convert to HEX if needed (many online tools available)
   - Create variables/styles in Figma manually

### Pro Tips for This Method
- **Take screenshots** of components for reference
- **Measure spacing** using browser DevTools ruler
- **Copy computed styles** for accuracy
- **Inspect hover states** and interactions

---

## 📊 Complete Token Reference

### Quick Reference Table

| Token Type | Code Location | Figma Destination | Format |
|------------|---------------|-------------------|---------|
| Colors | `src/index.css` → `:root` | Variables → Color | HSL/HEX |
| Spacing | `tailwind.config.ts` → `spacing` | Variables → Number | px |
| Typography | `src/index.css` → `.text-*` | Text Styles | px, unitless |
| Shadows | `tailwind.config.ts` → `boxShadow` | Effect Styles | px, % opacity |
| Radius | `tailwind.config.ts` → `borderRadius` | Corner Radius | px |

### Color Conversion Chart

For manual entry, here are HEX equivalents:

| Token | HSL | HEX |
|-------|-----|-----|
| Brand Yellow | `hsl(48, 100%, 50%)` | `#FFCC00` |
| Brand Dark | `hsl(0, 0%, 8%)` | `#141414` |
| Accent Blue | `hsl(217, 91%, 60%)` | `#4A90E2` |
| Accent Green | `hsl(142, 71%, 45%)` | `#34A853` |
| Accent Red | `hsl(0, 84%, 60%)` | `#EA4335` |
| Accent Purple | `hsl(258, 90%, 66%)` | `#A855F7` |
| Accent Orange | `hsl(25, 95%, 53%)` | `#FF6B35` |
| Background | `hsl(0, 0%, 98%)` | `#FAFAFA` |
| Foreground | `hsl(0, 0%, 10%)` | `#1A1A1A` |
| Border | `hsl(0, 0%, 89%)` | `#E3E3E3` |

---

## 🎨 Building Components in Figma

### Recommended Workflow

1. **Set up your token foundation** (one of the methods above)
2. **Create base components** using token variables
3. **Build atomic components** first (buttons, inputs, cards)
4. **Compose molecules** from atoms
5. **Assemble organisms** from molecules
6. **Design screens** with organisms

### Component Checklist

When creating components, apply:
- ✅ Color variables for fills
- ✅ Spacing variables for padding/gaps
- ✅ Text styles for all text layers
- ✅ Shadow effects for elevation
- ✅ Radius values for corners

---

## 🔄 Keeping Figma Synchronized

### When Code Tokens Update

**Option A: Using Tokens Studio**
1. Export updated `figma-tokens.json`
2. Re-import into Tokens Studio plugin
3. Plugin automatically updates all instances

**Option B: Manual Updates**
1. Update variable values in Figma
2. All components using variables update automatically

### Recommended Sync Frequency
- **Major updates**: When design system version changes
- **Minor updates**: When new tokens are added
- **Patches**: Only if critical fixes needed

---

## ❓ Troubleshooting

### Tokens Studio Plugin Issues

**Problem**: Plugin doesn't show imported tokens
- **Solution**: Refresh Figma, reimport JSON, check JSON validity

**Problem**: Tokens applied but colors don't match
- **Solution**: Verify color format (plugin expects HEX), check opacity values

### Manual Variable Issues

**Problem**: Can't create variables in free version
- **Solution**: Variables feature requires Figma account (free is fine, but needs to be logged in)

**Problem**: Text styles not showing proper hierarchy
- **Solution**: Verify line-height values, check letter-spacing is negative for large text

### Copy-from-Live Issues

**Problem**: HSL values don't convert correctly
- **Solution**: Use online HSL→HEX converters, or use DevTools computed values

---

## 📚 Additional Resources

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Design Token W3C Spec](https://design-tokens.github.io/community-group/format/)
- [V14 Design System Full Documentation](./DESIGN_SYSTEM.md)

---

## ✅ Next Steps

After importing tokens:
1. ✅ Create component library in Figma
2. ✅ Build mobile app screens (428px width)
3. ✅ Apply proper spacing using token values
4. ✅ Use text styles consistently
5. ✅ Test with live implementation for accuracy

---

**Version:** 14.0.0  
**Last Updated:** January 2025  
**Figma Compatibility:** Free & Paid versions
