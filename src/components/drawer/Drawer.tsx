import * as React from 'react';
import { Drawer, DrawerProps } from '@material-ui/core';
import useStyles from './DrawerJSS';

export interface EvlDrawerProps extends DrawerProps {}

export const EvlDrawer: React.FC<EvlDrawerProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Drawer className={classes.root} {...props}>
      {children}
    </Drawer>
  );
};

export default EvlDrawer;
