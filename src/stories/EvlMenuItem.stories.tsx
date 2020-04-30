import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlMenuItem } from '@components';

const stories = storiesOf('EvlMenuItem', module);

stories.add('Menu item component', () => <EvlMenuItem>{'Profile'}</EvlMenuItem>);
