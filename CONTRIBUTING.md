# Contributing to V14 Design System

Thank you for your interest in contributing to the V14 Design System! This document provides guidelines and instructions for contributing.

---

## 🎯 Design Token Principles

When contributing, please adhere to these core principles:

### 1. Token-First Approach
- All visual changes must derive from design tokens
- Never use hard-coded values in components
- Update tokens in `src/index.css` and `tailwind.config.ts`

### 2. Maintain Consistency
- Follow the 1.333 typography scale (Perfect Fourth)
- Use component-based spacing (16px/20px/24px)
- Apply `active:scale-[0.98]` for all interactive elements

### 3. Accessibility
- Maintain WCAG AA contrast ratios
- Include proper ARIA labels
- Ensure keyboard navigation works
- Test with screen readers

---

## 🛠️ Development Setup

```bash
# Fork and clone the repository
git clone <your-fork-url>
cd v14-design-system

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 📝 Making Changes

### Token Updates

**Updating Colors:**
```css
/* src/index.css */
:root {
  --new-color: [h s% l%];  /* Must be HSL */
}
```

```typescript
// tailwind.config.ts
colors: {
  'new-color': 'hsl(var(--new-color))',
}
```

**Updating Typography:**
```css
/* src/index.css */
.text-new-size {
  font-size: [size]px;
  line-height: [ratio];
  font-weight: [weight];
  letter-spacing: [spacing]px;
}
```

**Updating Spacing:**
```css
:root {
  --spacing-new: [size]px;
}
```

### Component Changes

- Use existing Shadcn/ui components as base
- Customize via token-based classes
- Maintain TypeScript types
- Include proper prop documentation

---

## ✅ Checklist Before Submitting

- [ ] Changes follow token-first approach
- [ ] No hard-coded values in components
- [ ] Typography uses defined scale
- [ ] Colors use HSL format
- [ ] Accessibility standards maintained
- [ ] TypeScript types included
- [ ] Documentation updated
- [ ] Tested across breakpoints
- [ ] Figma tokens updated (if applicable)

---

## 🧪 Testing

```bash
# Run linter
npm run lint

# Build for production
npm run build

# Test in browser
npm run preview
```

**Manual Testing:**
- Test on mobile (428px)
- Test on tablet (768px)
- Test on desktop (1440px+)
- Test dark mode (if applicable)
- Test keyboard navigation
- Test screen reader compatibility

---

## 📚 Documentation

When making changes that affect:

**Design Tokens**
- Update `design-tokens/tokens.json`
- Update `design-tokens/figma-tokens.json`
- Update token documentation in `design-tokens/README.md`

**Components**
- Add JSDoc comments
- Include usage examples
- Update component documentation

**Design System**
- Update `docs/DESIGN_SYSTEM.md`
- Include before/after examples
- Document breaking changes

---

## 🎨 Figma Sync

If changes affect Figma tokens:

1. Update `design-tokens/figma-tokens.json`
2. Test import into Figma
3. Document any manual steps needed
4. Update `docs/FIGMA_IMPORT_GUIDE.md`

---

## 🚫 What Not to Do

- ❌ Don't use hard-coded colors (e.g., `#FFCC00`, `bg-yellow-500`)
- ❌ Don't use arbitrary values (e.g., `p-[23px]`)
- ❌ Don't break from typography scale
- ❌ Don't add unnecessary dependencies
- ❌ Don't reduce accessibility
- ❌ Don't skip documentation

---

## 🐛 Bug Reports

When reporting bugs, include:

1. **Description**: Clear description of the issue
2. **Steps to Reproduce**: Exact steps to trigger the bug
3. **Expected Behavior**: What should happen
4. **Actual Behavior**: What actually happens
5. **Environment**: Browser, OS, screen size
6. **Screenshots**: If applicable

---

## 💡 Feature Requests

When requesting features:

1. **Use Case**: Why is this needed?
2. **Proposed Solution**: How should it work?
3. **Alternatives**: Other approaches considered?
4. **Token Impact**: Will this require new tokens?

---

## 📋 Pull Request Process

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow code style
   - Write meaningful commits
   - Update documentation

3. **Test thoroughly**
   - Run build
   - Test manually
   - Check accessibility

4. **Submit PR**
   - Clear title and description
   - Link related issues
   - Include screenshots if UI changes

5. **Address feedback**
   - Respond to review comments
   - Make requested changes
   - Keep PR focused

---

## 🎯 Commit Messages

Follow conventional commits:

```
feat: add new color token for success states
fix: correct spacing in card component
docs: update Figma import guide
refactor: improve button token usage
style: format CSS custom properties
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

---

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the work, not the person
- Help others learn and grow

---

## 📞 Questions?

- Open a GitHub Discussion
- Comment on existing issues
- Review documentation first

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to V14 Design System! 🙏
