import * as React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { Grid } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
// import useStyles from './DateRangeJSS';

export interface EvlDateRangeProps {
  startLabel: string;
  endLabel: string;
  dateFormat?: string;
  minDate?: Date;
  maxDate?: Date;
  value: [Date, Date];
  onChange: (dateRange: [Date, Date]) => void;
}

export const EvlDateRange: React.FC<EvlDateRangeProps> = ({
  startLabel,
  endLabel,
  dateFormat = 'MM/dd/yyyy',
  minDate,
  maxDate,
  value,
  onChange,
}) => {
  // const classes = useStyles();
  const [startDate, endDate] = value;
  const [dateRange, setDateRange] = React.useState({ startDate, endDate });

  const onDateChange = (date: Date, dateProperty: string) => {
    setDateRange({ ...dateRange, [dateProperty]: date });
  };

  React.useEffect(() => {
    onChange([dateRange.startDate, dateRange.endDate]);
 }, [dateRange]);

  return (
    <Grid container spacing={2}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid item xs={6}>
          <KeyboardDatePicker
            margin="normal"
            id="startDate"
            label={startLabel}
            format={dateFormat}
            minDate={minDate}
            maxDate={dateRange.endDate}
            value={dateRange.startDate || minDate}
            onChange={(date: Date) => onDateChange(date, 'startDate')}
          />
        </Grid>

        <Grid item xs={6}>
          <KeyboardDatePicker
            margin="normal"
            id="endDate"
            label={endLabel}
            format={dateFormat}
            minDate={dateRange.startDate}
            maxDate={maxDate}
            value={endDate || maxDate}
            onChange={(date: Date) => onDateChange(date, 'endDate')}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </Grid>
  );
};

export default EvlDateRange;
