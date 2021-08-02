import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from '../contants/ProductsConstants'

export const productListReducers = (state = {product: []}, action ) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST :
            return {
                loading : true,
                products : []
            }

        case PRODUCT_LIST_SUCCESS :
            return {
                loading: false,
                products: action.payload
            }

        case PRODUCT_LIST_FAIL :
            return {
                loading: false,
                products: action.payload
            }

        default :
            return state
    }
}