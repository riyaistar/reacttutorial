import React, { Component } from 'react'

export class Usergreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    
    changeLoggedIn = () =>{
        this.setState({
            isLoggedIn:true 
        })
    }

    render() {

if(this.state.isLoggedIn){
    return (
        <div>
            <div>Welcome to user</div>
        </div>
    )
    }else{
    return (
        <div>
            <div>Welcome to ssss</div>
            <button onClick={this.changeLoggedIn}>ddd</button>

        </div>
    )
}

       
    }
}

export default Usergreeting
