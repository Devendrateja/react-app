import React from "react"
import {observer} from "mobx-react"
import {observable} from "mobx"
import CartItem from "../CartItem"
import { CartProductsList , EmptyCart} from "./styledComponents"

@observer
class CartList extends React.Component{

    render(){
        
        const { cartProductList, onRemoveCartItem, getProductDetailsById , renderProductsList } = this.props
        console.log('cart List',cartProductList)
        if(cartProductList.length){
            return (
                <CartProductsList className="overflow-y-auto">
                    {
                       renderProductsList()
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