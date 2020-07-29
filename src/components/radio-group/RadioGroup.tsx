import * as React from 'react';
import { RadioGroup, RadioGroupProps } from '@material-ui/core';
import useStyles from './RadioGroupJSS';
import EvlRadio from '@components/radio';

type option = {
  title: string;
  value: string;
};

export interface EvlGroupRadioProps extends RadioGroupProps {
  options: option[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>, value: string) => void;
  switchRadio?: boolean
}

export const EvlGroupRadio: React.FC<EvlGroupRadioProps> = ({ options, switchRadio, onChange, ...props }) => {
  const classes = useStyles();

  return (
    <RadioGroup className={classes.root} onChange={onChange} {...props}>
      {!!options &&
        options.length > 0 &&
        options.map(({ title, value }) => (
          <EvlRadio switchRadio={switchRadio} checked={value === props.value} key={value} value={value} label={title} />
        ))}
    </RadioGroup>
  );
};

export default EvlGroupRadio;
