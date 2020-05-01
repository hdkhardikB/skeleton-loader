import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      figureImg: {
        width: 'auto',
        height: '100%',
        padding: theme.spacing(0.3),
        maxWidth: '100%',
      }, figure: {
        margin: theme.spacing(0),
      },
      figureBorder: {
        width: theme.spacing(6.2),
        height: theme.spacing(6.2),
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A400,
        borderRadius: theme.shape.borderRadius * 5,
      },
    }),
  { name: 'evlImageThumbnail', defaultTheme: EvlTheme },
);

export default useStyles;
