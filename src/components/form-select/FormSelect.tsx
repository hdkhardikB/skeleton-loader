import * as React from 'react';
import { useField } from 'formik';
import EvlSelect, { EvlSelectProps } from '@components/select';
import useStyles from './FormSelectJSS';

export interface EvlFormSelectProps extends EvlSelectProps {
  name: string;
}

export const EvlFormSelect: React.FC<EvlFormSelectProps> = ({ name, ...props }) => {
  const [field, meta] = useField(name || '');
  const classes = useStyles();

  return (
    <>
      <EvlSelect className={classes.root} name={name} error={meta.error} {...field} {...props} />
    </>
  );
};

export default EvlFormSelect;
