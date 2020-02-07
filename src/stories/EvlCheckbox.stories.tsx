import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlCheckbox } from '@components';

const stories = storiesOf('EvlCheckbox', module);

const handleChange = (event: any) => {
  console.log(event.target.value);
  console.log(event.target.checked);
};

stories.add('Checkbox with label', () => <EvlCheckbox label="Pizza" onChange={handleChange} value={true} />);

stories.add('Checkbox', () => <EvlCheckbox />);
