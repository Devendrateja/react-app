import tw  from "tailwind.macro";
import styled from '@emotion/styled';


const TodoContainer = styled.input`${tw`flex flex-row justify-center items-center h-screen w-screen`}`
// const TodoInput = styled.input`${tw` `}`
//const Header =  styled.input`${tw` `}`

const FooterEl = styled.div`${tw` flex flex-row justify-center items-center`}`

const Span = styled.div`${tw` p-2`}`


export {TodoContainer,FooterEl,Span};