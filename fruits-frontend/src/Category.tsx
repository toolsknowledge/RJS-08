import React, { Component } from "react";
import { connect } from "react-redux";
import getCategory from "./actions/CategoryActions";
import LoadingBox from "./common/LoadingBox";
import MessageBox from "./common/MessageBox";

interface IState{}

interface IProps{
    getCategoryData:any;
    result:any;
}

class Category extends Component<IProps,IState>{
    constructor(props:IProps){
        super(props);
    }

    componentDidMount(){
        this.props.getCategoryData("banana");
    }

    render(){
        const {loading,category,error} = this.props.result;
        return(
            <React.Fragment>
                {!loading?(<LoadingBox></LoadingBox>):
                 error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>)
                 :(<div>{JSON.stringify(category)}</div>)}
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