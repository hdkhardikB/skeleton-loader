import * as React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import ThemeProvider from './ThemeProvider';

export default makeDecorator({
  name: 'withEvlThemes',
  parameterName: 'themes',
  // This means don't run this decorator if the notes decorator is not set
  skipIfNoParametersOrOptions: true,
  wrapper: (storyFn, context, { options, parameters }) => {
    const themeOptions = parameters || options;
    const channel = addons.getChannel();

    channel.emit('evl/setThemes', themeOptions);

    return <ThemeProvider channel={channel} storyFn={storyFn} options={themeOptions} context={context} />;
  },
});
