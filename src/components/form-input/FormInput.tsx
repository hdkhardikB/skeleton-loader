import * as React from 'react';
import { useField } from 'formik';
import EvlTextBox, { EvlTextBoxProps } from '@components/text-field';

export interface EvlFormInputProps extends EvlTextBoxProps {
  inlineError?: boolean;
  name: string;
  standardTextField?: 'filled' | 'outlined' | 'standard' | undefined;
}
/** Customized Everledger TextBox with Form validation support
 * material-ui https://material-ui.com/components/text-fields/ */
export const EvlFormInput: React.FC<EvlFormInputProps> = ({ inlineError, name, standardTextField, ...props }) => {
  const [field, meta] = useField(name || '');
  const error: boolean = meta.touched === true && meta.error !== undefined && meta.error !== '';
  return (
    <>
      <EvlTextBox
        helperText={inlineError && error ? meta.error : undefined}
        name={name}
        standardTextField={standardTextField}
        {...field}
        error={error}
        {...props}
      />
    </>
  );
};

export default EvlFormInput;
