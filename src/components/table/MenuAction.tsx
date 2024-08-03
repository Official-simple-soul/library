import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import { MenuActionsProps } from './types';

const MenuActions: React.FC<MenuActionsProps> = ({
  anchorEl,
  open,
  onClose,
  menuItems,
  handleMenuClick,
  selectedRow,
}) => {
  return (
    <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
      {menuItems?.map((item) => (
        <MenuItem
          key={item.key}
          onClick={() => {
            handleMenuClick(item, selectedRow);
            onClose();
          }}
        >
          {item.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MenuActions;
