import {observable} from "mobx"

class CellModel {
    id
    @observable preSelectedCell
    @observable isHidden
    @observable disabled
    
    constructor(preSelectedCell){
        this.id = Math.random().toString();
        this.preSelectedCell = preSelectedCell;
        this.isHidden = false
        this.disabled = true;
    }
    
    hideCells = () => {
        this.isHidden = (this.preSelectedCell === true) ?  true : false
        
    }
    
    disableCell = (disabled) => {
        this.disabled = disabled
    }
}


export default CellModel;