import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
      },
      message: {
        margin: '2px 2px 2px 2px',
      },
    }),
  { name: 'evlError', defaultTheme: EvlTheme },
);

export default useStyles;
