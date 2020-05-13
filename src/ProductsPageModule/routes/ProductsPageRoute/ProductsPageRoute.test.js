/*global jest*/
/*global expect*/

import React from "react"
import { render , fireEvent} from "@testing-library/react"
import {Router , Route ,withRouter} from "react-router-dom"
import { Provider } from "mobx-react"
import { createMemoryHistory } from "history"


import ProductService from "../../services/ProductService/index.api.js"
import ProductStore from "../../store/ProductStore"
import CartStore from "../../../ProductsCartModule/store/CartStore"
import getProductResponse from "../../fixtures/getProductResponse.json"


import ProductsPageRoute from "./ProductsPageRoute.jsx"




describe("productsPageRouter", () => {
    let productAPI;
    let productStore;
    
    
    beforeEach(()=>{
        productAPI = new ProductService()
        productStore = new ProductStore(productAPI)
    })
    
    afterEach(() =>{
        jest.resetAllMocks()
    })
    
    
    it("should signOut when on click signOut button",async () => {
        
        let response = getProductResponse
        
        productStore.productList = response
        
        let cartStore = new CartStore(productStore)
        
        
        
        const mockSuccessPromise = new Promise(function(resolve, reject){
           resolve(getProductResponse);
       })
       
       const mockProductAPI = jest.fn()
       mockProductAPI.mockReturnValue(mockSuccessPromise);
       productAPI.getProductsAPI = mockProductAPI;
       
       //await productStore.getProductList();
       
       
       const { getByRole, debug } = render(
            
       <Router history={ createMemoryHistory()}>
                <ProductsPageRoute productStore={productStore} cartStore={cartStore} history={ createMemoryHistory()}/>
            </Router>
            ) 
       
          
            await console.log("#########",  productStore.getProductListAPIStatus)
            
            debug();
    })
})