import axios from "axios";
import { Dispatch } from "redux";
import { ProductsActionsTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS } from "../types/ProductActionTypes";

const getProducts = ()=>{
    return async (dispatch:Dispatch<ProductsActionsTypes>)=>{
        dispatch({
            type : PRODUCTS_LOADING,
            loading : false,
            products : [],
            error : ""
        })
        try{
            console.log(process.env.REACT_APP_BASE_URL);
            const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/products`);
            const { data } = res;
            dispatch({
                type : PRODUCTS_LOADING_SUCCESS,
                loading : true,
                products : data,
                error : ""
            })
        }catch(err){
            dispatch({
                type : PRODUCTS_LOADING_FAIL,
                loading : true,
                products:[],
                error : err.message
            })
        }
    }
};
export default getProducts;