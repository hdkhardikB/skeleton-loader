import * as React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

export interface EvlBoxProps extends BoxProps {}

export const EvlBox: React.FC<EvlBoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export default EvlBox;
