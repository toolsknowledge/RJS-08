import React, { Component } from "react";
import Second from "./Second";

interface IState{
    key1:string;
    key2:number;
    key3:any[];
};

interface IProps{}

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            key1 : "AshokIT",
            key2 : 100,
            key3 : [{"name":"shirt","brand":"Niki","image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p1.jpg"},
                    {"name":"shirt","brand":"Niki","image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p2.jpg"},
                    {"name":"shirt","brand":"Niki","image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p3.jpg"},
                    {"name":"Pant","brand":"Niki","image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p4.jpg"},
                    {"name":"Pant","brand":"Niki","image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p5.jpg"},
                    {"name":"Pant","brand":"Niki","image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p6.jpg"}]
        }
    };
    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}> ReactJS With TypeScript </Second>
            </React.Fragment>
        ) 
    }
};

export default First;

