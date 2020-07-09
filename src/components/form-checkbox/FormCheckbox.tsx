import * as React from 'react';
import { useField } from 'formik';
import EvlCheckbox, { EvlCheckboxProps } from '@components/checkbox';

export interface EvlFormCheckboxProps extends EvlCheckboxProps {
  name: string;
}


export const EvlFormCheckbox: React.FC<EvlFormCheckboxProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name || '');
  return (
    <>
      <EvlCheckbox name={name} error={meta.error} {...props} {...field} />
    </>
  );
};

export default EvlFormCheckbox;
