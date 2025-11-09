# Token Studio Web Upload Guide

Complete guide to uploading your design system to Token Studio Web and syncing to Figma.

## 📁 Files You Need

All files are located in the `tokens/` directory:

1. **$tokens.json** - Complete design system tokens (primitives, semantic, components)

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
- ✅ All color primitives (neutral, brand, blue, green, red, purple, orange)
- ✅ Typography tokens (sizes, weights, line heights, spacing)
- ✅ Spacing scale (0-24)
- ✅ Border radius tokens (sm to full)
- ✅ Sizing tokens (xs to xl)
- ✅ Semantic tokens for light mode
- ✅ Semantic tokens for dark mode
- ✅ Component tokens (button, card, input, badge)
- ✅ Theme configurations

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
In the Tokens Studio plugin, you'll see token sets:
- **global** - All primitive tokens
- **light** - Light mode semantic tokens
- **dark** - Dark mode semantic tokens

#### Create Figma Variables (Recommended Method)

1. In Tokens Studio plugin, click **"Create Variables"**
2. Select which token sets to convert:
   - ✅ global
   - ✅ light
   - ✅ dark
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
4. For each variable, set:
   - **Light mode** → value from `light` tokens
   - **Dark mode** → value from `dark` tokens

**Method 2: Using Token Sets**
1. In Tokens Studio plugin
2. Click **"Themes"** icon
3. Create **"Light"** theme:
   - Enable: global + light
   - Disable: dark
4. Create **"Dark"** theme:
   - Enable: global + dark
   - Disable: light
5. Switch between themes using theme selector

---

### Step 7: Using Tokens in Your Designs

#### Apply to Elements
1. Select any element (rectangle, text, frame)
2. In Tokens Studio plugin, click **"Inspect"** tab
3. Click on properties you want to apply tokens to
4. Search and select appropriate token:
   - **Fill** → `semantic.light.primary` or `global.colors.brand.500`
   - **Text** → `global.fontSize.h1`
   - **Padding** → `global.spacing.4`
   - **Corner Radius** → `global.borderRadius.lg`

#### Create Components with Tokens
**Example: Button Component**
1. Create frame (name: "Button")
2. Apply tokens:
   - Fill: `{light.primary}` or component token
   - Padding: `{global.spacing.4}`
   - Corner radius: `{global.borderRadius.md}`
3. Add text layer:
   - Font size: `{global.fontSize.body}`
   - Color: `{light.primary-foreground}`
4. Create variants for different states

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

### Color Primitives
```
global.colors.neutral.50 → #FAFAFA
global.colors.brand.500 → #FFCC00 (primary brand)
global.colors.blue.500 → #4A90E2
global.colors.green.500 → #34A853
global.colors.red.500 → #EA4335
```

### Semantic Tokens
```
light.background → global.colors.neutral.50
light.foreground → global.colors.neutral.900
light.primary → global.colors.brand.500
light.primary-foreground → global.colors.neutral.950
```

### Typography
```
global.fontSize.h1 → 32px
global.fontSize.body → 14px
global.fontWeight.semibold → 600
global.lineHeight.normal → 150%
```

### Spacing
```
global.spacing.4 → 16px
global.spacing.6 → 24px
global.spacing.8 → 32px
```

---

## ✅ Verification Checklist

After completing setup, verify:

- [ ] All color primitives appear in Figma variables
- [ ] Light and dark mode semantic tokens are available
- [ ] Typography tokens (size, weight, line height) are accessible
- [ ] Spacing tokens (0-24 scale) are present
- [ ] Border radius tokens (sm to full) are available
- [ ] Component tokens for button, card, input, badge exist
- [ ] Can switch between light/dark themes
- [ ] Can apply tokens to elements via Inspect tab
- [ ] Can create components using tokens

---

## 🎨 Design System Included

Your uploaded tokens include:

### Primitives (global)
- 7 complete color scales (neutral, brand, blue, green, red, purple, orange)
- Full typography system (9 sizes, 4 weights, 4 line heights)
- Spacing scale (13 values: 0px to 96px)
- Border radius (7 values: 8px to 9999px)
- Border widths (thin, standard)
- Component sizing (xs to xl)

### Semantic Tokens (light + dark)
- Background, foreground, card, popover
- Primary, secondary, muted, accent
- Destructive, success
- Border, input, ring

### Component Tokens
- Button (background, text, hover, disabled)
- Card (background, border, shadow)
- Input (background, border, placeholder, focus)
- Badge (background, text)

---

## 🆘 Troubleshooting

**Tokens not appearing in Figma:**
- Ensure Token Studio Web sync is connected
- Click "Pull changes" in plugin
- Check that token sets are enabled

**Only colors showing, no typography/spacing:**
- Verify `$tokens.json` has all token types
- Re-upload to Token Studio Web
- Refresh Figma plugin connection

**Variables not creating:**
- Update to latest Tokens Studio plugin version
- Ensure Figma file has edit permissions
- Try creating styles instead as alternative

**Dark mode not working:**
- Verify both light and dark token sets uploaded
- Check theme configuration in plugin
- Ensure variables have both modes set

---

## 📚 Additional Resources

- [Token Studio Documentation](https://docs.tokens.studio/)
- [Figma Variables Guide](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)
- [Design Tokens Format](https://design-tokens.github.io/community-group/format/)

---

## 🎯 Your Next Steps

1. ✅ Download `$tokens.json` from `tokens/` directory
2. ✅ Create Token Studio Web account
3. ✅ Upload tokens to Token Studio Web
4. ✅ Install Tokens Studio Figma plugin
5. ✅ Connect plugin to Token Studio Web
6. ✅ Create Figma variables from tokens
7. ✅ Set up light/dark modes
8. ✅ Start designing with tokens!

**Happy Designing! 🎨**
