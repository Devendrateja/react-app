/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import tw  from "tailwind.macro";
import styled from '@emotion/styled';
import {WinOrLoseContainer,PlayAgainButton} from "./style.js"



import React from 'react'

class WinOrLose extends React.Component{
    
    render(){
        const {score,onClickPlayAgain,gameStat} = this.props
        return (
        <div className="h-screen w-screen">
           <WinOrLoseContainer>
            <div className="m-1">{score}</div>
            <div className="m-1">{gameStat}</div>
            <PlayAgainButton onClick={onClickPlayAgain}>Play Again</PlayAgainButton>
            </WinOrLoseContainer>
        </div>
            )
    }
}

export default (WinOrLose);