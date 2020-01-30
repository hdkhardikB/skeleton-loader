import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';

interface EvlCheckboxProps extends CheckboxProps {
  label?: string;
}

export const EvlCheckbox: React.FC<EvlCheckboxProps> = ({ label, ...props }) => {
  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox {...props} />} label={label} />
    </FormGroup>
  );
};

export default EvlCheckbox;
