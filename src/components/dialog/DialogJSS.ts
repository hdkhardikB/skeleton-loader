import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiDialog-paper': {
          borderRadius: theme.shape.borderRadius * 4,
          padding: theme.spacing(4.5),
          boxShadow: 'none',
        },

        '& .MuiBackdrop-root': {
          backgroundColor: theme.palette.grey.A100,
        },

        '& .MuiDialogTitle-root': {
          padding: theme.spacing(1.5, 1.5, 3),
        },

        '& .MuiDialogContent-root': {
          padding: theme.spacing(0, 1.5),
        },

        '& .MuiDialogActions-root': {
          padding: theme.spacing(3, 1.5, 1.5),
        },
      },
    }),
  { name: 'evlDialog', defaultTheme: EvlTheme },
);

export default useStyles;
