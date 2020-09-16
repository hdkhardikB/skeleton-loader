import * as React from 'react';
import StepLabel, { StepLabelProps } from '@material-ui/core/StepLabel';
import useStyles from './StepLabelJSS';

export interface EvlStepLabelProps extends StepLabelProps {}

export const EvlStepLabel: React.FC<EvlStepLabelProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <StepLabel className={classes.root} {...props}>
      {children}
    </StepLabel>
  );
};

export default EvlStepLabel;
