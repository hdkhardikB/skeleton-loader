import { createStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { fade } from '@material-ui/core/styles/colorManipulator';

export const midGrey = () =>
  createStyles({
    default: {
      color: '#757B86',
    },
  });

export const linkText = () =>
  createStyles({
    default: {
      color: '#426EB5',
    },
  });

export const tableCellColor = () =>
  createStyles({
    default: {
      color: '#383B41',
    },
  });

export const invalidInput = (theme: Theme) =>
  createStyles({
    default: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: theme.spacing(5),
      alignContent: 'center',
      border: `solid #e4cbcb 1px`,
      marginTop: theme.spacing(2),
      color: '#7d2223',
      backgroundColor: '#ffd9d9',
      padding: theme.spacing(1.5),
      fontSize: '13px',
    },
  });

export const menuButton = (theme: Theme) =>
  createStyles({
    default: {
      background: 'white',
      cursor: 'pointer',
      '&:hover': {
        background: theme.palette.grey[50],
      },
    },
  });

export const activeMenuButton = (theme: Theme) =>
  createStyles({
    default: {
      background: fade(theme.palette.primary.main, 0.2),
      cursor: 'unset',
      '&:hover': {
        background: fade(theme.palette.primary.main, 0.2),
      },
    },
  });

export const successMessage = (theme: Theme) =>
  createStyles({
    default: {
      backgroundColor: '#D2F3DB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      minHeight: theme.spacing(5),
      alignContent: 'center',
      border: 'solid #cddcc6 1px',
      marginTop: theme.spacing(2),
      color: '#465440',
      padding: theme.spacing(1.5),
      fontSize: '13px',
    },
  });

export const submitButton = (theme: Theme) =>
  createStyles({
    default: {
      background: theme.palette.primary.main,
      color: theme.palette.common.white,
      textTransform: 'capitalize',
      fontSize: '16px',
      width: '100%',
      borderRadius: '4px',
      padding: '4px',
      height: theme.spacing(4.25),
      lineHeight: '100%',
      cursor: 'pointer',

      '&:hover': {
        background: theme.palette.secondary.main,
      },
    },
  });

export const inverseButton = (theme: Theme) =>
  createStyles({
    default: {
      background: theme.palette.common.white,
      color: theme.palette.primary.main,
      border: `solid ${theme.palette.primary.main} 1px`,
      textTransform: 'capitalize',
      fontSize: '16px',
      width: '100%',
      height: theme.spacing(4.25),
      borderRadius: '4px',
      lineHeight: '100%',
      cursor: 'pointer',

      '&:hover': {
        background: fade(theme.palette.primary.main, 0.1),
      },
    },
  });

export const greyButton = (theme: Theme) =>
  createStyles({
    default: {
      background: theme.palette.grey[200],
      color: theme.palette.grey[400],
      border: `solid ${theme.palette.grey[400]} 1px`,
      textTransform: 'capitalize',
      padding: `${theme.spacing(1.2)}px ${theme.spacing(2.4)}px ${theme.spacing(1.2)}px ${theme.spacing(2.4)}px`,
      fontSize: '16px',
      width: theme.spacing(25),
      minHeight: theme.spacing(4),
      maxWidth: theme.spacing(25),
      borderRadius: theme.spacing(),

      '&:hover': {
        background: theme.palette.grey[300],
      },
    },
  });

export const textButton = (theme: Theme) =>
  createStyles({
    default: {
      background: 'inherit',
      color: theme.palette.grey[400],
      textTransform: 'capitalize',
      padding: `${theme.spacing(1.2)}px ${theme.spacing(2.4)}px ${theme.spacing(1.2)}px ${theme.spacing(2.4)}px`,
      fontSize: '12px',
      width: theme.spacing(15),
      minHeight: theme.spacing(4),
      maxWidth: theme.spacing(15),

      '&:hover': {
        background: theme.palette.grey[200],
      },
    },
  });

export const textField = (theme: Theme) =>
  createStyles({
    default: {
      color: theme.palette.secondary.light,
      margin: '16px 0px',
      background: theme.palette.primary.contrastText,
      width: '100%',
      height: theme.spacing(4),
      border: `0px`,
      fontSize: theme.spacing(1.6),

      '&:hover': {
        borderColor: theme.palette.secondary.light,
      },
    },
  });

export const pageRoot = (_theme: Theme) =>
  createStyles({
    default: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  });

export const panelRoot = (theme: Theme) =>
  createStyles({
    default: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: `${theme.spacing(2)}px 0px`,
    },
  });
export const stepperTabRoot = (theme: Theme) =>
  createStyles({
    default: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      minHeight: theme.spacing(50),
      padding: `${theme.spacing(2)}px 0px`,
    },
  });
