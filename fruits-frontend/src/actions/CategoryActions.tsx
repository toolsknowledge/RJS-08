import axios from "axios";
import { Dispatch } from "redux";
import { CategoryActionsTypes, CATEGORY_LOADING, CATEGORY_LOADING_FAIL, CATEGORY_LOADING_SUCCESS } from "../types/CategoryActionTypes";

const getCategory = (category:any)=>{
    return async (dispatch:Dispatch<CategoryActionsTypes>)=>{
        dispatch({
            type : CATEGORY_LOADING,
            loading : false,
            category : [],
            error : ""
        })
        try{
            const res = await axios.get(`http://localhost:8080/products/${category}`);
            const { data } = res;
            dispatch({
                type : CATEGORY_LOADING_SUCCESS,
                loading : true,
                category : data,
                error : ""
            })
        }catch(err){
            dispatch({
                type : CATEGORY_LOADING_FAIL,
                loading : true,
                category:[],
                error : err.message
            })
        }
    }
};
export default getCategory;