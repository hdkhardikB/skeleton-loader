import * as React from 'react';
import useStyles from './PaperJSS';
import Paper, { PaperProps } from '@material-ui/core/Paper';

export interface EvlPaperProps extends PaperProps {}

export const EvlPaper: React.FC<EvlPaperProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} {...props}>
      {children}
    </Paper>
  );
};

export default EvlPaper;
