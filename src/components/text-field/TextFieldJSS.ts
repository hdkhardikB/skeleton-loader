import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      textField: {
        margin: theme.spacing(0),
      },
    }),
  { name: 'evlTextBox', defaultTheme: EvlTheme },
);

export default useStyles;
