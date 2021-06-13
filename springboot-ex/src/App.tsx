import React, { Component } from "react";
import { connect } from "react-redux";
import getProducts from "./actions/ProductsAction";

interface IState{

}

interface IProps{
    result:any;
    myFun:any;
}

class App extends Component<IProps,IState>{
    constructor(props:IProps){
      super(props);
    }

    componentDidMount(){
        this.props.myFun();
    };

    render(){
        return(
          <React.Fragment>
              {JSON.stringify(this.props.result)}
          </React.Fragment>
        )
    };
};

const receive = (state:any)=>{
    return{
       result : state
    }
};


const send = (dispatch:any)=>{
    return{
      myFun : ()=>{ dispatch( getProducts() ) }
    }
};

export default connect(receive,send)(App);
