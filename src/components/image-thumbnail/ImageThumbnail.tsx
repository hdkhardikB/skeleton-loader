import * as React from 'react';
import EvlBox from '@components/box';
import EvlLink from '@components/link';
import useStyles from './ImageThumbnailJSS';
import { EvlGrid } from '@components';
import EvlTypography from '@components/typography';

export interface EvlImageThumbnailProps {
  imageFile: string;
  supoportDownload?: boolean;
  downloadLabel?: any;
  icon?: string;
  fileName?: string;
}

export const EvlImageThumbnail: React.FC<EvlImageThumbnailProps> = ({
  imageFile,
  supoportDownload,
  downloadLabel,
  icon,
  fileName,
}) => {
  const classes = useStyles();
  return (
    <EvlBox className={classes.root}>
      <EvlGrid container alignItems="center">
        <EvlGrid item xs={6}>
          <EvlBox display="flex">
            <img src={icon} />
            {fileName && (
              <EvlTypography variant="body2" color="primary">
                {fileName}
              </EvlTypography>
            )}
          </EvlBox>
        </EvlGrid>
        <EvlGrid item xs={6}>
          <EvlBox textAlign="right">
            {supoportDownload && (
              <EvlLink href={imageFile} download={imageFile} target="_blank">
                {downloadLabel || 'Click to view'}
              </EvlLink>
            )}
          </EvlBox>
        </EvlGrid>
      </EvlGrid>
    </EvlBox>
  );
};

export default EvlImageThumbnail;
