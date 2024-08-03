import { Avatar, Box, IconButton } from '@mui/material';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import React from 'react';

type HandleMenuOpen = (event: React.MouseEvent<HTMLElement>, row: any) => void;

export const actionColumn = (handleMenuOpen: HandleMenuOpen) => {
  return {
    field: 'actions',
    headerName: '',
    renderCell: (params: any) => (
      <Box>
        <IconButton onClick={(event) => handleMenuOpen(event, params.row)}>
          <GridMoreVertIcon />
        </IconButton>
      </Box>
    ),
  };
};

export const processedColumns = (columns: []) => {
  return columns.map((column: any) => {
    if (['avatar', 'image', 'picture', 'img'].includes(column.field)) {
      return {
        ...column,
        renderCell: (params: any) => (
          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width="100%"
            height="100%"
          >
            <Avatar alt={params.row.firstName} src={params.value} />
          </Box>
        ),
      };
    }
    if (typeof column.valueGetter === 'function') {
      return {
        ...column,
        valueGetter: (_: any, params: any) => column.valueGetter!(params),
      };
    }
    if (typeof column.renderCell === 'function') {
      return {
        ...column,
        renderCell: (params: any) => column.renderCell!(params),
      };
    }
    return column;
  });
};
