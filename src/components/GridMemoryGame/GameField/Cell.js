/* global scale*/
/** @jsx jsx  */
import { jsx, css, keyframes } from '@emotion/core'

import tw  from "tailwind.macro";



import styled from '@emotion/styled'
import React from "react"
import {observer} from "mobx-react"
import {observable} from "mobx"

import "../GridGame.css"

import {CellElLg,CellElMd,CellElSm, LightCell, DarkCell} from "../GridGameStyles"


@observer
class Cell extends React.Component{
 
    @observable isUserGuessedCorrectly = 'not yet guessed'
    
    componentDidMount(){
        const {numOfCells, cell} = this.props
        setTimeout(this.hideCells,numOfCells*1000)
    }
    
    
    onClickCell = (event) => {
        const {cell, updateLevel , clearUserSelectedCells, resetTimer,stopTimer,userSelectedCell, numOfCells ,resetLevel} = this.props
        
        if(cell.preSelectedCell){
            userSelectedCell.push(cell.id)
            this.isUserGuessedCorrectly = 'right'
            cell.disableCell(true)
            
            if(userSelectedCell.length === numOfCells){
                clearUserSelectedCells()
                setTimeout(updateLevel,100)
            }
        }
        
        else{
            this.isUserGuessedCorrectly = 'wrong'
            cell.disableCell(true)
            setTimeout(clearUserSelectedCells,100)
            setTimeout(resetLevel,100)
        }
    }
    

    hideCells = () => {
        const {cell} = this.props
        cell.hideCells()
        cell.disableCell(false)
    }    
    
    
    render(){
        const {cell,level,resetTimer,resetLevel,selectedTheme, stopTimer} = this.props
    
        
        let cellTheme = ( selectedTheme === 'Light mode') ? LightCell : DarkCell
        
        let color = cellTheme.cell ;
        
        if(cell.preSelectedCell && !cell.isHidden){
            color = cellTheme.hiddenCell;
        }
        else if(cell.preSelectedCell && cell.isHidden){
            color = cellTheme.cell;
            
           
        }
        
        if(this.isUserGuessedCorrectly === 'right'){
            color = cellTheme.rightCell
        }
        else if(this.isUserGuessedCorrectly === 'wrong'){
            color= cellTheme.wrongCell
        }
    
    
        let Button;
        
        if(level<1){
            Button = CellElLg
        }
        else if(level>0 && level<3){
            Button = CellElMd
        }
        else{
            Button = CellElSm
        }
        
        
        const Div = styled.div`
            height:'100px';
            width:'100px';
            background-color:'${color}';
        `
        
        let count = (this.isUserGuessedCorrectly === 'right') ? 0 : 1
        
        let Effect = css({
            height:'100%',
            width:'100%',
            backgroundColor:`${color}`,
            transition:`scale(${count})`,
            transition:'height 1s'
        })
        
        return(
            <Button onClick={this.onClickCell}  className={`${this.isUserGuessedCorrectly}`}  key={cell.id}  disabled={cell.disabled}><div css={Effect}></div></Button>
            )
    }
}


export default Cell;

//style={{ backgroundColor:`${color}`}} 
//<div className={`${this.isUserGuessedCorrectly}`}></div>