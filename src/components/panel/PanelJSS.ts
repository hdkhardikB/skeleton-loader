import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        background: 'transparent',
        boxShadow: 'none',
        '& .MuiExpansionPanelSummary-root': {
          padding: theme.spacing(0),
        },
        '& .MuiCollapse-container': {
          borderBottomWidth: theme.spacing(0.1),
          borderBottomStyle: 'solid',
          borderBottomColor: theme.palette.grey.A400,
        },
        '&:before': {
          backgroundColor: theme.palette.grey.A400,
        },
      },
    }),
  { name: 'evlPanel', defaultTheme: EvlTheme },
);

export default useStyles;
