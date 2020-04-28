import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlCard } from '@components';

const stories = storiesOf('EvlCard', module);

stories.add('Simple Card example', () => <EvlCard>{"Simple Card"}</EvlCard>);
