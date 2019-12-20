import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        background: fade(theme.palette.primary.main, 0.2),
        cursor: 'unset',
        '&:hover': {
          background: fade(theme.palette.primary.main, 0.2),
        },
      },
    }),
  { name: 'evlButton', defaultTheme: EvlTheme },
);

export default useStyles;
