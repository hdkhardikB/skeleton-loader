import * as React from 'react';
import { useField } from 'formik';
import EvlRangeSlider, { EvlRangeSliderProps } from '@components/range-slider';

export interface EvlFormRangeSliderProps extends EvlRangeSliderProps {
  name: string;
}

export const EvlFormRangeSlider: React.FC<EvlFormRangeSliderProps> = ({ name, ...props }) => {
  const [field] = useField(name || '');
  return (
    <>
      <EvlRangeSlider name={field.name} value={field.value} {...props} />
    </>
  );
};

export default EvlFormRangeSlider;
