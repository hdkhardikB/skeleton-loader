import * as React from 'react'
import { withStyles, WithStyles, createStyles, makeStyles, Button } from '@material-ui/core'
// import Button from '@material-ui/core/Button'
import { activeMenuButton } from '../jss/styleSheet'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import classNames from 'classnames'
// import { makeStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => createStyles({
  button: {
    ...activeMenuButton(theme).default
  }
})

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: JSX.Element | string | (JSX.Element | string)[]
  disabled?: boolean
  // classes: string
  id: string
  name: string
  type: string
}

interface IButtonStyleProps extends WithStyles<typeof styles> {

}

const EvlButton: React.SFC<IButtonProps & IButtonStyleProps> = ({ id, name, type, children, classes, disabled, ...props }) => {
  return (
    <Button
      id={id}
      name={name}
      className={classes.button}
    >
      {children}
    </Button>
  )
}

EvlButton.defaultProps = {
  disabled: false,
  type: "button"
}

export default withStyles(styles)(EvlButton)
