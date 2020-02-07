import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlError } from '@components';

const stories = storiesOf('EvlError', module);

stories.add('Standard Error Message', () => <EvlError message="Sample error" />);