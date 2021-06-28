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
               {!loading?(<LoadingBox></LoadingBox>):
               error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):
               (<div className="row center">
                    {products.map((obj:any)=>(
                        <div key={obj._id} className="card">
                            <a href="#">
                                <img src={obj.image} width="200" height="200"></img>
                            </a>
                            <div className="card-body">
                                <h2>{obj.name}</h2>
                                <div className="price">
                                    Price $ {obj.price}
                                </div>
                            </div>
                        </div>
                    ))}
               </div>)}
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




