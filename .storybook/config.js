import { configure, addDecorator} from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

// Globally in your .storybook/config.js, or alternatively, per-chapter
addDecorator(
  withInfo({
    inline: true,
    source: false,
  }),
);
addDecorator(withA11y);

// automatically import all files ending in *.stories.tsx
configure(require.context('../src', true, /\.stories\.tsx?$/), module);
