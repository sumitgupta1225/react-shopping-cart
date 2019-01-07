import React from 'react'
import CartCount from './CartCount'
import CartDetail from './CartDetail'
import PriceDetail from './PriceDetail'

const Cart = ({productsInCart,removeProductFromCartHandler,incrementProductQuantityHandler,decrementProductQuantityHandler}) => {
    
    console.log(productsInCart);
    return(
    <div className="row">
            <div className="col col-lg-8">
                {productsInCart.length>0?<CartCount count={productsInCart.length} />:null}
                {productsInCart.map(product=>(
                    <CartDetail product={product} removeProductFromCartHandler={removeProductFromCartHandler}
                    incrementProductQuantityHandler={incrementProductQuantityHandler}
                    decrementProductQuantityHandler={decrementProductQuantityHandler}
                    />
                ))}                
             </div>
             {productsInCart.length>0?
             <PriceDetail count={productsInCart.length} 
                price={productsInCart.reduce((a,b)=>a+(b.price*b.quantity),0)}
                deliveryCharges={productsInCart.reduce((a,b)=>a+b.deliveryCharges,0)}
                totalAmount={productsInCart.reduce((a,b)=>a+((b.price*b.quantity)+b.deliveryCharges),0)} />
             :null}
        </div>
)}
export default Cart