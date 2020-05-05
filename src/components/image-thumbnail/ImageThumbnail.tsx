import * as React from 'react';
import { Document, Page } from 'react-pdf';
import EvlBox from '@components/box';
import EvlLink from '@components/link';
import useStyles from './ImageThumbnailJSS';
import clsx from 'classnames'

export interface EvlImageThumbnailProps {
  imageFile: string;
  fileType: 'pdf' | 'jpeg' | 'png'; // TODO: handle jpeg and png file in future as of now not supported
  supoportDownload?: boolean;
  downaloadLabel?: string;
}

export const EvlImageThumbnail: React.FC<EvlImageThumbnailProps> = ({
  imageFile,
  supoportDownload,
  downaloadLabel,
  fileType,
}) => {
  const classes = useStyles();
  return (
    <EvlBox className={clsx(classes.figure, classes.figureBorder)} component="figure">
      {fileType === 'pdf' && (
        <Document file={imageFile}>
          <Page width={100} pageNumber={1} />
        </Document>
      )}
      {fileType !== 'pdf' && (
        <img className={classes.figureImg} src={imageFile} alt="" />
      )}
      {supoportDownload && (
        <EvlLink href={imageFile} download={imageFile} target="_blank">
          {downaloadLabel || 'Click to view'}
        </EvlLink>
      )}
    </EvlBox>
  );
};

export default EvlImageThumbnail;
