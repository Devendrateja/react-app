import {observable,action,computed} from "mobx"

import CellModel from "../models/CellModel.js"


class GameStore {
    @observable gridCells = []
    @observable hiddenCells = []
    @observable level = 0
    @observable topLevel = 0
    @observable numOfCells = 3
    @observable randomNumber
    
    @action.bound
    updateLevel(){
        this.randomNumber = Math.random().toString()
        this.level +=  1
        this.numOfCells  +=  1
        this.gridCells = []
        this.hiddenCells = []
        this.gridElements = []
        this.updateHiddenCells()
        this.updateGridElements()
        this.updateCells()
     }
    
    @action.bound
    resetLevel(){
        this.topLevel = (this.topLevel<this.level) ? this.level : this.topLevel
         this.randomNumber = Math.random().toString()
        this.level = 0
        this.numOfCells = 3
        this.gridCells = []
        this.hiddenCells = []
        this.gridElements = []
        this.updateHiddenCells()
        this.updateGridElements()
        this.updateCells()
    }
    
    
    @action.bound
    updateCells(){
    
        let numOfCells = this.numOfCells
        
        for(let i=0; i<numOfCells*numOfCells; i++){
            let preSelectedCell = false
            this.hiddenCells.forEach(cell => {
                (i===cell) ? preSelectedCell = true : false
            });
            const newCell = new CellModel(preSelectedCell);
            this.gridCells.push(newCell);
        }
    }
    
    
    @action.bound
    updateGridElements(){
        
    }
    
    
    @action.bound
    updateHiddenCells(){
        let number ;
        let hiddenCells = this.hiddenCells
        let numOfCells = this.numOfCells
        let max = numOfCells*numOfCells
        for(let i = 1 ; hiddenCells.length<numOfCells ; i++){
           let count = 0 ;
           
            number = Math.floor(Math.random() * Math.floor(max));
           
            hiddenCells.forEach(cell => {
                return (cell === number) ? count+=1 : count
            })
            if(count === 0){
                hiddenCells.push(number)
                count = 0;
            }
        }
       this.hiddenCells = hiddenCells
    }
}


const GridStore = new GameStore;

export default GridStore;