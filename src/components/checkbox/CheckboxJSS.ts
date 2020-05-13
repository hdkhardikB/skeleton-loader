import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { EvlTheme } from '@themes';

const useStyles = makeStyles(
  (theme: Theme) =>
    createStyles({
      root: {},
      formControlLabel: {
        marginLeft: theme.spacing(0),
      },
      formTextLabel: {
        marginLeft: theme.spacing(0),
        marginRight: theme.spacing(0.5),
        padding: theme.spacing(0.4, 1),
        borderWidth: theme.spacing(0.1),
        borderStyle: 'solid',
        borderColor: theme.palette.grey.A400,
        borderRadius: theme.shape.borderRadius * 5,
        fontSize: theme.spacing(1.4),
        fontWeight: 700,
        color: theme.palette.primary.light,
        minWidth: theme.spacing(3.4),
        minHeight: theme.spacing(3.4),
        textAlign: 'center',
        backgroundColor: theme.palette.common.white,

        '&:hover': {
          color: theme.palette.common.white,
          backgroundColor: theme.palette.secondary.main,
        },
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
        marginLeft: theme.spacing(0),
        textAlign: 'center',

        '&:hover': {
          '& $img': {
            filter: `brightness(460%)`,
          },
        },
      },
      icon: {
        borderRadius: theme.shape.borderRadius * 3,
        width: theme.spacing(2.4),
        height: theme.spacing(2.4),
        borderStyle: 'solid',
        borderWidth: theme.spacing(0.2),
        borderColor: theme.palette.secondary.main,

        // TODO: Future purpose
        '$root.Mui-focusVisible &': {
          // outline: '2px auto rgba(19,124,189,.6)',
          // outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: theme.palette.secondary.main,
        },
        'input:disabled ~ &': {
          opcity: 0.5,
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
      noCheckbox: {
        display: 'none',
      },
      checked: {
        color: theme.palette.common.white,
        backgroundColor: theme.palette.primary.light,

        '& $img': {
          filter: `brightness(460%)`,
        },

        '&:hover': {
          backgroundColor: theme.palette.primary.light,
        },
      },
    }),
  { name: 'evlCheckbox', defaultTheme: EvlTheme },
);

export default useStyles;
