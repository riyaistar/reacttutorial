import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import UpdatedComponent from './ParentCounter'

export class ClickCounter extends Component {
    render() {
        const {count,incrementCount} = this.props

        return (
            <div>
                <Button onClick={incrementCount}>Click Me {count}</Button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)