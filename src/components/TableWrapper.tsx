'use client';

import { Table, TableTr, TableTd, TableTh, TableThead, TableTbody, Checkbox } from '@mantine/core';
import { useState } from 'react';
import classes from './TableWrapper.module.css';

interface TableWrapperProps {
  children: React.ReactNode;
  highlightOnHover?: boolean;
  condensed?: boolean;
  striped?: boolean;
  checkboxes?: boolean;
  data?: Array<Record<string, unknown>>;
  onSelectionChange?: (selectedIds: number[]) => void;
}

export const TableWrapper = ({ 
  children, 
  highlightOnHover = false, 
  condensed = false, 
  striped = false, 
  checkboxes = false,
  data = [],
  onSelectionChange
}: TableWrapperProps) => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  if (checkboxes && data.length === 0) {
    console.warn('TableWrapper: checkboxes prop requires data prop to be provided');
  }

  // Row selection handler (only used when checkboxes are enabled)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleRowSelection = (id: number, checked: boolean) => {
    const newSelection = checked 
      ? [...selectedRows, id]
      : selectedRows.filter(rowId => rowId !== id);
    
    setSelectedRows(newSelection);
    onSelectionChange?.(newSelection);
  };

  return (
    <div className={classes.wrapper}>
      <Table 
        striped={striped}
        highlightOnHover={highlightOnHover} 
        verticalSpacing={condensed ? 'xs' : 'lg'}
        horizontalSpacing="md"
        className={classes.table}
        data-striped={striped}
        data-checkboxes={checkboxes}
      >
        {children}
      </Table>
    </div>
  );
};

// Export table components for easy use
export { TableThead, TableTbody, TableTr, TableTh, TableTd, Checkbox };