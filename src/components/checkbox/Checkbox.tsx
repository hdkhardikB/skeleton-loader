import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export interface EvlCheckboxProps extends Omit<CheckboxProps, 'classes' | 'error'> {
  label?: string;
  error?: string;
}

export const EvlCheckbox: React.FC<EvlCheckboxProps> = ({ label, error, ...props }) => {
  console.log(props);

  return (
    <FormControl error={!!error}>
      <FormGroup>
        <FormControlLabel control={<Checkbox {...props} />} label={label} />
      </FormGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlCheckbox;
