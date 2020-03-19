import * as React from 'react';
import { FormControl, FormGroup } from '@material-ui/core';
import useStyles from './MultiCheckboxJSS';
import EvlCheckbox from '@components/checkbox';

export interface EvlMultiCheckboxProps {
  options: string[];
  selectedOptions: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imageSrc?: string 
  imageExt?: string
}

export const EvlMultiCheckbox: React.FC<EvlMultiCheckboxProps> = ({ options, selectedOptions, onChange, imageSrc, imageExt = "svg" }) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.root} component="fieldset">
      <FormGroup row>
        {!!options &&
          options.length > 0 &&
          options.map((attribute: string) => (
            <EvlCheckbox
              key={attribute}
              checked={selectedOptions && selectedOptions.includes(attribute)}
              onChange={onChange}
              value={attribute}
              label={attribute}
              image={imageSrc && `${imageSrc}/${attribute}.${imageExt}`}
              noCheckbox
            />
          ))}
      </FormGroup>
    </FormControl>
  );
};

export default EvlMultiCheckbox;
