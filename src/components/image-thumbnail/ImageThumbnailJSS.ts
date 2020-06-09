import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.grey[100],
        padding: theme.spacing(1.5),
        borderRadius: theme.shape.borderRadius * 2,
      },
      icDownload: {
        padding: theme.spacing(1),
        display: 'inline-block',
        verticalAlign: 'middle',
      },
      fileName: {
        margin: theme.spacing(0, 1),
      },
      figure: {
        margin: theme.spacing(0),
      },
      btnDelete: {
        width: theme.spacing(4),
        height: theme.spacing(4),
        padding: theme.spacing(0),
      },
    }),
  { name: 'evlImageThumbnail', defaultTheme: EvlTheme },
);

export default useStyles;
