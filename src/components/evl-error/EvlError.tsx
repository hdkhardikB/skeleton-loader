import * as React from 'react';
import useStyles from './EvlErrorJSS';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

export interface EvlErrorProps {
  message: string;
}

export const EvlError: React.FC<EvlErrorProps> = ({ message, ...props }) => {
  const classes = useStyles();
  return (
    <div {...props} className={classes.root}>
      <ErrorOutlineIcon color="error" />
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default EvlError;
