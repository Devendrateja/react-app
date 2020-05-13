import React from "react"
import tw from "tailwind.macro"
import styled from "@emotion/styled"
import { observer } from "mobx-react"
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BsCheckCircle} from "react-icons/bs"
import { ToastBox,ToastSuccessIcon,ToastSuccessMessage } from "./styledComponents"

toast.configure({
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
            draggable: true,
            transition:Slide,
            hideProgressBar:true,
            pauseOnHover:true,
            closeButton:false
})


const AddProductToastMessage = () => {
          return(
                <ToastBox>
                    <ToastSuccessIcon><BsCheckCircle/></ToastSuccessIcon>
                    <ToastSuccessMessage> Product is added to your cart!</ToastSuccessMessage>
                </ToastBox>
                )
}



export {AddProductToastMessage};