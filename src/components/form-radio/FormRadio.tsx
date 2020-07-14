import * as React from 'react';
import { useField } from 'formik';
import EvlRadio, { EvlRadioProps } from '@components/radio';

export interface EvlFormRadioProps extends EvlRadioProps {
    name: string;
}

export const EvlFormRadio: React.FC<EvlFormRadioProps> = ({ name, ...props }) => {
    const [field] = useField(name || '');
    return (
        <>
            <EvlRadio {...props} {...field} />
        </>
    );
};

export default EvlFormRadio;
