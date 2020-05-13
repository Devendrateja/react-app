/*global jest*/
/*global expect*/

import React from "react"
import { render , fireEvent} from "@testing-library/react"
import {API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED} from "@ib/api-constants"
import ProductService from "../../../ProductsPageModule/services/ProductService/index.api.js"
import ProductStore from "../../../ProductsPageModule/store/ProductStore/index"
//import getProductResponse from "../../fixtures/getProductResponse.json"


import CartStore from "."



describe("cartStore test cases",()=>{
    let productStore;
    let productAPI;
    let cartStore;
    
    beforeEach(() => {
        productAPI = new ProductService()
        productStore = new ProductStore(productAPI)
        cartStore = new CartStore(productStore)
    })
    
    it("should Test initialisation of cart store", () => {
        
        expect(cartStore.cartProductList).toEqual([])
        
    })
    
    it("should add a product to the cart and also find that the quantity is increasing if the product is added multiple times", () =>{
        let product = {
            productId : 1
        }
        
        cartStore.onClickAddToCart(product)
        
        let expectedProduct = {
            productId : 1,
            quantity : 1
        }
        
        
        
        expect(cartStore.cartProductList[0].productId).toBe(1)
        expect(cartStore.cartProductList[0].quantity).toBe(1)
        
        cartStore.onClickAddToCart(product)
        cartStore.onClickAddToCart(product)
        
        expect(cartStore.cartProductList[0].quantity).toBe(3)
    })
    
    
    
    it("should delete an item from cart when onRemoveCartItem called", () =>{
        cartStore.cartProductList = [{
                                        productId : 1,
                                        quantity : 1
                                    },{
                                        productId : 2,
                                        quantity : 2
                                    },{
                                        productId : 3,
                                        quantity : 3
                                    },{
                                        productId : 4,
                                        quantity : 4
                                    }];
                                    
        let product = {
                        productId : 3,
                        quantity : 3
                        }
        
        cartStore.onRemoveCartItem(product)
        
        let onRemoveUpdatedCartProductList = [{
                                        productId : 1,
                                        quantity : 1
                                    },{
                                        productId : 2,
                                        quantity : 2
                                    },{
                                        productId : 4,
                                        quantity : 4
                                    }]
        
        expect(cartStore.cartProductList).toEqual(onRemoveUpdatedCartProductList)
        
    })
    
    it("should clear all the cart items when clear cart is called", () => {
        
        const mockWindowAlert = jest.fn();
        window.alert = mockWindowAlert
        
        cartStore.clearCart()
        
        expect(mockWindowAlert).toBeCalled()
        expect(cartStore.cartProductList).toEqual([])
    })
    
    it("should get product details by using an id which is passed as an arg for getProductDetailsById", () =>{
        
        productStore.productList = [{
                                        id : 1,
                                        quantity : 1
                                    },{
                                        id : 2,
                                        quantity : 2
                                    },{
                                        id : 3,
                                        quantity : 3
                                    },{
                                        id : 4,
                                        quantity : 4
                                    }]
                                    
        let product = cartStore.getProductDetailsById(1)
        let expectedProduct = {
                                id : 1,
                                quantity : 1
                            }
        
        
        expect(product).toEqual(expectedProduct)
    })
    
    it("should compute total amount of products in the cart",()=>{
        productStore.productList = [{
                                        id : 1,
                                        price : 10
                                    },{
                                        id : 2,
                                        price : 20
                                    },{
                                        id : 3,
                                        price : 30
                                    }]
                                    
        cartStore.cartProductList = [{
                                        productId : 1,
                                        price : 10,
                                        quantity : 1
                                    },{
                                        productId : 2,
                                        price : 20,
                                        quantity : 2
                                    },{
                                        productId: 3,
                                        price : 30,
                                        quantity : 2
                                    }]
        
        expect(cartStore.totalCartAmount).toBe("110.00")
    })
    
    it("should get no.of products in the cart", () => {
        cartStore.cartProductList = [{
                                        productId : 1,
                                        price : 10,
                                        quantity : 1
                                    },{
                                        productId : 2,
                                        price : 20,
                                        quantity : 2
                                    },{
                                        productId: 3,
                                        price : 30,
                                        quantity : 2
                                    }]
        expect(cartStore.noOfProductsInCart).toBe(5)
    })
    
})
