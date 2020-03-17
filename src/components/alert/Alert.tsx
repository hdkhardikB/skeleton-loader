import * as React from 'react';
import { Alert, AlertProps } from '@material-ui/lab';

export interface EvlAlertProps extends AlertProps {}

export const EvlAlert: React.FC<EvlAlertProps> = ({ children, ...props }) => {
  return <Alert {...props}>{children}</Alert>;
};

export default EvlAlert;
