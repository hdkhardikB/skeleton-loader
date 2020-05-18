import * as React from 'react';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import useStyles from './DialogJSS'

export interface EvlDialogProps extends DialogProps {

}

const EvlDialog: React.FC<EvlDialogProps> = ({ ...props }) => {
    const classes = useStyles()
    return <Dialog className={classes.dialog} {...props} />
};

export default EvlDialog;
