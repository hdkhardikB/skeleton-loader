import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        width: theme.spacing(30),
        paddingTop: theme.spacing(3),

        '& .MuiSlider-root': {
          padding: theme.spacing(0),
          height: theme.spacing(2.5),
          margin: theme.spacing(1.5, 0),
        },
        '& .MuiSlider-mark': {
          top: theme.spacing(0.9),
          opacity: 0,
        },
        '& .MuiSlider-rail': {
          height: theme.spacing(0.6),
          backgroundColor: theme.palette.grey.A400,
          borderRadius: theme.shape.borderRadius * 5,
          top: theme.spacing(0.9),
        },
        '& .MuiSlider-track': {
          height: theme.spacing(0.6),
          backgroundColor: theme.palette.primary.light,
          borderRadius: theme.shape.borderRadius * 5,
          top: theme.spacing(0.9),
        },
        '& .MuiSlider-thumb': {
          width: theme.spacing(2.5),
          height: theme.spacing(2.5),
          top: theme.spacing(0.5),
          marginLeft: theme.spacing(-1.2),
          backgroundColor: theme.palette.common.white,
          borderWidth: theme.spacing(0.1),
          borderStyle: 'solid',
          borderColor: theme.palette.grey.A400,
        },
      },
      margin: {
        height: theme.spacing(3),
      },
    }),
  { name: 'evlRangeSlider', defaultTheme: EvlTheme },
);

export default useStyles;
