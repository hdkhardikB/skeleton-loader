import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        cursor: 'pointer',
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.light,
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderRadius: theme.shape.borderRadius * 5,
        color: theme.palette.common.white,
        padding: theme.spacing(0.5, 1.5),
        fontWeight: 700,
        textTransform: 'capitalize',
        minWidth: 'inherit',
        fontSize: theme.spacing(1.4),

        '&:hover': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.light,

          '& .MuiButton-startIcon img': {
            filter: 'brightness(600%)',
          },
        },

        '&.MuiButton-textSizeSmall': {
          padding: theme.spacing(0.2, 1),
          fontSize: theme.spacing(1.2),
        },
        '&.MuiButton-textSizeLarge': {
          fontSize: theme.spacing(1.6),
          padding: theme.spacing(0.8, 2.5),
          height: theme.spacing(4.8),
        },
        '&.MuiButton-outlinedSizeLarge': {
          fontSize: theme.spacing(1.6),
          padding: theme.spacing(0.8, 2.5),
          height: theme.spacing(4.8),
        },
        '&.MuiButton-outlinedSizeSmall': {
          padding: theme.spacing(0.2, 1),
          fontSize: theme.spacing(1.2),
        },
        '&.MuiButton-textPrimary': {
          backgroundColor: theme.palette.primary.light,
          borderColor: theme.palette.primary.light,
          borderWidth: theme.spacing(0.1),
          borderStyle: 'solid',
          color: theme.palette.common.white,

          '&:hover': {
            backgroundColor: 'transparent',
            color: theme.palette.primary.light,
          },
        },
        '&.MuiButton-textSecondary': {
          borderColor: `transparent`,
          borderWidth: theme.spacing(0.1),
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          color: theme.palette.primary.light,

          '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
          },
        },
        '&.MuiButton-outlined': {
          borderColor: theme.palette.primary.light,
          borderWidth: theme.spacing(0.1),
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          color: theme.palette.primary.light,

          '&:hover': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
          },
        },
        '&.Mui-disabled': {
          opacity: 0.3,
        },
      },
    }),
  { name: 'evlButton', defaultTheme: EvlTheme },
);

export default useStyles;
