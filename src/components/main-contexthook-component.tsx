import React, { useContext } from "react";
import TestContext from "./test-context";

function MainContextHookComponent() {
    const testData = useContext(TestContext);

    return(
        <div>
        <div> From main component - {testData} </div>
        </div>
    )
}

export default MainContextHookComponent;