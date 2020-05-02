import tw from "tailwind.macro"
import styled from "@emotion/styled"


const CartProductsList = styled.div`${tw` w-full`} flex-grow:1;`

const EmptyCart = styled.div`${tw`flex flex-col justify-center w-full  items-center`} flex-grow:1;`

export {CartProductsList, EmptyCart};



// const CartProductsList = styled.div`${tw`flex flex-col justify-start bg-blue-500 w-full `}
//         `

// const EmptyCart = styled.div`${tw`flex  flex-col justify-center   items-center flex-grow`}`
