import React from 'react'
const Product = ({product,isAdded,addProductToCartHandler}) => (
    <div className="col">
    <div className="card bg-light">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">
          <ul>
            <li>Color: {product.color}</li>
            <li>Seller: {product.seller}</li>
            <li className="font-weight-bold">{product.price}</li>
            <li>Delivery Charges: Rs. {product.deliveryCharges}</li>
            <li>Delivered by {product.deliveryDate}</li>
            <li>{product.replacementLabel}</li>
          </ul>
        </p>
        <button type="button" className={isAdded(product.id)?'btn btn-success':'btn btn-primary'} onClick={()=>addProductToCartHandler(product.id)}>{isAdded(product.id)?'Added':'Add to cart'}</button>
      </div>
    </div>
  </div>
)

export default Product