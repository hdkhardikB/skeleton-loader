import * as React from 'react';
import { Toolbar, ToolbarProps } from '@material-ui/core';

export interface EvlToolBar extends ToolbarProps {}

export const EvlToolBar: React.FC<EvlToolBar> = ({ children, ...props }) => {
  return <Toolbar {...props}>{children}</Toolbar>;
};

export default EvlToolBar;
