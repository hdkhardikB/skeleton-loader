import addons from '@storybook/addons';
import * as React from 'react';
import { AddonPanel } from '@storybook/components';
import {ThemeList} from './ThemeList';



// Register the addon with a unique name.
addons.register('storybook/evlThemes', api => {
  // Also need to set a unique name to the panel.
  addons.addPanel('storybook/themes/panel', {
    title: 'Everledeger Themes',
    render: ({ active, key }) => (
      <AddonPanel key={key} active={active}>
        <ThemeList />
      </AddonPanel>
    ),
  });
});
