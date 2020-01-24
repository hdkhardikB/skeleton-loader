import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      textField: {
        background: theme.palette.primary.contrastText,
        height: theme.spacing() * 5.2,
        fontSize: `${(theme.spacing() * 1.6) / 20}rem`,
      },
    }),
  { name: 'evlTextBox', defaultTheme: EvlTheme },
);

export default useStyles;
