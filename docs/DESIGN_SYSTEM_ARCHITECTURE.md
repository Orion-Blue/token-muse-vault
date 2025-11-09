# Design System Architecture

This document explains the complete design system architecture and how tokens are organized for scalability and maintainability.

## Three-Layer Token Architecture

### Layer 1: Core (Primitives)
**Purpose**: Foundation layer with raw, immutable values

```
core/
├── color/          # Color palettes (neutral, brand, semantic colors)
├── typography/     # Font families, sizes, weights, line heights
├── spacing/        # Spacing scale (0-24)
├── borderRadius/   # Border radius values
├── borderWidth/    # Border widths
└── sizing/         # Component sizing scale
```

**Key Principles**:
- Never references other tokens
- Contains only hard-coded values
- Source of truth for all visual properties
- Should rarely change once established

**Example**:
```json
{
  "core": {
    "color": {
      "brand": {
        "500": { "value": "#FFCC00", "type": "color" }
      }
    },
    "spacing": {
      "4": { "value": "16px", "type": "spacing" }
    }
  }
}
```

### Layer 2: Semantic (Themes)
**Purpose**: Contextual tokens that provide meaning and support theming

```
semantic/
├── light/
│   ├── surface/      # Backgrounds, cards, popovers
│   ├── interactive/  # Primary, secondary, accent
│   ├── feedback/     # Success, error states
│   └── ui/          # Borders, inputs, rings
└── dark/
    ├── surface/
    ├── interactive/
    ├── feedback/
    └── ui/
```

**Key Principles**:
- Always references core tokens
- Organized by purpose, not property
- Enables theme switching
- Should be used in components, not core

**Example**:
```json
{
  "semantic": {
    "light": {
      "interactive": {
        "primary": { "value": "{core.color.brand.500}", "type": "color" }
      },
      "surface": {
        "background": { "value": "{core.color.neutral.50}", "type": "color" }
      }
    }
  }
}
```

### Layer 3: Component (Specific)
**Purpose**: Component-specific tokens for consistent implementation

```
component/
├── button/    # Button variants and sizes
├── card/      # Card styling
├── input/     # Input fields
└── [etc]/     # Other components
```

**Key Principles**:
- References core and semantic tokens
- Maps directly to UI components
- Enables consistent component APIs
- Makes design-to-code handoff seamless

**Example**:
```json
{
  "component": {
    "button": {
      "padding": {
        "md": { "value": "{core.spacing.3} {core.spacing.4}", "type": "spacing" }
      },
      "height": {
        "md": { "value": "{core.sizing.md}", "type": "sizing" }
      }
    }
  }
}
```

## Theme Configuration

Themes are defined in the `$themes` array and control which token sets are active:

```json
{
  "$themes": [
    {
      "id": "light",
      "name": "Light Theme",
      "selectedTokenSets": {
        "core": "enabled",
        "semantic/light": "enabled",
        "component": "enabled"
      }
    },
    {
      "id": "dark",
      "name": "Dark Theme",
      "selectedTokenSets": {
        "core": "enabled",
        "semantic/dark": "enabled",
        "component": "enabled"
      }
    }
  ]
}
```

## Token Naming Conventions

### Core Tokens
- Use descriptive, property-based names
- Include scale values: `50, 100, 200...950`
- Format: `{category}.{subcategory}.{scale}`
- Example: `core.color.neutral.500`

### Semantic Tokens
- Use purpose-based names
- Group by context (surface, interactive, feedback, ui)
- Format: `semantic.{theme}.{purpose}.{variant}`
- Example: `semantic.light.interactive.primary`

### Component Tokens
- Use component and property names
- Format: `component.{component}.{property}.{size}`
- Example: `component.button.padding.md`

## Token References

Tokens can reference other tokens using the `{token.path}` syntax:

```json
{
  "value": "{core.color.brand.500}",
  "type": "color"
}
```

**Rules**:
- Core tokens → Never reference other tokens
- Semantic tokens → Reference core tokens only
- Component tokens → Reference core or semantic tokens

## Extending the System

### Adding a New Color
1. Add to `core.color` with full scale (50-950)
2. Add semantic mappings in `semantic.light` and `semantic.dark`
3. Create component tokens if needed

### Adding a New Theme
1. Duplicate `semantic.light` or `semantic.dark`
2. Rename to new theme name (e.g., `semantic.highContrast`)
3. Update color values as needed
4. Add theme configuration to `$themes`

### Adding Component Tokens
1. Create new component object under `component`
2. Define size variants (sm, md, lg)
3. Reference existing core/semantic tokens
4. Document in component library

## Best Practices

1. **Never use hard-coded values in components** - Always use semantic or component tokens
2. **Keep core tokens stable** - Changes affect entire system
3. **Use semantic tokens for theming** - Don't reference core directly in components
4. **Maintain token hierarchy** - Core → Semantic → Component
5. **Test theme switching** - Ensure all semantic tokens work in both themes
6. **Document new tokens** - Update this guide when extending the system

## Token Studio Integration

This token structure is optimized for:
- **Figma Tokens Studio Plugin** - Direct import to Figma
- **Token Studio Web** - Cloud-based token management
- **Style Dictionary** - Token transformation for code
- **Version Control** - Git-friendly JSON format

See `TOKEN_STUDIO_WEB_GUIDE.md` for Figma integration instructions.

## Maintenance Guidelines

### Monthly Review
- Audit unused tokens
- Check for hardcoded values in components
- Validate theme coverage

### Quarterly Updates
- Review token naming consistency
- Evaluate new component needs
- Update documentation

### Version Control
- Commit token changes separately
- Document breaking changes
- Maintain changelog
