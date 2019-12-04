// @ts-ignore
import { Theme } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    exampleThemeColor: string;
    green: string;
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    exampleThemeColor?: string;
    green?: string;
  }
}
