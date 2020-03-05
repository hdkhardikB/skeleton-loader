import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlDateRange } from '@components';

const stories = storiesOf('EvlDateRange', module);

stories.add('Date Range', () => <DateRange />);

function DateRange() {
    const [dateRange, setDateRange] = React.useState<[Date, Date]>([new Date('01-01-2018'), new Date()]);
  
    return (
      <EvlDateRange
        startLabel="Start Date"
        endLabel="End Date"
        value={dateRange}
        onChange={date => {
          setDateRange(date);
        }}
      />
    );
  }
  
