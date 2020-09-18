import * as React from 'react';
import Step, { StepProps } from '@material-ui/core/Step';
import useStyles from './StepJSS';

export interface EvlStepProps extends StepProps {}

export const EvlStep: React.FC<EvlStepProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Step className={classes.root} {...props}>
      {children}
    </Step>
  );
};

export default EvlStep;
