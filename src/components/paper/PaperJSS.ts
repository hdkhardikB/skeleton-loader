import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        boxShadow: 'none',
        borderRadius: theme.shape.borderRadius * 5,
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A400,
        padding: theme.spacing(1.5),
        backgroundColor: theme.palette.common.white,
        height: '100%',
      },
    }),
  { name: 'evlPaper', defaultTheme: EvlTheme },
);

export default useStyles;
