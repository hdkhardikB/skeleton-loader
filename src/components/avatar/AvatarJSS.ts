import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: theme.spacing(4.2),
        height: theme.spacing(4.2),
        backgroundColor: theme.palette.secondary.main,
        fontSize: theme.spacing(1.6),

        '&.MuiAvatar-rounded': {
          borderRadius: theme.shape.borderRadius * 8,
        },
      },
    }),
  { name: 'evlAvatar', defaultTheme: EvlTheme },
);

export default useStyles;
