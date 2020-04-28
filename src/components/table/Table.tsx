import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { orderBy as _orderBy, some as _some, filter as _filter, isMatch as _isMatch } from 'lodash';
import EvlCheckbox from '../checkbox';
import useStyles from './TableJSS';
import EvlTableHead, { column } from './table-head';
import EvlTablePagination from './table-pagination';
import EvlBox from '@components/box';

interface EvlTableProps {
  rows: Object[];
  columns: column[];
  selectable?: boolean;
  sort?: {
    orderBy: string;
    order: 'asc' | 'desc';
  };
  onSelect?: (selected: any[]) => void;
  noDataComponent?: React.ReactType;
  rowComponent?: React.ReactType;
  pagination?: {
    showPagination?: boolean;
    rowsPerPage?: number;
    loadMoreLabel?: string;
    currentlyShowingLabel?: string;
    recordLabel?: string;
    onLoadMore?: (skipIndex: number,rowsPerPage: number) => void
    totalNoOfRows?: number;
  };
}

const EvlTable: React.FC<EvlTableProps> = ({
  rows,
  columns,
  selectable,
  onSelect,
  sort,
  noDataComponent: NoDataComponent,
  rowComponent: RowComponent,
  pagination,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState<'asc' | 'desc'>((sort && sort.order) || 'asc');
  const [orderBy, setOrderBy] = React.useState<string>((sort && sort.orderBy) || '');
  const [selected, setSelected] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(0);
  const {
    showPagination,
    rowsPerPage = 10,
    loadMoreLabel = 'Load More',
    currentlyShowingLabel = 'Currently Showing',
    recordLabel = 'Records',
    totalNoOfRows = rows.length,
    onLoadMore
  } = pagination || {};

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
    onLoadMore && onLoadMore(page * rowsPerPage + rowsPerPage, rowsPerPage); 
  };

  const handleRequestSort = (property: string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newSelected: any[] = [];
    if (event.target.checked) {
      newSelected = [...rows];
    }
    setSelected(newSelected);
    !!onSelect && onSelect(newSelected);
  };

  const handleClick = (selectedRow: any) => {
    const newSelected = (!!_some(selected, selectedRow) &&
      _filter(selected, o => {
        return !_isMatch(o, selectedRow);
      })) || [...selected, selectedRow];
    setSelected(newSelected);
    !!onSelect && onSelect(newSelected);
  };

  const sortedRows = (rows && rows.length && _orderBy(rows, orderBy, order)) || [];
  const currentRowsToDisplay = (showPagination && sortedRows.slice(0, page * rowsPerPage + rowsPerPage)) || sortedRows;
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
              rowCount={sortedRows.length}
            />
            <TableBody>
              {!sortedRows.length && !!NoDataComponent && (
                <TableRow>
                  <TableCell colSpan={columns.length}>
                    <NoDataComponent />
                  </TableCell>
                </TableRow>
              )}
              {!!sortedRows.length &&
                currentRowsToDisplay.map((row: any) => {
                  const isItemSelected = !!_some(selected, row);
                  return (
                    <TableRow hover tabIndex={-1} key={row.name} selected={!!selectable && isItemSelected}>
                      {!!selectable && (
                        <TableCell>
                          <EvlCheckbox
                            onChange={e => {
                              e.stopPropagation();
                              handleClick(row);
                            }}
                            checked={isItemSelected}
                          />
                        </TableCell>
                      )}
                      {!!RowComponent && <RowComponent {...row} />}
                      {!RowComponent &&
                        Object.keys(row).map((property: string) => (
                          <TableCell key={property}>{row[property]}</TableCell>
                        ))}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        {!!showPagination && !!sortedRows.length && (
          <EvlTablePagination
            count={totalNoOfRows}
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
