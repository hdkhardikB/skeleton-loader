import * as React from 'react';
import useStyles from './PasswordFieldJSS';
import EvlFormInput, { EvlFormInputProps } from '@components/form-input';
import { IconButton, InputAdornment } from '@material-ui/core';
import * as Visibility from '@assets/images/ic_eye-show.svg';
import * as VisibilityOff from '@assets/images/ic_eye-hide.svg';

export interface EvlPasswordFieldProps extends Omit<EvlFormInputProps, 'type'> {}

export const EvlPasswordField: React.FC<EvlPasswordFieldProps> = ({ ...props }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <EvlFormInput
      className={classes.root}
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <img src={VisibilityOff} alt="" /> : <img src={Visibility} alt="" />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EvlPasswordField;
