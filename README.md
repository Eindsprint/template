# Design System Template

A Next.js-based design system with strict component patterns and design token enforcement.

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the design system.

## 📐 Architecture Principles

### Component Wrapper Pattern
Every component is wrapped to enforce design system rules:
- **Restricted props** - Only specific values allowed
- **Design tokens only** - No arbitrary colors or sizes
- **TypeScript safety** - Invalid props won't compile

### Page Structure Pattern
All component pages follow the same layout:
1. **Props section** at the top with interactive toggles
2. **Variants section** showing all component variations
3. Props displayed as code snippets with proper syntax

## 🎨 Design System Rules

### Colors
We use ONLY our defined color tokens. No exceptions.

**Allowed:**
- CSS variables from `globals.css` (e.g., `var(--primary-blue)`)
- White, black, transparent

**Not Allowed:**
- Mantine colors (`var(--mantine-color-*)`)
- Hex codes outside of `globals.css`
- CSS color names ('red', 'blue', etc.)

### Component Props
- Prefer **boolean props** (`small={true}`) over enums (`size="small"`)
- Use TypeScript to restrict all values
- Provide sensible defaults

## 📁 Project Structure

```
src/
├── components/           # Component wrappers with restrictions
│   ├── Button.tsx       # Restricts to primary/secondary/text
│   ├── BadgeWrapper.tsx # Maps states to design colors
│   └── TableWrapper.tsx # Boolean props for features
├── app/                 # Demo pages for each component
│   ├── buttons/        # Shows Props + Variants
│   ├── badges/         # Interactive prop toggles
│   └── tables/         # Configurable table demos
└── globals.css         # All design tokens defined here
```

## 🧩 Component Examples

### Creating a New Component

1. **Create the wrapper** (`src/components/MyComponent.tsx`):
```typescript
interface MyComponentProps {
  variant?: 'option1' | 'option2';  // Restricted options
  active?: boolean;                  // Boolean props preferred
}
```

2. **Create the demo page** (`src/app/mycomponent/page.tsx`):
```typescript
// Props section with toggles
// Variants section with examples
```

3. **Add to navigation** (`src/components/DoubleNavbar.tsx`)

4. **Export it** (`src/components/index.ts`)

## 📋 Component Checklist

When adding a new component:

- [ ] Wrapper restricts all props
- [ ] Only design system colors used
- [ ] Demo page has Props section first
- [ ] All variants are displayed
- [ ] Props shown as code snippets
- [ ] Added to navigation
- [ ] TypeScript prevents invalid usage

## 🛠 Development Workflow

1. **Check existing patterns** - Look at Button, Badge, Table components
2. **Follow the structure** - Props → Variants
3. **Use design tokens** - Never hardcode colors
4. **Test interactivity** - All toggles should work
5. **Verify restrictions** - TypeScript should prevent misuse

## 👥 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 🎯 Key Principles

1. **Consistency** - All components follow the same patterns
2. **Restriction** - Components can only be used correctly
3. **Clarity** - Props are displayed exactly as they're used in code
4. **Interactivity** - Toggles show real-time changes
5. **Type Safety** - TypeScript enforces all rules
