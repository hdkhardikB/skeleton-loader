import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlList, EvlListItem, EvlListItemText, EvlDivider } from '@components';

const stories = storiesOf('EvlList', module);

stories.add('List component', () => (
  <React.Fragment>
    <EvlList>
      <EvlListItem>
        <EvlListItemText primary="Title 1"/>
      </EvlListItem>
      <EvlListItem>
        <EvlListItemText primary="Title 2"/>
      </EvlListItem>
      <EvlListItem>
        <EvlListItemText primary="Title 3"/>
      </EvlListItem>
    </EvlList>
    <EvlDivider />
    <EvlList>
      <EvlListItem>
        <EvlListItemText primary="Title 4"/>
      </EvlListItem>
      <EvlListItem>
        <EvlListItemText primary="Title 5"/>
      </EvlListItem>
      <EvlListItem>
        <EvlListItemText primary="Title 6"/>
      </EvlListItem>
    </EvlList>
  </React.Fragment>
));
