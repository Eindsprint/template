import { Container, Title, Text, Stack, Table, TableTr, TableTd, TableTh, TableThead, TableTbody } from '@mantine/core';

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

export default function ColorsPage() {
  const rows = colorTokens.map((token) => (
    <TableTr key={token.name}>
      <TableTd style={{ width: '80px' }}>
        <div
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: token.value,
            borderRadius: '8px',
            border: '1px solid var(--mantine-color-gray-3)'
          }}
        />
      </TableTd>
      <TableTd>
        <Text size="sm" ff="monospace" style={{ 
          backgroundColor: 'var(--mantine-color-gray-1)', 
          padding: '4px 8px', 
          borderRadius: '4px',
          display: 'inline-block'
        }}>
          {token.tailwindClass}
        </Text>
      </TableTd>
      <TableTd>
        <Text size="sm" ff="monospace" c="dimmed">
          {token.value}
        </Text>
      </TableTd>
    </TableTr>
  ));

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Colors</Title>
          <Text c="dimmed" size="lg">
            Complete overview of all color tokens in our design system with their properties and usage guidelines.
          </Text>
        </div>

        <Table verticalSpacing="xl" withRowBorders={false}>
          <TableThead>
            <TableTr>
              <TableTh>Preview</TableTh>
              <TableTh>Class Name</TableTh>
              <TableTh>Hex Value</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </Table>
      </Stack>
    </Container>
  );
}