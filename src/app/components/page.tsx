import { Title, Text, Stack, SimpleGrid, Group, Divider } from '@mantine/core';

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
  },
  // State Colors - Error
  {
    name: 'Error',
    tailwindClass: 'bg-error',
    value: '#CD2232',
    description: 'Primary error state color'
  },
  {
    name: 'Light Error',
    tailwindClass: 'bg-light-error',
    value: '#E69098',
    description: 'Lighter error state color'
  },
  {
    name: 'Lightest Error',
    tailwindClass: 'bg-lightest-error',
    value: '#FCF4F5',
    description: 'Lightest error state color'
  },
  // State Colors - Warning
  {
    name: 'Warning',
    tailwindClass: 'bg-warning',
    value: '#FFB800',
    description: 'Primary warning state color'
  },
  {
    name: 'Light Warning',
    tailwindClass: 'bg-light-warning',
    value: '#FFDB80',
    description: 'Lighter warning state color'
  },
  {
    name: 'Lightest Warning',
    tailwindClass: 'bg-lightest-warning',
    value: '#FFF9EB',
    description: 'Lightest warning state color'
  },
  // State Colors - Success
  {
    name: 'Success',
    tailwindClass: 'bg-success',
    value: '#0FBA67',
    description: 'Primary success state color'
  },
  {
    name: 'Light Success',
    tailwindClass: 'bg-light-success',
    value: '#87DCB3',
    description: 'Lighter success state color'
  },
  {
    name: 'Lightest Success',
    tailwindClass: 'bg-lightest-success',
    value: '#F3FCF7',
    description: 'Lightest success state color'
  },
  // State Colors - Information
  {
    name: 'Information',
    tailwindClass: 'bg-information',
    value: '#0FA5BA',
    description: 'Primary information state color'
  },
  {
    name: 'Light Information',
    tailwindClass: 'bg-light-information',
    value: '#87D2DC',
    description: 'Lighter information state color'
  },
  {
    name: 'Lightest Information',
    tailwindClass: 'bg-lightest-information',
    value: '#F3FAFC',
    description: 'Lightest information state color'
  }
];

export default function ColorsPage() {
  const primaryColors = colorTokens.filter(token => 
    token.name.includes('Primary')
  );
  
  const secondaryColors = colorTokens.filter(token => 
    token.name.includes('Secondary')
  );
  
  const stateColors = colorTokens.filter(token => 
    token.name.includes('Error') || token.name.includes('Warning') || 
    token.name.includes('Success') || token.name.includes('Information')
  );
  
  const neutralColors = colorTokens.filter(token => 
    !token.name.includes('Primary') && !token.name.includes('Secondary') &&
    !token.name.includes('Error') && !token.name.includes('Warning') &&
    !token.name.includes('Success') && !token.name.includes('Information')
  );

  const createGridItems = (tokens: ColorToken[]) => tokens.map((token) => (
    <Group key={token.name} align="center" gap="md">
      <div
        style={{
          width: '60px',
          height: '60px',
          backgroundColor: token.value,
          borderRadius: '8px',
          border: '1px solid var(--mantine-color-gray-3)'
        }}
      />
      <Text size="sm" ff="monospace" style={{ 
        backgroundColor: 'var(--mantine-color-gray-1)', 
        padding: '4px 8px', 
        borderRadius: '4px',
        display: 'inline-block'
      }}>
        {token.tailwindClass}
      </Text>
    </Group>
  ));

  return (
    <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Colors</Title>
          <Text c="dimmed" size="lg">
            Complete overview of all color tokens in our design system with their properties and usage guidelines.
          </Text>
        </div>

        <div>
          <Title order={2} mb="lg" size="h3">Primary</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(primaryColors)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">Secondary</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(secondaryColors)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">State</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(stateColors)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">Neutral</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(neutralColors)}
          </SimpleGrid>
        </div>
    </Stack>
  );
}