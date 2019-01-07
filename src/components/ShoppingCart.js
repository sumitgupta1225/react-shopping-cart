import React, {Component, Fragment}  from 'react'
import ProdcutList from './ProductList'
import Cart from './Cart'
import {connect} from 'react-redux'
import {getProducts,addProductToCart,removeProductFromCart,incrementProductQuantity,decrementProductQuantity} from './../actions/product'

class ShoppingCart extends Component{
    constructor(){
        super()

        this.addProductToCartHandler = this.addProductToCartHandler.bind(this)
        this.isProductInCart = this.isProductInCart.bind(this)
        this.removeProductFromCartHandler = this.removeProductFromCartHandler.bind(this)
        this.getProductsInCart = this.getProductsInCart.bind(this)
        this.incrementProductQuantityHandler = this.incrementProductQuantityHandler.bind(this)
        this.decrementProductQuantityHandler = this.decrementProductQuantityHandler.bind(this)
        /*this.addToCartClick = this.addToCartClick.bind(this)
        this.removeFromCartClick = this.removeFromCartClick.bind(this)  
        this.increseProductQuantityClick = this.increseProductQuantityClick.bind(this)
        this.decreseProductQuantityClick = this.decreseProductQuantityClick.bind(this)*/ 
    }
    componentDidMount(){
        const {dispatch} = this.props
        dispatch(getProducts())
    }

    addProductToCartHandler(id){
        const {dispatch} = this.props
        dispatch(addProductToCart({id:id,quantity:1}))
    }
    isProductInCart(productId){
        let flag=false        
        if(this.props.productsInCart!==null && this.props.productsInCart.length!==0)        
        {
            if(this.props.productsInCart.find(x=>x.id===productId)!=null)
                flag=true
        }
        return flag
    }
    removeProductFromCartHandler(id){
        const {dispatch} = this.props
        dispatch(removeProductFromCart({id}))
    }
    incrementProductQuantityHandler(id){
        const {dispatch} = this.props
        dispatch(incrementProductQuantity({id:id}))
    }
    decrementProductQuantityHandler(id){
        const {dispatch} = this.props
        dispatch(decrementProductQuantity({id:id}))
    }    
    getProductsInCart(){
        console.log('getProductsInCart called')
        let products = this.props.productsInCart.map(item => {
            let p = this.props.products.data.find(cartItem => cartItem.id === item.id)
            return Object.assign({},p,{quantity:item.quantity})
        })       
        return products
    }
    render(){
        console.log(this.props.productsInCart)
        return(
        <Fragment>
            <ProdcutList addProductToCartHandler={this.addProductToCartHandler} products={this.props.products} isAdded={this.isProductInCart}  api={this.props.api}/>
            {(this.props.productsInCart.length>0) ?<Cart productsInCart={this.getProductsInCart()} 
            removeProductFromCartHandler={this.removeProductFromCartHandler} 
            incrementProductQuantityHandler={this.incrementProductQuantityHandler} 
            decrementProductQuantityHandler={this.decrementProductQuantityHandler}/>:null}
        </Fragment>)   
    }
}

const  mapStateToProps = state => ({
api: state.api,    
products : state.products,
productsInCart: state.cart
})

export default connect(mapStateToProps)(ShoppingCart)