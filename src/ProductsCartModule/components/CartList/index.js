import React from "react"
import {observer} from "mobx-react"
import {observable} from "mobx"
import CartItem from "../CartItem"
import { CartProductsList , EmptyCart} from "./styledComponents"

@observer
class CartList extends React.Component{
    
    renderProductsList = () =>{
        const {cartProductList,onRemoveCartItem,getProductDetailsById} = this.props
        let arrayOfProducts = cartProductList.map(product => {
                            return <CartItem key={product.productId} product={product} onRemoveCartItem={onRemoveCartItem} getProductDetailsById={getProductDetailsById}/>
                        })
        return arrayOfProducts
    }
    
    
    
    render(){
        
        const { cartProductList, onRemoveCartItem, getProductDetailsById } = this.props
        console.log('cart List',cartProductList)
        if(cartProductList.length){
            return (
                <CartProductsList className="overflow-y-auto">
                    {
                       this.renderProductsList()
                    }
                </CartProductsList>
                )
        }
        else{
            return (
                <EmptyCart>Add Products to you cart</EmptyCart>
                )
        }
    }
}

export default CartList


//  cartProductList.map(product => {
//                             return <CartItem key={product.productId} product={product} onRemoveCartItem={onRemoveCartItem} getProductDetailsById={getProductDetailsById}/>
//                         })