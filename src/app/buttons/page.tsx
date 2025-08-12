import { Container, Title, Text, Stack, Group, Paper, Divider } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight, IconTrash, IconEdit, IconPlus } from '@tabler/icons-react';
import { Button } from '@/components';

export default function ButtonsPage() {
  const variants = ['primary', 'secondary', 'transparent'] as const;
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Buttons</Title>
          <Text c="dimmed">
            Our custom Button component with fully rounded corners and three distinct variants.
            Each variant has predefined colors from our design system.
          </Text>
        </div>

        {/* Button Variants */}
        <div>
          <Title order={2} mb="lg">Variants</Title>
          <Paper p="lg" radius="md" style={{ border: '1px solid var(--mantine-color-gray-3)' }}>
            <Group gap="md" wrap="wrap">
              {variants.map((variant) => (
                <Button key={variant} variant={variant}>
                  {variant.charAt(0).toUpperCase() + variant.slice(1)}
                </Button>
              ))}
            </Group>
          </Paper>
        </div>

        {/* Button Sizes */}
        <div>
          <Title order={2} mb="lg">Sizes</Title>
          <Paper p="lg" radius="md" style={{ border: '1px solid var(--mantine-color-gray-3)' }}>
            <Group gap="md" wrap="wrap" align="center">
              {sizes.map((size) => (
                <Button key={size} size={size}>
                  Size {size.toUpperCase()}
                </Button>
              ))}
            </Group>
          </Paper>
        </div>

        {/* Button with Icons */}
        <div>
          <Title order={2} mb="lg">With Icons</Title>
          <Paper p="lg" radius="md" style={{ border: '1px solid var(--mantine-color-gray-3)' }}>
            <Stack gap="md">
              <div>
                <Text size="sm" fw={500} mb="sm" c="dimmed">Left Section Icons:</Text>
                <Group gap="md" wrap="wrap">
                  <Button leftSection={<IconPhoto size={14} />} variant="primary">
                    Gallery
                  </Button>
                  <Button leftSection={<IconPlus size={14} />} variant="secondary">
                    Add Item
                  </Button>
                  <Button leftSection={<IconEdit size={14} />} variant="transparent">
                    Edit
                  </Button>
                </Group>
              </div>
              
              <Divider />
              
              <div>
                <Text size="sm" fw={500} mb="sm" c="dimmed">Right Section Icons:</Text>
                <Group gap="md" wrap="wrap">
                  <Button rightSection={<IconDownload size={14} />} variant="primary">
                    Download
                  </Button>
                  <Button rightSection={<IconArrowRight size={14} />} variant="secondary">
                    Continue
                  </Button>
                  <Button rightSection={<IconTrash size={14} />} variant="transparent">
                    Delete
                  </Button>
                </Group>
              </div>
              
            </Stack>
          </Paper>
        </div>

        {/* Button States */}
        <div>
          <Title order={2} mb="lg">States</Title>
          <Paper p="lg" radius="md" style={{ border: '1px solid var(--mantine-color-gray-3)' }}>
            <Group gap="md" wrap="wrap">
              <Button>Normal</Button>
              <Button loading>Loading</Button>
              <Button disabled>Disabled</Button>
              <Button fullWidth style={{ maxWidth: '200px' }}>Full Width</Button>
            </Group>
          </Paper>
        </div>

        {/* Guidelines */}
        <div>
          <Title order={2} mb="lg">Guidelines</Title>
          <Paper p="lg" radius="md" style={{ border: '1px solid var(--mantine-color-gray-3)' }}>
            <Stack gap="lg">
              <div>
                <Title order={4} size="md" mb="md" c="green">✅ Do's</Title>
                <Stack gap="xs">
                  <Text size="sm">• Use only the three allowed variants: primary, secondary, transparent</Text>
                  <Text size="sm">• Icons should be size 14 for consistency</Text>
                  <Text size="sm">• Use either leftSection OR rightSection, not both</Text>
                  <Text size="sm">• Primary buttons for main actions (save, submit, create)</Text>
                  <Text size="sm">• Secondary buttons for secondary actions (edit, cancel)</Text>
                  <Text size="sm">• Transparent buttons for subtle actions (delete, close)</Text>
                  <Text size="sm">• Use appropriate loading states during async operations</Text>
                </Stack>
              </div>
              
              <div>
                <Title order={4} size="md" mb="md" c="red">❌ Don'ts</Title>
                <Stack gap="xs">
                  <Text size="sm">• Don't use custom colors - variants have fixed color schemes</Text>
                  <Text size="sm">• Don't combine leftSection and rightSection on the same button</Text>
                  <Text size="sm">• Don't override the radius prop - buttons should stay fully rounded</Text>
                  <Text size="sm">• Don't use icon sizes other than 14px</Text>
                  <Text size="sm">• Don't create custom button variants outside these three</Text>
                  <Text size="sm">• Don't use multiple primary buttons in the same action group</Text>
                </Stack>
              </div>
              
              <div>
                <Title order={4} size="md" mb="md" c="blue">💡 Best Practices</Title>
                <Stack gap="xs">
                  <Text size="sm">• Use primary for the most important action in a group</Text>
                  <Text size="sm">• Group related actions together (Save + Cancel)</Text>
                  <Text size="sm">• Left icons typically represent the action (download, edit, add)</Text>
                  <Text size="sm">• Right icons typically indicate direction or result (arrow, external link)</Text>
                  <Text size="sm">• Use loading state for actions that take time to complete</Text>
                  <Text size="sm">• Maintain consistent button sizing within the same context</Text>
                </Stack>
              </div>
            </Stack>
          </Paper>
        </div>

        {/* Usage Examples */}
        <Paper p="xl" bg="gray.0" radius="md">
          <Title order={3} mb="lg">Usage Examples</Title>
          
          <Stack gap="md">
            <div>
              <Text size="sm" fw={500} mb="xs">Import:</Text>
              <Text size="sm" ff="monospace" style={{ backgroundColor: 'var(--mantine-color-gray-1)', padding: '8px 12px', borderRadius: '4px' }}>
                {`import { Button } from '@/components';`}
              </Text>
            </div>
            
            <div>
              <Text size="sm" fw={500} mb="xs">Basic Usage:</Text>
              <Text size="sm" ff="monospace" style={{ backgroundColor: 'var(--mantine-color-gray-1)', padding: '8px 12px', borderRadius: '4px' }}>
                {`<Button onClick={handleClick}>Click me</Button>`}
              </Text>
            </div>
            
            <div>
              <Text size="sm" fw={500} mb="xs">With Props:</Text>
              <Text size="sm" ff="monospace" style={{ backgroundColor: 'var(--mantine-color-gray-1)', padding: '8px 12px', borderRadius: '4px' }}>
                {`<Button variant="secondary" size="lg" loading>`}<br />
                {`  Loading...`}<br />
                {`</Button>`}
              </Text>
            </div>
            
            <div>
              <Text size="sm" fw={500} mb="xs">With Icons:</Text>
              <Text size="sm" ff="monospace" style={{ backgroundColor: 'var(--mantine-color-gray-1)', padding: '8px 12px', borderRadius: '4px' }}>
                {`import { IconDownload, IconArrowRight } from '@tabler/icons-react';`}<br />
                <br />
                {`<Button leftSection={<IconDownload size={14} />}>`}<br />
                {`  Download`}<br />
                {`</Button>`}<br />
                <br />
                {`<Button rightSection={<IconArrowRight size={14} />}>`}<br />
                {`  Continue`}<br />
                {`</Button>`}
              </Text>
            </div>
          </Stack>
        </Paper>
      </Stack>
    </Container>
  );
}