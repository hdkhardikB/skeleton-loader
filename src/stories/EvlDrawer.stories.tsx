import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlDrawer, EvlDivider, EvlList, EvlListItem, EvlListItemText } from '@components';

const stories = storiesOf('EvlDrawer', module);

stories.add('Drawer Example for Desktop', () => (
  <EvlDrawer variant="permanent" open>
    <EvlDivider />
    <EvlList>
      <EvlListItem button>
        <EvlListItemText>Testing</EvlListItemText>
      </EvlListItem>
    </EvlList>
    <EvlDivider />
    <EvlList>
      <EvlListItem button>
        <EvlListItemText>Testing</EvlListItemText>
      </EvlListItem>
    </EvlList>
  </EvlDrawer>
));
