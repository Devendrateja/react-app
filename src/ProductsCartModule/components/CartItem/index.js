import React from "react"
import {observable} from "mobx"
import { observer } from "mobx-react"
import {CartImage, CartProduct,CartProductDetails, CartProductDetailsAdditional } from "./styledComponents"

@observer
class CartItem extends React.Component{
    
    
    render(){
        const { product, getProductDetailsById, onRemoveCartItem } = this.props
        const item = getProductDetailsById(product.productId)
        return (
            <CartProduct>
                <CartImage src={item.image} />
                <CartProductDetails>
                    <div>{item.title}</div>
                    <div>{item.style}</div>
                    <div>qty: {product.quantity}</div>
                </CartProductDetails>
            <CartProductDetailsAdditional>
                    <div data-testid='remove-cart-item' onClick={onRemoveCartItem}>X</div>
                    <div>{item.currencyFormat} {item.price}</div>
            </CartProductDetailsAdditional>
            </CartProduct>
            )
    }
}

export default CartItem;