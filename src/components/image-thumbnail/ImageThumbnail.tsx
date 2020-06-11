import * as React from 'react';
import EvlBox from '@components/box';
import EvlLink from '@components/link';
import useStyles from './ImageThumbnailJSS';
import { EvlGrid } from '@components';
import EvlTypography from '@components/typography';
import { IconButton } from '@material-ui/core';

export interface EvlImageThumbnailProps {
  imageFile: string;
  supoportDownload?: boolean;
  downloadLabel?: any;
  icon?: string;
  onDelete?(file?: string): void;
  fileName?: string;
  deleteIcon?: string;
}

export const EvlImageThumbnail: React.FC<EvlImageThumbnailProps> = ({
  imageFile,
  supoportDownload,
  downloadLabel,
  icon,
  onDelete,
  fileName,
  deleteIcon,
}) => {
  const classes = useStyles();
  return (
    <EvlBox className={classes.root}>
      <EvlGrid container alignItems="center">
        <EvlGrid item xs={7}>
          <EvlBox display="flex">
            <img src={icon} />
            {fileName && (
              <EvlTypography variant="subtitle2" color="primary" className={classes.fileName}>
                {fileName}
              </EvlTypography>
            )}
          </EvlBox>
        </EvlGrid>
        <EvlGrid item xs={5}>
          <EvlBox textAlign="right">
            {onDelete && (
              <IconButton className={classes.btnDelete} onClick={() => onDelete(imageFile)} aria-label="delete">
                <EvlBox component="figure" className={classes.figure}>
                  <img src={deleteIcon} />
                </EvlBox>
              </IconButton>
            )}
            {supoportDownload && (
              <EvlLink href={imageFile} download={imageFile} target="_blank" className={classes.icDownload}>
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
