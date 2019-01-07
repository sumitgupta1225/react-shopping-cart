import * as actionType from '../actions/type.js'

//cart methods
export const cart = (state=[],action) => {
    switch(action.type){
        case actionType.ADD_PRODUCT_TO_CART:
            return [...state,action.payload];

        case actionType.REMOVE_PRODUCT_FROM_CART:
            console.log('remove product called')
            return state.filter(item => item.id !== action.payload.id)

            // let updatedproductsInCart = state
            // console.log(updatedproductsInCart)
            // for(var i = 0; i < updatedproductsInCart.length; i++){
            //     console.log('loop '+i) 
            //     if (updatedproductsInCart[i].id === action.payload.id) {
            //         console.log('got')     
            //         updatedproductsInCart.splice(i, 1); 
            //     }
            // } 
            // return updatedproductsInCart

         case actionType.INCREMENT_PRODUCT_QUANTITY:
            let increProducts = state.map(item=>{                
                if(item.id===action.payload.id)
                    item.quantity = item.quantity+1
                return Object.assign({},item)
                //return Object.assign({}, item, {quantity: item.quantity+1})
            })
            return increProducts

         case actionType.DECREMENT_PRODUCT_QUANTITY:
            let decreProducts = state.map(item=>{                
                if(item.id === action.payload.id && item.quantity>1)
                    item.quantity = item.quantity-1 
                return Object.assign({},item)
            })
            return decreProducts

        default:
            return state        
    }

}