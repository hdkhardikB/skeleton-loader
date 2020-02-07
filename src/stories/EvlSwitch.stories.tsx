import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlSwitch } from '@components';

const stories = storiesOf('EvlSwitch', module);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.checked);
};

stories.add('EvlSwitch', () => (
  <EvlSwitch color="primary" labelPlacement="top" label="Start" onChange={handleChange} />
));
