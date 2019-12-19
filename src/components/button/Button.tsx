import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import useStyles from './ButtonJSS';

interface EvlButtonProps extends ButtonProps {
}

/** Customized Everledger Button which internally used 
 * material-ui https://material-ui.com/components/buttons/ */
export const EvlButton: React.FC<EvlButtonProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button className={classes.root} {...props}>
      {children}
    </Button>
  );
};

export default EvlButton;
