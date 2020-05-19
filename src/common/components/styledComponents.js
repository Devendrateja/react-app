import tw from "tailwind.macro"
import styled from "@emotion/styled"

export const EditorContainer = styled.div`${tw`text-center text-xl font-semibold w-screen bg-gray-300 p-8`}`

export const CollapseExpandContainer = styled.div`${tw`text-center text-xl font-semibold w-screen bg-gray-500 p-8`}`

export const Input = styled.input`${tw`flex-wrap`}
                    width:${props => props.toggleStatus ? "100px" : "200px" }`

export const Span = styled.span`${tw``} `

export const EditButton = styled.button`${tw`m-4 px-2 bg-blue-500 rounded text-white`}`

export const CollapseButton = styled.button`${tw`m-4 px-2 bg-blue-500 rounded text-white`}`