import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlImageThumbnail } from '@components';

const stories = storiesOf('EvlImageThumbnail', module);

stories.add('Pdf Thumbnail', () => <EvlImageThumbnail fileType="pdf" imageFile="/pdf/sample.pdf" />);

stories.add('Pdf Thumbnail with download', () => (
  <EvlImageThumbnail fileType="pdf" imageFile="/pdf/sample.pdf" supoportDownload downaloadLabel="Click here" />
));
