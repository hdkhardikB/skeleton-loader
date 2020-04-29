import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiDrawer-paper': {
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(24),
          },
          borderRight: theme.spacing(0),
          backgroundColor: theme.palette.primary.dark,
        },
      },
    }),
  { name: 'evlDrawer', defaultTheme: EvlTheme },
);

export default useStyles;
