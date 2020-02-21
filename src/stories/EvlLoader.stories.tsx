import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlLoader } from '@components';
import * as loader from '@assets/images/img_loader.svg';

const stories = storiesOf('EvlLoader', module);

const LoaderImage = () => <img src={loader} alt="" />;

stories.add('Basic Loader', () => <EvlLoader message="Loading" image={LoaderImage} />);
