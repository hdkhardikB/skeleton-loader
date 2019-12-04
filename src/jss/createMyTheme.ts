import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    exampleThemeColor: '#222222',
    green: '#99FF33',
    ...options,
  });
}
