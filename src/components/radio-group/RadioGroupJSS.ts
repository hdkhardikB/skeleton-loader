import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        display: 'block',
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A100,
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 4,
      },
    }),
  { name: 'EvlGroupRadio', defaultTheme: EvlTheme },
);

export default useStyles;
