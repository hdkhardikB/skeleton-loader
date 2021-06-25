import styled, { keyframes } from 'styled-components';

const LoadingEffect = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
`;

export const StyledSpan = styled.span<{
  type?: string;
  width?: number | string;
  height?: number | string;
  hasChildren?: boolean;
}>`
  display: block;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 50px 500px;
  background-position: 0 0;
  animation: ${LoadingEffect} 1.5s ease-in-out 0.5s infinite;
  height: 1em;
  width: 100%;
  ${props =>
    props.type === 'circle' &&
    `
      border-radius: 50%;
      height: ${props.height}px;
      width: ${props.width}px;
    `}
  ${props =>
    props.type === 'box' &&
    `
      height: ${props.height ? `${props.height}px` : `auto`};
      width: ${props.width ? `${props.width}px` : `100%`};
      :empty:before {
        content: "\\00a0";
      }
    `}
`;
