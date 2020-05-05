import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlImageThumbnail } from '@components';

const stories = storiesOf('EvlImageThumbnail', module);

stories.add('Pdf Thumbnail', () => <EvlImageThumbnail imageFile="/pdf/sample.pdf" icon={'pdf/ic_pdf.svg'} />);

stories.add('Pdf Thumbnail with download', () => (
  <EvlImageThumbnail icon={'pdf/ic_pdf.svg'} imageFile="/pdf/sample.pdf" supoportDownload downloadLabel="Click here" />
));
