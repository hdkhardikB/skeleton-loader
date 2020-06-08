import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      formControl: {
        minWidth: 'inherit',
        width: '100%',
      },
      dropZone: {
        padding: theme.spacing(2),
        border: `${theme.spacing(0.2)}px dashed ${theme.palette.primary.main}`,
      },
    }),
  { name: 'evlFileUpload', defaultTheme: EvlTheme },
);

export default useStyles;
