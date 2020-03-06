import * as React from 'react';
// import useStyles from './LinkJSS';
import { Link, LinkProps } from '@material-ui/core';

export interface EvlLinkProps extends LinkProps {}

export const EvlLink: React.FC<EvlLinkProps> = ({ children, ...props }) => {
  //const classes = useStyles();
  return <Link {...props}>{children}</Link>;
};

export default EvlLink;
