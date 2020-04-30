import tw from "tailwind.macro"
import styled from "@emotion/styled"



const  ProductCartContainer = styled.div `
        ${tw`
        
        `}   
    `
 
const NoOfProducts = styled.div`${tw`absolute mx-1`}
                        font-size:10px;`
 
 
const ShowCart = styled.div`${tw`flex justify-center items-center absolute text-4xl border p-2`}
                position:fixed;
                top:0px;
                right:0px;`


const CartIcon = styled.div`${tw ``}`


const ProductBody = styled.div`${tw``}`

const Container = styled.div`${tw`flex absolute`}`


const HideCart = styled.div`${tw``}`

const CartHead = styled.div`${tw``}`


const CheckoutDetails = styled.div`${tw` `}`



const List = styled.div`${tw``}`


    
export {ProductCartContainer,List,ShowCart,ProductBody,HideCart,Container,NoOfProducts, CartIcon, CartHead, CheckoutDetails}





// const  ProductCartContainer = styled.div `
//         ${tw`
//             flex flex-col justify-start items-center  w-full bg-gray-900 h-screen bg-red-800 py-4 text-white relative
//         `}   
//     `
 
// const NoOfProducts = styled.div`${tw`mx-1 absolute text-white text-orange-600 text-xs`} margin-top:-2px;`
 
 
// const CartIcon = styled.div`${tw`text-5xl text-white`}`


// const ShowCart = styled.div`
        
//         ${tw `
//                 flex justify-center items-center p-2 absolute fixed  bg-gray-900
//         `}
// `
// const ProductBody = styled.div`

//         ${tw`
//                 flex  fixed justify-end items-start h-full  w-2/4
//         `}
// `

// const Container = styled.div`
//         ${tw`
//                 flex fixed text-white  justify-end items-start h-screen  z-50 
//         `}
// `


// const HideCart = styled.div`
//         ${tw`flex flex-col p-4 border bg-gray-900 -m-1`}
// `

// const CartHead = styled.div`${tw` flex flex-row justify-center items-center`}
//                 position:fixed;
//                 top:0;
//                 margin-bottom:10px`


// const CheckoutDetails = styled.div`${tw` flex flex-col bottom-0 bg-yellow-400 fixed`}
//                         position:fixed;
//                         bottom:0;
//                         height:100px;`



// const List = styled.div`${tw`flex flex-col overflow-y-auto w-full`} height:65%`
