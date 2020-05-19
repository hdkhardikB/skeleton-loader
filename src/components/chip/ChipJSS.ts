import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        borderRadius: theme.shape.borderRadius * 2.5,
        backgroundColor: theme.palette.primary.light,
        height: 'inherit',

        '& .MuiAvatar-root': {
          backgroundColor: 'transparent',
          filter: 'brightness(650%)',

          '& .MuiAvatar-img': {
            objectFit: 'unset',
          },
        },

        '& .MuiChip-labelSmall': {
          whiteSpace: 'break-spaces',
          lineHeight: `${theme.spacing(1.5)}px`,
          padding: theme.spacing(0.5, 1),
        },
      },
      '& .MuiChip-root': {
        borderRadius: theme.shape.borderRadius * 2.5,
        backgroundColor: theme.palette.primary.light,
      },
      '& .MuiChip-colorPrimary': {
        backgroundColor: theme.palette.primary.light,
      },
      '& .MuiChip-colorSecondary': {
        backgroundColor: theme.palette.secondary.main,
      },
    }),
  { name: 'evlChip', defaultTheme: EvlTheme },
);

export default useStyles;
