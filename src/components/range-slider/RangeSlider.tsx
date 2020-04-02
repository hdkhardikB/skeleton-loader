import * as React from 'react';
import useStyles from './RangeSliderJSS';
import {Slider, SliderProps } from '@material-ui/core';
import EvlTypography from '@components/typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import EvlGrid from '@components/grid';
import TextField from '@components/text-field';

export interface EvlRangeSliderProps extends Omit<SliderProps, 'onChange'>  {
  label?: string;
  error?: string;
  valueText?: string;
  onChange: (event: React.ChangeEvent<{}>, newValue: number | number[]) => void;
}

export const EvlRangeSlider: React.FC<EvlRangeSliderProps> = ({ value, label, valueText, error, ...props }) => {
  const classes = useStyles();
  const [minVaule, maxValue] = value as number[];
  return (
    <FormControl className={classes.root} error={!!error}>
      {label && (
        <EvlTypography id="discrete-slider" gutterBottom>
          {label}
        </EvlTypography>
      )}
      <EvlGrid container direction="row" justify="space-between">
        <EvlGrid item xs={4}>
          <TextField value={`${minVaule} ${valueText}`}></TextField>
        </EvlGrid>
        <EvlGrid item xs={4}>
          <TextField value={`${maxValue} ${valueText}`}></TextField>
        </EvlGrid>
      </EvlGrid>
      <Slider value={value} {...props} />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlRangeSlider;
