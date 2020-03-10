import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlFilterControl } from '@components';
import { FilterControl, FilterReferenceData } from 'evl-types-ui';

const stories = storiesOf('EvlFilterControl', module);

const filtersData: FilterReferenceData = {
  weight: {
    data: [0, 1],
    control: FilterControl.slider,
    meta: {
      steps: 0.1,
    },
  },
  color: {
    data: ['red', 'blue', 'green'],
    control: FilterControl.multiCheckbox,
  },
  origin: {
    data: [
      { title: 'India', value: 'IND' },
      { title: 'Untited Kindom', value: 'UK' },
    ],
    control: FilterControl.select,
  },
  movie: {
    data: [
      { title: 'Shole', value: '1' },
      { title: 'Kabali', value: '2' },
    ],
    control: FilterControl.autocomplete,
  },
  createdDate: {
    data: [new Date('01-11-2012'), new Date()],
    control: FilterControl.dateRange,
    meta: {
      startLabel: 'Start Date',
      endLabel: 'End Date',
    },
  },
};

function Filters() {
  const [filters, setFilters] = React.useState({});

  return (
    <>
      <div style={{padding: '20px'}}>
        Selected Filters:
        {Object.entries(filters).map(([filterProperty, filterValue]) => (
          <div>{`${filterProperty}: ${filterValue}`}</div>
        ))}
      </div>
      {Object.entries(filtersData).map(([filterProperty, filterReferenceData]) => (
        <div style={{padding: '20px'}}>
          <EvlFilterControl
            filterProperty={filterProperty}
            filterOptions={filterReferenceData.data}
            selectedFilters={filters}
            //@ts-ignore
            filterMeta={filterReferenceData.meta}
            filterType={filterReferenceData.control}
            onChange={_filters => {
              setFilters(_filters);
            }}
          />
        </div>
      ))}
    </>
  );
}

stories.add('Filters', () => <Filters />);
