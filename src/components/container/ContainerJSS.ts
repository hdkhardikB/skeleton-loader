import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '&.MuiContainer-maxWidthLg': {
          maxWidth: theme.spacing(120),
        },
      },
    }),
  { name: 'evlContainer', defaultTheme: EvlTheme },
);

export default useStyles;
