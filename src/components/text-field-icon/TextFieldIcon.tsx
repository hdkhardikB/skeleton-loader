import * as React from 'react';
import useStyles from './TextFieldIconJSS';
import EvlBox from '@components/box';

export interface EvlTextFieldIconProps {
  imageSrc: string;
}

export const EvlTextFieldIcon: React.FC<EvlTextFieldIconProps> = ({ imageSrc }) => {
  const classes = useStyles();
  return (
    <EvlBox className={classes.textFieldIcon}>
      <img className={classes.icon} src={imageSrc} alt="" />
    </EvlBox>
  );
};

export default EvlTextFieldIcon;
