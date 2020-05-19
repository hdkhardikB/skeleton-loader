import * as React from 'react';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';
import useStyles from './AvatarJSS';

export interface EvlAvatarProps extends AvatarProps {}

export const EvlAvatar: React.FC<EvlAvatarProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Avatar className={classes.root} {...props}>
      {children}
    </Avatar>
  );
};

export default EvlAvatar;
