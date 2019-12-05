import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Button, EvlComponentProvider } from '../../src'

const TestComponent = () => {
    return (<div>Sample Page1

        <EvlComponentProvider>
            {/* <Button
                id="test"
                name="test"
                type="button"
            >Sample Button</Button> */}
        </EvlComponentProvider>
    </div>)
}

ReactDOM.render(<TestComponent />, document.getElementById("root"));