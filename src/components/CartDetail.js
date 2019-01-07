import React from 'react'
const CartDetail = ({product,removeProductFromCartHandler,incrementProductQuantityHandler,decrementProductQuantityHandler}) => (
    <div className="card mb-3" key={product.id}>
      <div className="card-body">
        <div className="row">
          <div className="col col-lg-7">
            <p className="text-info">{product.name}</p>
            <p className="text-secondary">
              {product.color}
              <br />
              Seller: {product.seller}
            </p>
            <p className="font-weight-bold">Rs. {product.price}</p>
          </div>
          <div className="col">
            <p>
              Delivered by {product.deliveryDate} | Rs. {product.deliveryCharges}
              <br />
              <span className="text-secondary">{product.replacementLabel}</span>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button type="button" onClick={()=>decrementProductQuantityHandler(product.id)}>-</button>
            <input type="text" className='text-center' style={{ width: '40px' }} value={product.quantity}/>
            <button type="button" onClick={()=>incrementProductQuantityHandler(product.id)}>+</button>
            <button type="button" className="btn btn-danger ml-4" onClick={()=>removeProductFromCartHandler(product.id)}>Remove Item</button>
          </div>
        </div>
      </div>
    </div>
)

export default CartDetail