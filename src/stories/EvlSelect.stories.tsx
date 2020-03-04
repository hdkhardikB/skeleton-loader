import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlSelect } from '@components';

const stories = storiesOf('EvlSelect', module);

const List = [
  {title: 'Afghanistan', value: 'AFG'},
  {title: 'India', value: 'IND'},
  {title: 'United Kingdom', value: 'AFG'}
];

stories.add('Basic Select', () => <EvlSelect options={List} lable="Select Country" />);
