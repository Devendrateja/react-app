import {observable} from "mobx"

class CellModel {
    id
    @observable hiddenCell
    @observable initialColor
    @observable finalColor
    @observable onRightGuess
    @observable onWrongGuess
    @observable disabaled
    
    constructor(hiddenCell){
        this.id = Math.random().toString();
        this.hiddenCell = hiddenCell;
        this.initialColor = hiddenCell ? 'green' : 'grey';
        this.finalColor = 'grey';
        this.onWrongGuess = 'red';
        this.rightGuess = 'green';
        this.disabled = true;
    }
    
    disableCell = (disabled) => {
        this.disabled = disabled;
    }
}


export default CellModel;