import * as React from 'react';
import { useField } from 'formik';
import EvlTextBox, { EvlTextBoxProps } from './../text-field';

interface EvlFormInputProps extends EvlTextBoxProps {
  inlineError?: boolean;
  name: string;
}
/** Customized Everledger TextBox with Form validation support
 * material-ui https://material-ui.com/components/text-fields/ */
export const EvlFormInput: React.FC<EvlFormInputProps> = ({ inlineError, name, ...props }) => {
  const [field, meta] = useField(name || '');
  const error: boolean = meta.touched === true && meta.error !== undefined && meta.error !== '';
  return (
    <>
      <EvlTextBox name={name} {...field} error={error} {...props} />
      {inlineError && <div>{meta.error}</div>}
    </>
  );
};

export default EvlFormInput;
