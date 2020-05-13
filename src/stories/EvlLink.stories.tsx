import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlLink } from '@components';

const stories = storiesOf('EvlLink', module);

stories.add('Link component', () => <EvlLink>{"Link"}</EvlLink>);
