import * as React from 'react';
import useStyles from './CardMediaJSS';
import { CardMedia, CardMediaProps } from '@material-ui/core';

export interface EvlCardMediaProps extends CardMediaProps {}

export const EvlCardMedia: React.FC<EvlCardMediaProps> = ({ ...props }) => {
  const classes = useStyles();
  return <CardMedia className={classes.root} {...props} />;
};

export default EvlCardMedia;
