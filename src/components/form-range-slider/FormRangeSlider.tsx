import * as React from 'react';
import { useField } from 'formik';
import EvlRangeSlider, { EvlRangeSliderProps } from '@components/range-slider';

export interface EvlFormRangeSliderProps extends EvlRangeSliderProps {
  name: string;
}

export const EvlFormRangeSlider: React.FC<EvlFormRangeSliderProps> = ({ name, ...props }) => {
  const [field, meta, form] = useField(name || '');

  return (
    <>
      <EvlRangeSlider
        name={field.name}
        error={meta.error}
        value={field.value}
        onChange={(event: React.ChangeEvent<{}>, newValue: number | number[]) => form.setValue(newValue)}
        {...props}
      />
    </>
  );
};

export default EvlFormRangeSlider;
