import * as React from 'react';
import useStyles from './ComingSoonJSS';
import EvlBox from '@components/box';

export interface ComingSoonProps {
  logoUrl: string
  text: string
}

export const EvlComingSoon: React.FC<ComingSoonProps> = ({ logoUrl, text }) => {
  const classes = useStyles();

  return (
    <EvlBox className={classes.root}>
      <EvlBox className={classes.content}>
      <img src={logoUrl} />
      {text}
      </EvlBox>
    </EvlBox>
  );
};

export default EvlComingSoon;
