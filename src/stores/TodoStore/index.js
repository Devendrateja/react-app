/*global fetch*/
import {observable,action,computed, decorate} from 'mobx';
import {API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED} from "@ib/api-constants"

import {bindPromiseWithOnSuccess} from "@ib/mobx-promise"
import {create } from "apisauce"
import {networkCallWithApisauce} from "../../utils/APIUtils"
import {apiMethods} from "../../constants/APIConstants"





import Todo from "../models/Todo"

class TodoStore {
    @observable todos = [];
    @observable selectedFilter = 'All';
    @observable getTodoListAPIStatus = API_INITIAL
    @observable getTodoListAPIError
    @observable TodosAPIService
    
    constructor(todoService){
        this.init(todoService)
    }
    
    @action.bound 
    init(todoService){
        this.getTodoListAPIStatus = API_INITIAL
        this.getTodoListAPIError = null
        this.TodosAPIService = todoService
    }
    
    
    @action.bound 
    setGetTodoListAPIStatus(status){
        this.getTodoListAPIStatus = status
    }
    
    @action.bound 
    setGetTodoListAPIError(error){
        this.getTodoListAPIError = error
    }
    
    
    @action.bound 
    setGetTodoListAPIResponse(todosResponse){
        let count = 0
        todosResponse.forEach(todo => {
            
            if(count < 5){
            const newTodo = new Todo(todo.title, todo.completed)
            this.todos.push(newTodo)
            count += 1
            }
        })
    }
    
    
    @action.bound 
    getTodosAPI(){
        const promise = this.TodosAPIService.getTodos()
        bindPromiseWithOnSuccess(promise)
        .to(this.setGetTodoListAPIStatus,this.setGetTodoListAPIResponse )
        .catch(this.getTodoListAPIError)
    }
    
    

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
            if (!todo.isCompleted ){
                count += 1
            }
        });
        
        return count
    }
    
    
    @computed
    get filterTodos(){
        let filteredTodo  = []
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

// decorate(Todo,{
//     todos: observable ,
//     selectedFilter: observable,
//     getTodoListAPIStatus: observable,
//     getTodoListAPIError: observable,
//     init: action.bound,
//     setGetTodoListAPIStatus: action.bound,
//     setGetTodoListAPIError: action.bound,
//     setGetTodoListAPIResponse: action.bound,
//     getTodosAPI: action.bound,
//     onAddTodo: action.bound,
//     onRemoveTodo: action.bound,
//     onChangeSelectedFilter: action.bound,
//     onClearCompleted: action.bound,
//     activeTodosCount: action.bound,
//     filterTodos: action.bound,
//     activeTodosCount: computed,
//     filterTodos: computed
// })




export default TodoStore;