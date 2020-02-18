import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { EvlRangeSlider } from '@components';

const stories = storiesOf('EvlRangeSlider', module);

stories.add('EvlRangeSlider', () => <RangeSlider />);

function RangeSlider() {
  const [value, setValue] = React.useState<number[]>([20, 37]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <EvlRangeSlider
      label="Select Score"
      value={value}
      max={100}
      min={0}
      step={10}
      marks
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
    />
  );
}
