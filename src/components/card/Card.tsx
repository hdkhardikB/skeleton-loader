import * as React from 'react';
import useStyles from './CardJSS';
import { Card, CardProps } from '@material-ui/core';

export interface EvlCardProps extends CardProps {}

export const EvlCard: React.FC<EvlCardProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} {...props}>
      {children}
    </Card>
  );
};

export default EvlCard;
