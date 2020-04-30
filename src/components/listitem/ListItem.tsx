import * as React from 'react';
import { ListItem, ListItemProps } from '@material-ui/core';
import useStyles from './ListItemJSS';

export interface EvlListItemProps extends ListItemProps {
  button?: boolean;
}

export const EvlListItem: React.FC<EvlListItemProps> = ({ children, button, ...props }) => {
  const classes = useStyles();
  return (
    <ListItem className={classes.root} {...props}>
      {children}
    </ListItem>
  );
};

export default EvlListItem;
