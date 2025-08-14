# Contributing to the Design System

## 🎨 Component Development Guidelines

### Component Structure

Every component in our design system follows a consistent pattern:

#### 1. **Component Wrapper Pattern**
All components should have a wrapper that:
- Restricts props to approved values only
- Uses design system tokens (never hardcoded colors)
- Provides TypeScript type safety

```typescript
// ✅ Good - Restricted props with specific types
interface ComponentWrapperProps {
  state?: 'success' | 'warning' | 'error' | 'information';
  size?: 'xs' | 'md';  // Only allowed sizes
  condensed?: boolean;  // Boolean props for variants
}

// ❌ Bad - Open-ended props
interface ComponentProps {
  color?: string;  // Too flexible
  size?: string;   // No restrictions
}
```

#### 2. **Page Layout Pattern**
Component demonstration pages must follow this structure:

```typescript
// src/app/[component-name]/page.tsx

export default function ComponentPage() {
  // 1. Props state management
  const [propName, setPropName] = useState(false);

  return (
    <Stack gap="xl">
      {/* Page Header */}
      <div>
        <Title>Component Name</Title>
        <Text style={{ color: 'var(--grey)' }}>
          Description
        </Text>
      </div>

      {/* Props Section - ALWAYS at the top */}
      <div>
        <Title order={3}>Props</Title>
        <Stack gap="sm">
          <Switch
            label={
              <Text ff="monospace" style={{
                backgroundColor: 'var(--almost-white)',
                padding: '4px 8px',
                borderRadius: '4px'
              }}>
                propName={propName.toString()}
              </Text>
            }
            checked={propName}
            onChange={(e) => setPropName(e.currentTarget.checked)}
          />
        </Stack>
      </div>

      {/* Variants Section */}
      <div>
        <Title order={2}>Variants</Title>
        {/* Show all component variants */}
      </div>
    </Stack>
  );
}
```

### Design System Rules

#### Colors
- **ONLY use CSS variables** from our design system:
  - Primary: `var(--primary-blue)`, `var(--primary-dark-blue)`, `var(--primary-lightest-blue)`
  - Secondary: `var(--secondary-*)` 
  - Greys: `var(--almost-black)`, `var(--darker-grey)`, `var(--grey)`, `var(--light-grey)`, `var(--almost-white)`
  - States: `var(--state-error)`, `var(--state-success)`, `var(--state-warning)`, `var(--state-information)`
- **NEVER use**:
  - Mantine color variables (`var(--mantine-color-*)`)
  - Hardcoded hex/rgb colors (except in globals.css)
  - Color names like 'blue', 'red', 'green'

#### Props Display
- Show prop syntax exactly as it would be used in code
- Boolean props: `propName={true}` (no quotes)
- String props: `propName="value"` (with quotes)
- Use monospace font with grey background for all prop displays

#### Component Props
- Prefer **boolean props** over string enums when possible
  - ✅ `condensed={true}` instead of ❌ `spacing="condensed"`
  - ✅ `small={true}` instead of ❌ `size="small"`
- Restrict all options through TypeScript types
- Provide sensible defaults

### File Organization

```
src/
├── components/
│   ├── ComponentWrapper.tsx      # The wrapper component
│   ├── ComponentWrapper.module.css  # Component-specific styles
│   └── index.ts                  # Exports
└── app/
    └── component-name/
        └── page.tsx              # Demo page with Props + Variants
```

### Navigation
Add new components to `DoubleNavbar.tsx`:
1. Add to the Components section links array
2. Add to the componentsLinks path check

### Example Components to Reference
- **BadgeWrapper** - Shows state variants with color mapping
- **TableWrapper** - Shows boolean props for features
- **Button** - Shows variant restrictions and prop transformation

### Checklist for New Components

- [ ] Created wrapper component with restricted props
- [ ] Used only design system color variables
- [ ] Created demo page with Props section at top
- [ ] Added Variants section showing all options
- [ ] Used consistent prop display styling (monospace, grey bg)
- [ ] Added to navigation in DoubleNavbar
- [ ] Exported from components/index.ts
- [ ] TypeScript types restrict all inputs
- [ ] Boolean props used where appropriate
- [ ] No Mantine default colors used

### Testing Your Component
1. Toggle all props and verify behavior
2. Check that no non-design-system colors appear
3. Verify TypeScript prevents invalid prop values
4. Ensure consistent styling with other components