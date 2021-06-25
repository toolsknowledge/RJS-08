import React, { Component } from "react";
import { connect } from "react-redux";
import getProducts from "./actions/ProductActions";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";
interface IState{}
interface IProps{
    getProductsFn:any;
    result:any;
}
class Products extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }
    componentDidMount(){
        this.props.getProductsFn();
    }
    render(){
        const {loading,products,error} = this.props.result;
        return(
           <React.Fragment>
               {!loading?(<LoadingBox></LoadingBox>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(<div>{JSON.stringify(products)}</div>)}
           </React.Fragment>
        )
    }
}

const receive = (state:any)=>{
    return{
        result : state.products
    }
};

const send = (dispatch:any)=>{
    return{
        getProductsFn : ()=>{ dispatch(getProducts()) }
    }
};

export default connect(receive,send)(Products);




