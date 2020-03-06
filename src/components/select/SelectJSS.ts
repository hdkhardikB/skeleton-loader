import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      formControl: {
        minWidth: 'inherit',
        width: '100%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    }),
  { name: 'evlSelect', defaultTheme: EvlTheme },
);

export default useStyles;
