'use client';

import { Title, Text, Stack, TableThead, TableTbody, TableTr, TableTh, TableTd, Switch, Group, Code } from '@mantine/core';
import { TableWrapper, Checkbox } from '@/components';
import { useState } from 'react';

interface TableData {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
  joinDate: string;
}

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
  const [smallRows, setSmallRows] = useState(false);

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
          Example of table components with striped styling and proper data presentation.
        </Text>
      </div>

      <div>
        <Title order={3} mb="md" size="h4">Settings</Title>
        <Stack gap="sm" mb="lg">
          <Switch
            label={
              <span>
                Striped <Code>striped={striped.toString()}</Code>
              </span>
            }
            checked={striped}
            onChange={(event) => setStriped(event.currentTarget.checked)}
          />
          <Switch
            label={
              <span>
                Checkboxes <Code>checkboxes={showCheckboxes.toString()}</Code>
              </span>
            }
            checked={showCheckboxes}
            onChange={(event) => setShowCheckboxes(event.currentTarget.checked)}
          />
          <Switch
            label={
              <span>
                Highlight on Hover <Code>highlightOnHover={highlightOnHover.toString()}</Code>
              </span>
            }
            checked={highlightOnHover}
            onChange={(event) => setHighlightOnHover(event.currentTarget.checked)}
          />
          <Switch
            label={
              <span>
                Small Rows <Code>verticalSpacing="{smallRows ? 'xs' : 'lg'}"</Code>
              </span>
            }
            checked={smallRows}
            onChange={(event) => setSmallRows(event.currentTarget.checked)}
          />
        </Stack>
      </div>

      <div>
        <Title order={2} mb="lg" size="h3">Example</Title>
        <TableWrapper 
          checkboxes={showCheckboxes} 
          striped={striped}
          highlightOnHover={highlightOnHover}
          verticalSpacing={smallRows ? 'xs' : 'lg'}
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