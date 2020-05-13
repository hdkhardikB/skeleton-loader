import * as React from 'react';
import { Divider, DividerProps } from '@material-ui/core';
import useStyles from './DividerJSS';

export interface EvlDividerProps extends DividerProps {}

export const EvlDivider: React.FC<EvlDividerProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Divider className={classes.root} {...props}>
      {children}
    </Divider>
  );
};

export default EvlDivider;
