import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

/** Everledger Default's Theme */
const defaultDarkTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#941530',
      light: '#98AFB7',
    },
    error: {
      main: 'rgba(39, 174, 96, 0.7)',
      light: 'rgba(235, 87, 87, 0.7)',
    },
    grey: {
      50: '#F2F2F2',
      A100: 'rgba(152, 175, 183, 0.3)',
    },
    background: {
      default: '#F7F2F2',
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontWeight: 300,
      fontSize: '2rem',
    },
    h2: {
      fontWeight: 300,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.7rem',
    },
    h5: {
      fontFamily: 'Lato',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '1.2rem',
      lineHeight: '24px',
      color: '#212121',
    },
    h6: {
      fontSize: '1.1rem',
      lineHeight: '1.9rem',
    },
    body1: {
      color: '#5a5a5a',
    }
  },
  shape: {
    borderRadius: 2,
  },
});

export default defaultDarkTheme;

