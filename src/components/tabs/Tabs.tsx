import * as React from 'react';
import Tabs, {TabsProps} from "@material-ui/core/Tabs";
import useStyles from './TabsJSS';

export interface EvlTabsProps extends TabsProps {}

export const EvlTabs: React.FC<EvlTabsProps> = ({...props}) => {
    const classes = useStyles();
    return <Tabs className={classes.root} {...props} />;
};

export default EvlTabs;