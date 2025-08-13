import { Title, Text, Stack, SimpleGrid, Group, Divider } from '@mantine/core';

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
  const displayTokens = typographyTokens.filter(token => 
    token.name.includes('Display')
  );
  
  const headingTokens = typographyTokens.filter(token => 
    token.name.includes('Heading')
  );
  
  const bodyTokens = typographyTokens.filter(token => 
    token.name.includes('Body') || token.name === 'Caption'
  );
  
  const buttonTokens = typographyTokens.filter(token => 
    token.name.includes('Button')
  );

  const createGridItems = (tokens: TypographyToken[]) => tokens.map((token) => (
    <Stack key={token.name} gap="sm">
      <div style={{
        fontSize: token.fontSize,
        fontWeight: token.fontWeight,
        lineHeight: token.lineHeight,
        color: 'var(--darker-grey)',
        whiteSpace: 'nowrap',
        minHeight: '60px',
        display: 'flex',
        alignItems: 'center'
      }}>
        {token.example}
      </div>
      <Text size="sm" ff="monospace" style={{ 
        backgroundColor: 'var(--mantine-color-gray-1)', 
        padding: '4px 8px', 
        borderRadius: '4px',
        display: 'inline-block',
        alignSelf: 'flex-start'
      }}>
        {token.cssClass}
      </Text>
    </Stack>
  ));

  return (
    <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Typography System</Title>
          <Text style={{ color: 'var(--grey)' }} size="lg">
            Complete overview of our typography scale with live examples and specifications.
          </Text>
        </div>

        <div>
          <Title order={2} mb="lg" size="h3">Display</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(displayTokens)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">Headings</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(headingTokens)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">Body Text</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(bodyTokens)}
          </SimpleGrid>
        </div>

        <Divider />

        <div>
          <Title order={2} mb="lg" size="h3">Button Text</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, xl: 3 }} spacing="md" verticalSpacing="xl">
            {createGridItems(buttonTokens)}
          </SimpleGrid>
        </div>
    </Stack>
  );
}