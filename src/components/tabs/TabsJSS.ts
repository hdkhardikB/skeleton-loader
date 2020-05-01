import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        borderBottomColor: theme.palette.grey.A400,
        borderBottomWidth: theme.spacing(0.1),
        borderBottomStyle: 'solid',
        marginBottom: theme.spacing(4),
      },
    }),
  { name: 'evlTabs', defaultTheme: EvlTheme },
);

export default useStyles;
