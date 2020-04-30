import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlGrid, EvlPaper } from '@components';

const stories = storiesOf('EvlGrid', module);

stories.add('Grid component', () => (
  <EvlGrid container>
    <EvlGrid item xs={12}>
      <EvlPaper>{'xs=12'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={11}>
      <EvlPaper>{'xs=11'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={10}>
      <EvlPaper>{'xs=10'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={9}>
      <EvlPaper>{'xs=9'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={8}>
      <EvlPaper>{'xs=8'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={7}>
      <EvlPaper>{'xs=7'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={6}>
      <EvlPaper>{'xs=6'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={5}>
      <EvlPaper>{'xs=5'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={4}>
      <EvlPaper>{'xs=4'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={3}>
      <EvlPaper>{'xs=3'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={2}>
      <EvlPaper>{'xs=2'}</EvlPaper>
    </EvlGrid>
    <EvlGrid item xs={1}>
      <EvlPaper>{'xs=1'}</EvlPaper>
    </EvlGrid>
  </EvlGrid>
));
