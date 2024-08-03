import { SxProps } from '@mui/system';
import { GridColDef } from '@mui/x-data-grid';

export interface MenuActionItem {
  key: string;
  label: string;
}

export interface MenuActionsProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
  menuItems: MenuActionItem[];
  handleMenuClick: (item: MenuActionItem, selectedRow: any) => void;
  selectedRow: any;
}

export interface SearchAreaProps {
  enableSearch: boolean;
  searchQuery: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tableTitle: string;
}

export interface StyleProps {
  headerStyles: SxProps;
  bodyStyles: SxProps;
}

export interface TableWidgetProps {
  rows: any[];
  columns: GridColDef[];
  pageSize?: number;
  onRowClick?: (params: any) => void;
  onRowSelectionModelChange?: (newSelection: any) => void;
  pageSizeOptions?: number[];
  loading?: boolean;
  menuItems?: MenuActionItem[];
  handleMenuClick?: (item: MenuActionItem, selectedRow: any) => void;
  styles?: StyleProps;
  tableTitle?: string;
  enableSearch?: boolean;
  menuItem?: boolean;
  checkboxSelection?: boolean;
}
