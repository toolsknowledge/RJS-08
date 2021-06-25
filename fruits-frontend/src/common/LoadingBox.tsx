import React, { Component } from "react";

interface IState{}

interface IProps{}

class LoadingBox extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <div className="spinner">
                <i className="fa fa-spinner fa-spin"></i>
            </div>
        )
    }
}

export default LoadingBox;
