import React, { Component } from "react";
import Child from "./Child";

interface IProps{}

interface IState{
    "sub_one":string;
    "sub_two":string;
    "sub_three":string;
}

class Parent extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            "sub_one" : "ReactJS",
            "sub_two" : "NodeJS",
            "sub_three" : "MongoDB"
        };
    };

    myFun = (arg1:any)=>{
        this.setState({
            sub_one : arg1.key1,
            sub_two : arg1.key2,
            sub_three : arg1.key3
        })
    };


    render(){
        return(
            <React.Fragment>
                <h1>{this.state.sub_one}....{this.state.sub_two}....{this.state.sub_three}</h1>
                <Child key1={this.myFun}></Child>
            </React.Fragment>
        )
    };
    
};

export default Parent;

