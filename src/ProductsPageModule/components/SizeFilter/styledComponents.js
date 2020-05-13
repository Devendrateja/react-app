import tw from "tailwind.macro"
import styled from "@emotion/styled"


const XSXL = styled.span`
    ${tw`
           flex justify-center items-center  rounded-full m-1  border border-solid text-xs h-10 w-10
    `}
    background-color:${props => props.status ? 'black' : 'white'};
    color:${props => props.status ? 'white' : 'black'};`


const SML = styled.span`
    ${tw`
            p-1 rounded-full m-1 px-3 py-2 border border-solid
    `}
`


const XXL = styled.span`
    ${tw`
             rounded-full m-1  border border-solid bg-red-100 text-xs h-4 w-4
    `}
`





export {XSXL, SML, XXL}