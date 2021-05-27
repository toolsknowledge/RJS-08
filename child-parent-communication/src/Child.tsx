import React, { Component } from "react";
interface IState{}
interface IProps{
    key1 : (arg1:any)=>void;
};
class Child extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    render(){
        return(
            <React.Fragment>
                <button onClick={()=>{this.props.key1({"key1":"ReactJS With TypeScript","key2":"Go","key3":"CassandraDB"})}}>Change</button>
            </React.Fragment>
        )
    }
};
export default Child;
