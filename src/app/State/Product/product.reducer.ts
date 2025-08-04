import { findProductByCategoryFailure, findProductByCategorySuccess, findProductByIdFailure, findProductByIdSuccess } from './product.action';
import { createReducer, on } from "@ngrx/store"

const initialState={
    products:[],
    loading:false,
    error:null,
    product:null
}

export const productReducer=createReducer(
    initialState,
    on
    (findProductByCategorySuccess, (state,{payload})=>({
        ...state,
        products:payload,
        content:payload.content,
        loading:false
    })),

    on(findProductByIdSuccess, (state,{payload})=>({
        ...state,
        product:payload,
        loading:false
    })),

    on(findProductByCategoryFailure,
        findProductByIdFailure,
        (state,{error})=>({
        ...state,
        error:error,
        loading:false
    })),
)