# Figma Tokens Studio Setup Guide - Complete Walkthrough

This guide walks you through every step to import your V14 Design System tokens into Figma using the Tokens Studio plugin (free version compatible).

---

## 📋 Prerequisites

- Figma account (free version is fine) - [Sign up here](https://www.figma.com/signup)
- Your design tokens file (`design-tokens/figma-tokens.json`)
- Basic familiarity with Figma interface

---

## Part 1: Setting Up Figma

### Step 1: Create a Figma Account (If You Don't Have One)

1. Go to [figma.com/signup](https://www.figma.com/signup)
2. Sign up with email or Google account
3. Verify your email
4. Complete the onboarding (you can skip team setup for now)

### Step 2: Create a New Design File

1. Log into Figma
2. Click **"New design file"** button (or press `Ctrl/Cmd + N`)
3. Rename the file: Click "Untitled" at the top → Type "V14 Design System"
4. You now have a blank canvas ready!

---

## Part 2: Installing Tokens Studio Plugin

### Step 3: Access Figma Plugins

1. In your Figma file, click **"Resources"** icon (top left, or press `Shift + I`)
2. Click on the **"Plugins"** tab
3. In the search bar, type: **"Tokens Studio for Figma"**

### Step 4: Install Tokens Studio

1. Find **"Tokens Studio for Figma"** by Tokens Studio (should be the first result)
2. Click on it to open the plugin page
3. Click the **"Install"** button (it's free!)
4. Installation is instant - the button will change to "Run"

**Note**: The full name might be "Tokens Studio for Figma (Figma Tokens)" - this is the correct plugin.

---

## Part 3: Preparing Your Token File

### Step 5: Locate Your Token File

**Option A: If Your Project Is on GitHub**
1. Go to your GitHub repository
2. Navigate to: `design-tokens/figma-tokens.json`
3. Click **"Raw"** button (top right of file view)
4. Press `Ctrl/Cmd + A` to select all
5. Press `Ctrl/Cmd + C` to copy
6. **Keep this content** - you'll paste it in Step 8

**Option B: If You Have the Project Locally**
1. Open your project folder in VS Code or any text editor
2. Navigate to: `design-tokens/figma-tokens.json`
3. Open the file
4. Press `Ctrl/Cmd + A` to select all content
5. Press `Ctrl/Cmd + C` to copy
6. **Keep this content** - you'll paste it in Step 8

**Option C: Download from Lovable**
1. In Lovable, enable **Dev Mode** (toggle top left)
2. Find `design-tokens/figma-tokens.json` in the file tree
3. Click on the file to view its contents
4. Select all content and copy
5. **Keep this content** - you'll paste it in Step 8

---

## Part 4: Importing Tokens into Figma

### Step 6: Open Tokens Studio Plugin

1. In your Figma file, click **"Resources"** icon (`Shift + I`)
2. Go to **"Plugins"** tab
3. Find **"Tokens Studio for Figma"** in "Saved" or search for it
4. Click to run the plugin

**Alternative Method**:
- Right-click anywhere on canvas → Plugins → Tokens Studio for Figma

The plugin panel will open on the right side of your screen.

### Step 7: Understand the Plugin Interface

When you first open Tokens Studio, you'll see:
- **Top tabs**: Tokens, Themes, Settings, Inspector
- **Left sidebar**: Token categories (empty for now)
- **Main area**: Token values will appear here
- **Bottom buttons**: Import/Export options

### Step 8: Import Your Token JSON

1. In the Tokens Studio panel, look at the **bottom** of the panel
2. Click the **"Settings"** icon (gear icon) or go to **"Settings"** tab
3. Scroll down to find **"Import"** section
4. Click **"Import"** button

**You'll see import options:**

#### Method A: Paste JSON Content (Recommended)
1. Click **"Import from"** → Select **"JSON string"**
2. A text area will appear
3. Paste the JSON content you copied in Step 5 (`Ctrl/Cmd + V`)
4. Click **"Import"**
5. ✅ Success! You'll see a confirmation message

#### Method B: Upload JSON File
1. Click **"Import from"** → Select **"File"**
2. Click **"Choose file"**
3. Navigate to your project folder → `design-tokens/figma-tokens.json`
4. Select the file and click **"Open"**
5. Click **"Import"**
6. ✅ Success! You'll see a confirmation message

---

## Part 5: Exploring Your Imported Tokens

### Step 9: View Token Categories

After importing, go to the **"Tokens"** tab in the plugin. You should see:

📁 **colors** (expandable)
  - brand
  - accent  
  - neutral

📁 **spacing**
  - atoms, molecules, organisms, etc.

📁 **typography**
  - fontSizes
  - fontWeights
  - lineHeights

📁 **borderRadius**
  - sm, md, lg, xl, full

📁 **effects**
  - shadow-sm, shadow-md, shadow-card, shadow-lg

### Step 10: Expand and Inspect Tokens

1. Click the **▶ arrow** next to "colors" to expand
2. Click the **▶ arrow** next to "brand" to see all brand colors
3. You should see:
   - **primary**: #FFCC00 (yellow square)
   - **primary-light**: #FFD633
   - **primary-dark**: #CCA300
   - **dark**: #141414

**Each token shows:**
- Token name
- Color preview (for colors)
- Value (#FFCC00)
- Description (hover to see)

---

## Part 6: Applying Tokens to Figma Elements

### Step 11: Create a Test Rectangle

Let's test the tokens:

1. Press **`R`** on your keyboard (Rectangle tool)
2. Click and drag on canvas to create a rectangle
3. Keep the rectangle selected

### Step 12: Apply a Color Token

1. With rectangle selected, Tokens Studio panel should show **"Inspector"** tab
2. Or manually click **"Inspector"** tab in the plugin
3. You'll see sections like:
   - Fill
   - Border
   - Typography (if text is selected)
   - Spacing
   - etc.

4. Under **"Fill"**:
   - Click the **"+"** button or color swatch
   - Navigate: **colors → brand → primary**
   - Click on **"primary"**
   - 🎉 Your rectangle turns yellow (#FFCC00)!

### Step 13: Apply Border Radius Token

1. With rectangle still selected
2. In Inspector tab, find **"Border Radius"**
3. Click the input field or **"+"** button
4. Navigate: **borderRadius → lg**
5. Click on **"lg"**
6. Your rectangle corners now have 20px radius!

### Step 14: Create and Style Text

1. Press **`T`** on keyboard (Text tool)
2. Click on canvas and type: **"V14 Design System"**
3. Keep text selected
4. In Tokens Studio Inspector tab:
   - **Font Size**: Navigate to typography → fontSizes → **h1** (32px)
   - **Font Weight**: Navigate to typography → fontWeights → **bold** (700)
5. Your text is now styled with tokens!

---

## Part 7: Creating Figma Styles from Tokens (Optional but Recommended)

### Step 15: Convert Color Tokens to Figma Color Styles

This makes tokens easier to apply without always opening the plugin:

1. In Tokens Studio panel, go to **"Tokens"** tab
2. Expand **colors → brand**
3. **Right-click** on **"primary"**
4. Select **"Create style"**
5. Figma color style is created!
6. Repeat for other important colors:
   - brand/primary-light
   - brand/dark
   - accent/blue
   - accent/green
   - neutral/background
   - etc.

Now you can apply these colors from Figma's native color picker!

### Step 16: Create Text Styles from Typography Tokens

1. Create a text layer (press `T`)
2. Type: "Heading 1"
3. In Tokens Studio Inspector:
   - Apply: typography → fontSizes → **h1**
   - Apply: typography → fontWeights → **bold**
4. With text still selected, go to Figma's right panel
5. Click the **text style icon** (four dots) next to font settings
6. Click **"+"** → **"Create style"**
7. Name it: **"Heading 1"**
8. Click **"Create style"**

Repeat for other text styles: h2, h3, body, body-large, etc.

### Step 17: Create Effect Styles for Shadows

1. Create a rectangle (press `R`)
2. In Tokens Studio Inspector:
   - Find **"Effects"** or **"Shadow"**
   - Apply: effects → **shadow-card**
3. With rectangle selected, go to Figma's right panel
4. Under **"Effects"**, click the **style icon**
5. Click **"+"** → **"Create style"**
6. Name it: **"Shadow Card"**
7. Click **"Create style"**

Repeat for shadow-sm, shadow-md, shadow-lg.

---

## Part 8: Building Your First Component

### Step 18: Create a Button Component

Let's build a button using only design tokens:

1. **Create button frame**:
   - Press `F` for Frame tool
   - Draw a rectangle (approximately 120px × 40px)
   - Rename to "Button/Primary" (double-click name in layers panel)

2. **Apply token styling**:
   - **Fill**: colors → brand → primary (#FFCC00)
   - **Border Radius**: borderRadius → md (16px)
   - **Padding**: We'll add text first

3. **Add button text**:
   - Press `T` for Text tool
   - Click inside the button frame
   - Type: "Click me"
   - Center the text in the frame

4. **Style the text with tokens**:
   - Select the text layer
   - In Tokens Studio Inspector:
     - **Font Size**: typography → fontSizes → h4 (16px)
     - **Font Weight**: typography → fontWeights → semibold (600)
     - **Color**: colors → brand → dark (#141414)

5. **Add padding using Auto Layout**:
   - Select the button frame (not the text)
   - Press `Shift + A` (Add Auto Layout)
   - In Figma's right panel, set:
     - Horizontal padding: 24px (organisms token)
     - Vertical padding: 12px
     - Horizontal alignment: Center
     - Vertical alignment: Center

6. **Add shadow**:
   - With button frame selected
   - In Tokens Studio Inspector, add:
     - **Effect**: effects → shadow-sm

7. **Create component**:
   - Select the button frame
   - Press `Ctrl/Cmd + Alt + K` (Create component)
   - Or: Right-click → Create component

🎉 **You now have a token-based button component!**

### Step 19: Create Button Variants

1. **Duplicate the button**:
   - Select your button component
   - Press `Ctrl/Cmd + D` to duplicate
   - Move it next to the original

2. **Change to secondary style**:
   - Select the duplicate
   - In Tokens Studio Inspector:
     - **Fill**: colors → neutral → card (#FFFFFF)
     - **Border**: Add 1px stroke using colors → neutral → border
   - Update text color:
     - Select text → colors → neutral → foreground

3. **Create as variant**:
   - Select both button components
   - Right-click → Combine as variants
   - Rename variants: "Primary" and "Secondary"

---

## Part 9: Organizing Your Design System

### Step 20: Create Design System Structure

Create pages for organization:

1. Click **"+"** next to Pages (left sidebar bottom)
2. Create these pages:
   - **🎨 Tokens** - Visual reference of all tokens
   - **🧩 Components** - All reusable components
   - **📱 Screens** - App screen designs
   - **📖 Documentation** - Guidelines and usage

### Step 21: Build Token Reference Page

On the **"Tokens"** page:

1. **Create color swatches**:
   - Create rectangles for each color token
   - Apply tokens using Tokens Studio
   - Label each swatch (e.g., "brand/primary #FFCC00")
   - Arrange in groups: Brand, Accent, Neutral

2. **Create typography scale**:
   - Add text samples for each font size
   - Style each with corresponding token
   - Label: "Display 40px", "H1 32px", etc.

3. **Create spacing examples**:
   - Show padding boxes with spacing tokens
   - Label: "Atoms 16px", "Molecules 20px", etc.

4. **Create shadow examples**:
   - Rectangles demonstrating each shadow level
   - Apply shadow tokens
   - Label: "shadow-sm", "shadow-md", etc.

---

## Part 10: Syncing Tokens When Code Updates

### Step 22: Update Workflow

When your design tokens update in code:

1. **Export updated token file**:
   - In your project, open `design-tokens/figma-tokens.json`
   - Copy the updated content

2. **Import into Figma**:
   - Open Tokens Studio plugin
   - Go to Settings → Import
   - Choose "JSON string"
   - Paste updated content
   - Click Import
   - **Important**: Check "Merge" or "Overwrite" option
     - **Merge**: Keeps existing tokens, adds new ones
     - **Overwrite**: Replaces everything

3. **Update propagates automatically**:
   - All elements using tokens update instantly!
   - All components reflect new token values
   - No manual updates needed

---

## 🎯 Best Practices

### ✅ Do's:
- **Always use tokens** when creating new elements
- **Create Figma styles** from frequently used tokens
- **Name components** descriptively (Button/Primary, Card/Elevated)
- **Document token usage** in component descriptions
- **Keep token reference page** updated
- **Use Auto Layout** with spacing tokens for consistent padding

### ❌ Don'ts:
- **Don't hard-code colors** - always use tokens
- **Don't detach instances** unnecessarily
- **Don't create random spacing** - stick to spacing scale
- **Don't skip the Inspector tab** - it shows which tokens are applied
- **Don't forget to sync** when tokens update in code

---

## 🔧 Troubleshooting

### Plugin doesn't show after installation
- **Solution**: Refresh Figma page (`Ctrl/Cmd + R`)

### Imported tokens don't appear
- **Solution**: Check JSON validity, ensure proper format, try reimporting

### Tokens applied but colors look wrong
- **Solution**: Verify token values in JSON match expected colors

### Can't find specific token
- **Solution**: Use search in Tokens panel (magnifying glass icon)

### Changes in code don't reflect in Figma
- **Solution**: Re-export and re-import token JSON file

### Token values in pixels vs unitless
- **Solution**: Figma expects px for sizes, unitless for line-height - tokens are already formatted correctly

---

## ✅ Success Checklist

- [ ] Figma account created
- [ ] Tokens Studio plugin installed
- [ ] Token JSON file imported
- [ ] Can view all token categories
- [ ] Applied tokens to test elements
- [ ] Created Figma styles from tokens
- [ ] Built first component with tokens
- [ ] Organized design system pages
- [ ] Understand update workflow

---

## 🎯 Next Steps

Now that your tokens are in Figma:

1. **Build component library** using tokens
2. **Design mobile screens** (428px frames)
3. **Create prototypes** linking screens
4. **Export components** to development team
5. **Keep tokens synced** between Figma and code

---

## 📚 Additional Resources

- [Tokens Studio Documentation](https://docs.tokens.studio/)
- [Tokens Studio YouTube Tutorials](https://www.youtube.com/c/TokensStudio)
- [Figma Best Practices](https://www.figma.com/best-practices/)
- [V14 Design System Docs](./DESIGN_SYSTEM.md)

---

**Congratulations! Your V14 Design System tokens are now fully integrated with Figma!** 🎉

You can now design freely in Figma while maintaining perfect consistency with your codebase through shared design tokens.
