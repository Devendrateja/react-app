import { observable, action } from 'mobx'


class CounterStore {
    @observable count = 0;
    
    @action.bound 
    increment(){
        console.log('inst inc ',this.count);
        this.count = this.count+1;
    }
    
    @action.bound 
    decrement(){
        
        this.count = this.count-1;
        console.log('inst dec ',this.count);
    }
}

const counterStore =  new CounterStore();

export default counterStore;