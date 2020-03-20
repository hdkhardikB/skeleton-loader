import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFilterPanel, EvlPaper } from '@components';
import * as filterIcon from '@assets/images/ic_filter.svg';
import * as filterIconLight from '@assets/images/ic_filter-light.svg';
import * as closeIcon from '@assets/images/ic_close.svg';

const stories = storiesOf('EvlFilterPanel', module);

stories.add('Filter Panel without filter applied', () => (
  <EvlFilterPanel filterText="Filter" closeText="Close" filterIcon={filterIcon} closeIcon={closeIcon}>
    <EvlPaper>Panel Details</EvlPaper>
  </EvlFilterPanel>
));

stories.add('Filter Panel', () => (
  <EvlFilterPanel filterText="Filter" closeText="Close" filterIcon={filterIconLight} closeIcon={closeIcon} filterApplied>
    <EvlPaper>Panel Details</EvlPaper>
  </EvlFilterPanel>
));
