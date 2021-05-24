import React, { Component } from "react";

interface IState{
    "sub":string;
}

interface IProps{

};

class State extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            sub : "ReactJS"
        };
    };

    myFun = ()=>{
        this.setState({
            sub : "ReactJS With TypeScript !!!"
        })
    };


    render(){
        return(
            <React.Fragment>
                <h1>{this.state.sub}</h1>
                <button onClick={this.myFun}>Change</button>
            </React.Fragment>
        )
    }

};

export default State;