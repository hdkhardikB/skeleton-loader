import * as React from 'react';
import { Link as MuiLink, LinkProps } from '@material-ui/core';

export interface EvlLinkProps extends LinkProps { }

export const EvlLink: React.FC<EvlLinkProps> = ({ children, ...props }) => {
  return <a> <MuiLink underline="none" {...props}>{children}</MuiLink></a>;
};

export default EvlLink;
