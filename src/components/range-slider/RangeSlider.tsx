import * as React from 'react';
import useStyles from './RangeSliderJSS';
import Slider, { SliderProps } from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

export interface EvlRangeSliderProps extends SliderProps {
  label?: string;
  error?: string;
}

export const EvlRangeSlider: React.FC<EvlRangeSliderProps> = ({ label, error, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root} error={!!error}>
      {label && (
        <Typography id="discrete-slider" gutterBottom>
          {label}
        </Typography>
      )}
      <Slider {...props} />
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlRangeSlider;
