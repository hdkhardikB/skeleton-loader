import * as React from 'react';
import useStyles from './LoaderJss';
import { Typography } from '@material-ui/core';

export interface EvlLoaderProps {
  message: string;
  image: React.ReactType<any> 
}

export const EvlLoader: React.FC<EvlLoaderProps> = ({ message, image: Image, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.formLoader}>
      <figure className={classes.figure}>
        <Image />
      </figure>
      <Typography className={classes.formLoaderContent} component="p">
        {message}
      </Typography>
    </div>
  );
};

EvlLoader.defaultProps = {
  message: 'Loading',
};

export default EvlLoader;
