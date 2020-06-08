import * as React from 'react';
import EvlBox from '@components/box';
import EvlLink from '@components/link';
import useStyles from './ImageThumbnailJSS';
import { EvlGrid } from '@components';
import EvlTypography from '@components/typography';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
export interface EvlImageThumbnailProps {
  imageFile: string;
  supoportDownload?: boolean;
  downloadLabel?: any;
  icon?: string;
  onDelete?(file?: string): void
  fileName?: string;
}

export const EvlImageThumbnail: React.FC<EvlImageThumbnailProps> = ({
  imageFile,
  supoportDownload,
  downloadLabel,
  icon,
  onDelete,
  fileName,
}) => {
  const classes = useStyles();
  return (
    <EvlBox className={classes.root}>
      <EvlGrid container alignItems="center">
        <EvlGrid item xs={8}>
          <EvlBox display="flex">
            <img src={icon} />
            {fileName && (
              <EvlTypography variant="subtitle2" color="primary" className={classes.fileName}>
                {fileName}
              </EvlTypography>
            )}
          </EvlBox>
        </EvlGrid>
        <EvlGrid item xs={4}>
          <EvlBox textAlign="right">
            {onDelete && (<IconButton onClick={() => onDelete(imageFile)} aria-label="delete" >
              <DeleteIcon />
            </IconButton>)}
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
