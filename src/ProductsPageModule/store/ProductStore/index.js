import {observable, action, computed} from "mobx"
import {API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED} from "@ib/api-constants"
import {bindPromiseWithOnSuccess} from "@ib/mobx-promise"
import {create } from "apisauce"
import Product from "../models/Product/index"



class ProductStore {
    @observable productList
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable sizeFilter
    @observable sortBy
    productsAPIService
    
    constructor(productsAPIService){
        this.productsAPIService = productsAPIService
        this.init()
    }
    
    
    
    @action.bound
    init(){
        this.getProductListAPIStatus = API_INITIAL
        this.getProductListAPIError = null
        this.productList  = []
        this.sizeFilter =  []
        this.sortBy = "select"
    }
    
    
    
    @action.bound
    getProductList(){
        const promise = this.productsAPIService.getProductsAPI()
        return bindPromiseWithOnSuccess(promise)
        .to(this.setProductListAPIStatus,this.setProductListAPIResponse)
        .catch(this.setProductListAPIError)
    }
    
    
    @action.bound
    setProductListAPIStatus(status){
        this.getProductListAPIStatus = status
    }
    
    
    
    @action.bound
    setProductListAPIResponse(response){
        console.log('response')
        this.productList = response
    }
    
    
    
    @action.bound
    setProductListAPIError(error){
        this.getProductListAPIError = error
    }
    
    
    
    @action.bound
    createProduct(product){
        const newProduct = new Product(product)
        return newProduct
    }
    
    
    
    @action.bound
    onChangeSortBy(sortingType){
        this.sortBy = sortingType
    }
    
    
    
    @action.bound
    onSelectSize(size){
        const sizeFilter = this.sizeFilter
        let count = 0
        
        sizeFilter.forEach(eachSize => {
            if(size === eachSize){
                count += 1
            }
        })
        
        if(count===0){
            sizeFilter.push(size)
        }
        else{
            const index = sizeFilter.indexOf(size)
           
            sizeFilter.splice(index,1)
        }
        
        this.sizeFilter = sizeFilter
    }
    
    @computed 
    get products(){
        const productList = this.productList
        const sizeFilter = this.sizeFilter
        const sortBy = this.sortBy
        
        
        let sortedProducts = []
        let filteredProducts = []
        
        
        switch(sortBy){
            
            case("ASCENDING"):
                sortedProducts = productList.sort(function(product1, product2){return product1.price - product2.price})
                break;
            
            
            case("DESCENDING"):
                sortedProducts = productList.sort(function(product1, product2){return product2.price - product1.price})
             break;
                
            default:
                sortedProducts = productList
     }
     
     
     if(sizeFilter.length>=1){
        
        sizeFilter.forEach(eachSize => {
            sortedProducts.forEach(eachProduct => {
                const productSizes = eachProduct.availableSizes
                if(productSizes.indexOf(eachSize) !== -1){
                    if(filteredProducts.indexOf(eachProduct) === -1){
                        filteredProducts.push(eachProduct)
                    }
                }
            })
        })
     }
     else{
         filteredProducts = sortedProducts
     }
    
     return filteredProducts
    }
    
    
}


export default ProductStore;