import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '&:hover': {
          backgroundColor: 'transparent',
        },
      },
      icon: {
        borderRadius: theme.shape.borderRadius * 100,
        width: theme.spacing(2.4),
        height: theme.spacing(2.4),
        backgroundColor: 'transparent',
        borderWidth: theme.spacing(0.2),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A100,

        'input:hover ~ &': {
          backgroundColor: theme.palette.grey[100],
        },

        'input:disabled ~ &': {
          background: theme.palette.grey[100],
          opcity: 0.5,
        },
      },
      checkedIcon: {
        backgroundColor: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,

        '&:before': {
          display: 'block',
          width: 16,
          height: 16,
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: theme.palette.secondary.main,
        },
      },
    }),
  { name: 'evlCheckbox', defaultTheme: EvlTheme },
);
export default useStyles;
