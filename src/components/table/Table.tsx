import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { orderBy as _orderBy } from 'lodash';
import EvlCheckbox from '../checkbox';
import useStyles from './TableJSS';
import EvlTableHead, { column } from './table-head';
import EvlTablePagination from './table-pagination';
import EvlBox from '@components/box';

interface EvlTableProps {
  rows: Object[];
  columns: column[];
  rowKey: string;
  selectable?: boolean;
  sort?: {
    orderBy: string;
    order: 'asc' | 'desc';
  };
  onSelect: (selectedIds: string[]) => void;
  noDataComponent: React.ReactType;
  pagination?: {
    showPagination?: boolean;
    rowsPerPage?: number;
    loadMoreLabel?: string;
    currentlyShowingLabel?: string;
    recordLabel?: string;
  };
}

const EvlTable: React.FC<EvlTableProps> = ({
  rows,
  columns,
  rowKey,
  selectable,
  onSelect,
  sort,
  noDataComponent: NoDataComponent,
  pagination,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<'asc' | 'desc'>((sort && sort.order) || 'asc');
  const [orderBy, setOrderBy] = React.useState<string>((sort && sort.orderBy) || rowKey);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [page, setPage] = React.useState(0);
  const {
    showPagination,
    rowsPerPage = 10,
    loadMoreLabel = 'Load More',
    currentlyShowingLabel = 'Currently Showing',
    recordLabel = 'Records',
  } = pagination || {};

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected: string[] = [];
    if (event.target.checked) {
      newSelected = rows.map(n => n[rowKey]);
    }
    setSelected(newSelected);
    onSelect(newSelected);
  };

  const handleClick = (selectedKey: string) => {
    const newSelected = (selected.includes(selectedKey) && selected.filter(key => key !== selectedKey)) || [
      ...selected,
      selectedKey,
    ];
    setSelected(newSelected);
    onSelect(newSelected);
  };

  const sortedRows = (rows && rows.length && _orderBy(rows, orderBy, order)) || [];
  const currentRowsToDisplay =
    (showPagination && sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)) || sortedRows;

  return (
    <EvlBox className={classes.root}>
      <Paper elevation={0}>
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="medium" aria-label="table">
            <EvlTableHead
              columns={columns}
              selectable={!!selectable && !!sortedRows.length}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAll={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {!sortedRows.length && (
                <TableRow>
                  <TableCell colSpan={6}>
                    <NoDataComponent />
                  </TableCell>
                </TableRow>
              )}
              {!!sortedRows.length &&
                currentRowsToDisplay.map((row: any, index: number) => {
                  const isItemSelected = selected.includes(row[rowKey]);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      onClick={() => !!selectable && handleClick(row[rowKey])}
                      role="checkbox"
                      aria-checked={!!selectable && isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={!!selectable && isItemSelected}
                    >
                      {!!selectable && (
                        <TableCell className={classes.TableCell}>
                          <EvlCheckbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                        </TableCell>
                      )}
                      {Object.keys(row).map((property: string) => (
                        <TableCell className={classes.TableCell}>{row[property]}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {!!showPagination && !!sortedRows.length && (
          <EvlTablePagination
            count={rows.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            loadMoreLabel={loadMoreLabel}
            currentlyShowingLabel={currentlyShowingLabel}
            recordLabel={recordLabel}
          />
        )}
      </Paper>
    </EvlBox>
  );
};

export default EvlTable;
