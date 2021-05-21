import React, { Component } from "react";

interface IState{}

interface IProps{}

class Body extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    };
    render(){
        return(
            <React.Fragment>
                <h1>Pradeep</h1>
                <h2>Shirts</h2>
                <h2>Pants</h2>
                <h2>Jeans</h2>
                <h2>Cotton</h2>
                <h2>Kids</h2>
            </React.Fragment>
        )
    }
};

export default Body;
