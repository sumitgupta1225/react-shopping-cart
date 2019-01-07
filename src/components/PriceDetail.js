import React from 'react'

const PriceDetail = ({count,price,deliveryCharges,totalAmount}) => (
    <div className="col">
        <div className="card bg-warning">
        <div className="card-body">
            <h5 className="card-title">Price Detail</h5>
            <p className="card-text">
            <div className="row">
                <div className="col">Price ({count} Item)</div>
                <div className="col">{price}</div>
            </div>
            <div className="row">
                <div className="col">Delivery Charges</div>
                <div className="col">{deliveryCharges===0?'Free':deliveryCharges}</div>
            </div>
            <div className="row">
                <div className="col font-weight-bold">Amount Payable</div>
                <div className="col font-weight-bold">Rs. {totalAmount}</div>
            </div>
            </p>
        </div>
        </div>
    </div>
)
export default PriceDetail