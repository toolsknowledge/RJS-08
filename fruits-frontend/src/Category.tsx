import React, { Component } from "react";
import { connect } from "react-redux";
import getCategory from "./actions/CategoryActions";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";
//import { match as Match } from "react-router-dom";


interface IState{}

interface IProps{
    getCategoryData:any;
    result:any;
    //match:Match<routeParams>;
}

// interface routeParams{
//     category:string;
// }



class Category extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    componentDidMount(){
        
        this.props.getCategoryData("grapes");
    }

    render(){
        const {loading,category,error} = this.props.result;
        return(
            <React.Fragment>
                {!loading?(<LoadingBox></LoadingBox>):
                 error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>)
                 :(<div className="row center">
                     {category.map((element:any,index:number)=>(
                         <div className="card" key={index}>
                            <img src={element.image}></img> 
                            <div className="card-body">
                                <h2>{element.name}</h2>
                                <div className="price">
                                    Price $ {element.price}    
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
        result : state.category
    }
}


const send = (dispatch:any)=>{
    return{
        getCategoryData : (arg1:string)=>{ dispatch(getCategory(arg1)) }
    }
};


export default connect(receive,send)(Category);