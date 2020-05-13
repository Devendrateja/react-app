import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { observer } from "mobx-react"

import {ProductContainer, Img, AddToCartButton, 
        FreeShippingTag, ProductDetails, Title, Hr
    } from "./styledComponents"


@observer
class Product extends React.Component{

    
    render(){
        const {product, onClickAddToCartButton} = this.props
        console.log('products',product)
        const installmentPrice = (Number(product.price)/Number(product.installmentsCount)).toFixed(2)

        return (
            <ProductContainer>
                    <div className=" flex flex-row  justify-end  text-white   text-xs ">
                    {
                        product.isFreeShipping && <FreeShippingTag>free shipping</FreeShippingTag>
                    }
                        
                    </div>
                    <Img src={product.imageURL} alt={product.style} />
                    <Title><span>{product.title}</span></Title>
                    
                    
                    <div className="flex flex-col text-sm text-center flex-grow justify-around items-center">
                         <Hr/>
                         <div>{product.currencyFormat} {product.price}</div>
                         <div>or {product.installmentsCount} x {product.currencyFormat} {installmentPrice}</div>
                    </div>
                    
                    
                    <AddToCartButton onClick={()=>onClickAddToCartButton(product)}>Add to cart</AddToCartButton>
                     
            </ProductContainer>
            
            )
    }
}

export default Product




