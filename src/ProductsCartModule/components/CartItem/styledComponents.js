import tw from "tailwind.macro"
import styled from "@emotion/styled"



const CartImage = styled.img`
    ${tw``} width:50px; height:80px`

const CartProduct = styled.div`${tw`flex w-full border-t border-white p-2 my-4`}; `

const CartProductDetails = styled.div`${tw`h-full`} flex-grow:1; `

const CartProductDetailsAdditional = styled.div`${tw`flex flex-col justify-start items-end`}`

export { CartImage , CartProduct, CartProductDetails, CartProductDetailsAdditional}







// const CartImage = styled.img`
//     ${tw`
      
//     `}
//     width:50px;
// `

// const CartProduct = styled.div`${tw`flex flex-row justify-start items-start relative border-t-2 p-2 w-full m-4`} height:100px;`

// const CartProductDetails = styled.div`${tw`flex flex-col justify-around items-start px-2  `} width:65%; `

// const CartProductDetailsAdditional = styled.div`${tw`flex flex-col px-1 items-end `} width:20%;`
