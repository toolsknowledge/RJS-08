import React, { Component } from "react";
import Second from "./Second";

interface IState{
    val : number
}

interface IProps{}

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            val : 1
        }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                val : Math.random()
            })
        },3000);
    }


    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.val}></Second>
            </React.Fragment>
        )    
    }
}

export default First;