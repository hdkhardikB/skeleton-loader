import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { CountryList } from '@components';

const stories = storiesOf('Skeleton loader in form of list', module);

stories.add('Demonstrating loader of 5 seconds', () => <CountryList />);
