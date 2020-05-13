import * as React from 'react';
import ExpansionPanel, { ExpansionPanelProps } from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './PanelJSS';
import { Typography } from '@material-ui/core';

export interface EvlPanelProps extends ExpansionPanelProps {
  panelHeader: string;
}

export const EvlPanel: React.FC<EvlPanelProps> = ({ panelHeader, children, ...props }) => {
  const classes = useStyles();
  return (
    <ExpansionPanel className={classes.root} {...props}>
      <ExpansionPanelSummary
        aria-controls="filter-panel-content"
        id="filter-panel-header"
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography variant="h6" component="h6" color="primary">
          {panelHeader}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default EvlPanel;
