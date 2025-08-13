import { Title, Text, Stack, SimpleGrid, Divider } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight, IconTrash, IconEdit, IconPlus } from '@tabler/icons-react';
import { Button } from '@/components';

interface ButtonExample {
  type: string;
  variant: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  description: string;
}

const getIconName = (icon: React.ReactNode) => {
  if (!icon) return '';
  const iconElement = icon as React.ReactElement;
  if (iconElement.type === IconPhoto) return 'IconPhoto';
  if (iconElement.type === IconDownload) return 'IconDownload';
  if (iconElement.type === IconArrowRight) return 'IconArrowRight';
  if (iconElement.type === IconTrash) return 'IconTrash';
  if (iconElement.type === IconEdit) return 'IconEdit';
  if (iconElement.type === IconPlus) return 'IconPlus';
  return 'Icon';
};

export default function ButtonsPage() {
  const variantExamples: ButtonExample[] = [
    { type: 'Variant', variant: 'primary', description: 'Main brand color for primary actions' },
    { type: 'Variant', variant: 'secondary', description: 'Secondary brand color for secondary actions' },
    { type: 'Variant', variant: 'text', description: 'Text-only button for subtle actions' },
  ];

  const sizeExamples: ButtonExample[] = [
    { type: 'Size', variant: 'primary', size: 'sm', description: 'Small button (30px height)' },
    { type: 'Size', variant: 'primary', size: 'md', description: 'Medium button (36px height) - default' },
    { type: 'Size', variant: 'primary', size: 'lg', description: 'Large button (42px height)' },
  ];

  const iconExamples: ButtonExample[] = [
    { type: 'Left Icon', variant: 'primary', leftIcon: <IconPhoto size={14} />, description: 'Button with left section icon' },
    { type: 'Left Icon', variant: 'secondary', leftIcon: <IconPlus size={14} />, description: 'Add action with icon' },
    { type: 'Left Icon', variant: 'text', leftIcon: <IconEdit size={14} />, description: 'Edit action with icon' },
    { type: 'Right Icon', variant: 'primary', rightIcon: <IconDownload size={14} />, description: 'Button with right section icon' },
    { type: 'Right Icon', variant: 'secondary', rightIcon: <IconArrowRight size={14} />, description: 'Directional action with icon' },
    { type: 'Right Icon', variant: 'text', rightIcon: <IconTrash size={14} />, description: 'Destructive action with icon' },
  ];

  const stateExamples: ButtonExample[] = [
    { type: 'State', variant: 'primary', loading: true, description: 'Loading state with spinner' },
    { type: 'State', variant: 'primary', disabled: true, description: 'Disabled non-interactive state' },
  ];

  const createGridItems = (examples: ButtonExample[]) => examples.map((example, index) => (
    <Stack key={index} gap="sm">
      <div style={{
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center'
      }}>
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
      </div>
      <Text size="sm" ff="monospace" style={{ 
        backgroundColor: 'var(--mantine-color-gray-1)', 
        padding: '4px 8px', 
        borderRadius: '4px',
        display: 'inline-block',
        alignSelf: 'flex-start'
      }}>
        {example.type === 'Variant' && `variant="${example.variant}"`}
        {example.type === 'Size' && `size="${example.size}"`}
        {example.type === 'Left Icon' && `leftSection={<${getIconName(example.leftIcon)} />}`}
        {example.type === 'Right Icon' && `rightSection={<${getIconName(example.rightIcon)} />}`}
        {example.type === 'State' && (
          <>
            {example.loading && `loading`}
            {example.disabled && `disabled`}
          </>
        )}
      </Text>
    </Stack>
  ));

  return (
    <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Buttons</Title>
          <Text style={{ color: 'var(--grey)' }} size="lg">
            Complete overview of our Button component with all variants, sizes, states, and usage examples.
          </Text>
        </div>

        <div>
          <Title order={2} mb="lg" size="h3">Variants</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(variantExamples)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">Sizes</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(sizeExamples)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">With Icons</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(iconExamples)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">States</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(stateExamples)}
          </SimpleGrid>
        </div>
    </Stack>
  );
}