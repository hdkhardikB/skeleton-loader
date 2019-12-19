import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import withEvlThemes from './theme-addon';
import { EvlDarkTheme, EvlTheme } from '@themes';

const themes = [
  { name: 'Everledger Default Theme', theme: EvlTheme, default: true },
  { name: 'Everledger Dark Theme', theme: EvlDarkTheme },
];

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
  withInfo({
    inline: true,
    source: false,
  }),
);

addDecorator(withEvlThemes({ themes }));

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
