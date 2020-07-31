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
  checkboxImage?: string;
}

export const EvlCheckbox: React.FC<EvlCheckboxProps> = ({
  label,
  error,
  image,
  checked,
  noCheckbox,
  checkboxImage,
  ...props
}) => {
  const classes = useStyles();
  let showCheckbox = false;
  if (!!checkboxImage)
    showCheckbox = true
  else
    showCheckbox = !(!!noCheckbox || !!image);
  return (
    <FormControl error={!!error}>
      <FormGroup>
        <FormControlLabel
          className={clsx({
            [classes.blockImg]: !!image,
            [classes.formControlLabel]: !image && !noCheckbox,
            [classes.checked]: (image || noCheckbox) && checked,
            [classes.formTextLabel]: !!noCheckbox,
            [classes.checkboxImage]: !!checkboxImage,
          })}
          control={
            <>
              <Checkbox
                disableRipple
                color="default"
                checkedIcon={<EvlBox component="span" className={clsx(classes.icon, classes.checkedIcon)} />}
                icon={<EvlBox component="span" className={classes.icon} />}
                inputProps={{ 'aria-label': 'decorative checkbox' }}
                className={clsx({ [classes.noCheckbox]: !showCheckbox })}
                checked={checked}
                {...props}
              />
              {image && (
                <EvlBox component="figure" className={classes.figure}>
                  <img src={image} alt="" />
                </EvlBox>
              )}
              {checkboxImage && (
                <EvlBox component="figure" className={clsx({ [classes.labelImage]: !!checkboxImage })} m={0}>
                  <img src={checkboxImage} alt="" />
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
