import * as React from 'react';
import Tab, {TabProps} from "@material-ui/core/Tab";
import useStyles from './TabJSS';

export interface EvlTabProps extends TabProps {}

export const EvlTab: React.FC<EvlTabProps> = ({...props}) => {
    const classes = useStyles();
    return <Tab className={classes.root} {...props} />;
};

export default EvlTab;