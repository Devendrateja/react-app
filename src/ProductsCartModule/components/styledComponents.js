import tw from "tailwind.macro"
import styled from "@emotion/styled"



const CartBody = styled.div`${tw`flex flex-row  w-6/12 h-full z-10`}
                    position:fixed;
                    top:0px;
                    right:0px;
                    `



const  ProductCartContainer = styled.div `
        ${tw`
        flex flex-col justify-start w-full  items-center text-white bg-gray-900`}
    
        `
        
        
const NoOfProducts = styled.div`${tw`absolute `}
                        margin-left:3px;
                        padding-bottom:2px;
                        font-size:10px;`
 
 
const ShowCart = styled.div`${tw`flex justify-center items-center absolute bg-gray-900 text-white text-4xl border p-2`}
                position:fixed;
                top:0px;
                right:0px;`





const Container = styled.div`${tw`flex absolute`}`


const HideCart = styled.button`${tw`flex justify-center items-center text-white text-2xl bg-gray-900 `} width:50px; height:60px;`

const CartHead = styled.div`${tw`flex justify-center items-center relative text-4xl  m-1 p-2`} `



const CheckoutDetails = styled.div`${tw` w-full h-24  p-4 bg-gray-900`}
                        
                        `


const List = styled.div`${tw`flex flex-col w-full`} height:80%;`



const CartTop = styled.div`${tw`flex flex-row w-full justify-center items-center p-8`}height:50px; `


    
export {ProductCartContainer,List,ShowCart,CartBody,HideCart,Container,NoOfProducts ,CartHead, CartTop, CheckoutDetails}





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


/*position:fixed;
                        bottom:0;
                        width:100%;*/