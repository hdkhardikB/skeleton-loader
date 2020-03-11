import * as React from 'react';
// import useStyles from './LinkJSS';
import { Link as MuiLink, LinkProps } from '@material-ui/core';

export interface EvlLinkProps extends LinkProps {}

export const EvlLink: React.FC<EvlLinkProps> = ({ children, ...props }) => {
  //const classes = useStyles();
  return <MuiLink underline="none" {...props}>{children}</MuiLink>;
};

export default EvlLink;
