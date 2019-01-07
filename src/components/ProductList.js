import React,{Component,Fragment} from 'react'
import Product from './Product'

class ProductList extends Component{
      renderProducts() {
        const {products} = this.props        
        if(products.error){
            return(<h3>Error in product list</h3>)
        }
        if(!products.data){
            return(<h3>No Product!</h3>)
        }
        return(
            <Fragment>
            <h4 className="mt-3 mb-3">Products</h4>
                <div className="row mb-3">
                    {products.data.map(product=>(
                    <Product product={product} key={product.id} isAdded={this.props.isAdded} addProductToCartHandler={this.props.addProductToCartHandler}/>
                    ))}
                </div>    
            </Fragment>   
        )
    }

    render(){
        const {api} = this.props
        //console.log(this.props)
        //console.log(products)
        return(
             <Fragment>
                 <div id='products' className={api.isLoading ? 'loading':''}>
                    {(!api.isLoading) && this.renderProducts()}    
                 </div>
             </Fragment>
        )
    } 
}

export default ProductList