import * as React from 'react';
import useStyles from './RangeSliderJSS';
import Slider, { SliderProps } from '@material-ui/core/Slider';
import EvlTypography from '@components/typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import EvlGrid from '@components/grid';
import TextField from '@components/text-field';

export interface EvlRangeSliderProps extends SliderProps {
  label?: string;
  error?: string;
}

export const EvlRangeSlider: React.FC<EvlRangeSliderProps> = ({ label, error, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} error={!!error}>
      {label && (
        <EvlTypography id="discrete-slider" gutterBottom>
          {label}
        </EvlTypography>
      )}
      <EvlGrid container spacing={4}>
        <EvlGrid item xs={6}>
          <TextField></TextField>
        </EvlGrid>
        <EvlGrid item xs={6}>
          <TextField></TextField>
        </EvlGrid>
      </EvlGrid>
      <Slider {...props} />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlRangeSlider;
