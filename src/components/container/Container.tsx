import * as React from 'react';
import { Container, ContainerProps } from '@material-ui/core';
import useStyles from './ContainerJSS';

export interface EvlContainerProps extends ContainerProps {}

export const EvlContainer: React.FC<EvlContainerProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} {...props}>
      {children}
    </Container>
  );
};

export default EvlContainer;
