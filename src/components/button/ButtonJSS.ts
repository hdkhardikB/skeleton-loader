import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        cursor: 'pointer',
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.light,
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius * 5,
        color: theme.palette.common.white,

        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.light,
        }
      },
    }),
  { name: 'evlButton', defaultTheme: EvlTheme },
);

export default useStyles;
