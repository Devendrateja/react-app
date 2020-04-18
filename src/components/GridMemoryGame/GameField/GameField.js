import React from "react"
import {observer} from "mobx-react"
import {observable} from "mobx"

import tw  from "tailwind.macro";
import styled from '@emotion/styled'


import Cell from "./Cell"
import {LevelSevenContainer} from "../GridGameStyles.js"



@observer
class GameField extends React.Component{
    @observable resetTimer
    @observable userSelectedCell = []
     
    constructor(props){
        super(props);
        const {updateCells, updateGridElements, updateHiddenCells, numOfCells, gridCells} = this.props
   
          updateHiddenCells()
          updateGridElements()
          updateCells()
    } 
    
    componentDidMount(){
        const {numOfCells} = this.props
        this.resetTimer = setTimeout(this.reset,numOfCells*3000)
    }
    
    componentWillUnmount(){
        clearTimeout(this.resetTimer);
    }
    
    
    clearUserSelectedCells = () => {
        this.userSelectedCell = []
    }
    
    reset = () => {
         const {resetLevel} = this.props
        
         resetLevel()
     }
     
     onClickPlayAgain = () => {
         const {resetLevel} = this.props
         resetLevel()
     }
    
    
    
    render(){
        const {level ,updateCells, updateGridElements, updateHiddenCells,selectedTheme, numOfCells, gridCells, resetLevel, updateLevel} = this.props
    
        let cols = [];
        let rows= [];
        for (let i=0, k=0; i<numOfCells ; i++){
            cols = []
            for(let j=0; j<numOfCells; j++, k++){
                cols.push(<Cell cell = {gridCells[k]}
                                selectedTheme={selectedTheme}
                                level={level}
                                numOfCells={numOfCells}
                                userSelectedCell = {this.userSelectedCell}
                                clearUserSelectedCells={ this.clearUserSelectedCells}
                                resetLevel = {resetLevel}
                                stopTimer = {this.resetTimer}
                                updateLevel={updateLevel}
                                key={gridCells[k].id}
                                />)
            }
            rows.push(<div key={i}>{cols}</div>)
        }
        if(level<=2){
            return (
                    <div>{rows}</div>
                )
        }
        else{
            clearTimeout(this.resetTimer)
             return(
                    <LevelSevenContainer>
                        <div className="p-3">7</div>
                        <div className="p-3 mb-2 text-green-500">Congratulations! You have Completed All The Levels</div>
                        <button className="p-3 bg-blue-800 rounded-md text-white" onClick={this.onClickPlayAgain}>Play Again</button>
                    </LevelSevenContainer>
                )
        }
    }
}

export default GameField