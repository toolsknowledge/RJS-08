//IDEAS
//HIT_SPRINGBOOT_APPLICATION
//CATCH_THE PRODUCTS_ARRAY
//CATCH_THE_ERRORS

import { Product } from "../modal/Product";

export const HIT_SPRINGBOOT_APPLICATION:string = "HIT_SPRINGBOOT_APPLICATION";
export const CATCH_PRODUCTS_ARRAY:string = "CATCH_PRODUCTS_ARRAY";
export const CATCH_ERRORS:string = "CATCH_ERRORS";


interface ProductsAsync{
    loading:boolean;
    products:Product[];
    error:string;
};

interface HitSpringBootApplication extends ProductsAsync{
    type : typeof HIT_SPRINGBOOT_APPLICATION;
};

interface CatchProductsArray extends ProductsAsync{
    type : typeof CATCH_PRODUCTS_ARRAY;
};

interface CatchErrors extends ProductsAsync{
    type : typeof CATCH_ERRORS;
};

export type ProductActionTypes = HitSpringBootApplication | CatchProductsArray | CatchErrors;













