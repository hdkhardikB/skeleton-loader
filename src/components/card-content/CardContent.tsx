import * as React from 'react';
import useStyles from './CardContentJSS';
import { CardContent, CardContentProps } from '@material-ui/core';

export interface EvlCardContentProps extends CardContentProps {}

export const EvlCardContent: React.FC<EvlCardContentProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <CardContent className={classes.root} {...props}>
      {children}
    </CardContent>
  );
};

export default EvlCardContent;
