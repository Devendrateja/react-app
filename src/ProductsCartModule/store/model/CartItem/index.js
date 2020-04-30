import { observable,action } from "mobx"


class CartItemModel {
    @observable cartId
    @observable productId
    @observable quantity
    
    
    constructor(product){
        this.cartId = Math.random().toString()
        this.productId = product.productId
        this.quantity = 1
    }
    
    
    @action.bound
    incrementQuantity(){
        this.quantity += 1
    }
}



export default CartItemModel;