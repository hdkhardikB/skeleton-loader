import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlMenu, EvlMenuItem } from '@components';

const stories = storiesOf('EvlMenu', module);

stories.add('Menu component', () => (
  <EvlMenu open>
    <EvlMenuItem>{'Profile'}</EvlMenuItem>
  </EvlMenu>
));
