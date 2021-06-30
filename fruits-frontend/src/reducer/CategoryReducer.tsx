import Product from "../model/Product";
import { CategoryActionsTypes, CATEGORY_LOADING, CATEGORY_LOADING_FAIL, CATEGORY_LOADING_SUCCESS } from "../types/CategoryActionTypes";

export interface IState{
    loading : boolean;
    category:Product[];
    error : string;
}

const initialState:IState = {
    loading : false,
    category : [],
    error : ""
};

const CategoryReducer = (state = initialState,action:CategoryActionsTypes):IState=>{
    switch(action.type){
        case CATEGORY_LOADING:
        case CATEGORY_LOADING_SUCCESS:
        case CATEGORY_LOADING_FAIL:
            return{
                ...state,
                loading : action.loading,
                category : action.category,
                error : action.error
            }
        default:
            return state;
    }
}

export default CategoryReducer;