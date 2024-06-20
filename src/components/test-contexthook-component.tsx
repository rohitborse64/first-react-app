
import React, { useContext } from 'react'
import TestContext from './test-context';

function TestContexthookComponent() {

    const value = useContext(TestContext);

    return (
        <div>
            <div> From test component: {value} </div>
        </div>
    )
}

export default TestContexthookComponent;
