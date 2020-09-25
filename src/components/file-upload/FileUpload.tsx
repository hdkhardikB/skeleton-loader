import * as React from 'react';
import { useDropzone, DropzoneProps } from 'react-dropzone';
import { FormControl, FormHelperText } from '@material-ui/core';
import useStyles from './FileUploadJSS';
import EvlBox from '@components/box';
import EvlTypography from '@components/typography';

export interface EvlFileUploadProps extends DropzoneProps {
  error?: string;
  name: string;
  uploaderText?: any;
  uploadIcon?: string;
}

const EvlFileUpload: React.FC<EvlFileUploadProps> = ({ uploaderText, error, uploadIcon, ...props }) => {
  const classes = useStyles();

  const { getRootProps, getInputProps } = useDropzone({ ...props });
  return (
    <FormControl className={classes.root} error={!!error}>
      <EvlBox
        // css={undefined}
        //@ts-ignore
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <img src={uploadIcon} />
        <EvlTypography variant="body1">{uploaderText || `Drop the files here ...`}</EvlTypography>
      </EvlBox>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};
export default EvlFileUpload;
