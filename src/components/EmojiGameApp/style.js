import tw  from "tailwind.macro";
import styled from '@emotion/styled';


const WinOrLoseContainer =  styled.div`${tw `flex justify-center items-center flex-col justify-between text-2xl font-semibold w-screen p-3`}`

const NavbarComponent = styled.div`${tw `flex flex-row p-6 justify-between items-center `}`

const EmojiCardEl = styled.div`${tw `flex flex-row flex-wrap w-screen h-full justify-around `}`

const PlayAgainButton = styled.div`${tw `p-3 bg-blue-700 rounded m-1`}`

const Help = styled.div`${tw `p-4`}`



export {NavbarComponent,EmojiCardEl,Help,WinOrLoseContainer,PlayAgainButton}