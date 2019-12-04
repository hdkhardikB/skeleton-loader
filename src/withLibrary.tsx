import React, { Component } from 'react';
import { EvlContextConsumer } from './ComponentContext';

const withLibrary = (component: Component) => {

    const wrapperComponent = React.forwardRef((props: any, ref: any) => {

        return (<EvlContextConsumer>
            {
                appcontext => appcontext && (
                    <Component
                        {...props}
                        ref={ref}

                    />
                )}
        </EvlContextConsumer>)
    })
    return wrapperComponent
}

export default withLibrary