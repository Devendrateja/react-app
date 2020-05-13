/*global jest*/
/*global expect*/

import React from "react"
import { render , fireEvent} from "@testing-library/react"
import {API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED} from "@ib/api-constants"
import ProductService from "../../services/ProductService/index.api.js"
import ProductStore from "."
import getProductResponse from "../../fixtures/getProductResponse.json"
import ProductSort from "../../components/ProductSort"


describe("productstore test cases", () => {
    let productAPI;
    let productStore;
    
    beforeEach(() => {
        productAPI = new ProductService()
        productStore = new ProductStore(productAPI)
    })
    
    
    it("should test initialisation of productStore",()=>{
        productStore.init()
        expect(productStore.getProductListAPIStatus).toBe(API_INITIAL)
        expect(productStore.getProductListAPIError).toBe(null)
        expect(productStore.productList.length).toBe(0)
        expect(productStore.sizeFilter.length).toBe(0)
        expect(productStore.sortBy).toBe("select")
    })
    
    
    it("should test E-CommerceProductsPage Loading state", () => {
        
        const mockLoadingPromise = new Promise(function(resolve, reject){})
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockLoadingPromise);
        
        productAPI.getProductsAPI = mockProductAPI
        
        productStore.getProductList();
        expect(productStore.getProductListAPIStatus).toBe(API_FETCHING)
    })
    
    it("should test E-CommerceProductsPage success State",async () =>{
       const mockSuccessPromise = new Promise(function(resolve, reject){
           resolve(getProductResponse);
       })
       
       const mockProductAPI = jest.fn()
       mockProductAPI.mockReturnValue(mockSuccessPromise);
       productAPI.getProductsAPI = mockProductAPI;
       
       await productStore.getProductList();
       
       expect(productStore.getProductListAPIStatus).toBe(API_SUCCESS);
       expect(productStore.productList.length).toBe(16)
    })
    
    
    it("should test E-CommerceProductsPage failed state", async () => {
        const mockFailedPromise = new Promise(function(resolve,reject){
            reject(new Error("error"));
        })
        
        const mockProductAPI = jest.fn();
        mockProductAPI.mockReturnValue(mockFailedPromise);
        productAPI.getProductsAPI = mockProductAPI;
        
        await productStore.getProductList()
        expect(productStore.getProductListAPIStatus).toBe(API_FAILED)
        expect(productStore.getProductListAPIError).toBe('error')
    })
    
    
    it("should test the seleced sortingType should be same as input for onChangeSortBy()",()=> {
        productStore.onChangeSortBy("ASCENDING")
        expect(productStore.sortBy).toBe("ASCENDING")
        
        productStore.onChangeSortBy("DESCENDING")
        expect(productStore.sortBy).toBe("DESCENDING")
        
    })
    
    
    it("should test the sizeFilterList .if a size is selected it shoud be in sizeFilterArray , if it is deselected it should be not in sizeFilterArray",()=>{
        productStore.onSelectSize("L")
        productStore.onSelectSize("XL")
        productStore.onSelectSize("XXL")
        expect(productStore.sizeFilter).toEqual(["L","XL","XXL"])
        
        productStore.onSelectSize("XL")
        expect(productStore.sizeFilter).toEqual(["L","XXL"])
    })
    
    
    it("should test whether the model is creating a new mde or not", () => {
        let product = {"availableSizes":["S","XS"],"currencyFormat":"â‚¹","currencyId":"USD","description":"4 MSL","id":12,"installments":9,"isFreeShipping":true,"price":845.24,"sku":12064273040195392,"style":"Black with custom print","title":"Cat Tee Black T-Shirt","image":"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"}
        let newProduct = productStore.createProduct(product)
        
        expect(newProduct).toEqual({
            productId:12,
            availableSizes:["S","XS"],
            currencyFormat:"â‚¹",
            currencyId:"USD",
            description:"4 MSL",
            installmentsCount:9,
            isFreeShipping:true,
            price:845.24,
            printStyle:"Black with custom print",
            title:"Cat Tee Black T-Shirt",
            imageURL:"https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
        })
        
    })
    
    
    
    it("should compute and filter the products based on the sizeFilters and sortingTypes",() => {
        productStore.productList=[{availableSizes:["S","M"],
                                    price:100 },
                                    {   availableSizes:["S","L"],
                                        price:200 },
                                    {   availableSizes:["L","XL"],
                                        price:300 },
                                    {   availableSizes:["XL","M"],
                                        price:400 },
                                    {   availableSizes:["XXL","S"],
                                        price:500 }
                                    ]
        
        productStore.onSelectSize("S")
        productStore.onChangeSortBy("ASCENDING")
        
        
        
        expect(productStore.products).toEqual([{availableSizes:["S","M"],
                                                price:100   },
                                            {   availableSizes:["S","L"],
                                                price:200   },
                                            {   availableSizes:["XXL","S"],
                                                price:500   }])
        
        
        productStore.onChangeSortBy("DESCENDING")
        
        expect(productStore.products).toEqual([{availableSizes:["XXL","S"],
                                                price:500   },
                                            {   availableSizes:["S","L"],
                                                price:200   },
                                            {   availableSizes:["S","M"],
                                                price:100   },
                                            ])
        
        
        
                                                
        productStore.onSelectSize("S")                                        
        productStore.onChangeSortBy("DEFAULT")
        
        expect(productStore.products).toEqual([{availableSizes:["S","M"],
                                    price:100 },
                                    {   availableSizes:["S","L"],
                                        price:200 },
                                    {   availableSizes:["L","XL"],
                                        price:300 },
                                    {   availableSizes:["XL","M"],
                                        price:400 },
                                    {   availableSizes:["XXL","S"],
                                        price:500 }
                                    ])
    })
})