'use client';

import { Table, TableTr, TableTd, TableTh, TableThead, TableTbody, Checkbox } from '@mantine/core';
import { useState } from 'react';
import classes from './TableWrapper.module.css';

interface TableWrapperProps {
  children: React.ReactNode;
  highlightOnHover?: boolean;
  verticalSpacing?: 'xs' | 'lg';
  striped?: boolean;
  checkboxes?: boolean;
  data?: Array<Record<string, any>>;
  onSelectionChange?: (selectedIds: number[]) => void;
}

export const TableWrapper = ({ 
  children, 
  highlightOnHover = false, 
  verticalSpacing = 'lg', 
  striped = false, 
  checkboxes = false,
  data = [],
  onSelectionChange
}: TableWrapperProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  if (checkboxes && data.length === 0) {
    console.warn('TableWrapper: checkboxes prop requires data prop to be provided');
  }

  const handleRowSelection = (id: number, checked: boolean) => {
    const newSelection = checked 
      ? [...selectedRows, id]
      : selectedRows.filter(rowId => rowId !== id);
    
    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  return (
    <Table 
      striped={striped}
      highlightOnHover={highlightOnHover} 
      verticalSpacing={verticalSpacing}
      withTableBorder
      className={classes.table}
      data-striped={striped}
      data-checkboxes={checkboxes}
    >
      {children}
    </Table>
  );
};

// Export table components for easy use
export { TableThead, TableTbody, TableTr, TableTh, TableTd, Checkbox };