/** @jsx jsx */
import { jsx,css } from '@emotion/core'


import tw  from "tailwind.macro";

import React from "react"
import {observer} from "mobx-react"
import {observable} from "mobx"

import GameStore from "../../stores/GameStore/GameStore"
import themeStore from "../../stores/ThemeStore/index"
import Header from "./Header/Header"
import GameField from "./GameField/GameField"
import {BgLight, BgDark} from "./GridGameStyles"

@observer
class GridMemoryGame extends React.Component{
    
    render(){
        const {level,topLevel, randomNumber,updateCells, resetLevel , updateLevel , updateGridElements, updateHiddenCells, numOfCells, gridCells} = GameStore
        const {selectedTheme, updateTheme} = themeStore
        
        let theme = (selectedTheme === 'Light mode') ? BgLight : BgDark
        
        return (      
        <div css={css`${theme}`}  className="flex flex-col w-screen h-screen justify-center items-center ">
            
            <div className="flex flex-col justify-center items-center ">
            
                <Header level={level} topLevel={topLevel} selectedTheme={selectedTheme} updateTheme={updateTheme}/>
                
                <GameField
                selectedTheme={selectedTheme}
                    key= {randomNumber}
                    level={level}
                    updateLevel={updateLevel}
                    resetLevel = {resetLevel}
                    updateCells={updateCells} 
                    updateGridElements={updateGridElements}
                    updateHiddenCells={updateHiddenCells}
                    numOfCells={numOfCells}
                    gridCells = {gridCells}
                />
            </div>
        </div>
            )
    }
}


export default GridMemoryGame;