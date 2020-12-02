import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlAutocomplete } from '@components';

const stories = storiesOf('EvlAutoComplete', module);

const top100Films = [
  { title: 'The Shawshank Redemption', value: '1' },
  { title: 'The Godfather', value: '2' },
  { title: 'Pulp Fiction', value: '3' },
  { title: 'Pulp Fiction', value: '4' },
];

type option = {
  title: string;
  value: string;
};

stories.add('EvlAutoComplete', () => (
  <EvlAutocomplete
    options={top100Films}
    getOptionLabel={top100Films => top100Films.title}
    id="free-solo-2-demo"
    disableClearable
    label="Select Movie"
    //@ts-ignore
    onChange={(event: React.ChangeEvent<{}>, value: option | null) => console.log(value)}
  />
));
