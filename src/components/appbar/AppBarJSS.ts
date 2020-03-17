import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      appBar: {
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.common.white,
        padding: theme.spacing(0.5, 0)
      },
    }),
  { name: 'evlAppBar', defaultTheme: EvlTheme },
);

export default useStyles;
