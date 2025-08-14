'use client';

import { Title, Text, Stack, SimpleGrid, Switch } from '@mantine/core';
import { ButtonWrapper } from '@/components';
import { useState } from 'react';

export default function ButtonsPage() {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [small, setSmall] = useState(false);

  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">Buttons</Title>
        <Text style={{ color: 'var(--grey)' }} size="lg">
          Interactive button component with configurable variants and states.
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
          /src/components/ButtonWrapper.tsx
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
                disabled={disabled.toString()}
              </Text>
            }
            checked={disabled}
            onChange={(event) => setDisabled(event.currentTarget.checked)}
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
                loading={loading.toString()}
              </Text>
            }
            checked={loading}
            onChange={(event) => setLoading(event.currentTarget.checked)}
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
        </Stack>
      </div>

      <div>
        <Title order={2} mb="lg" size="h3">Variants</Title>
        <SimpleGrid cols={3} spacing="lg">
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <ButtonWrapper variant="primary" disabled={disabled} loading={loading} small={small}>
                {loading ? 'Loading...' : 'Button'}
              </ButtonWrapper>
            </div>
            <Text 
              size="sm" 
              ff="monospace"
              style={{ 
                backgroundColor: 'var(--almost-white)', 
                padding: '4px 8px', 
                borderRadius: '4px',
                display: 'inline-block',
                alignSelf: 'flex-start'
              }}
            >
              variant={"primary"}
            </Text>
          </Stack>
          
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <ButtonWrapper variant="secondary" disabled={disabled} loading={loading} small={small}>
                {loading ? 'Loading...' : 'Button'}
              </ButtonWrapper>
            </div>
            <Text 
              size="sm" 
              ff="monospace"
              style={{ 
                backgroundColor: 'var(--almost-white)', 
                padding: '4px 8px', 
                borderRadius: '4px',
                display: 'inline-block',
                alignSelf: 'flex-start'
              }}
            >
              variant={"secondary"}
            </Text>
          </Stack>
          
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <ButtonWrapper variant="text" disabled={disabled} loading={loading} small={small}>
                {loading ? 'Loading...' : 'Button'}
              </ButtonWrapper>
            </div>
            <Text 
              size="sm" 
              ff="monospace"
              style={{ 
                backgroundColor: 'var(--almost-white)', 
                padding: '4px 8px', 
                borderRadius: '4px',
                display: 'inline-block',
                alignSelf: 'flex-start'
              }}
            >
              variant={"text"}
            </Text>
          </Stack>
        </SimpleGrid>
      </div>
    </Stack>
  );
}