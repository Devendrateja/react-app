import { observable, action } from 'mobx'


class TodoAppStore {
    @observable userInput;
    @observable todos;
    @observable todosCount;
    @observable todoStat;
    
    constructor(){
        this.userInput = '';
        this.todos = [];
        this.todosCount = 0;
        this.todoStat = 'All';
    }
    
    @action.bound
    handleOnSubmit = (event) => {
        event.preventDefault();
        let todosList = [...this.todos]
        
        const newTodoObject = {
            
            id:todosList.length,
            todo:this.userInput,
            isChecked:false
        }
        
        todosList.push(newTodoObject)
        //this.itemsLeft = todosList.length
        this.todos = todosList
        this.userInput = ''
    }
    
    @action.bound
    handleOnChangeUserInput(event){
        
        this.userInput = event.target.value
        
    }
    
    @action.bound
    handleCheckbox(event){
        const id = event.target.name;
        
        let todosList = [...this.todos]
        
        todosList = todosList.filter(todo => {
            if(todo.id.toString() === id.toString()){
                todo.isChecked = event.target.checked
                return true
            }
            return true
        })
      //  event.target.checked ? this.itemsLeft -= 1 : this.itemsLeft += 1
        this.todos = [...todosList];
    }
       
    @action.bound
    removeTodo(event){
        let id = event.target.name
        let todosList = [...this.todos]

        todosList = todosList.filter(eachTodo => {
            return eachTodo.id.toString() !== id
        })
        
        this.todos = todosList
        
    }
    
    @action.bound
    handleTodoStatus(status){
        this.todoStat = status
    }
    
    @action.bound
    handleClearCompleted(){
        let todoList = this.todos.filter(eachTodo => {
            return eachTodo.isChecked === false
        })
        
        this.todos = todoList
    }
    
    @action.bound
    itemsLeft(count){
        this.todosCount = count;
    }
    
}

const todoAppStore = new TodoAppStore();

export default todoAppStore