import * as React from 'react';
import useStyles from './AppBarJSS';
import { AppBar, AppBarProps } from '@material-ui/core';

export interface EvlAppBarProps extends AppBarProps {}

export const EvlAppBar: React.FC<EvlAppBarProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} {...props}>
      {children}
    </AppBar>
  );
};

export default EvlAppBar;
