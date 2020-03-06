import * as React from 'react';
// import useStyles from './GridJSS';
import { Grid, GridProps } from '@material-ui/core';

export interface EvlGridProps extends GridProps {}

export const EvlGrid: React.FC<EvlGridProps> = ({ children, ...props }) => {
  //const classes = useStyles();
  return <Grid {...props}>{children}</Grid>;
};

export default EvlGrid;
