import React, { Component } from "react";
import Second from "./Second";

interface IState{
    key1:string;
    key2:number;
    key3:any[];
};

interface IProps{
    
};

class First extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            "key1" : "ReactJS",
            "key2" : 17.2,
            "key3" : [
                        {"name":"Shirt","price":100,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p1.jpg"},
                        {"name":"Polo Shirt","price":200,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p2.jpg"},
                        {"name":"American Shirt","price":300,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p3.jpg"},
                        {"name":"Pant","price":400,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p4.jpg"},
                        {"name":"Pant1","price":500,"rating":2.5,"image":"https://ashokitworkshop.s3.ap-south-1.amazonaws.com/p5.jpg"}
                    ]
        };
    }

    render(){
        return(
            <React.Fragment>
                <Second key1={this.state.key1}
                        key2={this.state.key2}
                        key3={this.state.key3}></Second>
            </React.Fragment>
        )
    }



};

export default First;