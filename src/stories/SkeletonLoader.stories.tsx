import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { SkeletonLoader } from '@components';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  padding: 20px 40px 40px;
`;
const stories = storiesOf('Skeleton loader', module);

stories.add('Box loader', () => (
  <StyledWrapper>
    <SkeletonLoader type="box" height={200} width={300} />
  </StyledWrapper>
));
stories.add('Circle loader', () => (
  <StyledWrapper>
    <SkeletonLoader type="circle" height={40} width={40} />
  </StyledWrapper>
));
stories.add('Line loader', () => (
  <StyledWrapper>
    {' '}
    <SkeletonLoader type="line" width={120} />
  </StyledWrapper>
));
