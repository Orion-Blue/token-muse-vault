# Design Tokens

Complete V14 Design System tokens for Figma Tokens Studio.

## 📁 Files in This Directory

- **$tokens.json** - Complete design system (primitives, semantic, components)

## 🚀 Three Ways to Import to Figma

### ⭐ Method 1: Token Studio Web (Recommended)

**Complete guide:** [docs/TOKEN_STUDIO_WEB_GUIDE.md](../docs/TOKEN_STUDIO_WEB_GUIDE.md)

**Quick steps:**
1. Download `$tokens.json` from this folder
2. Upload to [Token Studio Web](https://tokens.studio/)
3. Connect Figma plugin to Token Studio Web
4. Create variables & styles automatically

**Why this method?**
- ✅ Cloud sync - updates automatically
- ✅ Team collaboration
- ✅ Version history
- ✅ No GitHub needed

---

### Method 2: GitHub Sync (For Developers)

1. **Install Tokens Studio Plugin** in Figma
   - Open Figma → Plugins → "Tokens Studio for Figma"

2. **Connect to GitHub**
   - In plugin: Settings (⚙️) → Sync Providers → GitHub
   - Authorize

3. **Connect This Repository**
   - Repository: `your-username/your-repo-name`
   - Branch: `main`
   - File Path: `tokens/$tokens.json`
   - Click "Pull from GitHub"

---

### Method 3: Manual Import

1. Copy content of `$tokens.json`
2. In Tokens Studio → Settings → Import → "JSON string"
3. Paste and import

---

## 📦 What's Included

### Token Structure

```
$tokens.json                    ← Main token file (Tokens Studio format)
│
├── primitives/                 ← Foundation tokens
│   ├── colors                 → Complete color scales (50-950)
│   ├── typography             → Font families, sizes, weights
│   ├── spacing                → Spacing scale (0-24 + semantic)
│   ├── effects                → Shadows, borders, blur, opacity
│   └── sizing                 → Icons, avatars, touch targets
│
├── semantic/                   ← Theme tokens
│   ├── light                  → Light mode semantic colors
│   └── dark                   → Dark mode semantic colors
│
└── components/                 ← Component-specific tokens
    ├── button                 → Button variants & sizes
    ├── card                   → Card styling
    ├── input                  → Input fields
    └── badge                  → Badge components
```

---

## 🎨 Token Categories

### Primitives (Foundation)

**Colors** - Complete scales (50-950) for:
- Neutral (grays)
- Brand (golden yellow)
- Blue, Green, Red, Purple, Orange
- White & Black

**Typography**
- Font Families: System stack
- Font Sizes: 10px - 40px (10 levels)
- Font Weights: Normal (400) - Bold (700)
- Line Heights: Tight to Relaxed
- Letter Spacing: Tighter to Wide

**Spacing**
- Scale: 0, 4, 8, 12, 16, 20, 24, 28, 32, 40, 48, 64, 80, 96px
- Semantic: atoms (16px), molecules (20px), organisms (24px)
- Gaps: tight, normal, comfortable, loose, extra-loose

**Effects**
- Shadows: sm, md, card, lg
- Border Radius: sm (8px) to full (9999px)
- Border Width: thin (1px), standard (2px)
- Opacity: card, navigation, overlay, hover, disabled
- Blur: nav, overlay

**Sizing**
- Touch Targets: 44px minimum, 48px comfortable
- Avatars: sm (36px) to xl (80px)
- Icons: sm (18px) to xl (32px)
- Icon Buttons: sm, md, lg

### Semantic (Theme-Aware)

**Light Mode**
- background, foreground
- card, card-foreground
- primary, primary-foreground
- secondary, secondary-foreground
- muted, muted-foreground
- accent, destructive, success
- border, input, ring

**Dark Mode**
- Same structure, different color references
- Optimized for dark backgrounds

### Components (UI Elements)

**Button**
- Variants: primary, secondary, destructive, ghost
- Sizes: sm, md, lg
- States: default, hover

**Card**
- Background, foreground, border
- Padding, border radius, shadow

**Input**
- Background, border, focus state
- Placeholder color
- Height, padding, border radius

**Badge**
- Variants: default, secondary, success, destructive
- Padding, border radius

---

## 🔄 Syncing Workflow

### From GitHub → Figma

1. Update `$tokens.json` in this repo
2. Commit and push to GitHub
3. In Figma Tokens Studio → Click "Pull from GitHub"
4. All designs using tokens update automatically ✨

### From Figma → GitHub

1. Edit tokens in Tokens Studio
2. Click "Push to GitHub"
3. Tokens are committed to this repo
4. Code can consume updated tokens

---

## 🎯 Using Tokens in Figma

### Applying Color Tokens

1. Select element in Figma
2. Open Tokens Studio plugin
3. Click "Inspect" tab
4. Find Fill/Stroke property
5. Choose token:
   - **Primitives**: `primitives.colors.brand.500`
   - **Semantic**: `semantic.light.primary`
   - **Component**: `components.button.primary.bg`

### Applying Typography

1. Select text element
2. In Tokens Studio:
   - Font Size: `primitives.typography.fontSize.h1`
   - Font Weight: `primitives.typography.fontWeight.semibold`
   - Line Height: `primitives.typography.lineHeight.tight`

### Applying Spacing

1. Select frame/component
2. Apply spacing tokens:
   - Padding: `primitives.spacing.molecules`
   - Gap: `primitives.spacing.gap-comfortable`

### Applying Effects

1. Select element
2. Apply effect tokens:
   - Shadow: `primitives.effects.shadow.card`
   - Border Radius: `primitives.effects.borderRadius.xl`

---

## 🌓 Dark Mode Setup

### Option 1: Token Sets (Recommended)

1. In Tokens Studio, create two modes:
   - **Light Mode**: Enable `semantic/light`
   - **Dark Mode**: Enable `semantic/dark`
2. Plugin automatically swaps semantic tokens

### Option 2: Figma Variables

1. Create Color Collection: "Semantic Colors"
2. Add modes: Light & Dark
3. Map semantic tokens to primitives per mode

---

## 📝 Best Practices

### 1. Use Semantic Tokens for UI
✅ `semantic.light.primary` (theme-aware)  
❌ `primitives.colors.brand.500` (hardcoded)

### 2. Use Component Tokens for Variants
✅ `components.button.primary.bg`  
✅ `components.card.shadow`

### 3. Keep Primitives Intact
- Never delete primitive tokens
- They're the foundation for semantic/component tokens

### 4. Document Custom Tokens
- Add descriptions in JSON
- Use consistent naming

### 5. Test Both Themes
- Always verify light AND dark mode
- Use semantic tokens for automatic theme switching

---

## 🐛 Troubleshooting

**"Token references are broken"**
- Ensure all token sets are enabled (toggle on in Tokens Studio)
- Check that primitives load before semantic tokens

**"Colors look wrong"**
- Verify correct mode is active (light vs dark)
- Check semantic token sets are enabled

**"GitHub sync not working"**
- Verify repository name and branch
- Check file path is `$tokens.json` (with `$` prefix)
- Re-authenticate GitHub connection

**"Can't see all tokens"**
- Scroll down in token sets list
- Verify JSON import was successful

---

## 🔗 Related Documentation

- **[Token Studio Web Upload Guide](../docs/TOKEN_STUDIO_WEB_GUIDE.md)** ← START HERE
- [Complete Figma Tokens Reference](../docs/FIGMA_TOKENS_COMPLETE_GUIDE.md)
- [Figma Setup Guide](../docs/FIGMA_TOKENS_SETUP.md)
- [Design System Docs](../docs/DESIGN_SYSTEM.md)

---

## 📊 Token Statistics

- **Total Tokens**: 200+
- **Color Primitives**: 70+ (7 scales × 11 shades each)
- **Semantic Tokens**: 40+ (light + dark modes)
- **Component Tokens**: 30+ (4 components)
- **Typography Tokens**: 25+
- **Spacing Tokens**: 20+
- **Effect Tokens**: 15+

---

## ⚙️ Technical Details

**Format**: Tokens Studio for Figma JSON  
**Schema Version**: Compatible with Tokens Studio v2+  
**File Naming**: `$tokens.json` (required for GitHub sync)  
**Token References**: Full support (e.g., `{primitives.colors.brand.500}`)

---

**Need help?** See [Tokens Studio Documentation](https://docs.tokens.studio/) or check our [troubleshooting guide](../docs/FIGMA_TOKENS_COMPLETE_GUIDE.md#-troubleshooting).
