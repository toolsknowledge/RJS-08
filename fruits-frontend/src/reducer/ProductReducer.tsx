import Product from "../model/Product";
import { ProductsActionsTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

export interface IState{
    loading : boolean;
    products:Product[];
    error : string;
}

const initialState:IState = {
    loading : false,
    products : [],
    error : ""
};

const productReducer = (state = initialState,action:ProductsActionsTypes):IState=>{
    switch(action.type){
        case PRODUCTS_LOADING:
        case PRODUCTS_LOADING_SUCCESS:
        case PRODUCTS_LOADING_FAIL:
            return{
                ...state,
                loading : action.loading,
                products : action.products,
                error : action.error
            }
        default:
            return state;
    }
}

export default productReducer;