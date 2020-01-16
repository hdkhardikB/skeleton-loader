import * as React from 'react';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import useStyles from './TextFieldJSS';

export interface EvlTextBoxProps extends Omit<OutlinedTextFieldProps, 'classes' | 'variant'> {}
/** Customized Everledger TextBox which is based on
 * material-ui https://material-ui.com/components/text-fields/ */
export const EvlTextBox: React.FC<EvlTextBoxProps> = ({ ...props }) => {
  const classes = useStyles();
  console.log(classes);
  return (
    <TextField
      fullWidth
      {...props}
      variant="outlined"
      InputProps={{
        ...props.InputProps,
      }}
    />
  );
};

export default EvlTextBox;
