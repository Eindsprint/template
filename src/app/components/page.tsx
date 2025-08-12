import { Container, Title, Text, SimpleGrid, Paper, Stack } from '@mantine/core';

interface ColorToken {
  name: string;
  tailwindClass: string;
  value: string;
  description: string;
}

const colorTokens: ColorToken[] = [
  {
    name: 'Primary Dark Blue',
    tailwindClass: 'bg-primary-dark-blue',
    value: '#00A1A6',
    description: 'Main brand color for primary actions'
  },
  {
    name: 'Primary Blue',
    tailwindClass: 'bg-primary-blue',
    value: '#08BCC1',
    description: 'Secondary brand color for highlights'
  },
  {
    name: 'Primary Lightest Blue',
    tailwindClass: 'bg-primary-lightest-blue',
    value: '#E6F8F9',
    description: 'Light background tint for primary elements'
  },
  {
    name: 'Secondary Darkest Moss',
    tailwindClass: 'bg-secondary-darkest-moss',
    value: '#4F7469',
    description: 'Dark accent color for contrast'
  },
  {
    name: 'Secondary Moss',
    tailwindClass: 'bg-secondary-moss',
    value: '#C6D7D2',
    description: 'Medium accent color for backgrounds'
  },
  {
    name: 'Secondary Camel',
    tailwindClass: 'bg-secondary-camel',
    value: '#F1D3B2',
    description: 'Warm accent color for highlights'
  },
  {
    name: 'Secondary Sand',
    tailwindClass: 'bg-secondary-sand',
    value: '#F3EDEA',
    description: 'Neutral background color'
  },
  {
    name: 'Secondary Light Sand',
    tailwindClass: 'bg-secondary-light-sand',
    value: '#F7F5F5',
    description: 'Lightest background color'
  },
  {
    name: 'Almost Black',
    tailwindClass: 'bg-almost-black',
    value: '#001010',
    description: 'Deep dark color for maximum contrast'
  },
  {
    name: 'Darker Grey',
    tailwindClass: 'bg-darker-grey',
    value: '#4d5555',
    description: 'Dark grey for primary text'
  },
  {
    name: 'Dark Grey',
    tailwindClass: 'bg-dark-grey',
    value: '#808686',
    description: 'Medium dark grey for secondary text'
  },
  {
    name: 'Grey',
    tailwindClass: 'bg-grey',
    value: '#b2b6b6',
    description: 'Neutral grey for placeholders'
  },
  {
    name: 'Light Grey',
    tailwindClass: 'bg-light-grey',
    value: '#d9dbdb',
    description: 'Light grey for subtle backgrounds'
  },
  {
    name: 'Almost White',
    tailwindClass: 'bg-almost-white',
    value: '#f2f3f3',
    description: 'Near white for clean backgrounds'
  }
];

function ColorCard({ token }: { token: ColorToken }) {
  return (
    <Paper p="md" radius="md" style={{ height: '100%', border: '1px solid var(--mantine-color-gray-3)' }}>
      <Stack gap="sm">
        <div
          style={{
            width: '100%',
            height: 80,
            backgroundColor: token.value,
            borderRadius: 'var(--mantine-radius-sm)',
            border: '1px solid var(--mantine-color-gray-3)'
          }}
        />
        <div>
          <Text fw={600} size="sm" c="dark">
            {token.name}
          </Text>
          <Text size="xs" c="dimmed" ff="monospace" mt={4} style={{ backgroundColor: 'var(--mantine-color-gray-1)', padding: '2px 6px', borderRadius: '4px' }}>
            {token.tailwindClass}
          </Text>
          <Text size="xs" c="dimmed" ff="monospace" mt={4}>
            {token.value}
          </Text>
          <Text size="xs" c="gray" mt={8}>
            {token.description}
          </Text>
        </div>
      </Stack>
    </Paper>
  );
}

export default function ComponentsPage() {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Design Tokens</Title>
          <Text c="dimmed">
            Our design system color palette used throughout the application. 
            These tokens ensure consistency and maintainability across all components.
          </Text>
        </div>

        <div>
          <Title order={2} mb="lg">Primary Colors</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            {colorTokens.slice(0, 3).map((token) => (
              <ColorCard key={token.name} token={token} />
            ))}
          </SimpleGrid>
        </div>

        <div>
          <Title order={2} mb="lg">Secondary Colors</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            {colorTokens.slice(3, 8).map((token) => (
              <ColorCard key={token.name} token={token} />
            ))}
          </SimpleGrid>
        </div>

        <div>
          <Title order={2} mb="lg">Greyscale</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            {colorTokens.slice(8).map((token) => (
              <ColorCard key={token.name} token={token} />
            ))}
          </SimpleGrid>
        </div>
      </Stack>
    </Container>
  );
}