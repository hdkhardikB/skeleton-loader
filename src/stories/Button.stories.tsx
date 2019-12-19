import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@components';

const stories = storiesOf("Button", module);

stories.add("Primary", () => <Button color="primary">Primary</Button>);
