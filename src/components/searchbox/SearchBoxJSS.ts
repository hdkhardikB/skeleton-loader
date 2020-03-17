import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        alignItems: 'center',
        width: 400,
        backgroundColor: theme.palette.grey.A200,
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: theme.spacing(1),
      },
    }),
  { name: 'evlSearchBox', defaultTheme: EvlTheme },
);

export default useStyles;
