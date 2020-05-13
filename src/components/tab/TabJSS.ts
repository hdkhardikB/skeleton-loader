import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        textTransform: 'inherit',
        minWidth: 'inherit',
        marginRight: theme.spacing(1.5),
        fontWeight: 'bold',
        color: theme.palette.secondary.main,

        '&.Mui-selected': {
          color: theme.palette.primary.main,
        },
      },
    }),
  { name: 'evlTab', defaultTheme: EvlTheme },
);

export default useStyles;
