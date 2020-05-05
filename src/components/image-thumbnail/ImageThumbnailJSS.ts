import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.grey.A100
      },
    }),
  { name: 'evlImageThumbnail', defaultTheme: EvlTheme },
);

export default useStyles;
