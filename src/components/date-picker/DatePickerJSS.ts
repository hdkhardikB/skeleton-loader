import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
    (theme: Theme) =>
        createStyles({
            root: {
                margin: theme.spacing(0),
            },
            datePicker: {
                margin: theme.spacing(0),
                zIndex: 0,
            },
        }),
    { name: 'evlDatePicker', defaultTheme: EvlTheme },
);

export default useStyles;
