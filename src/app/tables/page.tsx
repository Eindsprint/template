'use client';

import { Title, Text, Stack, TableThead, TableTbody, TableTr, TableTh, TableTd, Switch } from '@mantine/core';
import { TableWrapper, Checkbox } from '@/components';
import { useState } from 'react';

// TableData interface removed - not used in current implementation

const productData = [
  { id: 1, product: 'Wireless Headphones', sku: 'WH-2024-001', price: '€89.99', stock: 42 },
  { id: 2, product: 'Gaming Mouse', sku: 'GM-2024-002', price: '€45.50', stock: 28 },
  { id: 3, product: 'Mechanical Keyboard', sku: 'MK-2024-003', price: '€125.00', stock: 15 }
];

export default function TablesPage() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  
  // Table settings toggles
  const [striped, setStriped] = useState(false);
  const [showCheckboxes, setShowCheckboxes] = useState(false);
  const [highlightOnHover, setHighlightOnHover] = useState(false);
  const [condensed, setCondensed] = useState(false);

  const handleSelectionChange = (selection: number[]) => {
    setSelectedRows(selection);
  };

  const rows = productData.map((item) => (
    <TableTr 
      key={item.id}
      style={{ 
        backgroundColor: selectedRows.includes(item.id) ? 'var(--primary-lightest-blue)' : undefined 
      }}
    >
      {showCheckboxes && (
        <TableTd>
          <Checkbox
            aria-label="Select row"
            checked={selectedRows.includes(item.id)}
            onChange={(event) =>
              setSelectedRows(
                event.currentTarget.checked
                  ? [...selectedRows, item.id]
                  : selectedRows.filter((id) => id !== item.id)
              )
            }
          />
        </TableTd>
      )}
      <TableTd>{item.product}</TableTd>
      <TableTd>{item.sku}</TableTd>
      <TableTd>{item.price}</TableTd>
      <TableTd>{item.stock}</TableTd>
    </TableTr>
  ));

  return (
    <Stack gap="xl">
      <div>
        <Title order={1} mb="md">Tables</Title>
        <Text style={{ color: 'var(--grey)' }} size="lg">
          Interactive table component with configurable styling and behavior options.
        </Text>
      </div>

      <div>
        <Title order={3} mb="md" size="h4">Component</Title>
        <Text ff="monospace" size="sm" style={{ color: 'var(--grey)', marginBottom: '1rem' }}>
          TableWrapper • /src/components/TableWrapper.tsx
        </Text>
      </div>

      <div>
        <Title order={3} mb="md" size="h4">Props</Title>
        <Stack gap="sm" mb="lg">
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
                striped={striped.toString()}
              </Text>
            }
            checked={striped}
            onChange={(event) => setStriped(event.currentTarget.checked)}
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
                checkboxes={showCheckboxes.toString()}
              </Text>
            }
            checked={showCheckboxes}
            onChange={(event) => setShowCheckboxes(event.currentTarget.checked)}
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
                highlightOnHover={highlightOnHover.toString()}
              </Text>
            }
            checked={highlightOnHover}
            onChange={(event) => setHighlightOnHover(event.currentTarget.checked)}
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
                condensed={condensed.toString()}
              </Text>
            }
            checked={condensed}
            onChange={(event) => setCondensed(event.currentTarget.checked)}
            styles={{ 
              root: { display: 'flex', alignItems: 'center' },
              track: { alignSelf: 'center' }
            }}
          />
        </Stack>
      </div>

      <div>
        <Title order={2} mb="lg" size="h3">Example</Title>
        <TableWrapper 
          checkboxes={showCheckboxes} 
          striped={striped}
          highlightOnHover={highlightOnHover}
          condensed={condensed}
          data={productData} 
          onSelectionChange={handleSelectionChange}
        >
          <TableThead>
            <TableTr>
              {showCheckboxes && <TableTh />}
              <TableTh>Product</TableTh>
              <TableTh>SKU</TableTh>
              <TableTh>Price</TableTh>
              <TableTh>Stock</TableTh>
            </TableTr>
          </TableThead>
          <TableTbody>{rows}</TableTbody>
        </TableWrapper>
      </div>
    </Stack>
  );
}