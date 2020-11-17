import React,{Component} from 'react'
import {component} from 'react-redux'
class NewComp extends Component{
    constructor(props){
        super(props);
        this.state={
            message:"Click!",
        }
    }
    BtnChange=()=>{
        this.setState({
            message:"Clicked!",
        });
    }

    render(){
        return (
            <div className='App'>
                <h3>{this.state.message}</h3>
                <button onClick={this.BtnChange}>change</button>
            </div>
        )

    }
}
export default  NewComp