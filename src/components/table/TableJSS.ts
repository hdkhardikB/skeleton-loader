import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiTableCell-body': {
          color: theme.palette.secondary.main,
          padding: theme.spacing(1, 1.5),
        }
      },
    }),
  { name: 'evlTable', defaultTheme: EvlTheme },
);

export default useStyles;
