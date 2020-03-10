import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        justifyItems: 'space-between',
        flexDirection: 'column',
        padding: theme.spacing(2),
      },
      paginationItem: {
        alignSelf: 'center',
        textAlign: 'center',
        margin: theme.spacing(1),
        width: '30%',
      },
    }),
  { name: 'evlTablePagination', defaultTheme: EvlTheme },
);

export default useStyles;