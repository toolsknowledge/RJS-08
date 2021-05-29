import React, { Component } from "react";

interface IState{}

interface IProps{
    fun_one : (arg1:any)=>any;
    fun_two : (arg1:any)=>void;
    fun_three : (arg1:any)=>void;
};

class Child extends Component<IProps,IState>{
    
    ref1 = React.createRef<HTMLInputElement>();
    ref2 = React.createRef<HTMLInputElement>();
    ref3 = React.createRef<HTMLInputElement>();

    constructor(props:IProps){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <input type="text" ref={this.ref1}></input>
                <input type="text" ref={this.ref2}></input>
                <input type="text" ref={this.ref3}></input>

                <br></br>

                <button onClick={()=>{this.props.fun_one(this.ref1.current?.value)}} style={{marginRight:140}}>Button1</button>    
                <button onClick={()=>{this.props.fun_two(this.ref2.current?.value)}} style={{marginRight:100}}>Button2</button>   
                <button onClick={()=>{this.props.fun_three(this.ref3.current?.value)}}>Button3</button>


            </React.Fragment>
        )
    }

};

export default Child;