import * as React from 'react';
import useStyles from './LoaderJss';
//@ts-ignore
import * as formLoader from '@assets/images/img_loader.svg';
import { Typography } from '@material-ui/core';

export interface EvlLoaderProps {
  message?: string;
}

export const EvlLoader: React.FC<EvlLoaderProps> = ({ message, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.formLoader}>
      <figure className={classes.figure}>
        <img src={formLoader} alt="" />
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
