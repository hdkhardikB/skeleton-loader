import * as React from 'react';
import useStyles from './EvlErrorJSS';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import EvlBox from '@components/box';

export interface EvlErrorProps {
  message: string;
}

export const EvlError: React.FC<EvlErrorProps> = ({ message, ...props }) => {
  const classes = useStyles();
  return (
    <EvlBox {...props} className={classes.root}>
      <ErrorOutlineIcon color="error" />
      <EvlBox className={classes.message}>{message}</EvlBox>
    </EvlBox>
  );
};

export default EvlError;
