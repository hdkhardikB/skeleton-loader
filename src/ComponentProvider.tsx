import React, { Component } from 'react'
import { EvlContextProvider } from './ComponentContext'
import { Theme } from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider } from '@material-ui/styles'
import { theme } from './jss'
interface IEvlUIProps {
    theme?: Theme
}

class EvlUIProvider extends Component<IEvlUIProps> {
    componentDidUpdate() {

    }
    render() {

        return (
            <ThemeProvider theme={this.props.theme || theme}>
                <div></div>
            </ThemeProvider>


            // If Theme provider works try running Context provider

            // <EvlContextProvider value={{ theme: this.props.theme || theme }}>
            //     <ThemeProvider theme={this.props.theme || theme}>
            //         <div></div>
            //     </ThemeProvider>
            // </EvlContextProvider>

        )
    }
}

export default EvlUIProvider
