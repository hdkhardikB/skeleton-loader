import * as React from 'react';
import useStyles from './SelectJSS';
import FormHelperText from '@material-ui/core/FormHelperText';
import MenuItem from '@material-ui/core/MenuItem';
import Select, { SelectProps } from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import EvlTextFieldIcon from '@components/text-field-icon';
import EvlBox from '@components/box';

type option = {
  title: string;
  value: string;
};
export interface EvlSelectProps extends Omit<SelectProps, 'classes' | 'error'> {
  options: option[];
  lable?: string;
  error?: string;
  icon?: string;
}

export const EvlSelect: React.FC<EvlSelectProps> = ({ options, lable, error, icon, ...props }) => {
  const classes = useStyles();

  const SelectIcon = () => (
    <EvlBox className={classes.selectIcon}>
      <EvlTextFieldIcon imageSrc={icon || ""} />
    </EvlBox>
  );

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
      {!!lable && <label>{lable}</label>}
      <Select variant="outlined" IconComponent={icon && SelectIcon || undefined} {...props} className={classes.root}>
        {renderOptions()}
      </Select>
      <FormHelperText>{error}</FormHelperText>
    </FormControl>
  );
};

export default EvlSelect;
