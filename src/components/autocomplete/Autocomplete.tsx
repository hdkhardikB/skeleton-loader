import * as React from 'react';
import useStyles from './AutocompleteJSS';
import Autocomplete, { AutocompleteProps } from '@material-ui/lab/Autocomplete';
import EvlTextBox from './../text-field';
import EvlBox from '@components/box';

type option = {
  title: string;
  value: string;
};

export interface EvlAutocompleteProps extends Omit<AutocompleteProps<option>, 'renderInput'> {
  options: option[];
  onChange: (event: React.ChangeEvent<{}>, value: option | null) => void;
  label?: string;
}

export const EvlAutocomplete: React.FC<EvlAutocompleteProps> = ({ options, label, onChange, ...props }) => {
  const classes = useStyles();
  return (
    <EvlBox className={classes.root}>
      <Autocomplete
        {...props}
        getOptionLabel={option => option.title}
        options={options}
        onChange={onChange}
        renderInput={params => {
          return (
            <EvlTextBox
              {...params}
              label={label}
              margin="normal"
              InputProps={{ ...params.InputProps, type: 'new-password' }}
            />
          );
        }}
      />
    </EvlBox>
  );
};

export default EvlAutocomplete;
