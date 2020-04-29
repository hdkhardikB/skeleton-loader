import * as React from 'react';
import { Hidden, HiddenProps } from '@material-ui/core';

export interface EvlHiddenProps extends HiddenProps {}

export const EvlHidden: React.FC<EvlHiddenProps> = ({ children, ...props }) => {
  return (
    <Hidden {...props}>
      {children}
    </Hidden>
  );
};

export default EvlHidden;
