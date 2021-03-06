import {ActionTypes} from '../constants/actiontype'

export const setProducts = (products) =>{
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) =>{
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeselectedproducts = (product) =>{
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
        payload:product
    }
}

export const addtocart = (data) =>{
    return{
        type: ActionTypes.ADD_TO_CART,
        payload:data
    }

}