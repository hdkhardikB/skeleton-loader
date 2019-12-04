import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { EvlContextProvider } from './ComponentContext'

import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { MuiThemeProvider } from '@material-ui/core'
interface IEvlUIProps {
    theme?: Theme
}

class EvlUIProvider extends Component<IEvlUIProps> {
    render() {
        const { theme } = this.props
        return (
            <MuiThemeProvider theme={theme}>
                <EvlContextProvider value={{ theme: theme }}></EvlContextProvider>
            </MuiThemeProvider>
        )
    }
}

export default EvlUIProvider
