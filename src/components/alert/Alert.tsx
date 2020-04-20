import * as React from 'react';
import { Alert, AlertProps } from '@material-ui/lab';

export interface EvlAlertProps extends AlertProps {
  message: string
}

export const EvlAlert: React.FC<EvlAlertProps> = ({ children, message, ...props }) => {
  return <Alert {...props}>{message}</Alert>;
};

export default EvlAlert;
