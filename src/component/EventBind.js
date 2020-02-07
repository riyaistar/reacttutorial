/* rce and control space shortcut key for creating class component*/
/* for creating a construct short cut keys are rconst */

import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello"
        }
    }

    clickHandler= () => {
        this.setState({
            message:"good bye"
        })
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickHandler}>Event Click</button>
            </div>
        )
    }
}

export default EventBind
