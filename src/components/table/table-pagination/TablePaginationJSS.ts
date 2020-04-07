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
      paginationLabel: {
        fontSize: theme.spacing(1.4),
      },
      paginationButton: {
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: theme.palette.primary.light,
        borderColor: theme.palette.primary.light,
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius * 5,
        padding: theme.spacing(0.5, 1.5),
        fontWeight: 700,
        textTransform: 'capitalize',
        minWidth: 'inherit',
        fontSize: theme.spacing(1.4),
        width: 'auto',

        '&:hover': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.common.white,
        },
      },
    }),
  { name: 'evlTablePagination', defaultTheme: EvlTheme },
);

export default useStyles;
