import {combineReducers} from 'redux'
import {products} from './products'
import api from './api'
import {cart} from './cart'
const reducers = combineReducers({
    api,
    cart,
    products
})

export default reducers