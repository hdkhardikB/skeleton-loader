import * as React from 'react';
import { Menu, MenuProps } from '@material-ui/core';

export interface EvlMenuProps extends MenuProps {}

export const EvlMenu: React.FC<EvlMenuProps> = ({ children, ...props }) => {
  return <Menu {...props}>{children}</Menu>;
};

export default EvlMenu;
