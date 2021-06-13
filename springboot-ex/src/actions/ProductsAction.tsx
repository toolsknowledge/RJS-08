//actions
//ideas (types)

import axios from "axios";
import { Dispatch } from "redux";
import { CATCH_ERRORS, CATCH_PRODUCTS_ARRAY, HIT_SPRINGBOOT_APPLICATION, ProductActionTypes } from "../types/ProductActionTypes";


const getProducts = ()=>{
    return async (dispatch:Dispatch<ProductActionTypes>)=>{
        dispatch({
            type:HIT_SPRINGBOOT_APPLICATION,
            loading:false,
            products:[],
            error:""
        })

        try{
            const res = await axios.get(`http://localhost:5000/api/v1/products`);
            const { data } = res;
            dispatch({
                type : CATCH_PRODUCTS_ARRAY,
                loading:true,
                products:data,
                error:""
            })
        }catch(err){
            dispatch({
                type : CATCH_ERRORS,
                products:[],
                error:err.message,
                loading:true
            })
        }



    }
};

export default getProducts;