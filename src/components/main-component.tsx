import React from 'react'

// ------- stateless component
function MainComponent(props:{data:string}) {
    return (
        <div>
            Main Component - {props.data}
        </div>
    )
}

export default MainComponent;
