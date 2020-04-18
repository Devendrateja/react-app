/** @jsx jsx */
import { jsx,css } from '@emotion/core'

import styled from '@emotion/styled'
import React from 'react'
import themeStore from "../../stores/ThemeStore/index"


const LevelSevenContainer = styled.div`
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:300px;
        font-size:25px;
        font-weight:700;
    `
    
const CellElLg = styled.button`
      
        position:realtive;
        background-color:#4a5568;
        height:100px;
        width:100px;
        margin:8px;
`

const CellElMd = styled.button`
      
        position:realtive;
        background-color:#4a5568;
        height:70px;
        width:70px;
        margin:6px;
     
`

const CellElSm = styled.button`
      
        position:realtive;
        background-color:#4a5568;
        height:50px;
        width:50px;
        margin:5px;
       
`
const BgDark = `
        background-color:#1a202c;
        color:white;
        `

const BgLight = `
        background-color:whiteSmoke;
        color:black;
        `

const LightCell = {
        
        cell :"#4a5568",
        hiddenCell : "#48bb78",
        rightCell : "#48bb78",
        wrongCell : ' #c53030'
}

const DarkCell = {
        
        cell : "#2c5282",
        hiddenCell : "#4fd1c5",
        rightCell : "#4fd1c5",
        wrongCell :' #c53030'
}


export {LevelSevenContainer , CellElLg,CellElMd,CellElSm, BgLight, BgDark, DarkCell, LightCell};