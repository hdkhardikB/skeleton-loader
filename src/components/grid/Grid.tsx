import * as React from 'react';
import { Grid, GridProps } from '@material-ui/core';

export interface EvlGridProps extends GridProps {}

export const EvlGrid: React.FC<EvlGridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default EvlGrid;
