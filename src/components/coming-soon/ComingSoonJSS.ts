import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    }),
  { name: 'evlComingSoon', defaultTheme: EvlTheme },
);

export default useStyles;
