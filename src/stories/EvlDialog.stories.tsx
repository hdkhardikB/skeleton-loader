import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlDialog, Button } from '@components';
import { DialogTitle, DialogContent, DialogActions } from '@material-ui/core'

const stories = storiesOf('EvlDialog', module);

function SampelDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button color="primary" onClick={handleClickOpen}>
                {"Open dialog"}
            </Button>
            <EvlDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Sample EVL Dialog"}</DialogTitle>
                <DialogContent>
                    {"This is some dummy text"}
                </DialogContent>
                <DialogActions>

                    <Button onClick={handleClose} color="primary" autoFocus>
                        {"Ok"}
                    </Button>
                </DialogActions>
            </EvlDialog>
        </div>
    );
}

stories.add('Simple Dialog', () => <SampelDialog />);
