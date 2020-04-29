import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      TableCell: {
        padding: theme.spacing(1.5),
        backgroundColor: theme.palette.secondary.light,
        borderBottom: 0,

        '&:first-child': {
          borderTopLeftRadius: theme.shape.borderRadius * 4,
          borderBottomLeftRadius: theme.shape.borderRadius * 4,
        },

        '&:last-child': {
          borderTopRightRadius: theme.shape.borderRadius * 4,
          borderBottomRightRadius: theme.shape.borderRadius * 4,
        },

        '& .PrivateSwitchBase-root': {
          padding: theme.spacing(0),
        },
      },
      TableSortLabel: {
        fontWeight: 700,
        color: theme.palette.primary.main,

        '&:hover': {
          color: theme.palette.primary.main,
        },

        '&:focus': {
          color: theme.palette.primary.main,
        },

        '&-active': {
          color: theme.palette.primary.main,
        },
      },
    }),
  { name: 'evlTableHead', defaultTheme: EvlTheme },
);

export default useStyles;
