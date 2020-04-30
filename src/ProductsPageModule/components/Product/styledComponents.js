import tw from "tailwind.macro"
import styled from "@emotion/styled"



const ProductContainer = styled.div`
    ${tw`
        border relative  flex flex-col justify-start  m-4 w-48 text-base
    `}
        height:400px;`
        
        
        
const Img = styled.img` height:250px; width:80%;`
        
        
const AddToCartButton = styled.button`${tw`text-white p-2 border border-solid border-black bg-black rounded`}`


const ToastBox = styled.div`${tw`flex flex-row justify-center items-center`}`


const ToastSuccessIcon = styled.div`${tw`text-green-600 `}`


const ToastSuccessMessage = styled.div`${tw`text-white px-2`}`


const FreeShippingTag = styled.div`${tw` bg-black absolute  p-1`}`


const ProductDetails = styled.div`${tw`flex flex-col text-sm text-center flex-grow justify-around items-center`}`


const Title = styled.div`${tw`flex flex-col text-center text-sm p-1 flex-grow font-medium`} margin-top:1px; height:12%;`


const Hr = styled.hr`{${tw`w-4 border-orange-600 border`}}`




export {ProductContainer, Img, AddToCartButton, 
        ToastBox, ToastSuccessIcon,ToastSuccessMessage,
        FreeShippingTag, ProductDetails, Title, Hr
};