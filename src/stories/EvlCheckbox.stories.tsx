import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlCheckbox } from '@components';
import * as checkboxImg from "@assets/images/shape/ic_heart.svg";
const stories = storiesOf('EvlCheckbox', module);

const handleChange = (event: any) => {
  console.log(event.target.value);
  console.log(event.target.checked);
};

stories.add('Checkbox with label', () => <EvlCheckbox label="Pizza" onChange={handleChange} value={true} />);

stories.add('Checkbox', () => <EvlCheckbox />);

stories.add('Checkbox with image', () => <EvlCheckbox image={checkboxImg} label="Tests" />);

stories.add('Checkbox without check', () => <EvlCheckbox noCheckbox label="Tests" />);
