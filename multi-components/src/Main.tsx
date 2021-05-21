import React, { Component } from "react";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

interface IState{}

interface IProps{}

class Main extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <Header /> 
                <Body /> 
                <Footer /> 
            </React.Fragment>
        )
    }
};

export default Main;