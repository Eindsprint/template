'use client';

import { Code, ActionIcon, CopyButton } from '@mantine/core';
import { IconCopy, IconCheck } from '@tabler/icons-react';

interface CodeBlockWithCopyProps {
  code: string;
}

export function CodeBlockWithCopy({ code }: CodeBlockWithCopyProps) {
  return (
    <div style={{ position: 'relative' }}>
      <CopyButton value={code}>
        {({ copied, copy }) => (
          <ActionIcon 
            size="lg" 
            onClick={copy}
            style={{ 
              position: 'absolute',
              color: copied ? 'var(--state-success)' : 'var(--foreground)',
              background: 'transparent', 
              top: '8px', 
              right: '8px',
              zIndex: 1
            }}
          >
            {copied ? <IconCheck size={20} /> : <IconCopy size={20} />}
          </ActionIcon>
        )}
      </CopyButton>
      <Code block>
        {code}
      </Code>
    </div>
  );
}