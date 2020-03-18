import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/** Everledger Default's Theme */
const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1C415C',
      light: '#2D6380',
    },
    secondary: {
      main: '#6990A7',
      light: '#F4F7F9',
    },
    error: {
      main: 'rgba(235, 87, 87, 1)',
      light: 'rgba(235, 87, 87, 1)',
    },
    grey: {
      50: '#F2F2F2',
      A100: 'rgba(152, 175, 183, 0.3)',
      A200: '#F5F7F8',
      A400: 'rgba(45, 99, 128, 0.2)',
      A700: 'rgba(45, 99, 128, 0.05)',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',

    h1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.167,
      letterSpacing: 0,
    },
    h2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
      letterSpacing: 0,
    },
    h3: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.235,
      letterSpacing: 0,
    },
    h4: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '1.75rem',
      lineHeight: 1.125,
      letterSpacing: 0,
    },
    h5: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: 0,
    },
    h6: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: 0,
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: 0,
    },
    subtitle2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 700,
      fontSize: '0.875rem',
      lineHeight: 1.57,
      letterSpacing: 0,
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 0,
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.43,
      letterSpacing: 0,
    },
    button: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.75,
      letterSpacing: 0,
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'Lato, sans-serif',
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
      letterSpacing: 0,
    },
  },
  spacing: 10,
  shape: {
    borderRadius: 2,
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#fff',
          fontSize: '14px',
          margin: 0,
          fontFamily: 'Lato, sans-serif',
          lineHeight: 1.5,
          letterSpacing: 0,
          color: '#6990A7',
        },
        a: {
          textDecoration: 'none',
          cursor: 'pointer',
        },
        label: {
          fontWeight: 700,
          fontSize: `16px`,
          color: '#1C415C',
        },
      },
    },
    MuiButtonBase: {
      root: {
        '&.MuiButton-textSizeSmall': {
          padding: `2px 10px`,
          fontSize: `12px`,
        },
        '&.MuiButton-textSizeLarge': {
          fontSize: `16px`,
          padding: `8px 25px`,
          height: `48px`,
        },
        '&.MuiButton-textPrimary': {
          backgroundColor: `#2D6380`,
          borderColor: `#2D6380`,
          borderWidth: `1px`,
          borderStyle: 'solid',
          color: `#fff`,

          '&:hover': {
            backgroundColor: 'transparent',
            color: `#2D6380`,
          },
        },
        '&.MuiButton-textSecondary': {
          borderColor: `transparent`,
          borderWidth: `1px`,
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          color: `#2D6380`,

          '&:hover': {
            backgroundColor: '#6990A7',
            color: `#fff`,
          },
        },
        '&.MuiButton-outlined': {
          borderColor: `#2D6380`,
          borderWidth: `1px`,
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          color: `#2D6380`,

          '&:hover': {
            backgroundColor: '#2D6380',
            color: `#fff`,
          },
        },
        '&.MuiButton-contained': {},
      },
    },
    MuiFormControl: {
      root: {
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `rgba(45, 99, 128, 0.2)`,
            borderRadius: 2 * 5,
            backgroundColor: '#fff',
            zIndex: -2,
          },
          '&:hover fieldset': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `rgba(45, 99, 128, 1)`,
            borderRadius: 2 * 5,
          },
          '&.Mui-focused fieldset': {
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: `#1C415C`,
            borderRadius: 2 * 5,
          },
          '&.MuiOutlinedInput-notchedOutline fieldset': {
            borderWidth: '1px !important',
            borderColor: `#1C415C`,
            borderStyle: 'solid',
            borderRadius: 2 * 5,
            color: '#6990A7',
          },
          '&.Mui-error fieldset': {
            borderWidth: '1px !important',
            borderColor: `rgba(235, 87, 87, 1)`,
            borderStyle: 'solid',
            borderRadius: 2 * 5,
          },
        },
        '& .MuiOutlinedInput-adornedEnd': {
          padding: 0,
        },
        '&.MuiSelect-select:focus': {
          backgroundColor: 'transparent',
        },
      },
    },
    MuiInputBase: {
      root: {
        color: '#6990A7',
      },
    },
    MuiTextField: {
      root: {
        color: 'red',
        margin: '16px 0px',
        width: '100%',
        border: `0px`,
      },
    },
    MuiInputLabel: {
      root: {
        '&.Mui-focused': {
          color: '#1C415C',
        },
        '&.Mui-error': {
          color: 'rgba(235, 87, 87, 1)',
        },
      },
    },
  },
});

export default defaultTheme;
