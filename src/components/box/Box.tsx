import * as React from 'react';
// import useStyles from './BoxJSS';
import Box, { BoxProps } from '@material-ui/core/Box';

export interface EvlBoxProps extends BoxProps {}

export const EvlBox: React.FC<EvlBoxProps> = ({ children, ...props }) => {
  //const classes = useStyles();
  return <Box {...props}>{children}</Box>;
};

export default EvlBox;
