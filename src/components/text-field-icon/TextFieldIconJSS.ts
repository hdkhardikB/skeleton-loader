import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      textFieldIcon: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: theme.spacing() * 5.2,
        height: theme.spacing() * 5.2,
        border: `0px`,

        '&:hover': {
          borderColor: theme.palette.secondary.light,
        },
      },
      icon: {
        color: theme.palette.primary.main,
      },
    }),
  { name: 'evlTextFieldIcon', defaultTheme: EvlTheme },
);

export default useStyles;
