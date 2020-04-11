import Todo from "../models/Todo.js"

import {observable,action,computed} from 'mobx';
import {observer} from 'mobx-react'


class TodoStores {
    @observable todos = [];
    @observable selectedFilter = 'All';

    
    
   @action.bound 
    onAddTodo(title,isChecked){
        const newTodo = new Todo(title,isChecked)
        this.todos.push(newTodo)
    }
    
    @action.bound 
    onRemoveTodo(todo){
        this.todos = this.todos.filter(eachTodo => {
            return eachTodo.id !== todo.id
        })
    }
    
    @action.bound 
    onChangeSelectedFilter(type){
         this.selectedFilter = type
    }
    
    @action.bound 
    onClearCompleted(){
        this.todos = this.todos.filter(todo => {
            return todo.isCompleted === false;
        });
    }
    
    
    @computed
     get activeTodosCount(){
         let count = 0
         this.todos.forEach(todo => {
            if (todo.isCompleted === false){
                count += 1
            }
        });
        
        return count
    }
    
    
    @computed
    get filterTodos(){
        let filteredTodo = []
        switch(this.selectedFilter){
            case('All'):
                filteredTodo = [...this.todos];
                break;
                
            case('Active'):
                filteredTodo = this.todos.filter(eachTodo => {
                    return eachTodo.isCompleted === false
                })
                break;
                
            case('Completed'):
                filteredTodo = this.todos.filter(eachTodo => {
                    return eachTodo.isCompleted === true
                })
                break;
            
            default:
                filteredTodo = [...this.todos];
        }
        
        
        return filteredTodo;
        
    }
    
}



const todoStores = new TodoStores();


export default todoStores;