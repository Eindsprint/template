import { Container, Title, Text, Stack, Table, TableTr, TableTd, TableTh, TableThead, TableTbody } from '@mantine/core';

interface TypographyToken {
  name: string;
  cssClass: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  description: string;
  example: string;
}

const typographyTokens: TypographyToken[] = [
  {
    name: 'Display Large',
    cssClass: 'text-display-large',
    fontSize: '48px',
    fontWeight: '700',
    lineHeight: '1.2',
    description: 'For hero sections and major headlines',
    example: 'Lorem ipsum'
  },
  {
    name: 'Display Medium',
    cssClass: 'text-display-medium',
    fontSize: '36px',
    fontWeight: '600',
    lineHeight: '1.3',
    description: 'For section headers and page titles',
    example: 'Lorem ipsum'
  },
  {
    name: 'Display Small',
    cssClass: 'text-display-small',
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '1.3',
    description: 'For subsection headers',
    example: 'Lorem ipsum'
  },
  {
    name: 'Heading Large',
    cssClass: 'text-heading-large',
    fontSize: '24px',
    fontWeight: '500',
    lineHeight: '1.4',
    description: 'For card titles and component headers',
    example: 'Lorem ipsum'
  },
  {
    name: 'Heading Medium',
    cssClass: 'text-heading-medium',
    fontSize: '20px',
    fontWeight: '500',
    lineHeight: '1.4',
    description: 'For smaller headers and labels',
    example: 'Lorem ipsum'
  },
  {
    name: 'Heading Small',
    cssClass: 'text-heading-small',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.5',
    description: 'For form labels and small headers',
    example: 'Lorem ipsum'
  },
  {
    name: 'Body Large',
    cssClass: 'text-body-large',
    fontSize: '18px',
    fontWeight: '400',
    lineHeight: '1.6',
    description: 'For important body text and introductions',
    example: 'Lorem ipsum'
  },
  {
    name: 'Body Medium',
    cssClass: 'text-body-medium',
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: '1.6',
    description: 'For regular body text and paragraphs',
    example: 'Lorem ipsum'
  },
  {
    name: 'Body Small',
    cssClass: 'text-body-small',
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '1.5',
    description: 'For secondary text and descriptions',
    example: 'Lorem ipsum'
  },
  {
    name: 'Caption',
    cssClass: 'text-caption',
    fontSize: '12px',
    fontWeight: '400',
    lineHeight: '1.4',
    description: 'For captions, footnotes and metadata',
    example: 'Lorem ipsum'
  },
  {
    name: 'Button Large',
    cssClass: 'text-button-large',
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: '1.4',
    description: 'For primary button text',
    example: 'Lorem ipsum'
  },
  {
    name: 'Button Medium',
    cssClass: 'text-button-medium',
    fontSize: '14px',
    fontWeight: '500',
    lineHeight: '1.4',
    description: 'For secondary button text',
    example: 'Lorem ipsum'
  },
  {
    name: 'Button Small',
    cssClass: 'text-button-small',
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '1.4',
    description: 'For small button text',
    example: 'Lorem ipsum'
  }
];


export default function TypographyPage() {
  const rows = typographyTokens.map((token) => (
    <TableTr key={token.name}>
      <TableTd style={{ textAlign: 'left', width: 'auto' }}>
        <div style={{
          fontSize: token.fontSize,
          fontWeight: token.fontWeight,
          lineHeight: token.lineHeight,
          color: 'var(--darker-grey)',
          whiteSpace: 'nowrap'
        }}>
          {token.example}
        </div>
      </TableTd>
      <TableTd style={{ width: 'auto' }}>
        <Text size="sm" ff="monospace" style={{ 
          backgroundColor: 'var(--mantine-color-gray-1)', 
          padding: '4px 8px', 
          borderRadius: '4px',
          display: 'inline-block'
        }}>
          {token.cssClass}
        </Text>
      </TableTd>
      <TableTd style={{ width: 'auto' }}>
        <Text size="sm" c="dimmed">
          {token.fontSize}
        </Text>
      </TableTd>
      <TableTd style={{ width: 'auto' }}>
        <Text size="sm" c="dimmed">
          {token.fontWeight}
        </Text>
      </TableTd>
      <TableTd style={{ width: 'auto' }}>
        <Text size="sm" c="dimmed">
          {token.lineHeight}
        </Text>
      </TableTd>
    </TableTr>
  ));

  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Typography System</Title>
          <Text c="dimmed" size="lg">
            Complete overview of our typography scale with live examples and specifications.
          </Text>
        </div>

        <Table verticalSpacing="xl" withRowBorders={false}>
          <TableThead>
            <TableTr>
              <TableTh>Preview</TableTh>
              <TableTh>Class Name</TableTh>
              <TableTh>Size</TableTh>
              <TableTh>Weight</TableTh>
              <TableTh>Line Height</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </Table>
      </Stack>
    </Container>
  );
}