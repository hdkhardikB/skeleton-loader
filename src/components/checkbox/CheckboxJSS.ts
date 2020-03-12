import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      formControlLabel: {
        marginLeft: 0,
      },
      checkBoxLabel: {
        fontWeight: 700,
      },
      figure: {
        margin: `0 auto`,
        display: 'block',
      },
      blockImg: {
        display: 'inline-block',
        marginLeft: 0,
        textAlign: 'center',
      },
      icon: {
        borderRadius: theme.shape.borderRadius * 3,
        width: theme.spacing(2.4),
        height: theme.spacing(2.4),
        borderStyle: 'solid',
        borderWidth: theme.spacing(0.2),
        borderColor: theme.palette.secondary.main,

        '$root.Mui-focusVisible &': {
          // outline: '2px auto rgba(19,124,189,.6)',
          // outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: theme.palette.secondary.main,
        },
        'input:disabled ~ &': {
          opcity: 0.5
        },
      },
      checkedIcon: {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
        
        '&:before': {
          display: 'block',
          width: theme.spacing(2),
          height: theme.spacing(2),
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: theme.palette.primary.main,
        },
      },
    }),
  { name: 'evlCheckbox', defaultTheme: EvlTheme },
);

export default useStyles;
