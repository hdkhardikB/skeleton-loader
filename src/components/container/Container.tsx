import * as React from 'react';
import { Container, ContainerProps } from '@material-ui/core';

export interface EvlContainerProps extends ContainerProps {}

export const EvlContainer: React.FC<EvlContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default EvlContainer;
