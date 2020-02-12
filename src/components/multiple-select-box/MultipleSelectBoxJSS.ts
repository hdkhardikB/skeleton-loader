import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: 500,
        '& > * + *': {
          marginTop: theme.spacing(3),
        },
      },
    }),
  { name: 'evlMultipleSelectBox', defaultTheme: EvlTheme },
);

export default useStyles;
