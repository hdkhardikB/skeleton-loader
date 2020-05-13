import * as React from 'react';
import { List, ListProps } from '@material-ui/core';

export interface EvlListProps extends ListProps {}

export const EvlList: React.FC<EvlListProps> = ({ children, ...props }) => {
  return (
    <List {...props}>
      {children}
    </List>
  );
};

export default EvlList;
