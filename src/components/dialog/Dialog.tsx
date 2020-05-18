import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import useStyles from './DialogJSS';

export interface EvlDialogProps extends DialogProps {}

const EvlDialog: React.FC<EvlDialogProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Dialog className={classes.root} {...props}>
      {children}
    </Dialog>
  );
};

export default EvlDialog;
