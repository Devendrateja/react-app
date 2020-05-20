import tw from "tailwind.macro"
import styled from "@emotion/styled"

export const EditorContainer = styled.div`${tw`flex flex-col justify-center items-center w-screen bg-gray-300 p-8`}`
export const EditorContainerHeading = styled.div`${tw`text-xl font-semibold`}`
export const Input = styled.input`${tw``}width:300px;`
export const EditButton = styled.button`${tw`m-4 px-2 bg-blue-500 rounded text-white`}`
export const Span = styled.span`${tw``}width:200px; `



export const CollapseExpandContainer = styled.div`${tw`flex flex-col justify-center items-center  w-screen bg-gray-400 p-8`}`
export const CollapseExpandHeading = styled.div`${tw`text-xl font-semibold`}`
export const ShoppingListContainer = styled.div`${tw`flex items-start justify-center`}`
export const ShoppingListText = styled.span`${tw`my-4`}`
export const ShoppingListcart = styled.span`${tw`flex flex-col justify-start items-center`}`

export const CollapseButton = styled.button`${tw`m-4 px-2 bg-blue-500 rounded text-white`}`


export const DeviceTypeContainer = styled.div`${tw`flex flex-col justify-center items-center p-8 bg-gray-300 w-screen `}`
export const DeviceTypeTextHeading = styled.div`${tw`font-semibold text-xl`}`



export const MouseCoordinatesContainer = styled.div`${tw`flex flex-col justify-center items-center p-8 bg-gray-300 w-screen`}`
export const MouseCoordinatesHeading = styled.div`${tw`text-xl font-semibold`}`