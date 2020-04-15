import React from "react"

import Cell from "./Cell"

class GameField extends React.Component{
    
    constructor(props){
        super(props);
        
    }
    
    
    
    render(){
        return (
            <Cell/>
            )
    }
}

export default GameField