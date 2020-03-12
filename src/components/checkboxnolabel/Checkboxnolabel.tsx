import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './CheckboxnolabelJSS';
import clsx from 'classnames';
import { Typography } from '@material-ui/core';

export interface EvlCheckboxNolabelProps extends Omit<CheckboxProps, 'classes' | 'error'> {
  label?: string;
  error?: string;
}

export const EvlCheckboxNolabel: React.FC<EvlCheckboxNolabelProps> = ({ label, error, checked, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl error={!!error}>
      <FormGroup>
        <FormControlLabel
          className={clsx(classes.FormControlLabel, { [classes.checked]: checked })}
          control={<Checkbox className={classes.Checkbox} {...props} />}
          label={
            <>
              <Typography className={classes.checkBoxLabel}>{label}</Typography>
            </>
          }
        />
      </FormGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlCheckboxNolabel;
