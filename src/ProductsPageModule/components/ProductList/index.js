import tw from "tailwind.macro"
import React from "react"
import {observable, computed} from "mobx";
import {observer, inject} from "mobx-react";
import Product from "../Product/index"



@observer
class ProductList extends React.Component{
   

   
    render(){
        
        const {products,createProduct, onClickAddToCart, onClickAddToCartButton} = this.props
        
        return (
            <div className="flex flex-row flex-wrap">
            {
                products.length !==0 && 
                    products.map((eachProduct) => {
                    const newProduct = createProduct(eachProduct)
                      return <Product key={eachProduct.id} product={newProduct} onClickAddToCartButton={onClickAddToCartButton}/>
                    })
            }
            </div>
            )
    }
    
    
}


export default ProductList;