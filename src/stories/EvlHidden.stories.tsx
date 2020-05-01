import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlHidden } from '@components';

const stories = storiesOf('EvlHidden', module);

stories.add('Hidden component', () => <EvlHidden />);
