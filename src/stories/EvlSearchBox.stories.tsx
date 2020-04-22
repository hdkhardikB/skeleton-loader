import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlSearchBox } from '@components';

const stories = storiesOf('EvlSearchBox', module);

function getSearchText(text: string) {
  console.log(text);
}

stories.add('EvlSearchBox', () => (
  <EvlSearchBox placeholder="Search..." onSearch={getSearchText} />
));
