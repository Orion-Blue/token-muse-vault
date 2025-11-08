# V14 Design System - Complete Documentation

**Version:** 14.0  
**Last Updated:** January 2025  
**Status:** Production Ready  

---

## 📖 Table of Contents

1. [Overview](#overview)
2. [Design Tokens](#design-tokens)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing System](#spacing-system)
6. [Shadows & Elevation](#shadows--elevation)
7. [Border Radius](#border-radius)
8. [Component Library](#component-library)
9. [Interaction Patterns](#interaction-patterns)
10. [Accessibility Standards](#accessibility-standards)
11. [Figma Import Guide](#figma-import-guide)

---

## 1. Overview

### Design Philosophy

**Modern Minimalism + Fintech Elegance + Production Polish**

The V14 Design System combines clean, contemporary design with financial application requirements, emphasizing:
- **Clarity**: Enhanced typography with 1.333 scale ratio
- **Consistency**: Unified interaction patterns across all components
- **Accessibility**: WCAG AA compliant with proper focus states
- **Polish**: Production-ready with comprehensive state coverage

### Key Principles

1. **Typography First**: 1.333 ratio (Perfect Fourth) for superior hierarchy
2. **Systematic Spacing**: Clear padding hierarchy (16px/20px/24px)
3. **Consistent Interactions**: Standardized to `active:scale-[0.98]`
4. **Transparency & Depth**: Card opacity at 80% with backdrop blur
5. **Accessibility**: Focus states and ARIA labels on all interactive elements

---

## 2. Design Tokens

### Color Tokens (HSL Format)

```json
{
  "color": {
    "background": "0 0% 98%",
    "foreground": "0 0% 10%",
    "card": "0 0% 100%",
    "border": "0 0% 89%",
    "muted": "0 0% 93%",
    "muted-foreground": "0 0% 45%",
    
    "primary": "48 100% 50%",
    "primary-foreground": "0 0% 8%",
    
    "brand-yellow": "48 100% 50%",
    "brand-yellow-light": "48 100% 65%",
    "brand-yellow-dark": "48 100% 40%",
    "brand-dark": "0 0% 8%",
    
    "accent-blue": "217 91% 60%",
    "accent-green": "142 71% 45%",
    "accent-red": "0 84% 60%",
    "accent-purple": "258 90% 66%",
    "accent-orange": "25 95% 53%",
    
    "success": "142 71% 45%",
    "success-foreground": "0 0% 100%",
    "destructive": "0 84% 60%",
    "destructive-foreground": "0 0% 100%"
  }
}
```

### Typography Tokens

```json
{
  "typography": {
    "scale": {
      "display": {
        "size": "40px",
        "lineHeight": "1.25",
        "weight": "700",
        "letterSpacing": "-0.5px"
      },
      "h1": {
        "size": "32px",
        "lineHeight": "1.25",
        "weight": "700",
        "letterSpacing": "-0.3px"
      },
      "h2": {
        "size": "24px",
        "lineHeight": "1.375",
        "weight": "700",
        "letterSpacing": "0px"
      },
      "h3": {
        "size": "18px",
        "lineHeight": "1.5",
        "weight": "700",
        "letterSpacing": "0px"
      },
      "h4": {
        "size": "16px",
        "lineHeight": "1.5",
        "weight": "600",
        "letterSpacing": "0px"
      },
      "body-large": {
        "size": "15px",
        "lineHeight": "1.625",
        "weight": "400",
        "letterSpacing": "0px"
      },
      "body": {
        "size": "14px",
        "lineHeight": "1.625",
        "weight": "400",
        "letterSpacing": "0px"
      },
      "body-small": {
        "size": "12px",
        "lineHeight": "1.625",
        "weight": "400",
        "letterSpacing": "0px"
      },
      "caption": {
        "size": "11px",
        "lineHeight": "1.25",
        "weight": "600",
        "letterSpacing": "0.5px"
      },
      "micro": {
        "size": "10px",
        "lineHeight": "1.25",
        "weight": "600",
        "letterSpacing": "0.5px"
      }
    },
    "weights": {
      "normal": "400",
      "medium": "500",
      "semibold": "600",
      "bold": "700"
    }
  }
}
```

### Spacing Tokens

```json
{
  "spacing": {
    "atoms": "16px",
    "molecules": "20px",
    "organisms": "24px",
    "large-cards": "28px",
    
    "gaps": {
      "tight": "8px",
      "normal": "12px",
      "comfortable": "16px",
      "loose": "24px",
      "extra-loose": "32px"
    },
    
    "margins": {
      "section": "16px",
      "large-section": "32px",
      "bottom-safe-area": "112px"
    }
  }
}
```

### Shadow Tokens

```json
{
  "shadows": {
    "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    "card": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    "lg": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  }
}
```

### Border Radius Tokens

```json
{
  "radius": {
    "sm": "8px",
    "md": "12px",
    "lg": "16px",
    "xl": "20px",
    "2xl": "24px",
    "3xl": "32px",
    "full": "9999px"
  }
}
```

---

## 3. Color System

### 3.1 Primary Brand Color

**Yellow (Golden)**: `hsl(48, 100%, 50%)`

**Usage:**
- Active navigation items (full background)
- Primary CTA buttons
- Active pagination indicators
- Focus rings
- Primary quick actions

**Text on Yellow:**
- Primary: `#141414` (WCAG AA: ✓ 8.2:1)
- Secondary: `rgba(20, 20, 20, 0.7)` (WCAG AA: ✓ 5.7:1)

### 3.2 Accent Colors

| Color | HSL | Hex | Usage |
|-------|-----|-----|-------|
| Blue | 217 91% 60% | #4A90E2 | Info, secondary actions |
| Green | 142 71% 45% | #27AE60 | Success, positive amounts |
| Red | 0 84% 60% | #E74C3C | Error, negative amounts |
| Purple | 258 90% 66% | #9B59B6 | Tertiary actions |
| Orange | 25 95% 53% | #FF6B35 | Warnings, highlights |

### 3.3 Neutral Colors

| Color | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| Background | 0 0% 98% | 0 0% 10% | Page background |
| Foreground | 0 0% 10% | 0 0% 98% | Primary text |
| Card | 0 0% 100% | 0 0% 15% | Card surfaces |
| Border | 0 0% 89% | 0 0% 25% | Borders (use /30 opacity) |
| Muted | 0 0% 93% | 0 0% 20% | Hover backgrounds |
| Muted Foreground | 0 0% 45% | 0 0% 65% | Secondary text |

### 3.4 Transparency Guidelines

**Standard Opacity Values:**
- Cards: `bg-card/80` (80%)
- Navigation: `bg-card/70` (70%)
- Overlays: `bg-black/40` (40%)
- Hover overlays: `hover:bg-muted/70` (70%)
- Disabled states: `disabled:opacity-50` (50%)

**Always Pair With:**
- `backdrop-blur-nav` (12px blur) for glassmorphism

### 3.5 Contrast Ratios (WCAG AA)

| Combination | Ratio | Status |
|-------------|-------|--------|
| Foreground on Background | 9.8:1 | ✓ AAA |
| Primary on Yellow | 8.2:1 | ✓ AA |
| Muted Foreground on Background | 4.6:1 | ✓ AA |
| Success Green on Background | 3.8:1 | ✓ AA (Large text) |

---

## 4. Typography

### 4.1 Type Scale (1.333 Ratio - Perfect Fourth)

| Variant | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| Display | 40px | Bold (700) | 1.25 (tight) | Hero headlines |
| H1 | 32px | Bold (700) | 1.25 (tight) | Page titles |
| H2 | 24px | Bold (700) | 1.375 (snug) | Section headers |
| H3 | 18px | Bold (700) | 1.5 (normal) | Card titles |
| H4 | 16px | Semibold (600) | 1.5 (normal) | Subtitles |
| Body Large | 15px | Normal (400) | 1.625 (relaxed) | Emphasized text |
| Body | 14px | Normal (400) | 1.625 (relaxed) | Default text |
| Body Small | 12px | Normal (400) | 1.625 (relaxed) | Secondary text |
| Caption | 11px | Semibold (600) | 1.25 (tight) | Labels, metadata |
| Micro | 10px | Semibold (600) | 1.25 (tight) | Fine print, nav labels |

### 4.2 Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, 
             "Helvetica Neue", Arial, sans-serif;
```

**Rationale:** System fonts for optimal performance and native feel

### 4.3 Letter Spacing

- Display, H1: `-0.5px` to `-0.3px` (tighter)
- H2-Body: `0px` (default)
- Caption, Micro: `+0.5px` (wider for readability)
- Uppercase text: `+0.5px` (tracking)

### 4.4 Text Decoration

**Uppercase:**
- Navigation labels: `text-transform: uppercase`
- Section headers: `text-transform: uppercase`
- Button labels: `text-transform: uppercase`
- Micro variant: Often used uppercase

**Always use Text component** for consistency:
```jsx
<Text variant="caption" weight="bold" className="uppercase">
  Section Title
</Text>
```

---

## 5. Spacing System

### 5.1 Padding Hierarchy (STRICT)

| Component Type | Padding | Tailwind | Usage |
|----------------|---------|----------|-------|
| **Atoms** | 16px | `p-4` | Buttons, inputs, chips |
| **Molecules** | 20px | `p-5` | Cards, list items |
| **Organisms** | 24px | `p-6` | Sections, containers |
| **Large Cards** | 28-32px | `p-7` or `p-8` | Balance cards, modals |

### 5.2 Gap System

| Name | Size | Tailwind | Usage |
|------|------|----------|-------|
| **Tight** | 8px | `gap-2` | Icon + label, small spacing |
| **Normal** | 12px | `gap-3` | Default component gaps |
| **Comfortable** | 16px | `gap-4` | Section items |
| **Loose** | 24px | `gap-6` | Major sections |
| **Extra Loose** | 32px | `gap-8` | Page sections |

### 5.3 Margin System

| Purpose | Size | Tailwind | Usage |
|---------|------|----------|-------|
| **Section Spacing** | 16px | `mb-4` | Between content sections |
| **Large Sections** | 32px | `mb-8` | Major page divisions |
| **Bottom Safe Area** | 112px | `pb-28` | For floating navigation |

### 5.4 Grid Systems

```css
/* 2-Column Grid (Stats, Settings) */
grid-template-columns: repeat(2, 1fr);
gap: 12px; /* gap-3 */

/* 3-Column Grid (Quick Actions) */
grid-template-columns: repeat(3, 1fr);
gap: 12px; /* gap-3 */

/* 4-Column Grid (Contacts) */
grid-template-columns: repeat(4, 1fr);
gap: 12px; /* gap-3 */

/* Number Pad */
grid-template-columns: repeat(3, 1fr);
gap: 12px; /* gap-3 */
```

---

## 6. Shadows & Elevation

### 6.1 Elevation Hierarchy

| Level | Name | Value | Usage |
|-------|------|-------|-------|
| **0** | Flat | None | Backgrounds, dividers |
| **1** | Raised | `shadow-sm` | Buttons, chips, inputs |
| **2** | Floating | `shadow-md` | Standard cards, menus |
| **3** | Modal | `shadow-card` | Balance cards, overlays |
| **4** | Overlay | `shadow-lg` | Dropdowns, tooltips |

### 6.2 Shadow Specifications

```css
/* Level 1 - Raised */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* Level 2 - Floating */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
            0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Level 3 - Modal (Card) */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
            0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Level 4 - Overlay */
box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
```

### 6.3 Hover State Shadow Progression

```css
/* Default → Hover */
shadow-sm → hover:shadow-md
shadow-md → hover:shadow-card
shadow-card → hover:shadow-lg
```

---

## 7. Border Radius

### 7.1 Radius Scale

| Token | Value | Tailwind | Usage |
|-------|-------|----------|-------|
| **sm** | 8px | `rounded-lg` | Small elements |
| **md** | 12px | `rounded-xl` | Badges, chips |
| **lg** | 16px | `rounded-xl` | Icon containers, buttons |
| **xl** | 20px | `rounded-2xl` | Standard cards |
| **2xl** | 24px | `rounded-2xl` | Large cards |
| **3xl** | 32px | `rounded-3xl` | Balance cards, hero cards |
| **full** | 9999px | `rounded-full` | Avatars, circular buttons |

### 7.2 Component-Specific Radius

| Component | Radius | Value |
|-----------|--------|-------|
| Avatars | `rounded-full` | Circle |
| Icon Buttons | `rounded-full` | Circle |
| Regular Buttons | `rounded-xl` | 16px |
| Standard Cards | `rounded-2xl` | 24px |
| Balance Cards | `rounded-3xl` | 32px |
| Icon Containers | `rounded-xl` | 16px |
| Badges | `rounded-full` | Pill shape |
| Inputs | `rounded-2xl` | 24px |

---

## 8. Component Library

### 8.1 Atoms

#### Avatar

**Purpose:** Display user or entity initials

**Variants:** sm (36px), md (44px), lg (56px), xl (80px)

**Anatomy:**
- Circular shape (`rounded-full`)
- Single letter initial
- Colored background
- White text
- Bold weight

**Props:**
```typescript
interface AvatarProps {
  initial: string;        // Single character
  color: string;          // HSL color value
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}
```

**States:**
- Default: Full color, no border
- Interactive (button): Add focus ring

**Accessibility:**
- Not interactive by default
- If clickable, wrap in button with aria-label

---

#### IconButton

**Purpose:** Single icon action button

**Variants:** default, ghost, primary

**Sizes:** sm (40px), md (44px), lg (48px)

**Anatomy:**
- Circular shape (`rounded-full`)
- Icon centered
- Proper touch target (minimum 44px)

**Props:**
```typescript
interface IconButtonProps {
  icon: LucideIcon;
  variant?: 'default' | 'ghost' | 'primary';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  ariaLabel: string;      // REQUIRED for accessibility
  className?: string;
}
```

**States:**
1. **Default**:
   - `bg-card/80 backdrop-blur-nav`
   - `border border-border/30`
   - `shadow-sm`

2. **Hover**:
   - `hover:bg-muted/70`
   - `hover:shadow-md`

3. **Active**:
   - `active:scale-[0.98]`

4. **Focus**:
   - `focus-visible:outline-none`
   - `focus-visible:ring-2`
   - `focus-visible:ring-primary`

5. **Disabled**:
   - `disabled:opacity-50`
   - `disabled:cursor-not-allowed`

---

#### Text

**Purpose:** All typography in the app

**Variants:** display, h1, h2, h3, h4, body-large, body, body-small, caption, micro

**Weights:** normal (400), medium (500), semibold (600), bold (700)

**Props:**
```typescript
interface TextProps {
  children: ReactNode;
  variant?: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 
            'body-large' | 'body' | 'body-small' | 
            'caption' | 'micro';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
  style?: CSSProperties;
}
```

**Usage:**
```jsx
<Text variant="h2" weight="bold">Page Title</Text>
<Text variant="body" className="text-muted-foreground">
  Description text
</Text>
```

---

### 8.2 Molecules

#### QuickAction

**Purpose:** Primary action button with icon and label

**Anatomy:**
- Icon container (48px, colored, `rounded-xl`)
- Label below (caption, uppercase)
- Card wrapper with transparency

**Structure:**
```
┌─────────────────┐
│                 │
│   ┌─────────┐   │
│   │  Icon   │   │  ← 48px colored circle
│   └─────────┘   │
│                 │
│     LABEL       │  ← Caption, uppercase
│                 │
└─────────────────┘
   ↑ Card bg-card/80 backdrop-blur
```

**Props:**
```typescript
interface QuickActionProps {
  icon: LucideIcon;
  label: string;
  color: string;          // HSL for icon background
  onClick?: () => void;
  isPrimary?: boolean;
}
```

**States:**
1. Default: `shadow-sm`
2. Hover: `hover:bg-muted/70 hover:shadow-md`
3. Active: `active:scale-[0.98]`
4. Focus: `focus-visible:ring-2 focus-visible:ring-primary`

**Spacing:**
- Padding: `p-5` (20px)
- Gap: `gap-3` (12px)
- Icon size: 24px, strokeWidth: 2

---

#### BalanceCard

**Purpose:** Display account balance with details

**Anatomy:**
- Gradient or solid background
- Transparency overlay (`bg-white/10`)
- Balance label + amount
- Eye toggle for visibility
- Account details (number, type, valid thru)
- Status indicator

**Structure:**
```
┌───────────────────────────────┐
│ TOTAL BALANCE     👁          │
│ ₹12,450                       │
│                               │
│ ACCOUNT NUMBER    VALID THRU  │
│ XXXX - 5689       07/29       │
│ VIRTUAL           ● ACTIVE    │
└───────────────────────────────┘
  ↑ Rounded-3xl, shadow-card
```

**Props:**
```typescript
interface BalanceCardProps {
  balance: number;
  label: string;
  accountNumber: string;
  type: string;
  validThru: string;
  status: string;
  backgroundColor: string;    // HSL or hex
  textColor?: string;         // Default: '#141414'
}
```

**States:**
- Balance hidden: Display dots (••••••)
- Balance visible: Display formatted number
- Eye icon toggles visibility

**Spacing:**
- Padding: `p-7` (28px)
- Inner gaps: `gap-8` between sections

---

#### TransactionItem

**Purpose:** Display single transaction in list

**Anatomy:**
- Avatar/icon (44px)
- Name + type/date
- Amount (positive/negative colored)

**Structure:**
```
┌────────────────────────────────────┐
│ [A] Name          -₹1,245          │
│     Type • Date                    │
└────────────────────────────────────┘
  ↑ Min height: 72px
```

**Props:**
```typescript
interface TransactionItemProps {
  name: string;
  type: string;
  amount: string;
  date: string;
  initial: string;
  color: string;
  isPositive?: boolean;
  onClick?: () => void;
}
```

**States:**
1. Default: Transparent background
2. Hover: `hover:bg-muted/70`
3. Active: `active:scale-[0.98]`
4. Focus: `focus-visible:ring-2`

**Spacing:**
- Padding: `p-4` (16px)
- Gap: `gap-3` (12px)
- Min height: `min-h-[72px]`

---

### 8.3 Organisms

#### BottomNav

**Purpose:** Main application navigation

**Anatomy:**
- 5 navigation items (Home, Analytics, Wallet, Send Money, Profile)
- Icon + label for each
- Active state with yellow background
- Floating card with blur

**Structure:**
```
┌──────────────────────────────────────┐
│  🏠    📊    💰    📤    👤         │
│ Home Analytics Wallet Send Profile  │
└──────────────────────────────────────┘
  ↑ Fixed bottom, bg-card/70 backdrop-blur
```

**Active State (FIXED):**
- Background: `bg-primary` (full yellow)
- Text: `text-primary-foreground` (#141414)
- Icon strokeWidth: 2.5
- Rounded: `rounded-xl`

**Inactive State:**
- Background: Transparent
- Text: `text-muted-foreground`
- Icon strokeWidth: 2
- Hover: `hover:bg-muted/70`

**Spacing:**
- Height: Auto (~64px with padding)
- Padding: `px-2 py-3`
- Item padding: `px-3 py-2`
- Gap: `justify-around` (even distribution)
- Bottom margin: `bottom-4` (floating)
- Touch targets: Minimum 44x44px

**Props:**
```typescript
interface BottomNavProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}
```

**Accessibility:**
- `role="navigation"`
- `aria-label="Main navigation"`
- `aria-current="page"` on active item

---

#### Header

**Purpose:** Page title and actions

**Variants:**
1. Home: Avatar + Name + Notification
2. Standard: Back button + Title + Action
3. Profile: Title + Settings

**Anatomy:**
```
┌──────────────────────────────────┐
│ [Avatar] Name           [Bell]   │
│          Greeting                │
└──────────────────────────────────┘
```

**Spacing:**
- Padding: `px-5 py-4`
- Gap: `gap-3` between elements
- Height: Auto (min 80px)

---

## 9. Interaction Patterns

### 9.1 Standard Interactive States

**ALL interactive elements MUST have:**

```css
/* 1. Default State */
/* Component's default appearance */

/* 2. Hover State */
hover:bg-muted/70
hover:shadow-md

/* 3. Active/Pressed State */
active:scale-[0.98]

/* 4. Focus State (Keyboard Navigation) */
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary

/* 5. Disabled State */
disabled:opacity-50
disabled:cursor-not-allowed
```

### 9.2 Animation & Transitions

**Duration:** 200ms (0.2s)

**Easing:** `ease-out` or `cubic-bezier(0.4, 0, 0.2, 1)`

**Properties:**
```css
transition-all duration-200 ease-out
```

**Transform-only for performance:**
- Use `transform` and `opacity` only
- Avoid animating `width`, `height`, `top`, `left`

### 9.3 Touch Targets

**Minimum:** 44x44px

**Comfortable:** 48x48px or larger

**Exceptions:** 
- If touch target is smaller than 44px, expand hit area with padding
- Pagination dots: 12x12px visual, 44x44px hit area

### 9.4 Loading States

**Button Loading:**
```jsx
<button disabled className="relative">
  <span className={loading ? 'opacity-0' : ''}>
    Button Text
  </span>
  {loading && (
    <div className="absolute inset-0 flex items-center justify-center">
      <Spinner />
    </div>
  )}
</button>
```

**Skeleton Loaders:**
- Use for content placeholders
- Animate with `animate-pulse`
- Match actual content dimensions

---

## 10. Accessibility Standards

### 10.1 Color Contrast

**WCAG AA Requirements:**
- Normal text: 4.5:1
- Large text (18px+ or 14px+ bold): 3:1
- Icons and UI components: 3:1

**Current Compliance:**
- ✓ Foreground on Background: 9.8:1 (AAA)
- ✓ Primary on Yellow: 8.2:1 (AA)
- ✓ Muted Foreground: 4.6:1 (AA)
- ✓ All accent colors verified

### 10.2 Keyboard Navigation

**Required:**
- All interactive elements must be focusable
- Tab order must be logical
- Focus indicators must be visible
- Enter/Space must activate buttons

**Implementation:**
```jsx
<button
  tabIndex={0}
  className="focus-visible:ring-2 focus-visible:ring-primary"
  aria-label="Descriptive label"
>
  Content
</button>
```

### 10.3 ARIA Labels

**Required for:**
- Icon-only buttons
- Form inputs (with proper label association)
- Navigation landmarks
- Dynamic content updates

**Examples:**
```jsx
<IconButton 
  icon={Bell} 
  ariaLabel="Notifications" 
/>

<nav 
  role="navigation" 
  aria-label="Main navigation"
>
  {/* nav content */}
</nav>

<button aria-current="page">
  Home
</button>

<input 
  aria-label="Search contacts"
  type="text"
/>
```

### 10.4 Screen Reader Support

**Semantic HTML:**
- Use `<button>` for actions
- Use `<a>` for navigation
- Use proper heading hierarchy
- Use `<main>`, `<nav>`, `<aside>` landmarks

**Live Regions:**
```jsx
<div 
  role="status" 
  aria-live="polite"
  aria-atomic="true"
>
  Balance updated: ₹12,450
</div>
```

---

## 11. Figma Import Guide

### 11.1 Design Token Structure

**Create these token sets in Figma:**

1. **Color Tokens**
   - Primitives: All HSL colors
   - Semantic: background, foreground, primary, etc.
   - Component: button-bg, card-bg, etc.

2. **Typography Tokens**
   - Font family: System
   - Font sizes: Display through Micro
   - Font weights: 400, 500, 600, 700
   - Line heights: tight, snug, normal, relaxed

3. **Spacing Tokens**
   - Base unit: 4px
   - Scale: 4, 8, 12, 16, 20, 24, 28, 32, 40, 48

4. **Shadow Tokens**
   - sm, md, card, lg
   - With exact blur, spread, offset values

5. **Border Radius Tokens**
   - sm through 3xl, full
   - 8px through 32px, 9999px

### 11.2 Component Library Setup

**Layer Naming Convention:**
```
Component/Variant/State

Examples:
- Avatar/md/default
- Button/primary/hover
- Card/balance/default
- TransactionItem/default/hover
```

**Auto Layout:**
- Use for all components
- Set proper constraints
- Define resizing behavior
- Add padding and gaps from token system

**Variants:**
- Size variants: sm, md, lg, xl
- Visual variants: default, primary, ghost
- State variants: default, hover, active, focus, disabled

### 11.3 Text Styles

**Create text styles for all typography variants:**

```
Typography/Display/Bold
Typography/H1/Bold
Typography/H2/Bold
Typography/H3/Bold
Typography/H4/Semibold
Typography/Body-Large/Normal
Typography/Body/Normal
Typography/Body-Small/Normal
Typography/Caption/Semibold
Typography/Micro/Semibold
```

**Include:**
- Font family
- Font size
- Font weight
- Line height
- Letter spacing

### 11.4 Color Styles

**Create color styles organized by category:**

```
Brand/Primary/Yellow
Brand/Primary/Yellow-Light
Brand/Primary/Yellow-Dark
Brand/Dark

Accent/Blue
Accent/Green
Accent/Red
Accent/Purple
Accent/Orange

Semantic/Success
Semantic/Success-Foreground
Semantic/Destructive
Semantic/Destructive-Foreground

Neutral/Background
Neutral/Foreground
Neutral/Card
Neutral/Border
Neutral/Muted
Neutral/Muted-Foreground
```

### 11.5 Effect Styles (Shadows)

**Create shadow effects:**

```
Shadow/sm
Shadow/md
Shadow/card
Shadow/lg
```

**For each, set:**
- Blur: Exact px value
- X/Y offset: Exact values
- Spread: 0 or specified
- Color: rgba(0, 0, 0, opacity)

### 11.6 Component Properties

**For each component, define:**

1. **Boolean Properties**
   - isActive (for navigation)
   - isDisabled
   - isPrimary
   - isPositive (for amounts)

2. **Variant Properties**
   - size: sm | md | lg | xl
   - variant: default | primary | ghost
   - color: various options

3. **Instance Swap Properties**
   - icon (for icon buttons, quick actions)

4. **Text Properties**
   - label
   - value
   - amount

### 11.7 Component States

**Create variants for all states:**

```
Component/State

Button/default
Button/hover
Button/active
Button/focus
Button/disabled

Card/default
Card/hover
Card/focus
```

### 11.8 Opacity & Transparency

**Create transparency variants:**
- Card opacity: 80% (0.8)
- Navigation: 70% (0.7)
- Overlay: 40% (0.4)
- Hover: 70% (0.7)

**Add backdrop blur:**
- Use Figma's background blur effect
- Set to 12px for cards/navigation

### 11.9 Grid Systems

**Create layout grids:**

```
Mobile Grid (428px max width)
- Columns: 12
- Gutter: 16px
- Margin: 20px

Component Grids:
- 2-column: gap 12px
- 3-column: gap 12px
- 4-column: gap 12px
```

### 11.10 Export Settings

**For development handoff:**

1. **SVG Export**
   - Icons: Outline, no fill
   - Illustrations: Include all layers

2. **PNG Export**
   - @2x for retina displays
   - Transparent backgrounds

3. **Component Specs**
   - Include padding, margins
   - Document spacing
   - Note color tokens used
   - Specify font styles

### 11.11 Figma Plugin Recommendations

**Essential Plugins:**
1. **Tokens Studio** - Design token management
2. **Contrast** - Check color contrast ratios
3. **Stark** - Accessibility checker
4. **Lorem Ipsum** - Generate placeholder text
5. **Unsplash** - Stock images for mockups

---

## 12. Implementation Checklist

### Before Launch

**Design System:**
- [x] All color tokens defined
- [x] Typography scale complete
- [x] Spacing system standardized
- [x] Shadow elevation system defined
- [x] Border radius scale complete

**Components:**
- [x] All atoms documented with states
- [x] All molecules documented with states
- [x] All organisms documented with states
- [x] Component props interfaces defined
- [x] Accessibility requirements noted

**Interactions:**
- [x] Active state standardized (scale-[0.98])
- [x] Hover states defined
- [x] Focus states implemented
- [x] Disabled states documented
- [x] Touch targets verified (≥44px)

**Accessibility:**
- [x] Color contrast ratios verified
- [x] ARIA labels required
- [x] Keyboard navigation supported
- [x] Screen reader compatibility
- [x] Semantic HTML enforced

**Content:**
- [x] 10 transactions on home screen
- [x] 8 frequent contacts
- [x] 8 recent recipients
- [x] Variety in transaction types
- [x] Realistic data examples

**Visual Polish:**
- [x] Yellow accent properly used
- [x] Pagination dots use yellow
- [x] Active nav uses full yellow bg
- [x] Transparency standardized
- [x] Backdrop blur consistent

---

## 13. Code Examples

### 13.1 Using Design Tokens in Code

**Colors:**
```jsx
// HSL format for theming
const primary = 'hsl(48, 100%, 50%)';
const foreground = 'hsl(0, 0%, 10%)';

// With Tailwind
className="bg-primary text-primary-foreground"
```

**Typography:**
```jsx
// Using Text component
<Text variant="h2" weight="bold">
  Page Title
</Text>

// Never use direct className for typography
// ❌ Wrong
<h2 className="text-2xl font-bold">Title</h2>

// ✓ Correct
<Text variant="h2" weight="bold">Title</Text>
```

**Spacing:**
```jsx
// Atoms (buttons, inputs)
className="p-4"  // 16px

// Molecules (cards, items)
className="p-5"  // 20px

// Organisms (sections)
className="p-6"  // 24px

// Gaps
className="gap-3"  // 12px default
```

**Shadows:**
```jsx
// Component shadows
className="shadow-sm"     // Buttons
className="shadow-md"     // Cards
className="shadow-card"   // Balance cards
className="shadow-lg"     // Modals

// With hover
className="shadow-sm hover:shadow-md"
```

**Transparency:**
```jsx
// Standard card
className="bg-card/80 backdrop-blur-nav border border-border/30"

// Navigation
className="bg-card/70 backdrop-blur-nav"

// Hover overlay
className="hover:bg-muted/70"
```

### 13.2 Complete Component Example

```jsx
const QuickAction = ({ icon: Icon, label, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        flex flex-col items-center gap-3
        p-5 rounded-2xl
        bg-card/80 backdrop-blur-nav 
        border border-border/30
        shadow-sm hover:shadow-md
        hover:bg-muted/70
        active:scale-[0.98]
        focus-visible:outline-none 
        focus-visible:ring-2 
        focus-visible:ring-primary
        transition-all duration-200
      "
    >
      <div
        style={{ backgroundColor: color }}
        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm"
      >
        <Icon size={24} color="#FFFFFF" strokeWidth={2} />
      </div>
      <Text variant="caption" weight="medium" className="text-foreground uppercase">
        {label}
      </Text>
    </button>
  );
};
```

---

## 14. Migration Guide (V13 → V14)

### Breaking Changes

1. **Active State:**
   - Old: `active:scale-[0.95]`
   - New: `active:scale-[0.98]`

2. **Navigation Active:**
   - Old: `bg-primary/15`
   - New: `bg-primary` (full yellow)

3. **Typography:**
   - Must use Text component everywhere
   - No direct className for font sizes

4. **Spacing:**
   - Strict padding hierarchy enforced
   - All gaps standardized

### Migration Steps

1. Update all `active:scale-[0.95]` to `active:scale-[0.98]`
2. Update BottomNav active state to full yellow
3. Replace all direct typography with Text component
4. Standardize all padding to hierarchy
5. Add missing focus-visible states
6. Add ARIA labels to all icon buttons
7. Verify all touch targets ≥44px

---

## 15. Design System Maintenance

### Version Control

**Semantic Versioning:**
- Major: Breaking changes (v14.0.0 → v15.0.0)
- Minor: New features, no breaking (v14.0.0 → v14.1.0)
- Patch: Bug fixes (v14.0.0 → v14.0.1)

### Change Log

**V14.0.0 (Current)**
- Enhanced typography with 1.333 scale
- Standardized active state to scale-[0.98]
- Complete accessibility implementation
- Fixed yellow accent usage
- Added 10 transactions, 8 contacts
- Comprehensive state documentation

**V13.0.0**
- Modern clean design
- Transparency introduction
- Card stacking effects

**V12.0.0**
- Material Icons migration
- 5-item navigation
- Profile simplification

### Contributing Guidelines

**When adding new components:**
1. Follow atomic design principles
2. Use existing design tokens
3. Implement all 5 states (default, hover, active, focus, disabled)
4. Add ARIA labels
5. Document in design system
6. Create Figma component

**When modifying existing:**
1. Check for breaking changes
2. Update all instances
3. Update documentation
4. Bump version appropriately

---

## 16. Resources

### Design Assets
- Figma File: [Link to Figma]
- Icon Library: Lucide React
- Font: System Fonts (no downloads needed)

### Development
- React + TypeScript
- Tailwind CSS
- Lucide Icons
- CSS Variables for theming

### Documentation
- V14 Design System (this document)
- Heuristic Analysis Report
- Component Library Reference
- Accessibility Guidelines

### Tools
- Figma (design)
- VS Code (development)
- Chrome DevTools (debugging)
- Stark (accessibility testing)

---

## 17. Contact & Support

**Design System Team**
- Version: 14.0
- Last Updated: January 2025
- Status: ✓ Production Ready

**For Questions:**
- Design decisions: Design team
- Implementation: Development team
- Accessibility: Accessibility team
- Bugs/Issues: GitHub Issues

---

## Appendix A: Complete Token Reference

```json
{
  "v14-design-tokens": {
    "color": {
      "background": "0 0% 98%",
      "foreground": "0 0% 10%",
      "card": "0 0% 100%",
      "border": "0 0% 89%",
      "muted": "0 0% 93%",
      "muted-foreground": "0 0% 45%",
      "primary": "48 100% 50%",
      "primary-foreground": "0 0% 8%",
      "success": "142 71% 45%",
      "destructive": "0 84% 60%",
      "accent-blue": "217 91% 60%",
      "accent-green": "142 71% 45%",
      "accent-red": "0 84% 60%",
      "accent-purple": "258 90% 66%",
      "accent-orange": "25 95% 53%"
    },
    "typography": {
      "display": { "size": "40px", "weight": "700", "lineHeight": "1.25" },
      "h1": { "size": "32px", "weight": "700", "lineHeight": "1.25" },
      "h2": { "size": "24px", "weight": "700", "lineHeight": "1.375" },
      "h3": { "size": "18px", "weight": "700", "lineHeight": "1.5" },
      "h4": { "size": "16px", "weight": "600", "lineHeight": "1.5" },
      "body-large": { "size": "15px", "weight": "400", "lineHeight": "1.625" },
      "body": { "size": "14px", "weight": "400", "lineHeight": "1.625" },
      "body-small": { "size": "12px", "weight": "400", "lineHeight": "1.625" },
      "caption": { "size": "11px", "weight": "600", "lineHeight": "1.25" },
      "micro": { "size": "10px", "weight": "600", "lineHeight": "1.25" }
    },
    "spacing": {
      "atoms": "16px",
      "molecules": "20px",
      "organisms": "24px",
      "large-cards": "28px",
      "gap-tight": "8px",
      "gap-normal": "12px",
      "gap-comfortable": "16px",
      "gap-loose": "24px",
      "gap-extra-loose": "32px"
    },
    "shadow": {
      "sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "md": "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "card": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "lg": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    "radius": {
      "sm": "8px",
      "md": "12px",
      "lg": "16px",
      "xl": "20px",
      "2xl": "24px",
      "3xl": "32px",
      "full": "9999px"
    },
    "opacity": {
      "card": "0.8",
      "navigation": "0.7",
      "overlay": "0.4",
      "hover": "0.7",
      "disabled": "0.5"
    },
    "blur": {
      "nav": "12px",
      "overlay": "8px"
    }
  }
}
```

---

## Appendix B: Component State Matrix

| Component | Default | Hover | Active | Focus | Disabled |
|-----------|---------|-------|--------|-------|----------|
| **IconButton** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **QuickAction** | ✓ | ✓ | ✓ | ✓ | - |
| **TransactionItem** | ✓ | ✓ | ✓ | ✓ | - |
| **BalanceCard** | ✓ | - | - | - | - |
| **BottomNav** | ✓ | ✓ | ✓ | ✓ | - |
| **Avatar** | ✓ | - | - | - | - |
| **Text** | ✓ | - | - | - | - |

---

*End of V14 Design System Documentation*