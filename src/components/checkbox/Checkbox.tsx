import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './CheckboxJSS';

export interface EvlCheckboxProps extends Omit<CheckboxProps, 'classes' | 'error'> {
  label?: string;
  error?: string;
}

export const EvlCheckbox: React.FC<EvlCheckboxProps> = ({ label, error, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl error={!!error}>
      <FormGroup>
        <FormControlLabel className={classes.FormControlLabel} control={<Checkbox {...props} />} label={label} />
      </FormGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlCheckbox;
