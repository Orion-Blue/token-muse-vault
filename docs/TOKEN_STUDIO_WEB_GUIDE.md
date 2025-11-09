# Token Studio Web Upload Guide

Complete guide to uploading your design system to Token Studio Web and syncing to Figma.

## 📁 Files You Need

All files are located in the `tokens/` directory:

1. **$tokens.json** - Complete design system with three-layer architecture:
   - **core** - Primitive tokens (colors, typography, spacing, sizing, borders)
   - **semantic** - Theme tokens organized by light/dark modes
   - **component** - Component-specific tokens

## 🚀 Step-by-Step Process

### Step 1: Access Your Token Files

**Option A: Download from GitHub (Recommended)**
1. Connect your Lovable project to GitHub (click GitHub button in top right)
2. Once connected, go to your GitHub repository
3. Navigate to the `tokens/` folder
4. Download the `$tokens.json` file by:
   - Click on `$tokens.json`
   - Click the "Raw" button
   - Right-click → "Save As" → save as `$tokens.json`

**Option B: Copy from Lovable**
1. In Lovable, toggle "Dev Mode" (top left)
2. Open `tokens/$tokens.json`
3. Copy all content
4. Create a new file on your computer named `$tokens.json`
5. Paste the content and save

---

### Step 2: Upload to Token Studio Web

1. Go to [https://tokens.studio/](https://tokens.studio/)
2. Click **"Sign Up"** or **"Login"** (create free account if needed)
3. Once logged in, click **"New Project"** or open existing project
4. Click **"Upload Tokens"** or **"Import"**
5. Select your `$tokens.json` file
6. Confirm the upload

**What gets uploaded:**
- ✅ Core primitives:
  - All color primitives (neutral, brand, blue, green, red, purple, orange)
  - Typography tokens (sizes, weights, line heights, letter spacing)
  - Spacing scale (0-24: 0px to 96px)
  - Border radius tokens (sm to full)
  - Border widths (thin, standard)
  - Sizing tokens (xs to xl)
- ✅ Semantic tokens:
  - Light theme (surface, interactive, feedback, ui)
  - Dark theme (surface, interactive, feedback, ui)
- ✅ Component tokens (button, card, input)
- ✅ Theme configurations (Light Theme, Dark Theme)

---

### Step 3: Install Figma Plugin

1. Open Figma
2. Go to **Plugins** → **Find more plugins**
3. Search for **"Tokens Studio for Figma"**
4. Click **"Install"**

---

### Step 4: Connect Figma to Token Studio Web

1. In Figma, run **Tokens Studio** plugin (Plugins → Tokens Studio)
2. In the plugin panel, click **Settings** (gear icon)
3. Under **Sync providers**, select **"Token Studio Web"**
4. Click **"Connect to Token Studio Web"**
5. Authorize the connection and select your project
6. The plugin will sync all your tokens

---

### Step 5: Apply Tokens in Figma

#### View Your Tokens
In the Tokens Studio plugin, you'll see organized token sets:
- **core** - Primitive tokens (color, typography, spacing, etc.)
- **semantic/light** - Light theme semantic tokens
- **semantic/dark** - Dark theme semantic tokens
- **component** - Component-specific tokens

#### Create Figma Variables (Recommended Method)

1. In Tokens Studio plugin, click **"Create Variables"**
2. Select which token sets to convert:
   - ✅ core
   - ✅ semantic/light
   - ✅ semantic/dark
   - ✅ component
3. Click **"Create"**
4. Figma will create native variables in **Variables panel**

This creates:
- Color variables for all tokens
- Number variables for spacing, sizing, radius
- String variables for typography

#### Create Figma Styles (Alternative/Additional)

1. In Tokens Studio plugin, go to **"Export"** tab
2. Click **"Create Styles"**
3. Select token types:
   - ✅ Colors → Color Styles
   - ✅ Typography → Text Styles
   - ✅ Shadows → Effect Styles
4. Click **"Create"**

---

### Step 6: Set Up Light & Dark Modes

**Method 1: Using Figma Variables (Recommended)**
1. Open **Variables** panel (right sidebar)
2. Find the color collection created from tokens
3. Click **"+"** next to modes to add **"Dark"** mode
4. For each semantic variable, set:
   - **Light mode** → value from `semantic.light.*` tokens
   - **Dark mode** → value from `semantic.dark.*` tokens
5. Core tokens stay constant across both modes

**Method 2: Using Token Sets**
1. In Tokens Studio plugin, go to **"Themes"** tab
2. You'll see pre-configured themes from the token file:
   - **Light Theme**: core + semantic/light + component
   - **Dark Theme**: core + semantic/dark + component
3. Select a theme from the dropdown
4. The plugin automatically activates the correct token sets
5. Switch themes to see semantic tokens update while core stays constant

---

### Step 7: Using Tokens in Your Designs

#### Apply to Elements
1. Select any element (rectangle, text, frame)
2. In Tokens Studio plugin, click **"Inspect"** tab
3. Click on properties you want to apply tokens to
4. Search and select appropriate token following the hierarchy:
   
   **For themed colors** (change with light/dark):
   - `semantic.light.interactive.primary` or `semantic.dark.interactive.primary`
   - `semantic.light.surface.background` or `semantic.dark.surface.background`
   
   **For static colors** (never change):
   - `core.color.brand.500`
   - `core.color.neutral.700`
   
   **For component-specific styling**:
   - `component.button.padding.md`
   - `component.card.shadow`

#### Create Components with Tokens
**Example: Button Component**
1. Create frame (name: "Button")
2. Apply tokens:
   - Fill: `{semantic.light.interactive.primary}` (themed) or `{core.color.brand.500}` (static)
   - Padding: `{component.button.padding.md}` or `{core.spacing.4}`
   - Corner radius: `{component.button.borderRadius}` or `{core.borderRadius.md}`
   - Height: `{component.button.height.md}`
3. Add text layer:
   - Font size: `{component.button.fontSize.md}` or `{core.typography.fontSize.body}`
   - Color: `{semantic.light.interactive.primary-foreground}`
4. Create variants for different states and sizes

---

### Step 8: Keep Tokens Synced

**When you update tokens in Lovable:**
1. Download updated `$tokens.json` from GitHub
2. Upload to Token Studio Web (overwrites previous)
3. In Figma, Tokens Studio plugin will auto-sync
4. Click **"Pull changes"** if needed
5. Update variables/styles

**Or use GitHub sync (Advanced):**
1. In Token Studio Web, connect to GitHub
2. Point to your repository's `tokens/$tokens.json`
3. Auto-sync on every commit

---

## 📊 Token Organization in Figma

### Core Primitives
```
core.color.neutral.50 → #FAFAFA
core.color.brand.500 → #FFCC00 (primary brand)
core.color.blue.500 → #4A90E2
core.typography.fontSize.h1 → 32px
core.spacing.4 → 16px
core.borderRadius.md → 12px
```

### Semantic Tokens (Light Theme)
```
semantic.light.surface.background → {core.color.neutral.50}
semantic.light.surface.foreground → {core.color.neutral.900}
semantic.light.interactive.primary → {core.color.brand.500}
semantic.light.interactive.primary-foreground → {core.color.neutral.950}
```

### Semantic Tokens (Dark Theme)
```
semantic.dark.surface.background → {core.color.neutral.950}
semantic.dark.surface.foreground → {core.color.neutral.50}
semantic.dark.interactive.primary → {core.color.brand.500}
semantic.dark.interactive.primary-foreground → {core.color.neutral.950}
```

### Component Tokens
```
component.button.padding.md → {core.spacing.3} {core.spacing.4}
component.button.height.md → {core.sizing.md}
component.card.padding → {core.spacing.6}
component.card.borderRadius → {core.borderRadius.lg}
```

---

## ✅ Verification Checklist

After completing setup, verify:

- [ ] All core color primitives appear in Figma variables
- [ ] Typography tokens (family, size, weight, line height, letter spacing) are accessible
- [ ] Spacing tokens (0-24 scale) are present
- [ ] Border radius and width tokens are available
- [ ] Sizing tokens (xs-xl) exist
- [ ] Light theme semantic tokens are available (surface, interactive, feedback, ui)
- [ ] Dark theme semantic tokens are available (same structure)
- [ ] Component tokens for button, card, input are accessible
- [ ] Can switch between Light Theme and Dark Theme using Themes dropdown
- [ ] Core tokens stay constant while semantic tokens change with theme
- [ ] Can apply tokens to elements via Inspect tab
- [ ] Can create components using the three-layer token hierarchy

---

## 🎨 Design System Included

Your uploaded tokens follow a three-layer architecture:

### Core Layer (Primitives)
- **Color**: 7 complete color scales (neutral, brand, blue, green, red, purple, orange) × 11 shades each + white/black
- **Typography**: Font families, 10 font sizes, 4 weights, 4 line heights, 4 letter spacings
- **Spacing**: 14 values (0px to 96px)
- **Border Radius**: 7 values (8px to 9999px)
- **Border Width**: 2 values (thin, standard)
- **Sizing**: 5 values (xs to xl)

### Semantic Layer (Themes)
Organized by purpose with light and dark variants:
- **surface** - background, foreground, card, card-foreground, popover, popover-foreground
- **interactive** - primary, primary-foreground, secondary, secondary-foreground, accent, accent-foreground
- **feedback** - destructive, destructive-foreground, success, success-foreground
- **ui** - muted, muted-foreground, border, input, ring

### Component Layer (UI Elements)
Component-specific tokens:
- **button** - padding (sm/md/lg), height (sm/md/lg), fontSize (sm/md/lg)
- **card** - padding, borderRadius, shadow
- **input** - height, padding, borderRadius

---

## 🆘 Troubleshooting

**Tokens not appearing in Figma:**
- Ensure Token Studio Web sync is connected
- Click "Pull changes" in plugin
- Check that all token sets are enabled

**Only colors showing, no typography/spacing:**
- Verify `$tokens.json` has all token types
- Re-upload to Token Studio Web
- Refresh Figma plugin connection

**Variables not creating:**
- Update to latest Tokens Studio plugin version
- Ensure Figma file has edit permissions
- Try creating styles instead as alternative

**Dark mode not switching correctly:**
- Verify theme configuration in Tokens Studio includes correct token sets
- For Light Theme: core + semantic/light + component should be enabled
- For Dark Theme: core + semantic/dark + component should be enabled
- Ensure semantic tokens reference core tokens (not hardcoded values)

**Component tokens not working:**
- Check that component token set is enabled
- Verify component tokens reference core or semantic tokens correctly
- Re-sync from Token Studio Web if needed

---

## 📚 Additional Resources

- [Token Studio Documentation](https://docs.tokens.studio/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Design Tokens Format](https://design-tokens.github.io/community-group/format/)
- [Design System Architecture](./DESIGN_SYSTEM_ARCHITECTURE.md) - Understanding the three-layer token structure

---

## 🎯 Your Next Steps

1. ✅ Download `$tokens.json` from `tokens/` directory
2. ✅ Create Token Studio Web account
3. ✅ Upload tokens to Token Studio Web
4. ✅ Install Tokens Studio Figma plugin
5. ✅ Connect plugin to Token Studio Web
6. ✅ Create Figma variables from all token sets (core, semantic, component)
7. ✅ Set up Light Theme and Dark Theme using Themes dropdown
8. ✅ Understand the three-layer token hierarchy
9. ✅ Start designing with tokens following best practices!

**Remember**: Always use semantic tokens for themed elements and core tokens for static values.

**Happy Designing! 🎨**