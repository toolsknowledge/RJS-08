import Product from "../model/Product";

export const PRODUCTS_LOADING:string = "PRODUCTS_LOADING";
export const PRODUCTS_LOADING_SUCCESS:string = "PRODUCTS_LOADING_SUCCESS";
export const PRODUCTS_LOADING_FAIL:string = "PRODUCTS_LOADING_FAIL";

export interface ProductsAsync{
     loading : boolean;
     products : Product[];
     error : string;
}

export interface ProductsLoading extends ProductsAsync{
     type : typeof PRODUCTS_LOADING;
}

export interface ProductsLoadingSuccess extends ProductsAsync{
    type : typeof PRODUCTS_LOADING_SUCCESS;
}

export interface ProductsLoadingFail extends ProductsAsync{
    type : typeof PRODUCTS_LOADING_FAIL;
}

export type ProductsActionsTypes = ProductsLoading | ProductsLoadingSuccess | ProductsLoadingFail; 