import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        margin: 0,
      },
      datePicker: {
        margin: 0,
      },
    }),
  { name: 'evlDateRange', defaultTheme: EvlTheme },
);

export default useStyles;
