import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlList } from '@components';

const stories = storiesOf('EvlList', module);

stories.add('dummy', () => <EvlList />);
