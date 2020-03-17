import * as React from 'react';
import { ButtonGroup, ButtonGroupProps } from '@material-ui/core';
import useStyles from './ButtonGroupJSS';

interface EvlButtonGroupProps extends ButtonGroupProps {}

/** Customized Everledger ButtonGroup which internally used
 * material-ui https://material-ui.com/components/buttonGroups/ */
export const EvlButtonGroup: React.FC<EvlButtonGroupProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <ButtonGroup className={classes.root} {...props}>
      {children}
    </ButtonGroup>
  );
};

export default EvlButtonGroup;
