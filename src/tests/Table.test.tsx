import { render } from '@testing-library/react';
import { TableWidget } from '../components';
import { columns, rows } from './fixtures/useTableForm';

export {};

test('renders learn react link', () => {
  render(
    <TableWidget
      rows={rows}
      columns={columns}
      onRowClick={onRowClick}
      onRowSelectionModelChange={onRowSelectionModelChange}
      pageSize={10}
      pageSizeOptions={[10, 20]}
      menuItems={menuItems}
      handleMenuClick={handleMenuClick}
      tableTitle={'Stundet List'}
      enableSearch={true}
      styles={{
        headerStyles: {
          backgroundColor: 'red',
          color: '#fff',
        },
        bodyStyles: {
          backgroundColor: '#fff',
          color: 'red',
          cursor: 'pointer',
        },
      }}
    />
  );
});

const onRowClick = (param) => {
  console.log('object:', param);
};

const onRowSelectionModelChange = (param) => {
  console.log('checked', param);
};

const menuItems = [
  {
    key: 'edit',
    label: 'Edit',
    // onClick: (row: any) => handleMenuAction('Edit', row),
  },
  {
    key: 'del',
    label: 'Delete',
    // onClick: (row: any) => handleMenuAction('Delete', row),
  },
];

const handleMenuClick = (item, row) => {
  console.log(item, row);
};
