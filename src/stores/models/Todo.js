import {observable,action} from 'mobx';
import {observer} from 'mobx-react';


class Todo {
    @observable title;
    @observable isCompleted;
    constructor(title,isChecked){
        this.id = Math.random().toString();
        this.title = title;
        this.isCompleted = isChecked;
    }

    @action.bound
    onUpdateTodoTitle(title){
        this.title = title;
    }
    
    
    @action.bound
    onCompleteTodo(resultChecked){
        this.isCompleted = resultChecked
    }
    
    
    
}

export default (Todo);