import * as React from 'react';
import useStyles from './SelectJSS';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

type option = {
  title: string;
  value: string;
};
export interface EvlSelectProps extends Omit<SelectProps, 'classes' | 'error'> {
  options: option[];
  lable?: string;
  error?: string;
}

export const EvlSelect: React.FC<EvlSelectProps> = ({ options, lable, error, ...props }) => {
  const classes = useStyles();

  const renderOptions = () => {
    return options.map(({ title, value }) => {
      return (
        <MenuItem key={title} value={value}>
          {title}
        </MenuItem>
      );
    });
  };

  return (
    <FormControl className={classes.formControl} error={!!error}>
      {!!lable && <InputLabel>{lable}</InputLabel>}
      <Select variant="outlined" {...props} className={classes.root}>
        {renderOptions()}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlSelect;
