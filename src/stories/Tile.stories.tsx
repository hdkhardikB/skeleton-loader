import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TileView } from '@components';

const stories = storiesOf('Skeleton loader in form of Tile', module);

stories.add('Tile view', () => <TileView isLoading={true} />);
