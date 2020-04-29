import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlListItemText } from '@components';

const stories = storiesOf('EvlListItemText', module);

stories.add('Primary list text', () => <EvlListItemText primary="Title 1"/>);
stories.add('Secondary list text', () => <EvlListItemText secondary="Jan 7, 2014"/>);
