import * as React from 'react';
import { FormControl, FormGroup } from '@material-ui/core';
import useStyles from './MultiCheckboxJSS';
import EvlCheckbox from '@components/checkbox';

type option = {
  title: string;
  value: string;
};
export interface EvlMultiCheckboxProps {
  options: option[];
  selectedOptions: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc?: string;
  imageExt?: string;
}

export const EvlMultiCheckbox: React.FC<EvlMultiCheckboxProps> = ({
  options,
  selectedOptions,
  onChange,
  imageSrc,
  imageExt = 'svg',
}) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.root} component="fieldset">
      <FormGroup row>
        {!!options &&
          options.length > 0 &&
          options.map(({ title, value }) => (
            <EvlCheckbox
              key={value}
              checked={selectedOptions && selectedOptions.includes(value)}
              onChange={onChange}
              value={value}
              label={title}
              image={imageSrc && `${imageSrc}/${value.toLowerCase()}.${imageExt}`}
              noCheckbox
            />
          ))}
      </FormGroup>
    </FormControl>
  );
};

export default EvlMultiCheckbox;
