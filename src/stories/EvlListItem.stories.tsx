import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlListItem, EvlListItemText } from '@components';

const stories = storiesOf('EvlListItem', module);

stories.add('List item component', () => (
  <React.Fragment>
    <EvlListItem>
      <EvlListItemText primary="Title 1"/>
    </EvlListItem>
    <EvlListItem>
      <EvlListItemText primary="Title 2"/>
    </EvlListItem>
    <EvlListItem>
      <EvlListItemText primary="Title 3"/>
    </EvlListItem>
  </React.Fragment>
));
