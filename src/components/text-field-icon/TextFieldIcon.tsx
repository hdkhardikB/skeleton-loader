import * as React from 'react';
import useStyles from './TextFieldIconJSS';

export interface EvlTextFieldIconProps {
  imageSrc: string;
}

export const EvlTextFieldIcon: React.FC<EvlTextFieldIconProps> = ({ imageSrc }) => {
  const classes = useStyles();
  return (
    <div className={classes.textFieldIcon}>
      <img className={classes.icon} src={imageSrc} alt="" />
    </div>
  );
};

export default EvlTextFieldIcon;
