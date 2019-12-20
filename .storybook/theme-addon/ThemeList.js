import * as React from 'react';
import { useChannel, useAddonState } from '@storybook/api';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export const ThemeList = () => {
  const [selectedTheme, setSelectedTheme] = useAddonState('storybook/evlThemes/selectedTheme', '');
  const [themes, setThemes] = useAddonState('storybook/evlThemes/themes', '');
  const classes = useStyles();

  const emit = useChannel({
    'evl/setThemes': ({ themes: themeList }) => {
      setThemes(themeList);
      if(themes && themes.length) {
          const defaultTheme = themes.find(_theme => _theme.default);
          setSelectedTheme(defaultTheme.name);
      }
    },
  });

  const handleChange = event => {
    const theme = themes.find(({name}) => name === event.target.value);
    emit('evl/setSelectedTheme', theme.name);
    setSelectedTheme(theme.name);
  };

  if (!themes) {
    return null;
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
      <InputLabel id="evl-theme-select-label">Theme</InputLabel>
        <Select id="evl-theme-select" value={selectedTheme} onChange={handleChange}>
          {themes.map(({name}) => (
            <MenuItem key={name} value={name}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
