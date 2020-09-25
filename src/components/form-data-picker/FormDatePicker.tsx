import * as React from 'react';
import { useField } from 'formik';
import EvlDatePicker, { EvlDatePickerProps } from '@components/date-picker'

export interface EvlFormDatePickerProps extends Omit<EvlDatePickerProps, 'onChange' | 'value'> {
    inlineError?: boolean;
}

const EvlFormDatePicker: React.FC<EvlFormDatePickerProps> = ({ inlineError, name, ...props }) => {
    const [field, meta, helpers] = useField(name || '');
    const error: boolean = meta.touched === true && meta.error !== undefined && meta.error !== '';
    return (
        <>
            <EvlDatePicker
                helperText={inlineError && error ? meta.error : undefined}
                value={field.value}
                name={field.name}
                onChange={(date: any) => helpers.setValue(new Date(date))}
                error={error}
                {...props}
            />
        </>
    );
}

export default EvlFormDatePicker;