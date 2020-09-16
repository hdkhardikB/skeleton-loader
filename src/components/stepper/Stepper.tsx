import * as React from 'react';
import Stepper, { StepperProps } from '@material-ui/core/Stepper';
import useStyles from './StepperJSS';

export interface EvlStepperProps extends StepperProps {}

export const EvlStepper: React.FC<EvlStepperProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Stepper className={classes.root} {...props}>
      {children}
    </Stepper>
  );
};

export default EvlStepper;
