import * as React from 'react';
import useStyles from './RangeSliderJSS';
import { Slider, SliderProps, InputAdornment } from '@material-ui/core';
import EvlTypography from '@components/typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import EvlGrid from '@components/grid';
import TextField from '@components/text-field';

export interface EvlRangeSliderProps extends Omit<SliderProps, 'onChange'> {
  label?: string;
  error?: string;
  valueText?: string;
  onTextChange?: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, input: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, newValue: number | number[]) => void;
}

export const EvlRangeSlider: React.FC<EvlRangeSliderProps> = ({ value, onTextChange, label, valueText, error, ...props }) => {
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
          <TextField type="number" onChange={event => onTextChange && onTextChange(event, 0)} InputProps={{
            endAdornment: <InputAdornment position="start">{valueText}</InputAdornment>,
          }} value={minVaule}></TextField>
        </EvlGrid>
        <EvlGrid item xs={4}>
          <TextField type="number" onChange={event => onTextChange && onTextChange(event, 1)} InputProps={{
            endAdornment: <InputAdornment position="start">{valueText}</InputAdornment>,
          }} value={maxValue}></TextField>
        </EvlGrid>
      </EvlGrid>
      <Slider value={value} {...props} />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlRangeSlider;
