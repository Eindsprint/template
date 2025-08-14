'use client';

import { Title, Text, Stack, Switch, Code } from '@mantine/core';
import { ModalWrapper, ButtonWrapper } from '@/components';
import { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

export default function ModalsPage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [small, setSmall] = useState(false);

  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">Modals</Title>
        <Text style={{ color: 'var(--grey)' }} size="lg">
          Modal component for displaying content in an overlay window.
        </Text>
      </div>

      <div>
        <Title order={3} mb="md" size="h4">Component</Title>
        <Text 
          ff="monospace" 
          size="sm" 
          style={{ 
            backgroundColor: 'var(--almost-white)', 
            padding: '4px 8px', 
            borderRadius: '4px',
            display: 'inline-block',
            marginBottom: '1rem'
          }}
        >
          /src/components/ModalWrapper.tsx
        </Text>
      </div>


      <div>
        <Title order={3} mb="md" size="h4">Props</Title>
        <Stack gap="sm">
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
                small={small.toString()}
              </Text>
            }
            checked={small}
            onChange={(event) => setSmall(event.currentTarget.checked)}
            styles={{ 
              root: { display: 'flex', alignItems: 'center' },
              track: { alignSelf: 'center' }
            }}
          />
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
                fullScreen={fullScreen.toString()}
              </Text>
            }
            checked={fullScreen}
            onChange={(event) => setFullScreen(event.currentTarget.checked)}
            styles={{ 
              root: { display: 'flex', alignItems: 'center' },
              track: { alignSelf: 'center' }
            }}
          />
        </Stack>
      </div>

      <div>
        <Title order={2} mb="lg" size="h3">Example</Title>
        
        <ButtonWrapper variant="primary" onClick={open}>Open Modal</ButtonWrapper>

        <ModalWrapper 
          opened={opened} 
          onClose={close}
          title="Modal Title"
          small={small}
          fullScreen={fullScreen}
        >
          <Stack gap="md">
            <Text>
              This is an example modal using the ModalWrapper component.
            </Text>
          </Stack>
        </ModalWrapper>
      </div>

      <div>
        <Title order={3} mb="md" size="h4">Usage</Title>
        <Text size="sm" mb="md" c="dimmed">
          Code example with current settings:
        </Text>
        <Code block>
{`import { ModalWrapper } from '@/components';

<ModalWrapper 
  opened={opened} 
  onClose={close}
  title="Modal Title"${small ? `
  small` : ''}${fullScreen ? `
  fullScreen` : ''}
>
  Your content here
</ModalWrapper>`}
        </Code>
      </div>
    </Stack>
  );
}