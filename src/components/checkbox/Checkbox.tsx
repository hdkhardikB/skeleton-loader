import * as React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import useStyles from './CheckboxJSS';
import clsx from 'classnames';
import { Typography } from '@material-ui/core';
import EvlBox from '@components/box';

export interface EvlCheckboxProps extends Omit<CheckboxProps, 'classes' | 'error'> {
  label?: string;
  error?: string;
  image?: string;
  noCheckbox?: boolean;
}

export const EvlCheckbox: React.FC<EvlCheckboxProps> = ({ label, error, image, checked, noCheckbox, ...props }) => {
  const classes = useStyles();
  return (
    <FormControl error={!!error}>
      <FormGroup>
        <FormControlLabel
          className={clsx({
            [classes.blockImg]: !!image,
            [classes.formControlLabel]: !image && !noCheckbox,
            [classes.checked]: (image || noCheckbox) && checked,
            [classes.formTextLabel]: !!noCheckbox,
          })}
          control={
            <>
              <Checkbox
                disableRipple
                color="default"
                checkedIcon={<EvlBox component="span" className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<EvlBox component="span" className={classes.icon} />}
                inputProps={{ 'aria-label': 'decorative checkbox' }}
                className={clsx({ [classes.noCheckbox]: !!noCheckbox || !!image })}
                checked={checked}
                {...props}
              />
              {image && (
                <EvlBox component="figure" className={classes.figure}>
                  <img src={image} alt="" />
                </EvlBox>
              )}
            </>
          }
          label={
            <>
              <Typography variant="body2" className={classes.checkBoxLabel}>
                {label}
              </Typography>
            </>
          }
        />
      </FormGroup>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlCheckbox;
