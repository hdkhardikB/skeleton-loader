import * as React from 'react';
// import useStyles from './TypographyJSS';
import { Typography, TypographyProps } from '@material-ui/core';

export interface EvlTypographyProps extends TypographyProps {}

export const EvlTypography: React.FC<EvlTypographyProps> = ({ children, ...props }) => {
  //   const classes = useStyles();
  return <Typography {...props}>{children}</Typography>;
};
export default EvlTypography;
