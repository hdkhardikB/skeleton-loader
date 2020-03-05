import * as React from 'react';
import { useField } from 'formik';
import EvlSwitch, { EvlSwitchProps } from '@components/switch';

export interface EvlFormSwitchProps {
  name: string;
}

export const EvlFormSwitch: React.FC<EvlFormSwitchProps & EvlSwitchProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name || '');
  return (
    <>
      <EvlSwitch name={name} error={meta.error} {...field} {...props} />
    </>
  );
};

export default EvlFormSwitch;
