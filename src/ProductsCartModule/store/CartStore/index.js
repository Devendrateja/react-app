import { observable,action,computed } from "mobx"

import CartItemModel from "../model/CartItem"



class CartStore {
    @observable cartProductList
    productStore
    
    
    constructor(store){
        this.productStore =  store
        this.cartProductList=[]
    }
    
    
    @action.bound
    onClickAddToCart(product){
        const cartItem = new CartItemModel(product)
        
        const dup = this.cartProductList.find(eachProduct => {
            return eachProduct.productId === product.productId
        })
        if (dup === -1 || dup === undefined){
            this.cartProductList.push(cartItem)
        }
        else{
            dup.incrementQuantity()
        }
    }
    
    
    @action.bound
    onRemoveCartItem(product){
        
        const updatedCartAfterRemoved = this.cartProductList.filter(eachProduct => {
            return eachProduct.productId !== product.productId
        })
        this.cartProductList = updatedCartAfterRemoved
    }
    

    @action.bound
    clearCart(){
        alert("thank you for shopping with us \n your product will be delivered in 3 days to the address mentioned in your profile.")
        this.cartProductList = []
    }
    
    
    
    @action.bound
    getProductDetailsById(id){
        const { productList} = this.productStore
        
        const item =productList.find(product => {
            return product.id === id
        })
        
        return item 
    }
    
    
    @computed
    get totalCartAmount(){
         const { productList} = this.productStore
         
        let totalPrice = 0
          
        this.cartProductList.forEach(cartProduct => {
            let qty = 0;
            let price = 0;
            qty = cartProduct.quantity 
            
            productList.forEach(eachProduct =>{
                if(eachProduct.id === cartProduct.productId){
                    price = ( eachProduct.price * qty )
                }
            })
            totalPrice += price
        })
        return totalPrice.toFixed(2)
    }
    
    @computed
    get noOfProductsInCart(){
        
        let noOfProducts = 0;
        
        this.cartProductList.forEach(item => {
            noOfProducts += item.quantity
        })
        
        return noOfProducts
    }
}



export default CartStore;