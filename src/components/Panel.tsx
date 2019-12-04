import * as React from 'react'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'
import { panelRoot } from '../jss/styleSheet'
import { Theme } from '@material-ui/core/styles/createMuiTheme'

const styles = (theme: Theme) => createStyles({
    panel: {
        ...panelRoot(theme).default
    }
})

interface IPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: JSX.Element | string | (JSX.Element | string)[]
}

interface IPanelStyleProps extends WithStyles<typeof styles> {

}

const EvlPanel: React.SFC<IPanelProps & IPanelStyleProps> = ({ children, classes, ...props }) => {
    return (
        <div

            className={classes.panel}
        >
            {children}
        </div>
    )
}
export default withStyles(styles)(EvlPanel)
