import * as actionType from '../actions/type'

//Get Products
export const products = (state={data:null,error:null},action) => {
    switch(action.type){
        case actionType.GET_PRODUCTS_SUCCESS:
            return Object.assign({}, state, {
                data: action.payload,
                error: null
            })
        case actionType.GET_PRODUCTS_FAILURE:
            return Object.assign({}, state, {
                data: null,
                error: action.error
            })
        default:
            return state
    }
}