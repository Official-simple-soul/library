import { Box, TextField, Typography } from '@mui/material';
import React from 'react';
import { SearchAreaProps } from './types';

const SearchArea: React.FC<SearchAreaProps> = ({
  enableSearch,
  searchQuery,
  handleSearchChange,
  tableTitle,
}) => {
  return (
    <div>
      {enableSearch && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2,
          }}
        >
          <Typography
            sx={{
              flex: 2,
            }}
            variant="h6"
          >
            {tableTitle}
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              flex: 1,
            }}
          />
        </Box>
      )}
    </div>
  );
};

export default SearchArea;
