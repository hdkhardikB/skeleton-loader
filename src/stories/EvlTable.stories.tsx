import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlTable } from '@components';

const stories = storiesOf('EvlTable', module);

function createData(assetId: string, color: string, weight: number, shape: String) {
  return { assetId, color, weight, shape };
}

const rows = [
  createData('ABC', 'red', 2, 'round'),
  createData('Test2', 'green', 1, 'cushion'),
  createData('Test3', 'black', 4, 'oval'),
  createData('Test4', 'blue', 3, 'round'),
  createData('Test5', 'white', 1, 'round'),
  createData('Test6', 'grern', 2, 'round'),
];

const columns = [
  {
    name: 'assetId',
    title: 'Asset Id',
    options: {
      sort: true,
    },
  },
  {
    name: 'color',
    title: 'Color',
    options: {
      sort: true,
    },
  },
  {
    name: 'weight',
    title: 'Weight',
    options: {
      sort: true,
    },
  },
  {
    name: 'shape',
    title: 'Shape',
  },
];

stories.add('Simple EvlTable', () => (
  <EvlTable
    rows={rows}
    columns={columns}
    onSelect={selectedIds => console.log(selectedIds)}
    noDataComponent={() => <p>No Data Available</p>}
  />
));

stories.add('Selectable EvlTable', () => (
  <EvlTable
    rows={rows}
    columns={columns}
    selectable
    onSelect={selectedIds => console.log(selectedIds)}
    noDataComponent={() => <p>No Data Available</p>}
  />
));

stories.add('EvlTable with No Data', () => (
  <EvlTable
    rows={[]}
    columns={columns}
    selectable
    onSelect={selectedIds => console.log(selectedIds)}
    noDataComponent={() => <p>No Data Available</p>}
  />
));

stories.add('EvlTable with Pagination', () => (
  <EvlTable
    rows={rows}
    columns={columns}
    selectable
    onSelect={selectedIds => console.log(selectedIds)}
    noDataComponent={() => <p>No Data Available</p>}
    pagination={{
      showPagination: true,
      rowsPerPage: 2,
    }}
  />
));
