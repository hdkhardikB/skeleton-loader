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
      rootImage: {
        margin: theme.spacing(0),
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A100,
        borderRadius: theme.shape.borderRadius * 4,
        width: '100%',
        display: 'block',
        textAlign: 'center',
        padding: theme.spacing(1),

        '& $img': {
          maxWidth: theme.spacing(4.2),
        },

        '&:hover': {
          borderColor: theme.palette.primary.main,
        },

        '&$rootChecked': {
          borderColor: theme.palette.secondary.main,
          backgroundColor: theme.palette.grey.A700,
          boxShadow: `${theme.spacing(0, 0.5, 1)} ${theme.palette.grey.A100}`,
        },
      },
      rootChecked: {},
      rootSwitch: {
        width: '50%',
        textAlign: 'center',
        margin: theme.spacing(0),
        display: 'inline-block',
        padding: theme.spacing(1),

        '& .MuiRadio-root': {
          display: 'none',
        },

        '& $icon': {
          display: 'none',
        },

        '&$rootChecked': {
          backgroundColor: theme.palette.primary.light,
          borderRadius: theme.shape.borderRadius * 4,
          color: theme.palette.common.white,
        },
      },
    }),
  { name: 'evlCheckbox', defaultTheme: EvlTheme },
);
export default useStyles;
