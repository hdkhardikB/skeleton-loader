import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        alignItems: 'center',
        boxShadow: 'none',
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A400,
        borderRadius: theme.shape.borderRadius * 5,
        backgroundColor: theme.palette.common.white,

        '& input': {
          marginLeft: theme.spacing(1),
          flex: 1,
        },

        '& .MuiIconButton-root.Mui-disabled': {
          color: theme.palette.secondary.main,
        },
      },
      iconButton: {
        padding: theme.spacing(0.5, 1),
        color: theme.palette.secondary.main,
      },
      iconClose: {
        marginLeft: 'auto',
      },
      inputBase: {
        width: '100%',
        borderRadius: theme.shape.borderRadius * 5,

        '&.Mui-focused': {
          backgroundColor: theme.palette.grey[100],
          '& $input': {
            color: theme.palette.secondary.main,
          },
        },
      },
    }),
  { name: 'evlSearchBox', defaultTheme: EvlTheme },
);

export default useStyles;
