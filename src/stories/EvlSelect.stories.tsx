import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlSelect } from '@components';

const stories = storiesOf('EvlSelect', module);

const List = {
  1: 'Afghanistan',
  2: 'india',
  3: 'Pakistan',
  4: 'Turkey',
};

stories.add('Basic Select', () => <EvlSelect options={List} lable="Select Country" />);
