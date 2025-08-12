import { Container, Title, Text, Stack, Table, TableTr, TableTd, TableTh, TableThead, TableTbody } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight, IconTrash, IconEdit, IconPlus } from '@tabler/icons-react';
import { Button } from '@/components';

interface ButtonExample {
  type: string;
  variant: 'primary' | 'secondary' | 'transparent';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  description: string;
}

export default function ButtonsPage() {
  const buttonExamples: ButtonExample[] = [
    // Variants
    { type: 'Variant', variant: 'primary', description: 'Main brand color for primary actions' },
    { type: 'Variant', variant: 'secondary', description: 'Secondary brand color for secondary actions' },
    { type: 'Variant', variant: 'transparent', description: 'Transparent background for subtle actions' },
    
    // Sizes  
    { type: 'Size', variant: 'primary', size: 'sm', description: 'Small button (30px height)' },
    { type: 'Size', variant: 'primary', size: 'md', description: 'Medium button (36px height) - default' },
    { type: 'Size', variant: 'primary', size: 'lg', description: 'Large button (42px height)' },
    
    // Left Icons
    { type: 'Left Icon', variant: 'primary', leftIcon: <IconPhoto size={14} />, description: 'Button with left section icon' },
    { type: 'Left Icon', variant: 'secondary', leftIcon: <IconPlus size={14} />, description: 'Add action with icon' },
    { type: 'Left Icon', variant: 'transparent', leftIcon: <IconEdit size={14} />, description: 'Edit action with icon' },
    
    // Right Icons
    { type: 'Right Icon', variant: 'primary', rightIcon: <IconDownload size={14} />, description: 'Button with right section icon' },
    { type: 'Right Icon', variant: 'secondary', rightIcon: <IconArrowRight size={14} />, description: 'Directional action with icon' },
    { type: 'Right Icon', variant: 'transparent', rightIcon: <IconTrash size={14} />, description: 'Destructive action with icon' },
    
    // States
    { type: 'State', variant: 'primary', loading: true, description: 'Loading state with spinner' },
    { type: 'State', variant: 'primary', disabled: true, description: 'Disabled non-interactive state' },
  ];

  const rows = buttonExamples.map((example, index) => (
    <TableTr key={index}>
      <TableTd style={{ textAlign: 'left', width: 'auto' }}>
        <Button
          variant={example.variant}
          size={example.size}
          leftSection={example.leftIcon}
          rightSection={example.rightIcon}
          loading={example.loading}
          disabled={example.disabled}
        >
          {example.loading ? 'Loading...' : example.disabled ? 'Disabled' : 'Button'}
        </Button>
      </TableTd>
      <TableTd style={{ width: '120px' }}>
        <Text size="sm" ff="monospace" style={{ 
          backgroundColor: 'var(--mantine-color-gray-1)', 
          padding: '4px 8px', 
          borderRadius: '4px',
          display: 'inline-block'
        }}>
          {example.type === 'Variant' && `variant="${example.variant}"`}
          {example.type === 'Size' && `size="${example.size}"`}
          {example.type === 'Left Icon' && `leftSection={icon}`}
          {example.type === 'Right Icon' && `rightSection={icon}`}
          {example.type === 'State' && (
            <>
              {example.loading && `loading`}
              {example.disabled && `disabled`}
            </>
          )}
        </Text>
      </TableTd>
    </TableTr>
  ));

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Buttons</Title>
          <Text c="dimmed" size="lg">
            Complete overview of our Button component with all variants, sizes, states, and usage examples.
          </Text>
        </div>

        <Table verticalSpacing="xl" withRowBorders={false}>
          <TableThead>
            <TableTr>
              <TableTh>Preview</TableTh>
              <TableTh>Props</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </Table>
      </Stack>
    </Container>
  );
}