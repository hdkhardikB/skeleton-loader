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
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        border: 1,
        borderRadius: 3,
      },
      iconButton: {
        padding: 10,
      },
    }),
  { name: 'evlSearchBox', defaultTheme: EvlTheme },
);

export default useStyles;
