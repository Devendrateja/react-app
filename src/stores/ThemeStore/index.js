import {observable,action} from 'mobx';

class ThemeStore{
    @observable selectedTheme 
    
    constructor(){
        this.selectedTheme = "Light mode"
    }
    @action.bound
    getCurrentTheme(){
        return this.selectedTheme
        
    }
    
    @action.bound
    updateTheme(){
        console.log('index' , this.selectedTheme)
        if(this.selectedTheme === "Light mode"){
            this.selectedTheme = "Dark mode";
        }
        else{
            this.selectedTheme = "Light mode";
        }
    }
}

const themeStore = new ThemeStore()


export default themeStore;