import Product from "../model/Product";

export const CATEGORY_LOADING:string = "CATEGORY_LOADING";
export const CATEGORY_LOADING_SUCCESS:string = "CATEGORY_LOADING_SUCCESS";
export const CATEGORY_LOADING_FAIL:string = "CATEGORY_LOADING_FAIL";

export interface CategoryAsync{
     loading : boolean;
     category : Product[];
     error : string;
}

export interface CategoryLoading extends CategoryAsync{
     type : typeof CATEGORY_LOADING;
}

export interface CategoryLoadingSuccess extends CategoryAsync{
    type : typeof CATEGORY_LOADING_SUCCESS;
}

export interface CategoryLoadingFail extends CategoryAsync{
    type : typeof CATEGORY_LOADING_FAIL;
}

export type CategoryActionsTypes = CategoryLoading | CategoryLoadingSuccess | CategoryLoadingFail; 