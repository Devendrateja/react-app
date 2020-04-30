import React from "react"
import {observable} from "mobx"
import { observer } from "mobx-react"
import {CartImage, CartProduct,CartProductDetails, CartProductDetailsAdditional } from "./styledComponents"

@observer
class CartItem extends React.Component{
    
    onRemoveCartItem=()=> {
        const { onRemoveCartItem, product } = this.props
        onRemoveCartItem(product)
    }
    
    
    
    render(){
        const { product, getProductDetailsById } = this.props
        const item = getProductDetailsById(product.productId)
        //console.log('cart item' , product, item)
        return (
            <CartProduct>
                <CartImage src={item.image} />
                <CartProductDetails>
                    <div>{item.title}</div>
                    <div>{item.style}</div>
                    <div>qty: {product.quantity}</div>
                </CartProductDetails>
                <CartProductDetailsAdditional>
                    <div data-testid='remove-cart-item' onClick={this.onRemoveCartItem}>X</div>
                    <div>{item.currencyFormat} {item.price}</div>
                </CartProductDetailsAdditional>
            </CartProduct>
            )
    }
}

export default CartItem;