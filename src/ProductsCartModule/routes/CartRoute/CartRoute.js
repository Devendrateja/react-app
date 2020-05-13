import React from "react"
import ProductCart from "../../components"
import CartItem from "../../components/CartItem"


class CartRouter extends React.Component{
    
    
    
    onRemoveCartItem=(product)=> {
        const { onRemoveCartItem } = this.props
        onRemoveCartItem(product)
    }
    
    
    
    
    renderProductsList = () =>{
        const {cartProductList,onRemoveCartItem,getProductDetailsById} = this.props
        let arrayOfProducts = cartProductList.map(product => {
                            return <CartItem key={product.productId} product={product} onRemoveCartItem={()=>this.onRemoveCartItem(product)} getProductDetailsById={getProductDetailsById}/>
                        })
        return arrayOfProducts
    }
    
    
    
    clearCart = () => {
        const { clearCart } = this.props
        clearCart();
    }
    
    
    
    
    render(){
        const {cartProductList,products, onRemoveCartItem , getProductDetailsById,
            totalCartAmount, clearCart, noOfProductsInCart
        } = this.props
        return(
            <ProductCart cartProductList={cartProductList}
                        products={products}
                        onRemoveCartItem={onRemoveCartItem}
                        getProductDetailsById={getProductDetailsById}
                        totalCartAmount={totalCartAmount}
                        clearCart={this.clearCart}
                        noOfProductsInCart={noOfProductsInCart}
                        renderProductsList={this.renderProductsList}
                    />
            )
        
    }
}




export default CartRouter;