import * as React from 'react';
import { StyledSpan } from './SkeletonLoaderStyles';

export interface SkeletonLoaderProps {
  /**
   * a string to be treated as variant of loader
   */
  type?: 'circle' | 'box' | 'line';
  /**
   * width of the loader
   */
  width?: number | string;
  /**
   * height of the loader
   */
  height?: number | string;
  /**
   * classes to be applied externally
   */
  className?: string;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  width,
  height,
  className,
  type = 'box',
  children,
  ...props
}) => {
  return <StyledSpan width={width} height={height} type={type} className={className} {...props} />;
};

export default SkeletonLoader;
