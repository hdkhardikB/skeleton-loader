import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './TablePaginationJSS';
import EvlButton from '../../button';
import clsx from 'classnames';

export interface EvlTablePaginationProps {
  count: number;
  onChangePage: (newPage: number) => void;
  rowsPerPage: number;
  page: number;
  loadMoreLabel: string;
  currentlyShowingLabel: string;
  recordLabel: string;
}

export const EvlTablePagination: React.FC<EvlTablePaginationProps> = ({
  count,
  rowsPerPage,
  page,
  onChangePage,
  loadMoreLabel,
  currentlyShowingLabel,
  recordLabel,
}) => {
  const classes = useStyles();
  const noOfRecords = (rowsPerPage < count && page * rowsPerPage + rowsPerPage) || count;
  const displayMore = noOfRecords < count && rowsPerPage < count;
  const progress = (noOfRecords / count) * 100;
  return (
    <div className={classes.root}>
      <label className={clsx(classes.paginationItem, classes.paginationLabel)}>
        {`${currentlyShowingLabel} ${noOfRecords}/${count} ${recordLabel}`}
      </label>
      <LinearProgress className={classes.paginationItem} variant="determinate" value={progress} />
      {!!displayMore && (
        <EvlButton
          variant="outlined"
          className={clsx(classes.paginationItem, classes.paginationButton)}
          onClick={() => onChangePage(page + 1)}
        >
          {loadMoreLabel}
        </EvlButton>
      )}
    </div>
  );
};

export default EvlTablePagination;
