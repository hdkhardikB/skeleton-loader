import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      textField: {
        margin: theme.spacing(0),
        zIndex: 0,

        '& .MuiOutlinedInput-input': {
          padding: theme.spacing(1.25, 1.4),
        },
        '& .MuiInputLabel-formControl': {
          top: theme.spacing(-0.6),
        },
      },
    }),
  { name: 'evlTextBox', defaultTheme: EvlTheme },
);

export default useStyles;
