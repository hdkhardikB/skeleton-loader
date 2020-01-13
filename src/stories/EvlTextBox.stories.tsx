import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlTextBox } from '@components';

const stories = storiesOf('EvlTextBox', module);

stories.add('Standard Textbox', () => <EvlTextBox placeholder="Email address" label="Email" />);
