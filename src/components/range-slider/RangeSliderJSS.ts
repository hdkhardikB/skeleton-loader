import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: theme.spacing(30),
        paddingTop: theme.spacing(3),
      },
      margin: {
        height: theme.spacing(3),
      },
    }),
  { name: 'evlRangeSlider', defaultTheme: EvlTheme },
);

export default useStyles;
