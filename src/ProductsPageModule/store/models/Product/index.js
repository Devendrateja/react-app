import {observable, action} from "mobx" 

class Product {
    
    productsId 
    @observable availableSizes
    @observable currencyFormat 
    @observable currencyId
    @observable description
    @observable installmentsCount
    @observable isFreeShipping
    @observable price
    @observable printStyle
    @observable title
    @observable imageURL
    
    
    constructor(product){
        this.productId = product.id
        this.availableSizes = product.availableSizes
        this.currencyFormat = product.currencyFormat
        this.currencyId =  product.currencyId
        this.description = product.description
        this.installmentsCount = product.installments
        this.isFreeShipping = product.isFreeShipping
        this.price = product.price
        this.printStyle = product.style
        this.title = product.title
        this.imageURL = product.image
    }

}



export default Product