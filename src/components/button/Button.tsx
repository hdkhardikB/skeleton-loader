import * as React from 'react';
import { Button, ButtonProps } from '@material-ui/core';
import useStyles from './ButtonJSS';
import clsx from 'classnames';

interface EvlButtonProps extends ButtonProps {
  exportData?: boolean;
}

/** Customized Everledger Button which internally used
 * material-ui https://material-ui.com/components/buttons/ */
export const EvlButton: React.FC<EvlButtonProps> = ({ children, exportData, ...props }) => {
  const classes = useStyles();

  return (
    <Button className={clsx(classes.root, exportData && classes.exportData)} {...props}>
      {children}
    </Button>
  );
};

export default EvlButton;
