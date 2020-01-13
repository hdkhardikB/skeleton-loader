import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/** Everledger Default's Theme */
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C415C',
      light: '#2D6380',
    },
    secondary: {
      main: '#2E4E59',
      light: '#98AFB7',
    },
    error: {
      main: 'rgba(235, 87, 87, 1)',
      light: 'rgba(235, 87, 87, 1)',
    },
    grey: {
      50: '#F2F2F2',
      A100: 'rgba(152, 175, 183, 0.3)',
      A200: '#F5F7F8',
    },
  },
  typography: {
    fontFamily: 'Lato',
  },
  spacing: 10,
  shape: {
    borderRadius: 2,
  },
  overrides: {
    MuiFormControl: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `#2E4E59`,
            borderRadius: 2 * 5,
          },
          '&:hover fieldset': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `#2E4E59`,
            borderRadius: 2 * 5,
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `#2E4E59`,
            borderRadius: 2 * 5,
          },
          '&.MuiOutlinedInput-notchedOutline fieldset': {
            borderWidth: '1px !important',
            borderColor: `#2E4E59`,
            borderStyle: 'solid',
            borderRadius: 2 * 5,
          },
          '&.Mui-error fieldset': {
            borderWidth: '1px !important',
            borderColor: `red`,
            borderStyle: 'solid',
            borderRadius: 2 * 5,
          },
        },
      },
    },
    MuiTextField: {
      root: {},
    },
    MuiInputLabel: {
      root: {
        '&.Mui-focused': {
          color: '#2E4E59',
        },
        '&.Mui-error': {
          color: 'red',
        },
      },
    },
  },
});

export default defaultTheme;
