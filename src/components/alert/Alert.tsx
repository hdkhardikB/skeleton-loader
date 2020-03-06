import * as React from 'react';
// import useStyles from './AlertJSS';
import { Alert, AlertProps } from '@material-ui/lab';

export interface EvlAlertProps extends AlertProps {}

export const EvlAlert: React.FC<EvlAlertProps> = ({ children, ...props }) => {
  //   const classes = useStyles();
  return <Alert {...props}>{children}</Alert>;
};

export default EvlAlert;
