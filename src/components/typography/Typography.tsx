import * as React from 'react';
import { Typography, TypographyProps } from '@material-ui/core';

export interface EvlTypographyProps extends TypographyProps {}

export const EvlTypography: React.FC<EvlTypographyProps> = ({ children, ...props }) => {
  return <Typography {...props}>{children}</Typography>;
};
export default EvlTypography;
