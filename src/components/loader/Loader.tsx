import * as React from 'react';
import useStyles from './LoaderJss';
import { Typography } from '@material-ui/core';
import EvlBox from '@components/box';

export interface EvlLoaderProps {
  message: string;
  image: React.ReactType<any>;
}

export const EvlLoader: React.FC<EvlLoaderProps> = ({ message, image: Image, ...props }) => {
  const classes = useStyles();
  return (
    <EvlBox className={classes.formLoader}>
      <EvlBox component="figure" m={0} className={classes.figure}>
        <Image />
      </EvlBox>
      <Typography className={classes.formLoaderContent} component="p">
        {message}
      </Typography>
    </EvlBox>
  );
};

EvlLoader.defaultProps = {
  message: 'Loading',
};

export default EvlLoader;
