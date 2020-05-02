


import React from "react"
import {observer,inject} from "mobx-react"
import { observable } from "mobx"
import {FiShoppingCart} from "react-icons/fi" 


import { ProductCartContainer, ShowCart , CartBody , HideCart , Container, NoOfProducts, CartHead, CheckoutDetails, List, CartTop} from "./styledComponents"
import CartList from "./CartList"
import SubTotal from "./SubTotal"
import CheckoutButton from "./CheckoutButton"


import tw from "tailwind.macro"
import styled from "@emotion/styled"




@observer
class ProductCart extends React.Component{
    @observable showProductCart = false
    
    
    displayCart = () => {
        this.showProductCart = !this.showProductCart
    }
    
    render(){
        const { products,cartProductList, onRemoveCartItem, getProductDetailsById,totalCartAmount, clearCart, noOfProductsInCart } = this.props
        console.log('products cart ', cartProductList)
        
        
        
        return (
        <div className="bg-green-900">
            <ShowCart data-testid='cart-open-button' onClick={this.displayCart}>
                    <FiShoppingCart/> 
                    <NoOfProducts>{noOfProductsInCart}</NoOfProducts>
            </ShowCart>
            {
             this.showProductCart ?
                    <CartBody>
                        <HideCart data-testid='cart-close-button' onClick={this.displayCart}>x</HideCart>
                        
                        <ProductCartContainer>
                            <CartTop>
                                    <CartHead data-testid='cart-open-button' onClick={this.displayCart}>
                                        <FiShoppingCart /> 
                                        <NoOfProducts>{noOfProductsInCart}</NoOfProducts>
                                    </CartHead>
                                    <div className="text-2xl">cart</div>
                            </CartTop>
                            
                            <CartList cartProductList={cartProductList} 
                                            getProductDetailsById={getProductDetailsById}
                                            onRemoveCartItem={onRemoveCartItem}
                                            cartProductList={cartProductList}
                            />
                            
                            <CheckoutDetails>
                                            <SubTotal totalCartAmount={totalCartAmount}/>
                                            <CheckoutButton clearCart={clearCart} noOfProductsInCart={noOfProductsInCart}/>
                            </CheckoutDetails>
                        
                        </ProductCartContainer>
                    </CartBody>
                    : null
            }
            

        </div>
            )
       
    }
}


export default ProductCart

                   
            
            // {
            //  this.showProductCart ?
            //     <ProductBody>
            //                 <HideCart data-testid='cart-close-button' onClick={this.displayCart}>x</HideCart>
            //                 <ProductCartContainer>
            //                         <CartHead>
            //                             <CartIcon>
            //                                 <FiShoppingCart/> 
            //                             </CartIcon>
            //                             <NoOfProducts>{noOfProductsInCart}</NoOfProducts>
            //                         </CartHead>
            //                         <List>
            //                             <CartList cartProductList={cartProductList} 
            //                                       getProductDetailsById={getProductDetailsById}
            //                                       onRemoveCartItem={onRemoveCartItem}
            //                                       cartProductList={cartProductList}
            //                             />
            //                         </List>
                                    
                                    // <CheckoutDetails>
                                    //     <SubTotal totalCartAmount={totalCartAmount}/>
                                    //     <CheckoutButton clearCart={clearCart} noOfProductsInCart={noOfProductsInCart}/>
                                    // </CheckoutDetails>
            //                 </ProductCartContainer>
            //     </ProductBody>  : null
            // }