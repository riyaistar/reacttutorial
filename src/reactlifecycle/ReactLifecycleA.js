import React, { Component } from 'react'
import ChildLifecycle from './ChildLifecycle'

export class ReactLifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Feroz'
        }
        console.log('ReactLifecycleA constructore done')
    }
    
    static getDerivedStateFromProps(props,state){
        console.log(' ReactLifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log(' ReactLifecycleA componentDidMount')

    }

    render() {
        console.log(' ReactLifecycleA render')

        return (
            <div>
                ReactLifecycleA
                <ChildLifecycle/>
            </div>
        )
    }
}

export default ReactLifecycleA
