import * as React from 'react';
import { ListItemText, ListItemTextProps } from '@material-ui/core';

export interface EvlListItemTextProps extends ListItemTextProps {}

export const EvlListItemText: React.FC<EvlListItemTextProps> = ({ children, ...props }) => {
  return <ListItemText {...props}>{children}</ListItemText>;
};

export default EvlListItemText;
