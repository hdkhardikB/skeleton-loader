import * as React from 'react'
import { useDropzone, DropzoneProps } from 'react-dropzone'
import { FormControl, FormHelperText } from '@material-ui/core'
import useStyles from './FileUploadJSS'

export interface EvlFileUploadProps extends DropzoneProps {
    error?: string;
    name: string
    uploaderText?: any
}

const EvlFileUpload: React.FC<EvlFileUploadProps> = ({ uploaderText, error, ...props }) => {
    const classes = useStyles()

    const { getRootProps, getInputProps } = useDropzone({ ...props })
    return (
        <FormControl className={classes.formControl} error={!!error}>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>
                    {uploaderText || `Drop the files here ...`}
                </p>
            </div>
            <FormHelperText>{error}</FormHelperText>
        </FormControl>
    )
}
export default EvlFileUpload;