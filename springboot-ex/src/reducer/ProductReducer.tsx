import { Product } from "../modal/Product";
import { CATCH_ERRORS, CATCH_PRODUCTS_ARRAY, HIT_SPRINGBOOT_APPLICATION, ProductActionTypes } from "../types/ProductActionTypes";

interface IState{
    loading:boolean;
    products:Product[];
    error:any;
};

const initialState:IState = {
    loading:false,
    products:[],
    error:""
};

const productsReducer = (state=initialState,action:ProductActionTypes):IState=>{
    switch(action.type){
        case HIT_SPRINGBOOT_APPLICATION:
        case CATCH_PRODUCTS_ARRAY:
        case CATCH_ERRORS:
        return{
                ...state,
                loading : action.loading,
                products: action.products,
                error : action.error
            }
            break;

        default:
            return state;
    }
};

export default productsReducer;