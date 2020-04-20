import * as React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import useStyles from './FilterPanelJSS';
import clsx from 'classnames';
import EvlBox from '@components/box';
import EvlButton from '@components/button';

export interface EvlFilterPanelProps {
  filterText: string;
  closeText: string;
  filterIcon: string;
  closeIcon: string;
  filterApplied?: boolean;
  filterAppliedIcon?: string;
}

export const EvlFilterPanel: React.FC<EvlFilterPanelProps> = ({
  filterText,
  closeText,
  filterIcon,
  closeIcon,
  children,
  filterApplied,
  filterAppliedIcon,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  //@ts-ignore
  const handleChange = (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  return (
    <ExpansionPanel elevation={0} className={classes.root} expanded={expanded} onChange={handleChange}>
      <ExpansionPanelSummary
        className={clsx({ [classes.filterActive]: filterApplied })}
        aria-controls="filter-panel-content"
        id="filter-panel-header"
      >
        <EvlButton size="large" type="button">
          <EvlBox component="figure" className={classes.figure}>
            <img src={(expanded && closeIcon) || (filterApplied && filterAppliedIcon) || filterIcon} alt="" />
          </EvlBox>
          {(expanded && closeText) || filterText}
        </EvlButton>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>{children}</ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default EvlFilterPanel;
