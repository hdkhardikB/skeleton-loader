import * as React from 'react';
import { MenuItem, MenuItemProps } from '@material-ui/core';

export interface EvlMenuItemProps extends MenuItemProps {
  button?: boolean;
}

export const EvlMenuItem: React.FC<EvlMenuItemProps> = ({ children, button, ...props }) => {
  return <MenuItem {...props}>{children}</MenuItem>;
};

export default EvlMenuItem;
