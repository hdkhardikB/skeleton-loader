import * as React from 'react';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import useStyles from './ChipJSS';

export interface EvlChipProps extends ChipProps {}

export const EvlChip: React.FC<EvlChipProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Chip className={classes.root} {...props}>
      {children}
    </Chip>
  );
};

export default EvlChip;
