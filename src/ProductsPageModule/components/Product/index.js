import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { observer } from "mobx-react"
import { ToastContainer, toast, Slide } from 'react-toastify';
import {BsCheckCircle} from "react-icons/bs"

import 'react-toastify/dist/ReactToastify.css';

import {ProductContainer, Img,
        AddToCartButton,ToastBox,
        ToastSuccessIcon,ToastSuccessMessage,
        FreeShippingTag, ProductDetails, Title, Hr
} from "./styledComponents"



toast.configure({
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 5000,
            draggable: true,
            transition:Slide,
            hideProgressBar:true,
            pauseOnHover:true,
            closeButton:false
})


@observer
class Product extends React.Component{

    toastMessage = () =>{
        return  <ToastBox>
                    <ToastSuccessIcon><BsCheckCircle/></ToastSuccessIcon>
                    <ToastSuccessMessage> Product is added to your cart!</ToastSuccessMessage>
                </ToastBox>
    }
    
    
    
    onClickAddToCartButton = () => {
        const { onClickAddToCart,product} = this.props
        toast.warn(this.toastMessage())
        onClickAddToCart(product);
        
    }
    
    
    render(){
        const {product, onClickAddToCart} = this.props
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
                    
                    
                    
                    {/*<ProductDetails>
                         <Hr/>
                         <div>{product.currencyFormat} {product.price}</div>
                         <div>or {product.installmentsCount} x {product.currencyFormat} {installmentPrice}</div>
                    </ProductDetails>*/}
                    
                    
                    <AddToCartButton onClick={this.onClickAddToCartButton}>Add to cart</AddToCartButton>
                     
            </ProductContainer>
            
            )
    }
}

export default Product




