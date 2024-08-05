## TableWidget Component

The `TableWidget` component provides a dynamic and customizable data table using Material-UI and the DataGrid from `@mui/x-data-grid`. It supports features like pagination, search, menu actions, and more.

### Props

| Prop                        | Type                                               | Description                                               |
| --------------------------- | -------------------------------------------------- | --------------------------------------------------------- |
| `rows`                      | `any[]`                                            | Array of row data to be displayed in the table.           |
| `columns`                   | `GridColDef[]`                                     | Array of column configurations for the table.             |
| `pageSize`                  | `number`                                           | Number of rows per page. Default is 5.                    |
| `onRowClick`                | `(params: any) => void`                            | Callback function when a row is clicked.                  |
| `onRowSelectionModelChange` | `(newSelection: any) => void`                      | Callback function when the row selection model changes.   |
| `pageSizeOptions`           | `number[]`                                         | Array of options for page size. Default is `[5, 10, 20]`. |
| `loading`                   | `boolean`                                          | Indicates if the table is loading.                        |
| `menuItems`                 | `MenuActionItem[]`                                 | Array of menu items for row actions.                      |
| `handleMenuClick`           | `(item: MenuActionItem, selectedRow: any) => void` | Callback function when a menu item is clicked.            |
| `styles`                    | `StyleProps`                                       | Custom styles for the table header and main body.         |
| `tableTitle`                | `string`                                           | Title of the table displayed above the search bar.        |
| `enableSearch`              | `boolean`                                          | Flag to enable or disable the search bar.                 |
| `autoHeight`                | `boolean`                                          | Flag to enable or disable the auto height.                |

### MenuActionItem Interface

Each object in the `menuItems` array should conform to the following interface:

| Property | Type     | Description                          |
| -------- | -------- | ------------------------------------ |
| `key`    | `string` | Unique identifier for the menu item. |
| `label`  | `string` | Text to display for the menu item.   |

### StyleProps Interface

The `styles` prop should conform to the following interface:

| Property | Type      | Description                            |
| -------- | --------- | -------------------------------------- |
| `header` | `SxProps` | Custom styles for the table header.    |
| `row`    | `SxProps` | Custom styles for the row header.      |
| `body`   | `SxProps` | Custom styles for the body table body. |
| `cell`   | `SxProps` | Custom styles for the cell table body. |
| `root`   | `SxProps` | Custom styles for the root table body. |

### Usage

Integrate the `TableWidget` into your React application like so:

```jsx
import React from 'react';
import TableWidget from './TableWidget';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstName', headerName: 'First name', width: 150 },
  { field: 'lastName', headerName: 'Last name', width: 150 },
  { field: 'age', headerName: 'Age', type: 'number', width: 110 },
];

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
  { id: 2, firstName: 'Jane', lastName: 'Doe', age: 30 },
];

const menuItems = [
  { key: 'edit', label: 'Edit' },
  { key: 'delete', label: 'Delete' },
];

const handleMenuClick = (item, selectedRow) => {
  console.log(item, selectedRow);
};

function App() {
  return (
    <TableWidget
      rows={rows}
      columns={columns}
      pageSize={5}
      onRowClick={(params) => console.log(params)}
      onRowSelectionModelChange={(newSelection) => console.log(newSelection)}
      pageSizeOptions={[5, 10, 20]}
      loading={false}
      menuItems={menuItems}
      handleMenuClick={handleMenuClick}
      styles={{
        headerStyles: { backgroundColor: '#f5f5f5' },
        mainStyles: { backgroundColor: '#fff' },
      }}
      tableTitle="Sample Table"
      enableSearch={true}
    />
  );
}

export default App;
```
