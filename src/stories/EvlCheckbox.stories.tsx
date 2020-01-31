import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlCheckbox } from '@components';

const stories = storiesOf('EvlCheckbox', module);

stories.add('Checkbox with label', () => <EvlCheckbox label="Pizza" checked={true} />);

stories.add('Checkbox', () => <EvlCheckbox />);
