import React, { Component } from "react";
interface IProps{
    variant:string;
}
interface IState{}
class MessageBox extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <div className={`alert alert-${this.props.variant} || "info`}>{this.props.children}</div>
            </React.Fragment>
        )
    }
}
export default MessageBox;