import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiTableCell-body': {
          color: theme.palette.secondary.main,
          padding: theme.spacing(1, 1.5),
          borderBottomWidth: theme.spacing(0.1),
          borderBottomStyle: 'solid',
          borderBottomColor: theme.palette.grey.A200,
          '& .MuiCheckbox-root': {
            padding: theme.spacing(0),
          },
        },
      },
      tablePaper: {
        backgroundColor: theme.palette.common.white,
        borderRadius: theme.shape.borderRadius * 3
      },
    }),
  { name: 'evlTable', defaultTheme: EvlTheme },
);

export default useStyles;
