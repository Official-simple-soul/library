import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import MenuActions from './MenuAction';
import SearchArea from './SearchArea';
import { actionColumn, processedColumns } from './RenderCells';
import { TableWidgetProps } from './types';

const TableWidget: React.FC<TableWidgetProps> = ({
  rows,
  columns,
  pageSize = 5,
  onRowClick,
  onRowSelectionModelChange,
  pageSizeOptions,
  loading,
  menuItems = [],
  handleMenuClick,
  styles,
  tableTitle,
  enableSearch,
  menuItem,
  checkboxSelection = true,
}) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMenuOpen = (event: any, row: any) => {
    event.stopPropagation();
    setMenuAnchorEl(event.currentTarget);
    setSelectedRow(row);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
    setSelectedRow(null);
  };

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = rows.filter((row: any) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const columnsWithActions = menuItem
    ? [...processedColumns(columns), actionColumn(handleMenuOpen)]
    : processedColumns(columns);

  return (
    <Box sx={{ paddingY: 4 }}>
      <SearchArea
        enableSearch={enableSearch}
        handleSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        tableTitle={tableTitle}
      />
      <DataGrid
        rows={filteredRows}
        columns={columnsWithActions}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        pageSizeOptions={pageSizeOptions}
        checkboxSelection={checkboxSelection}
        disableRowSelectionOnClick
        onRowClick={onRowClick}
        onRowSelectionModelChange={onRowSelectionModelChange}
        loading={loading}
        sx={{
          '& .MuiDataGrid-columnHeader': {
            ...styles?.headerStyles,
          },
          '& .MuiDataGrid-main': {
            ...styles?.bodyStyles,
          },
        }}
      />
      <MenuActions
        anchorEl={menuAnchorEl}
        open={Boolean(menuAnchorEl)}
        onClose={handleMenuClose}
        menuItems={menuItems}
        handleMenuClick={handleMenuClick}
        selectedRow={selectedRow}
      />
    </Box>
  );
};

export default TableWidget;
