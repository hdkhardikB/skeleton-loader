import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      FormControlLabel: {
        marginLeft: 0,
      },
      Checkbox: {
          display: 'none'
      }
    }),
  { name: 'evlCheckboxnolabel', defaultTheme: EvlTheme },
);

export default useStyles;
