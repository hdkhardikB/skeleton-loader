import * as React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker, KeyboardDatePickerProps } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import useStyles from './DatePickerJSS';

export interface EvlDatePickerProps extends Omit<KeyboardDatePickerProps, 'classes' | 'variant'> {

}

const EvlDatePicker: React.FC<EvlDatePickerProps> = ({ format, ...props }) => {
    const classes = useStyles()
    return <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
            {...props}
            format={format || "dd MM yyyy"}
            inputVariant="outlined"
            className={classes.datePicker}
        />
    </MuiPickersUtilsProvider>
}

export default EvlDatePicker;