import React,{Component} from 'react'

const UpdatedComponent=OriginalComponent =>{
    class NewComponent extends Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementMe= () =>{
            this.setState(prevState =>{
              return  {count: prevState.count+1}
            })
        }
        render(){
            return <OriginalComponent name="Hello" count={this.state.count} incrementCount={this.incrementMe}></OriginalComponent>
        }
    }
    return NewComponent
}

export default UpdatedComponent