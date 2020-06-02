import * as React from 'react';
import { useField } from 'formik';
import EvlFileUpload, { EvlFileUploadProps } from '@components/file-upload';

export interface EvlFormFileUploadProps extends EvlFileUploadProps {
    onFileSelected?(files: File[]): void
}

export const EvlFormFileUpload: React.FC<EvlFormFileUploadProps> = ({ name, multiple, onFileSelected, ...props }) => {
    const [field, meta, helpers] = useField(name || '');

    const onSelected = (files: File[]) => {
        if (onFileSelected) {
            onFileSelected(files)
            return
        }
        if (multiple) {
            helpers.setValue([...field.value, ...files])
            return
        }
        helpers.setValue([files])
    }
    return (
        <>
            <EvlFileUpload
                name={name}
                error={meta.error}
                {...props} onDrop={onSelected} />
        </>
    )
}

export default EvlFormFileUpload;