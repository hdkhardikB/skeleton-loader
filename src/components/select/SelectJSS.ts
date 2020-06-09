import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {
        '& .MuiSelect-outlined.MuiSelect-outlined': {
          paddingRight: theme.spacing(5),
        },
      },
      formControl: {
        minWidth: 'inherit',
        width: '100%',

        '& .MuiSelect-outlined.MuiSelect-outlined': {
          zIndex: 1,
        },

        '& .MuiSelect-icon': {
          zIndex: 1,
        },

        '& .MuiOutlinedInput-root': {
          '&.MuiOutlinedInput-adornedStart': {
            padding: theme.spacing(0),
          },
          '& fieldset': {
            borderWidth: theme.spacing(0.1),
            borderStyle: 'solid',
            borderColor: `rgba(45, 99, 128, 0.2)`,
            borderRadius: theme.shape.borderRadius * 5,
            backgroundColor: theme.palette.common.white,
            zIndex: 0,
          },
          '&:hover fieldset': {
            borderWidth: theme.spacing(0.1),
            borderStyle: 'solid',
            borderColor: `rgba(45, 99, 128, 1)`,
            borderRadius: theme.shape.borderRadius * 5,
          },
          '&.Mui-focused fieldset': {
            borderWidth: theme.spacing(0.1),
            borderStyle: 'solid',
            borderColor: theme.palette.primary.main,
            borderRadius: theme.shape.borderRadius * 5,
          },
          '&.MuiOutlinedInput-notchedOutline fieldset': {
            borderWidth: '1px !important',
            borderColor: theme.palette.primary.main,
            borderStyle: 'solid',
            borderRadius: theme.shape.borderRadius * 5,
            color: theme.palette.secondary.main,
          },
          '&.Mui-error fieldset': {
            borderWidth: '1px !important',
            borderColor: theme.palette.error.main,
            borderStyle: 'solid',
            borderRadius: theme.shape.borderRadius * 5,
          },
        },
      },
    }),
  { name: 'evlSelect', defaultTheme: EvlTheme },
);

export default useStyles;
