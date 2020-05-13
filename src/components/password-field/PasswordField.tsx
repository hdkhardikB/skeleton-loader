import * as React from 'react';
import useStyles from './PasswordFieldJSS';
import EvlFormInput, { EvlFormInputProps } from '@components/form-input';
import { IconButton, InputAdornment } from '@material-ui/core';

export interface EvlPasswordFieldProps extends Omit<EvlFormInputProps, 'type'> {
  showIcon: React.ReactType<any>;
  hideIcon: React.ReactType<any>;
}

export const EvlPasswordField: React.FC<EvlPasswordFieldProps> = ({ showIcon: ShowIcon, hideIcon: HideIcon, ...props }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <EvlFormInput
      className={classes.root}
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        ...props.InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
              {!!showPassword && <HideIcon /> || <ShowIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default EvlPasswordField;
