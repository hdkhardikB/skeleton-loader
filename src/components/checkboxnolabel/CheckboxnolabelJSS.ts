import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      FormControlLabel: {
        marginLeft: 0,
        marginRight: theme.spacing(0.5),
        padding: theme.spacing(0.4, 1),
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A400,
        borderRadius: theme.shape.borderRadius * 5,
        fontSize: theme.spacing(1.4),
        fontWeight: 700,
        color: theme.palette.primary.light,
        minWidth: theme.spacing(3.4),
        minHeight: theme.spacing(3.4),
        textAlign: 'center',
        backgroundColor: theme.palette.common.white,

        '&:hover': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
        },
      },
      checkBoxLabel: {
        fontWeight: 700,
      },
      Checkbox: {
        display: 'none',
      },
      checked: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.light,

        '&:hover': {
          backgroundColor: theme.palette.primary.light,
        },
      },
    }),
  { name: 'evlCheckboxnolabel', defaultTheme: EvlTheme },
);

export default useStyles;
