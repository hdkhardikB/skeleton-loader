import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlAlert } from '@components';

const stories = storiesOf('EvlAlert', module);

stories.add('dummy', () => <EvlAlert />);
