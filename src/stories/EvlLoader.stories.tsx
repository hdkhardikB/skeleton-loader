import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlLoader } from '@components';

const stories = storiesOf('EvlLoader', module);

stories.add('dummy', () => <EvlLoader />);
