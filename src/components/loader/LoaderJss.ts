import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      formLoader: {
        display: 'flex',
      },
      formLoaderContent: {
        alignSelf: 'center',
      },
      figure: {
        margin: 0,
        alignSelf: 'center',
      },
    }),
  { name: 'evlTextBox', defaultTheme: EvlTheme },
);

export default useStyles;
