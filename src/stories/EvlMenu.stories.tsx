import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlMenu } from '@components';

const stories = storiesOf('EvlMenu', module);

stories.add('dummy', () => <EvlMenu open></EvlMenu>);
