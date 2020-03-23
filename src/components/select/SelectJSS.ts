import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiSelect-outlined.MuiSelect-outlined': {
          paddingRight: theme.spacing(5)
        },
      },
      formControl: {
        minWidth: 'inherit',
        width: '100%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      selectIcon: {
        position: 'absolute',
        right: theme.spacing(0),
        zIndex: -1,
      }
    }),
  { name: 'evlSelect', defaultTheme: EvlTheme },
);

export default useStyles;
