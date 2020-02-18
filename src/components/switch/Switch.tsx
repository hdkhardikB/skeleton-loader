import * as React from 'react';
import useStyles from './SwitchJSS';
import Switch, { SwitchProps } from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export interface EvlSwitchProps extends Omit<SwitchProps, 'error'> {
  label?: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  error?: string;
}

export const EvlSwitch: React.FC<EvlSwitchProps> = ({ label, labelPlacement, error, ...props }) => {
  const classes = useStyles();
  return (
    <FormControl error={!!error} className={classes.root} component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel control={<Switch {...props} />} label={label} labelPlacement={labelPlacement} />
      </FormGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlSwitch;
