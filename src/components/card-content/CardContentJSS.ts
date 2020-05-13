import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        padding: theme.spacing(1.5),
        '&:last-child': {
          paddingBottom: theme.spacing(1.5),
        },
      },
    }),
  { name: 'evlCardContent', defaultTheme: EvlTheme },
);

export default useStyles;
