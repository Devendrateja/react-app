import {observable,action,computed} from "mobx"

import CellModel from "../models/CellModel.js"


class GameStore {
    gridCells = []
    hiddenCells = []
    gridElements = []
    level = 0
    numOfCells = 3 * ( this.level + 1 )
    
    
    
    @action.bound
    updateLevel(){
        this.level += 1;
    }
    
    
    @action.bound
    disableCells(){
        
    }
    
    @action.bound
    updateCells(){
        let gridElements = this.gridElements
        
        gridElements.forEach(element => {
            let hiddenId = null
            this.hiddenCells.forEach(cell => {
                (element===cell) ? hiddenId = element : undefined
            })
            
            const newCell = new CellModel(hiddenId)
            this.gridCells.push(newCell)
        })
        
       
    }
    
    @action.bound
    updateGridElements(){
        let numOfCells = this.numOfCells;
        for(let i=0; i<numOfCells*numOfCells; i++){
            this.gridElements.push(i);
        }
    }
    
    
    @action.bound
    updateHiddenCells(){
        let number ;
        let hiddenCells = this.hiddenCells
        let numOfCells = this.numOfCells
        let max = numOfCells*numOfCells
        for(let i = 1 ; i < 10; i++){
            
            number = Math.floor(Math.random() * Math.floor(max));
           let count = 0 ;
            
            (i===1) ? hiddenCells.push(number) : ''
            
            
            
            
            hiddenCells.filter(cell => {
                if(cell !== number){
                    console.log('cell',cell,number,i)
                    count += 1
                }
                
                return null
            })
            
            if(count === 0){
                
                hiddenCells.push(number)
                console.log('count',hiddenCells)
            }
            //console.log(count)
            
            // if(count === 0){
            //     hiddenCells.push(number)
            // }
            
            
            // if(hiddenCells.length === numOfCells){
            //     i = 0;
            // }
            
           
        }
       
        
    }
}

const GridStore = new GameStore;

export default GridStore;