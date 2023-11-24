import React, { FC } from 'react';

interface ButtonProps {
    label: string;
    btn_color?: string;
    btn_text_color?: string;
    btn_text_size?: string;
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

interface Column {
    header: string;
    accessor: string;
    sort?: boolean;
}
interface Styles {
    bg_color?: string;
    text_color?: string;
    menu_bg_color?: string;
    border?: boolean;
}
interface TableProps {
    data: Record<string, any>[] | null;
    columns: Column[] | null;
    styles?: Styles;
    onRowClick: (rowData: Record<string, any>) => void;
    select?: boolean;
    menu?: boolean;
    menuOption?: Record<string, any>[] | null;
    onRowMenuOptionClick?: (row: Record<string, any>) => void;
    onRowSelect?: (selectedRows: Record<string, any>[]) => void;
}
declare const Table: FC<TableProps>;

export { Button, Table };
