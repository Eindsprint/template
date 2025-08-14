'use client';

import { Title, Text, Stack, SimpleGrid, Switch, Code, Group } from '@mantine/core';
import { BadgeWrapper } from '@/components';
import { useState } from 'react';

export default function BadgesPage() {
  const [circle, setCircle] = useState(false);
  const [large, setLarge] = useState(false);

  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">Badges</Title>
        <Text style={{ color: 'var(--grey)' }} size="lg">
          Badge components for displaying status and state information.
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
                circle={circle.toString()}
              </Text>
            }
            checked={circle}
            onChange={(event) => setCircle(event.currentTarget.checked)}
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
                large={large.toString()}
              </Text>
            }
            checked={large}
            onChange={(event) => setLarge(event.currentTarget.checked)}
            styles={{ 
              root: { display: 'flex', alignItems: 'center' },
              track: { alignSelf: 'center' }
            }}
          />
        </Stack>
      </div>

      <div>
        <Title order={2} mb="lg" size="h3">Variants</Title>
        <SimpleGrid cols={4} spacing="lg">
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <BadgeWrapper state="success" circle={circle} large={large}>
                {circle ? '1' : 'Success'}
              </BadgeWrapper>
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
              state="success"
            </Text>
          </Stack>
          
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <BadgeWrapper state="warning" circle={circle} large={large}>
                {circle ? '7' : 'Warning'}
              </BadgeWrapper>
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
              state="warning"
            </Text>
          </Stack>
          
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <BadgeWrapper state="information" circle={circle} large={large}>
                {circle ? '9' : 'Information'}
              </BadgeWrapper>
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
              state="information"
            </Text>
          </Stack>
          
          <Stack gap="xs">
            <div style={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}>
              <BadgeWrapper state="error" circle={circle} large={large}>
                {circle ? '3' : 'Error'}
              </BadgeWrapper>
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
              state="error"
            </Text>
          </Stack>
        </SimpleGrid>
      </div>
    </Stack>
  );
}