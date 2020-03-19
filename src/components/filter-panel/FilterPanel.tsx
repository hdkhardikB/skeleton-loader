import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import useStyles from './FilterPanelJSS';
import { Typography } from '@material-ui/core';
import clsx from 'classnames';

export interface EvlFilterPanelProps {
  filterText: string;
  closeText: string;
  filterIcon: string;
  closeIcon: string;
  filterApplied?: boolean;
}

export const EvlFilterPanel: React.FC<EvlFilterPanelProps> = ({
  filterText,
  closeText,
  filterIcon,
  closeIcon,
  children,
  filterApplied,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  //@ts-ignore
  const handleChange = (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <ExpansionPanel className={classes.root} expanded={expanded} onChange={handleChange}>
      <ExpansionPanelSummary
        className={clsx({ [classes.filterActive]: filterApplied })}
        aria-controls="filter-panel-content"
        id="filter-panel-header"
      >
        <figure>
          <img src={(expanded && closeIcon) || filterIcon} alt="" />
        </figure>
        <Typography>{(expanded && closeText) || filterText}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default EvlFilterPanel;
