import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core/styles';

const ThemeProvider = ({ storyFn, context, channel, options }) => {
  const [theme, setTheme] = useState(() => options.themes.find(_theme => _theme.default).theme);

  useEffect(() => {
    const handleThemeChange = _themeName => {
      const selected = options.themes.find(_theme => _theme.name === _themeName);
      setTheme(selected.theme);
    };
    channel.on('evl/setSelectedTheme', handleThemeChange);
    return () => channel.removeListener('evl/setSelectedTheme', handleThemeChange);
  });

  return (
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {storyFn(context)}
        </MuiThemeProvider>
      </StylesProvider>
  );
};

export default ThemeProvider;
