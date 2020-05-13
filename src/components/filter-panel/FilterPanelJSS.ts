import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: 'transparent',

        '& .MuiExpansionPanelSummary-root': {
          padding: theme.spacing(0),
          width: 'auto',
          display: 'inline-block',
        },
        '& .MuiButtonBase-root': {
          backgroundColor: 'transparent',
          color: theme.palette.primary.light,
        },
        '& .MuiExpansionPanelSummary-content': {
          margin: theme.spacing(0),
        },
        '& .MuiExpansionPanelSummary-content.Mui-expanded': {
          margin: theme.spacing(0),

          '& .MuiButtonBase-root': {
            backgroundColor: theme.palette.primary.light,
            color: theme.palette.common.white,
          },
        },
        '& .MuiCollapse-container': {
          textAlign: 'left',
        },
        '& .MuiExpansionPanelDetails-root': {
          padding: theme.spacing(0),
          display: 'block',
        },
      },
      figure: {
        margin: theme.spacing(0, 1.5, 0, 0),
      },
      filterActive: {
        '& .MuiButtonBase-root': {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.common.white,
        },
      },
    }),
  { name: 'evlFilterPanel', defaultTheme: EvlTheme },
);

export default useStyles;
