import * as React from 'react';
import { ListItemAvatar, ListItemAvatarProps } from '@material-ui/core';
import useStyles from './ListItemAvatarJSS';

export interface EvlListItemAvatarProps extends ListItemAvatarProps {}

export const EvlListItemAvatar: React.FC<EvlListItemAvatarProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <ListItemAvatar className={classes.root} {...props}>
      {children}
    </ListItemAvatar>
  );
};

export default EvlListItemAvatar;
