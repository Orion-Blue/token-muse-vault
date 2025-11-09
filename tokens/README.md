# Design Tokens

This directory contains the design tokens for the project in a format compatible with Figma Tokens Studio plugin.

## Token Structure

The tokens are organized in `$tokens.json` with a scalable three-layer architecture:

### 1. **Core** - Primitive Design Tokens
Foundation layer containing raw values that never reference other tokens:
- **color** - Complete color palettes (neutral, brand, blue, green, red, purple, orange, white, black)
- **typography** - Font families, sizes, weights, line heights, letter spacing
- **spacing** - Spacing scale from 0 to 24 (0px to 96px)
- **borderRadius** - Border radius values (sm to full)
- **borderWidth** - Border width options (thin, standard)
- **sizing** - Component sizing scale (xs to xl)

### 2. **Semantic** - Theme Tokens
Theme-specific tokens that reference core tokens and provide semantic meaning:
- **semantic/light** - Light theme tokens organized by purpose:
  - `surface` - Background, foreground, card, popover surfaces
  - `interactive` - Primary, secondary, accent colors
  - `feedback` - Destructive, success states
  - `ui` - Muted, border, input, ring elements
  
- **semantic/dark** - Dark theme tokens with same structure as light

### 3. **Component** - Component-Specific Tokens
Tokens tailored for specific components, referencing core and semantic tokens:
- **button** - Padding, height, fontSize by size (sm, md, lg)
- **card** - Padding, borderRadius, shadow
- **input** - Height, padding, borderRadius

## Benefits of This Organization

- **Maintainability** - Changes to core tokens automatically propagate to all themes
- **Scalability** - Easy to add new themes or component tokens
- **Consistency** - Semantic tokens ensure consistent color/spacing usage
- **Flexibility** - Switch themes by changing active token sets
- **Component Library Ready** - Component tokens map directly to UI components
- **Theme Independence** - Core tokens stay constant across all themes

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

## 🎯 Using Tokens in Figma

### Applying Color Tokens

1. Select element in Figma
2. Open Tokens Studio plugin
3. Click "Inspect" tab
4. Find Fill/Stroke property
5. Choose token:
   - **Core (static colors)**: `core.color.brand.500`
   - **Semantic (themed)**: `semantic.light.interactive.primary` or `semantic.dark.interactive.primary`
   - **Component**: `component.button.primary.bg` (if defined)

### Applying Typography

1. Select text element
2. In Tokens Studio:
   - Font Family: `core.typography.fontFamily.system`
   - Font Size: `core.typography.fontSize.h1`
   - Font Weight: `core.typography.fontWeight.semibold`
   - Line Height: `core.typography.lineHeight.tight`

### Applying Spacing

1. Select frame/component
2. Apply spacing tokens:
   - Padding: `core.spacing.4` (16px)
   - Gap: `core.spacing.6` (24px)
   - Component-specific: `component.card.padding`

### Applying Effects

1. Select element
2. Apply effect tokens:
   - Shadow: `component.card.shadow`
   - Border Radius: `core.borderRadius.xl`
   - Component-specific: `component.button.height.md`

---

## 🌓 Dark Mode Setup

### Option 1: Themes (Recommended)

1. In Tokens Studio, use the **Themes** dropdown
2. Select from pre-configured themes:
   - **Light Theme**: Enables `core` + `semantic/light` + `component`
   - **Dark Theme**: Enables `core` + `semantic/dark` + `component`
3. Plugin automatically swaps semantic tokens while keeping core tokens constant

### Option 2: Figma Variables

1. Create Color Collection: "Semantic Colors"
2. Add modes: Light & Dark
3. Map semantic tokens to different core values per mode:
   - Light mode: `semantic.light.surface.background` → `core.color.neutral.50`
   - Dark mode: `semantic.dark.surface.background` → `core.color.neutral.950`

---

## 📝 Best Practices

### 1. Use Semantic Tokens for Themed UI
✅ `semantic.light.interactive.primary` (theme-aware, switches with themes)  
❌ `core.color.brand.500` (static, never changes)

### 2. Use Core Tokens for Static Values
✅ `core.spacing.4` (always 16px regardless of theme)  
✅ `core.typography.fontSize.h1` (always 32px)

### 3. Use Component Tokens for Components
✅ `component.button.padding.md`  
✅ `component.card.shadow`

### 4. Follow the Token Hierarchy
- **Core** → Never references other tokens (primitives)
- **Semantic** → Always references core tokens only
- **Component** → References core or semantic tokens

### 5. Keep Core Tokens Stable
- Core tokens are the foundation - changes affect everything
- Add new tokens rather than modifying existing ones
- Document any breaking changes

### 6. Test Both Themes
- Always verify designs in light AND dark themes
- Ensure semantic tokens provide proper contrast in both modes

---

## 🐛 Troubleshooting

**"Token references are broken"**
- Ensure all token sets are enabled (core, semantic/light or semantic/dark, component)
- Check that core tokens load before semantic tokens

**"Colors look wrong"**
- Verify correct theme is active (Light Theme vs Dark Theme)
- Check semantic token sets are enabled

**"GitHub sync not working"**
- Verify repository name and branch
- Check file path is `tokens/$tokens.json` (with `$` prefix)
- Re-authenticate GitHub connection

**"Can't see all tokens"**
- Scroll down in token sets list
- Verify JSON import was successful
- Check all token sets are enabled

---

## 🔗 Related Documentation

- **[Token Studio Web Upload Guide](../docs/TOKEN_STUDIO_WEB_GUIDE.md)** ← START HERE
- [Design System Architecture](../docs/DESIGN_SYSTEM_ARCHITECTURE.md) ← Understanding the three-layer structure
- [Complete Figma Tokens Reference](../docs/FIGMA_TOKENS_COMPLETE_GUIDE.md)
- [Figma Setup Guide](../docs/FIGMA_TOKENS_SETUP.md)
- [Design System Docs](../docs/DESIGN_SYSTEM.md)

---

## 📊 Token Statistics

- **Total Tokens**: 150+
- **Core Tokens**: 100+
  - Color primitives: 70+ (7 scales × 11 shades each + white/black)
  - Typography: 25+ (families, sizes, weights, line heights, letter spacing)
  - Spacing: 14 values (0px to 96px)
  - Border radius: 7 values
  - Sizing: 5 values
- **Semantic Tokens**: 36+ (18 per theme × 2 themes)
- **Component Tokens**: 10+ (button, card, input variants)

---

## ⚙️ Technical Details

**Format**: Tokens Studio for Figma JSON  
**Schema Version**: Compatible with Tokens Studio v2+  
**File Naming**: `$tokens.json` (required for GitHub sync)  
**Token References**: Full support (e.g., `{core.color.brand.500}`)  
**Architecture**: Three-layer system (Core → Semantic → Component)

---

**Need help?** See [Token Studio Documentation](https://docs.tokens.studio/) or check our [architecture guide](../docs/DESIGN_SYSTEM_ARCHITECTURE.md).