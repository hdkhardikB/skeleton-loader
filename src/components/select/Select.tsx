import * as React from 'react';
import useStyles from './SelectJSS';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

export interface EvlSelectProps extends Omit<SelectProps, 'classes' | 'error'> {
  options: Object;
  lable?: string;
  error?: string;
}

export const EvlSelect: React.FC<EvlSelectProps> = ({ options, lable, error, ...props }) => {
  const classes = useStyles();

  const renderOptions = () => {
    return Object.keys(options).map(key => {
      return (
        <MenuItem key={key} value={key}>
          {options[key]}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl className={classes.formControl} error={!!error}>
      {!!lable && <InputLabel>{lable}</InputLabel>}
      <Select {...props} className={classes.root}>
        {renderOptions()}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlSelect;
