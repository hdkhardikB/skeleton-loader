import * as React from 'react';
// import useStyles from './ToolBarJSS';
import { Toolbar, ToolbarProps } from '@material-ui/core';

export interface EvlToolBar extends ToolbarProps {}

export const EvlToolBar: React.FC<EvlToolBar> = ({ children, ...props }) => {
  //const classes = useStyles();
  return <Toolbar {...props}>{children}</Toolbar>;
};

export default EvlToolBar;
