import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@components';

const stories = storiesOf("Button", module);

stories.add("Primary", () => <Button color="primary">primary</Button>);
stories.add("secondary", () => <Button color="secondary">secondary</Button>);
stories.add("contained", () => <Button variant="contained">contained</Button>);
stories.add("outlined", () => <Button variant="outlined">outlined</Button>);
stories.add("small", () => <Button size="small">small</Button>);
stories.add("medium", () => <Button size="medium">medium</Button>);
stories.add("large", () => <Button size="large">large</Button>);
