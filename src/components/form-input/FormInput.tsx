import * as React from 'react';
import { Field, useFormikContext } from 'formik';
import EvlTextBox, { EvlTextBoxProps } from './../text-field';

interface EvlFormInputProps extends EvlTextBoxProps {
  inlineError?: boolean;
}
export const EvlFormInput: React.FC<EvlFormInputProps> = ({ inlineError, name, ...props }) => {
  if (useFormikContext())
    return (
      <Field name={name}>
        {({ field, meta }: any) => (
          <>
            <EvlTextBox {...field} error={meta.touched && meta.error && meta.error !== ''} {...props} />
            {inlineError && <div>{meta.error}</div>}
          </>
        )}
      </Field>
    );
  else return <EvlTextBox name={name} {...props} />;
};
export default EvlFormInput;
