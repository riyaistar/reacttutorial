import React, { Component } from 'react'

export class ChildLifecycle extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('ChildLifecycle constructore done')

    }
    
    render() {
        console.log(' ChildLifecycle render')

        return (
            <div>
                
            </div>
        )
    }

    static getDerivedStateFromProps(props,state){
        console.log(' ChildLifecycle getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log(' ChildLifecycle componentDidMount')

    }
}

export default ChildLifecycle
