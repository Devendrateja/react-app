import {observable,action} from 'mobx';


class Todo {
    id : string;
    @observable title: string;
    @observable isCompleted :boolean;

    constructor(title,isChecked){
        this.id = Math.random().toString();
        this.title = title;
        this.isCompleted = isChecked;
    }

    @action.bound
    onUpdateTodoTitle(title:string){
        this.title = title;
    }
    
    
    @action.bound
    onCompleteTodo(resultChecked:boolean){
        this.isCompleted = resultChecked
    }
    
    
    
}

export default (Todo);