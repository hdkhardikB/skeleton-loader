import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlAlert } from '@components';

const stories = storiesOf('EvlAlert', module);

stories.add('Error alert', () => <EvlAlert severity="error" message="This is an error alert — check it out!" />);
stories.add('Warning alert', () => <EvlAlert severity="warning" message="This is a warning alert — check it out!" />);
stories.add('Info alert', () => <EvlAlert severity="info" message="This is an info alert — check it out!" />);
stories.add('Success alert', () => <EvlAlert severity="success" message="This is a success alert — check it out!" />);
