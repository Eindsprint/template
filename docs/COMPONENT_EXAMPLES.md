# Component Examples

This document provides detailed examples of our design system components and their implementation patterns.

## ButtonWrapper Component

### Overview
The ButtonWrapper component demonstrates our wrapper pattern perfectly. It restricts the Mantine Button to only allow approved variants while maintaining all other functionality.

### Key Features
- **Restricted variants**: Only `primary`, `secondary`, and `text` allowed
- **Boolean size prop**: Uses `small={true}` instead of `size="xs"`
- **Design token colors**: Mapped through CSS modules
- **TypeScript safety**: Invalid props won't compile

### Implementation Pattern
```typescript
// Wrapper restricts props
interface ButtonWrapperProps extends Omit<MantineButtonProps, 'variant' | 'size' | 'color' | 'radius'> {
  variant?: 'primary' | 'secondary' | 'text';
  small?: boolean;
}

// Map our variants to Mantine variants
const getVariantConfig = () => {
  switch (variant) {
    case 'primary':
      return { variant: 'filled', className: classes.primary };
    case 'secondary':
      return { variant: 'outline', className: classes.secondary };
    case 'text':
      return { variant: 'subtle', className: classes.text };
  }
};
```

### CSS Module
```css
.primary {
  background-color: var(--primary-blue);
  border-color: var(--primary-blue);
}

.primary:hover {
  background-color: var(--primary-dark-blue);
}
```

## BadgeWrapper Component

### Overview
The BadgeWrapper shows how to map semantic states to design system colors while keeping the API simple and intuitive.

### Key Features
- **State-based colors**: Maps `success`, `warning`, `error`, `information` to design tokens
- **Boolean modifiers**: `circle` and `large` props for variations
- **Automatic styling**: Color and font adjustments based on state

### Implementation Pattern
```typescript
// State mapping to colors
const stateColorMap = {
  success: { bg: 'var(--state-success)', color: 'white' },
  warning: { bg: 'var(--state-warning)', color: 'white' },
  error: { bg: 'var(--state-error)', color: 'white' },
  information: { bg: 'var(--state-information)', color: 'white' }
};

// Apply state styling
<Badge
  color={state ? stateColorMap[state].bg : undefined}
  style={{ color: state ? stateColorMap[state].color : undefined }}
  circle={circle}
  size={large ? 'lg' : 'md'}
>
  {children}
</Badge>
```

## TableWrapper Component

### Overview
The TableWrapper demonstrates how to enforce design decisions (always striped) while providing useful configuration options.

### Key Features
- **Enforced striping**: Tables are always striped for readability
- **Boolean props**: `condensed`, `highlightOnHover`, `checkboxes`
- **Data management**: Optional checkbox selection with callbacks
- **Consistent styling**: Uses design system colors throughout

### Implementation Pattern
```typescript
// Always apply striped, make other features configurable
<Table 
  striped={striped !== false}  // Default true
  highlightOnHover={highlightOnHover}
  verticalSpacing={condensed ? 'xs' : 'lg'}
  withTableBorder
  withColumnBorders
>
  {/* Table content */}
</Table>
```

### Styling Approach
```css
/* Override Mantine's default stripe color */
tr:nth-of-type(even) td {
  background-color: var(--secondary-light-sand) !important;
}
```

## Page Structure Pattern

All component demo pages follow the same structure for consistency:

### Template Structure
```typescript
export default function ComponentPage() {
  // 1. Props state
  const [prop1, setProp1] = useState(false);
  const [prop2, setProp2] = useState(false);

  return (
    <Stack gap="xl">
      {/* Header */}
      <div>
        <Title>Component Name</Title>
        <Text style={{ color: 'var(--grey)' }}>Description</Text>
      </div>

      {/* Props Section - ALWAYS FIRST */}
      <div>
        <Title order={3}>Props</Title>
        <Stack gap="sm">
          {/* Prop toggles */}
        </Stack>
      </div>

      {/* Variants Section */}
      <div>
        <Title order={2}>Variants</Title>
        <SimpleGrid cols={3}>
          {/* Component variants */}
        </SimpleGrid>
      </div>
    </Stack>
  );
}
```

## Props Display Pattern

### Consistent Prop Display
All props are displayed exactly as they would be used in code:

```typescript
// Boolean props - no quotes
<Text ff="monospace" style={propStyles}>
  disabled={disabled.toString()}
</Text>

// String props - with quotes
<Text ff="monospace" style={propStyles}>
  variant="primary"
</Text>

// Style object for all prop displays
const propStyles = {
  backgroundColor: 'var(--almost-white)',
  padding: '4px 8px',
  borderRadius: '4px',
  display: 'inline-block'
};
```

## Switch Component Pattern

All interactive prop toggles use this exact pattern:

```typescript
<Switch
  label={
    <Text 
      size="sm" 
      ff="monospace"
      style={{ 
        backgroundColor: 'var(--almost-white)', 
        padding: '4px 8px', 
        borderRadius: '4px',
        display: 'inline-flex',
        alignItems: 'center'
      }}
    >
      propName={propName.toString()}
    </Text>
  }
  checked={propName}
  onChange={(event) => setPropName(event.currentTarget.checked)}
  styles={{ 
    root: { display: 'flex', alignItems: 'center' },
    track: { alignSelf: 'center' }
  }}
/>
```

## Creating a New Component

### Step 1: Copy Templates
```bash
# Copy and rename template files
cp src/components/ComponentTemplate.tsx.template src/components/MyComponent.tsx
cp src/components/ComponentTemplate.module.css.template src/components/MyComponent.module.css
cp src/app/componentname/page.tsx.template src/app/mycomponent/page.tsx
```

### Step 2: Update Component Logic
1. Replace `ComponentName` with your component name
2. Define your variants and props
3. Map variants to design system colors
4. Implement any special logic

### Step 3: Add to Navigation
In `src/components/DoubleNavbar.tsx`:
```typescript
const componentsLinks = [
  // ... existing links
  { link: '/mycomponent', label: 'My Component' }
];
```

### Step 4: Export Component
In `src/components/index.ts`:
```typescript
export { MyComponent } from './MyComponent';
```

### Step 5: Test Thoroughly
- [ ] Toggle all props and verify behavior
- [ ] Check TypeScript prevents invalid usage
- [ ] Verify only design system colors appear
- [ ] Ensure consistent styling with other components

## Common Patterns

### Conditional Styling
```typescript
const getConditionalStyles = () => {
  return {
    ...(condensed && { padding: '4px 8px' }),
    ...(highlighted && { border: '2px solid var(--primary-blue)' }),
    ...(disabled && { opacity: 0.6, cursor: 'not-allowed' })
  };
};
```

### Variant Mapping
```typescript
const variantMap = {
  primary: { bg: 'var(--primary-blue)', color: 'white' },
  secondary: { bg: 'var(--secondary-sand)', color: 'var(--almost-black)' },
  text: { bg: 'transparent', color: 'var(--primary-blue)' }
};
```

### TypeScript Restrictions
```typescript
// Use literal unions, not strings
type Variant = 'option1' | 'option2';  // ✅
type Variant = string;  // ❌

// Omit Mantine props we want to control
interface Props extends Omit<MantineProps, 'color' | 'size'> {
  // Our controlled props
}
```

## Best Practices

1. **Always use design tokens** - Never hardcode colors
2. **Prefer boolean props** - `small={true}` over `size="small"`
3. **Restrict everything** - Use TypeScript to prevent misuse
4. **Follow the pattern** - Props section first, then Variants
5. **Test interactivity** - All toggles should work in real-time
6. **Document edge cases** - Note any special behavior
7. **Keep it simple** - Don't over-engineer components