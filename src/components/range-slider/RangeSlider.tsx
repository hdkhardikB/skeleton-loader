import * as React from 'react';
import useStyles from './RangeSliderJSS';
import Slider, { SliderProps } from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';

export interface EvlRangeSliderProps extends SliderProps {
  label: string;
}

export const EvlRangeSlider: React.FC<EvlRangeSliderProps> = ({ label, ...props }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <Typography id="discrete-slider" gutterBottom>
        {label}
      </Typography>
      <Slider {...props} />
    </FormControl>
  );
};

export default EvlRangeSlider;
