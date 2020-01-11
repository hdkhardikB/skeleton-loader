import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlTextBox } from '@components';

const stories = storiesOf('EvlTextBox', module);

stories.add('dummy', () => <EvlTextBox placeholder="nname" error={true} label="hello" />);
