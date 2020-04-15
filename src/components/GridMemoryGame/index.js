import React from "react"

import GameStore from "../../stores/GameStore/GameStore"

import Header from "./Header/Header"
import GameField from "./GameField/GameField"


class GridMemoryGame extends React.Component{
    
    render(){
        GameStore.updateHiddenCells()
         GameStore.updateGridElements()
         GameStore.updateCells()
        
        return (
            <div>
                <Header />
                <GameField />
            </div>
            )
    }
}


export default GridMemoryGame;