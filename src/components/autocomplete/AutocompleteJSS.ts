import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
          padding: theme.spacing(0.3),
        },
      },
    }),
  { name: 'evlAutocomplete', defaultTheme: EvlTheme },
);

export default useStyles;
