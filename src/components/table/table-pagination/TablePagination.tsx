import * as React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import useStyles from './TablePaginationJSS';
import EvlButton from '../../button';
import clsx from 'classnames';
import EvlBox from '@components/box';

export interface EvlTablePaginationProps {
  count: number;
  totalRows: Object[];
  onChangePage: (newPage: number) => void;
  rowsPerPage: number;
  page: number;
  setIsLoadMore?: boolean;
  loadMoreLabel: string;
  currentlyShowingLabel: string;
  recordLabel: string;
}

export const EvlTablePagination: React.FC<EvlTablePaginationProps> = ({
  count,
  totalRows,
  rowsPerPage,
  page,
  setIsLoadMore,
  onChangePage,
  loadMoreLabel,
  currentlyShowingLabel,
  recordLabel,
}) => {
  const classes = useStyles();
  const noOfRecordsToDisplay = page * rowsPerPage + rowsPerPage;
  const noOfRecords = (rowsPerPage < count && noOfRecordsToDisplay < count && noOfRecordsToDisplay) || count;
  const displayMore = noOfRecordsToDisplay < count ? true : false; //TODO when backend impliment we have to change
  const progress = (noOfRecords / count) * 100;
  return (
    <EvlBox className={classes.root}>
      <label className={clsx(classes.paginationItem, classes.paginationLabel)}>
        {`${currentlyShowingLabel} ${noOfRecords}/${count} ${recordLabel}`}
      </label>
      <LinearProgress className={classes.paginationItem} variant="determinate" value={progress} />
      {!!displayMore && !setIsLoadMore && (
        <EvlButton
          variant="outlined"
          className={clsx(classes.paginationItem, classes.paginationButton)}
          onClick={() => onChangePage(page + 1)}
        >
          {loadMoreLabel}
        </EvlButton>
      )}
    </EvlBox>
  );
};

export default EvlTablePagination;
