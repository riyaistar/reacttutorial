/* rfce and control space shortcut key for create react function component */
/* In functional  component click handler is used as below example */

import React from 'react'

function FunctionClick() {
    function clickhandler(){
        console.log('click')
    }

    return (
        <div>
            <button onClick={clickhandler}>Click</button>
        </div>
    )
}

export default FunctionClick
