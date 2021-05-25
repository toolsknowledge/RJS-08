import React, { Component } from "react";
interface IState{}
interface IProps{
    key1:string;
    key2:number;
    key3:any[];
    key4:any;
};
class Third extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                 {this.props.key1}....{this.props.key2}....{JSON.stringify(this.props.key3)}....{this.props.key4}
            </React.Fragment>
        )
    };
};
export default Third;