import * as React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
// import useStyles from './TableHeadJSS';
import EvlCheckbox from '../../checkbox';

export type column = {
  name: string;
  title: string;
  options?: {
    sort: boolean;
  };
};

interface EvlTableHeadProps {
  columns: column[];
  selectable?: boolean;
  order: 'asc' | 'desc';
  orderBy: string;
  numSelected: number;
  rowCount: number;
  onRequestSort: (property: string) => void;
  onSelectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const EvlTableHead: React.FC<EvlTableHeadProps> = ({
  columns,
  selectable,
  onSelectAll,
  order,
  orderBy,
  numSelected,
  rowCount,
  onRequestSort,
}: any) => {
  // const classes = useStyles();
  const createSortHandler = (property: string) => () => {
    onRequestSort(property);
  };
  return (
    <TableHead>
      <TableRow>
        {!!selectable && (
          <TableCell padding="checkbox">
            <EvlCheckbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAll}
            />
          </TableCell>
        )}
        {columns.map(({ name, title, options }: any) => (
          <TableCell key={name} align="left" padding="default" sortDirection={orderBy === name ? order : false}>
            {(options && options.sort && (
              <TableSortLabel
                active={options && options.sort && orderBy === name}
                direction={(orderBy === name && order) || 'asc'}
                onClick={createSortHandler(name)}
              >
                {title}
              </TableSortLabel>
            )) ||
              title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EvlTableHead;
