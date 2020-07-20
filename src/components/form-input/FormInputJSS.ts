import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiOutlinedInput-input': {
          padding: theme.spacing(1.25, 1.4),
        },
      },
    }),
  { name: 'evlFormInput', defaultTheme: EvlTheme },
);

export default useStyles;
