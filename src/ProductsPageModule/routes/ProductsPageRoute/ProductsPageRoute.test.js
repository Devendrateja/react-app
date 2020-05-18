/*global jest*/
/*global expect*/

import React from "react"
import { render, waitFor , fireEvent} from "@testing-library/react"
import {Router , Route ,withRouter} from "react-router-dom"
import { Provider } from "mobx-react"
import { createMemoryHistory } from "history"
import {API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED} from "@ib/api-constants"

import ProductService from "../../services/ProductService/index.api.js"
import ProductStore from "../../store/ProductStore"
import CartStore from "../../../ProductsCartModule/store/CartStore"
import getProductResponse from "../../fixtures/getProductResponse.json"


import ProductsPageRoute from "./ProductsPageRoute.jsx"




describe("productsPageRouter", () => {
    let productAPI;
    let productStore;
    let cartStore;
    
    beforeEach(()=>{
        productAPI = new ProductService()
        productStore = new ProductStore(productAPI)
        cartStore = new CartStore(productStore)
    })
    
    afterEach(() =>{
        jest.resetAllMocks()
    })
    
    
    it("should signOut when on click signOut button",async () => {
        
        const mockSuccessPromise = new Promise(function(resolve, reject){
           resolve(getProductResponse);
       })
       
       const mockProductAPI = jest.fn()
       mockProductAPI.mockReturnValue(mockSuccessPromise);
       productAPI.getProductsAPI = mockProductAPI;
      await productStore.getProductList();
      console.log(productStore.getProductListAPIStatus);
      const { getByRole, debug } = render(
        <Router history={ createMemoryHistory()}>
                <ProductsPageRoute productStore={productStore} cartStore={cartStore} history={ createMemoryHistory()}/>
        </Router>
        ) 
       
    
      
       
        console.log(productStore.getProductListAPIStatus);
            
        await waitFor(()=>debug())
    })
})