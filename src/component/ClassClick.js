/* rce and control space shortcut key for creating class component*/

/* In class component click handler is user with "this" reference */

import React,{Component} from 'react'

class ClassClick extends Component {
    clickhandler(){
        console.log(' class click')
    }
    render(){
        return (
            <div>
                <button onClick={this.clickhandler}>Click me</button>
            </div>
        )
}
}

export default ClassClick
