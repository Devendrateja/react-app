import React from "react"

import {observable,action,reaction} from 'mobx';
import {observer} from 'mobx-react';

//import Todo from "../../stores/models/Todo"
import todoStores from "../../stores/TodoStores/TodoStores"

import AddTodo from "./AddTodo"
import TodoList from "./TodoList"
import TodoFooter from "./TodoFooter"


@observer
class TodoApp extends React.Component{
    
    addTodoReaction = reaction (
            () => todoStores.activeTodosCount,
            (count) => {
                if(count === 0){
                alert('Congratulations')
                }
            }
        )
    render(){
          const {todos,onAddTodo, selectedFilter, onRemoveTodo, onChangeSelectedFilter, onClearCompleted, filterTodos, activeTodosCount } = todoStores
          const filteredTodos = filterTodos
        return (
        <div>
           <AddTodo onAddTodo={onAddTodo} onRemoveTodo={onRemoveTodo}/> 
            <TodoList todos={filteredTodos}  onRemoveTodo={onRemoveTodo} />
                {
                    todos.length>0 && <TodoFooter activeTodosCount={activeTodosCount} selectedFilter={selectedFilter}  onChangeSelectedFilter={onChangeSelectedFilter}  onClearCompleted={onClearCompleted} />
                }
           </div>

            
            )
    }
}



export default TodoApp;