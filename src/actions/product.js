import axios from 'axios'
import {apiRequest} from './api'
import * as actionType from './type'

const endpoint = 'https://5c20c017f3e8d200133b6688.mockapi.io/api/v1'

const errorMessage = error => {
  let message = 'Error in request!'
  if (error.response) {
    const data = error.response.data
    message = Object.keys(data).length ? (data.message || data.error.message) : message
  } else if (error.message) {
    message = error.message
  }
  return message
}

/*
Get Products
action and action creator
*/

const getProductsSuccess = payload => {
    return({
    type: actionType.GET_PRODUCTS_SUCCESS,
    payload
    })
}

const getProductsFalure = error => ({
    type: actionType.GET_PRODUCTS_FAILURE,
    error
})

export const getProducts = () => dispatch => {
    dispatch(apiRequest())
    return axios.get(`${endpoint}/products`)
        .then(response => dispatch(getProductsSuccess(response.data)))
        .catch(error => dispatch(getProductsFalure(errorMessage(error))) )
}
/*function getProducts () {
  return function (dispatch) {
    dispatch(apiRequest())
    return axios()
  }
}*/

/*
Add/Remove Product from Cart
*/

export const addProductToCart = payload => {
    return({
      type: actionType.ADD_PRODUCT_TO_CART,
      payload
    })
}

export const removeProductFromCart = payload => {
  return({
    type: actionType.REMOVE_PRODUCT_FROM_CART,
    payload
  })
}

/*
Increment/Decrement product
*/
export const incrementProductQuantity = payload => {
  return({
    type: actionType.INCREMENT_PRODUCT_QUANTITY,
    payload
  })
}

export const decrementProductQuantity = payload => {
  return({
    type: actionType.DECREMENT_PRODUCT_QUANTITY,
    payload
  })
}