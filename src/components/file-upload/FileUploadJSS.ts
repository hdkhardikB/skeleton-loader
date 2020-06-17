import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: '100%',

        '& .MuiBox-root': {
          display: 'flex',
          width: '100%',
          borderStyle: 'dashed',
          borderWidth: theme.spacing(0.1),
          borderColor: theme.palette.grey.A100,
          padding: theme.spacing(1.5),
          borderRadius: theme.shape.borderRadius * 5,
          cursor: 'pointer',

          '& $img': {
            marginRight: theme.spacing(1.5),
          },
        },
      },
    }),
  { name: 'evlFileUpload', defaultTheme: EvlTheme },
);

export default useStyles;
